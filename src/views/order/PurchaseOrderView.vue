<template>
  <div>
    <page-title title="采购订单>>>"></page-title>
    <purchase-order
      v-if="buyerApplyflag"
      :title="{text: '处理中的采购订单',bg: '#41C363'}"
      :tableData="buyerApply"
      :taxRate="taxRate"
      @deleFun="deleFun1"
      :companyAll="companyAll"
      :orderStatus="orderStatus"
      @SearchFun="SearchFun1"
      @setinput="setinput1"
      @setNum="setNum1"
      :total="buyerApplytotal"
      @all="all"
    ></purchase-order>
    <purchase-order
      @all="alls"
      v-if="buyerApplyflag1"
      :title="{text: '已完成的采购订单',bg: '#FF99CC'}"
      :isFinish="true"
      :tableData="buyerApply1"
      @SearchFun="SearchFun2"
      @setNum="setNum2"
      :taxRate="taxRate"
      :orderStatus="orderStatus"
      :companyAll="companyAll"
      :total="buyerApplytotal1"
      style="margin-top: 40px"
    ></purchase-order>
    <el-dialog width="1600px" top="5vh" title="采购订单-新增" :visible.sync="purchase">
      <add-purchase-order></add-purchase-order>
    </el-dialog>
  </div>
</template>

<script>
import bus from "@/assets/Bus";
import PageTitle from "./common/PageTitle.vue";
import PurchaseOrder from "./common/PurchaseOrder.vue";
import { taxRate } from "../../api/finance";
import AddPurchaseOrder from "./common/AddPurchaseOrder.vue";
import {
  queryOverAll,
  selectData,
  queryBuyerApply,
  SalesOrdersOfBeing,
  queryEntryList,
  companyAll,
  buyerOrderdel,
  editBuyerOrder,
  orderList
} from "../../api/order";
export default {
  data() {
    return {
      purchase: false,
      buyerApply: [{}],
      buyerApplyflag: true,
      buyerApplyNum: 1,
      buyerApplyNum1: 1,
      buyerApplytotal: 0,
      vals: {
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
      buyerApply1: [{}],
      buyerApplyflag1: true,
      buyerApplyNum1: 1,
      buyerApplytotal1: 0,
      vals1: {
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
      companyAll: [],
      orderStatus: []
    };
  },
  created() {
    bus.$on("purchase", () => {
      this.purchase = true;
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
  components: {
    PageTitle,
    PurchaseOrder,
    AddPurchaseOrder
  },
  methods: {
    all() {
      let da = {};
      let data = { type: 0, pageNumber: 1, pageSize: 100 };
      orderList(data).then(res => {
        this.buyerApply = res.result.list;
        this.buyerApply.unshift(da);
        this.buyerApplytotal = res.result.total;
        this.buyerApplyflag = true;
        console.log(res);
      });
    },
    alls() {
      let da = {};
      let data = { type: 1, pageNumber: 1, pageSize: 100 };
      orderList(data).then(res => {
        this.buyerApply1 = res.result.list;
        this.buyerApply1.unshift(da);
        this.buyerApplytotal1 = res.result.total;
        this.buyerApplyflag1 = true;
        console.log(res);
      });
    },
    // 修改采购申请单
    setinput1(row) {
      let data = {
        id: row.id,
        orderNumber: row.orderNumber,
        supplierId: row.supplierId,
        supplierCode: row.supplierCode,
        supplierLinkmanId: row.salesManId,
        supplierLinkmanName: row.salesManName,
        payDate: row.dataTime,
        payDate: row.dataTime
      };
      // editBuyerOrder(data).then(res => {
      //   console.log(res);
      // });
      console.log(row);
    },
    // 删除采购申请单
    deleFun1(row) {
      let data = { orderId: row.id };
      buyerOrderdel(data).then(res => {
        console.log(res);
      });
    },
    // 采购清单查询  处理中
    SearchFun1(val) {
      if (val != undefined) {
        this.vals = val;
      }
      this.buyerApplyflag = false;
      let data = {
        type: 0,
        dateTime: this.vals.value1,
        // startTime: this.value2,
        // endTime: this.value3,
        quarter: this.vals.value2,
        orderNumber: this.vals.value3,
        clientOrderNumber: this.vals.value4,
        originalModel: this.vals.value5,
        brandName: this.vals.value6,
        num: this.vals.value7,
        batchNumber: this.vals.value8,
        price: this.vals.value9,
        totalPrice: this.vals.value10,
        taxRate: this.vals.value11,
        usdPrice: this.vals.value12,
        usdTotalPrice: this.vals.value13,
        grossProfit: this.vals.value14,
        grossProfitMargin: this.vals.value15,
        clientCode: this.vals.value16,
        clientAbbreviation: this.vals.value17,
        comName: this.vals.value18,
        buyerId: this.vals.value19,
        deliveryTime: this.vals.value20,
        salesManId: this.vals.value21,
        orderStatus: this.vals.value22,
        pageNumber: this.buyerApplyNum
      };
      let da = {};
      orderList(data).then(res => {
        this.buyerApply = res.result.list;
        this.buyerApply.unshift(da);
        this.buyerApplytotal = res.result.total;
        this.buyerApplyflag = true;
        console.log(res);
      });
    },
    setNum1(val) {
      console.log(val);
      this.buyerApplyNum = val;
      this.SearchFun1();
    },
    // 采购清单查询 已完成
    SearchFun2(val) {
      if (val != undefined) {
        this.vals1 = val;
      }
      this.buyerApplyflag1 = false;
      let data = {
        type: 1,
        dateTime: this.vals1.value1,
        // startTime: this.value2,
        // endTime: this.value3,
        quarter: this.vals1.value2,
        orderNumber: this.vals1.value3,
        clientOrderNumber: this.vals1.value4,
        originalModel: this.vals1.value5,
        brandName: this.vals1.value6,
        num: this.vals1.value7,
        batchNumber: this.vals1.value8,
        price: this.vals1.value9,
        totalPrice: this.vals1.value10,
        taxRate: this.vals1.value11,
        usdPrice: this.vals1.value12,
        usdTotalPrice: this.vals1.value13,
        grossProfit: this.vals1.value14,
        grossProfitMargin: this.vals1.value15,
        clientCode: this.vals1.value16,
        clientAbbreviation: this.vals1.value17,
        comName: this.vals1.value18,
        buyerId: this.vals1.value19,
        deliveryTime: this.vals1.value20,
        salesManId: this.vals1.value21,
        orderStatus: this.vals1.value22,
        pageNumber: this.buyerApplyNum1
      };
      let da = {};
      orderList(data).then(res => {
        this.buyerApply1 = res.result.list;
        this.buyerApply1.unshift(da);
        this.buyerApplytotal1 = res.result.total;
        this.buyerApplyflag1 = true;
        console.log(res);
      });
    },
    setNum2(val) {
      console.log(val);
      this.buyerApplyNum1 = val;
      this.SearchFun2();
    }
  }
};
</script>