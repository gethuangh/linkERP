<template>
  <div>
    <page-title title="入库单>>>"></page-title>
    <!-- <purchase-order :title="{text: '处理中的采购订单',bg: '#41C363'}" :tableData="tableData"></purchase-order>
    <purchase-order :title="{text: '处理中的采购订单',bg: '#FF99CC'}" :isFinish="true" :tableData="tableData" style="margin-top: 40px"></purchase-order>-->
    <pending-storage
      @setNum="setNum3s"
      :companyAll="companyAll"
      @SearchFun="SearchFun3s"
      :orderStatus="orderStatus"
      :taxRate="taxRate"
      :total="godownEntrytotals"
      :tableData="godownEntrys"
      v-if="godownEntryflags"
      :title="{text: '待入库',bg: '#3366FF'}"
      @all="all"
    ></pending-storage>
    <warehouse-receipt
      @all="alls"
      @setNum="setNum3"
      :companyAll="companyAll"
      @SearchFun="SearchFun3"
      :orderStatus="orderStatus"
      :taxRate="taxRate"
      :total="godownEntrytotal"
      :tableData="godownEntry"
      v-if="godownEntryflag"
      :isFinish="true"
      style="margin-top: 40px"
      :title="{text: '已入库', bg: '#99CC00'}"
      class="spacing"
    ></warehouse-receipt>
    <el-dialog width="1260px" top="5vh" :visible.sync="receipt" title="入库单-新增">
      <add-warehouse-order></add-warehouse-order>
    </el-dialog>
  </div>
</template>

<script>
import bus from "@/assets/Bus";
import PageTitle from "./common/PageTitle.vue";
import PendingStorage from "./common/PendingStorage.vue";
import WarehouseReceipt from "./common/WarehouseReceipt.vue";
import AddWarehouseOrder from "./common/AddWarehouseOrder.vue";
import {
  queryOverAll,
  selectData,
  queryBuyerApply,
  SalesOrdersOfBeing,
  queryEntryList,
  companyAll
} from "../../api/order";
import { taxRate } from "../../api/finance";
export default {
  data() {
    return {
      receipt: false,
      tableData: [{}],
      // 入库单
      godownEntry: [],
      godownEntrytotal: 0,
      godownEntrytotals: 0,
      orderStatus: [],
      godownEntryflag: true,
      godownEntryflags: true,
      layout: "prev, pager, next, total",
      total: 0,
      next: ">>",
      prev: "<<",
      companyAll: [{}],
      valsss: {
        value1: "",
        value2: null,
        value3: null,
        value4: null,
        value5: null,
        value6: null,
        value7: null,
        value8: null,
        value9: null,
        value10: null,
        value21: null,
        value11: null,
        value12: null,
        value13: null,
        value14: null,
        value15: null,
        value16: null,
        value17: null,
        value18: null,
        value19: null,
        value20: null
      },
      taxRate: [],
      godownEntry: [{}],
      godownEntrys: [{}],
      buyerApplyNum3: 1,
      buyerApplyNum3s: 1,
      valssss: {
        value1: "",
        value2: null,
        value3: null,
        value4: null,
        value5: null,
        value6: null,
        value7: null,
        value8: null,
        value9: null,
        value10: null,
        value21: null,
        value11: null,
        value12: null,
        value13: null,
        value14: null,
        value15: null,
        value16: null,
        value17: null,
        value18: null,
        value19: null,
        value20: null
      }
    };
  },
  created() {
    bus.$on("receipt", () => {
      this.receipt = true;
    });
    selectData().then(res => {
      this.orderStatus = res.result;
    });
    // 税率
    taxRate().then(res => {
      this.taxRate = res.result;
    });
    // 公司
    companyAll().then(res => {
      this.companyAll = res.result;
    });
  },
  methods: {
    all() {
      let data = { type: 0, pageNumber: 1, pageSize: 100 };
      let da = {};
      queryEntryList(data).then(res => {
        this.godownEntrys = res.result.list;
        this.godownEntrys.unshift(da);
        this.godownEntrytotals = res.result.total;
        this.godownEntryflags = true;
      });
    },
    alls() {
      let data = { type: 1, pageNumber: 1, pageSize: 100 };
      let da = {};
      queryEntryList(data).then(res => {
        console.log(res);
        this.godownEntry = res.result.list;
        this.godownEntry.unshift(da);
        this.godownEntrytotal = res.result.total;
        this.godownEntryflag = true;
      });
    },
    setNum3(val) {
      this.buyerApplyNum3 = val;
      this.SearchFun3();
    },
    setNum3s(val) {
      this.buyerApplyNum3s = val;
      this.SearchFun3s();
    },
    // 入库单 已入库
    SearchFun3(val) {
      if (val != undefined) {
        this.valsss = val;
      }
      this.godownEntryflag = false;
      let data = {
        type: 1,
        dateTime: this.valsss.value1,
        // startTime: this.value2,
        // endTime: this.value3,
        quarter: this.valsss.value2,
        orderNumber: this.valsss.value3,
        clientOrderNumber: this.valsss.value4,
        originalModel: this.valsss.value5,
        brandName: this.valsss.value6,
        num: this.valsss.value7,
        batchNumber: this.valsss.value8,
        price: this.valsss.value9,
        totalPrice: this.valsss.value10,
        taxRate: this.valsss.value11,
        usdPrice: this.valsss.value12,
        usdTotalPrice: this.valsss.value13,
        clientCode: this.valsss.value14,
        clientAbbreviation: this.valsss.value15,
        comName: this.valsss.value16,
        buyerId: this.valsss.value17,
        deliveryTime: this.valsss.value18,
        orderStatus: this.valsss.value19,
        pageNumber: this.buyerApplyNum3
      };
      let da = {};
      queryEntryList(data).then(res => {
        this.godownEntry = res.result.list;
        this.godownEntry.unshift(da);
        this.godownEntrytotal = res.result.total;
        this.godownEntryflag = true;
      });
    },
    // 未入库
    SearchFun3s(val) {
      if (val != undefined) {
        this.valssss = val;
      }
      this.godownEntryflags = false;
      let data = {
        type: 0,
        dateTime: this.valssss.value1,
        // startTime: this.value2,
        // endTime: this.value3,
        quarter: this.valssss.value2,
        orderNumber: this.valssss.value3,
        clientOrderNumber: this.valssss.value4,
        originalModel: this.valssss.value5,
        brandName: this.valssss.value6,
        num: this.valssss.value7,
        batchNumber: this.valssss.value8,
        price: this.valssss.value9,
        totalPrice: this.valssss.value10,
        taxRate: this.valssss.value11,
        usdPrice: this.valssss.value12,
        usdTotalPrice: this.valssss.value13,
        clientCode: this.valssss.value14,
        clientAbbreviation: this.valssss.value15,
        comName: this.valssss.value16,
        buyerId: this.valssss.value17,
        deliveryTime: this.valssss.value18,
        salesManId: this.valssss.value19,
        orderStatus: this.valssss.value20,
        pageNumber: this.buyerApplyNum3s
      };
      let da = {};
      queryEntryList(data).then(res => {
        this.godownEntrys = res.result.list;
        this.godownEntrys.unshift(da);
        this.godownEntrytotals = res.result.total;
        this.godownEntryflags = true;
      });
    }
  },
  components: {
    PageTitle,
    PendingStorage,
    WarehouseReceipt,
    AddWarehouseOrder
  }
};
</script>