<template>
  <div>
    <page-title title="销售订单>>>"></page-title>
    <sales-order
      v-if="buyerApplyflag"
      :title="{text: '处理中的销售订单',bg: '#99CCFF'}"
      class="spacing"
      :total="salesOrdertotal"
      :tableData="salesOrder"
      :orderStatus="orderStatus"
      @setNum="setNum1"
      @SearchFun="SearchFun1"
      @setinput="setinput1"
      :taxRate="taxRate"
      :companyAll="companyAll"
      @deleFun="deleFun1"
      @all="all"
    ></sales-order>
    <sales-order
      @all="alls"
      v-if="salesOrder1flag"
      :title="{text: '已完成的销售订单',bg: '#41C363'}"
      class="spacing"
      :total="salesOrder1total"
      :orderStatus="orderStatus"
      @setNum="setNum2"
      @SearchFun="SearchFun2"
      :taxRate="taxRate"
      :tableData="salesOrder1"
      :companyAll="companyAll"
      :isFinish="true"
      style="margin-top: 40px"
    ></sales-order>
    <el-dialog width="1600px" top="5vh" title="销售订单-新增" :visible.sync="salesVisible">
      <add-sales-order></add-sales-order>
    </el-dialog>
  </div>
</template>

<script>
import PageTitle from "./common/PageTitle.vue";
import bus from "@/assets/Bus";
import SalesOrder from "./common/SalesOrder.vue";
import AddSalesOrder from "./common/AddSalesOrder.vue";
import Pagination from "../../components/Pagination";
import { taxRate } from "../../api/finance";
import {
  queryOverAll,
  selectData,
  queryBuyerApply,
  SalesOrdersOfBeing,
  queryEntryList,
  companyAll,
  buyerOrderdel,
  delSalesOrder,
  editBuyerOrder
} from "../../api/order";
export default {
  data() {
    return {
      salesVisible: false,
      layout: "prev, pager, next, total",
      total: 0,
      next: ">>",
      prev: "<<",
      orderType: "",
      startDate: null,
      endDate: null,
      value2: null,
      value3: null,
      value4: null,
      value5: null,
      value6: null,
      value7: null,
      value8: null,
      value9: null,
      value10: null,
      value1: "",
      salesORd: [],
      buyerApplyflag: true,
      buyerApplyNum1: 1,
      buyerApplyNum2: 1,
      buyerApplyNum3: 1,
      // 未完成
      salesOrder: [{}],
      salesOrdertotal: 0,
      // 已完成
      salesOrder1: [{}],
      salesOrder1total: 0,
      salesOrder1flag: true,
      // 税率
      taxRate: [],
      taxRateflag: false,
      // 公司
      companyAll: [],
      orderStatus: [],
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
      valss: {
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
    bus.$on("salesVisibleFun", () => {
      this.salesVisible = true;
    });
    // 税率
    taxRate().then(res => {
      this.taxRate = res.result;
    });
    // 公司
    companyAll().then(res => {
      this.companyAll = res.result;
    });
    selectData().then(res => {
      this.orderStatus = res.result;
    });
  },
  methods: {
    all() {
      let data = { type: 0, pageNumber: 1, pageSize: 100 };
      let da = {};
      SalesOrdersOfBeing(data).then(res => {
        this.salesOrder = res.result.list;
        this.salesOrder.unshift(da);
        this.salesOrdertotal = res.result.total;
        this.buyerApplyflag = true;
        console.log(res);
      });
    },
    alls() {
      let data = { type: 1, pageNumber: 1, pageSize: 100 };
      let da = {};
      SalesOrdersOfBeing(data).then(res => {
        this.salesOrder1 = res.result.list;
        this.salesOrder1.unshift(da);
        this.salesOrder1total = res.result.total;
        this.salesOrder1flag = true;
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
    // 删除销售订单
    deleFun1(row) {
      let data = { orderId: row.id };
      delSalesOrder(data).then(res => {
        console.log(res);
      });
    },
    // 获取分页
    setNum1(val) {
      this.buyerApplyNum1 = val;
      this.SearchFun1();
    },
    setNum2(val) {
      this.buyerApplyNum2 = val;
      this.SearchFun2();
    },
    // 处理中
    SearchFun1(val) {
      if (val != undefined) {
        this.valss = val;
      }
      this.buyerApplyflag = false;
      let data = {
        type: 0,
        dateTime: this.valss.value1,
        startTime: this.value2,
        endTime: this.value3,
        quarter: this.valss.value2,
        orderNumber: this.valss.value3,
        clientOrderNumber: this.valss.value4,
        originalModel: this.valss.value5,
        brandName: this.valss.value6,
        num: this.valss.value7,
        batchNumber: this.valss.value8,
        price: this.valss.value9,
        totalPrice: this.valss.value10,
        taxRate: this.valss.value11,
        usdPrice: this.valss.value12,
        usdTotalPrice: this.valss.value13,
        grossProfit: this.valss.value14,
        grossProfitMargin: this.valss.value15,
        clientCode: this.valss.value16,
        clientAbbreviation: this.valss.value17,
        comName: this.valss.value18,
        salesManId: this.valss.value19,
        deliveryTime: this.valss.value20,
        orderStatus: this.valss.value21,
        pageNumber: this.buyerApplyNum1
      };
      let da = {};
      SalesOrdersOfBeing(data).then(res => {
        this.salesOrder = res.result.list;
        this.salesOrder.unshift(da);
        this.salesOrdertotal = res.result.total;
        this.buyerApplyflag = true;
        console.log(res);
      });
    },
    // 已完成
    SearchFun2(val) {
      if (val != undefined) {
        this.vals = val;
      }
      let da = {};
      this.salesOrderflag = false;
      let data = {
        type: 1,
        dateTime: this.vals.value1,
        startTime: this.value2,
        endTime: this.value3,
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
        salesManId: this.vals.value19,
        deliveryTime: this.vals.value20,
        orderStatus: this.vals.value21,
        pageNumber: this.buyerApplyNum2
      };
      SalesOrdersOfBeing(data).then(res => {
        this.salesOrder1 = res.result.list;
        this.salesOrder1.unshift(da);
        this.salesOrder1total = res.result.total;
        this.salesOrder1flag = true;
      });
    }
  },
  components: {
    PageTitle,
    SalesOrder,
    Pagination,
    AddSalesOrder
  }
};
</script>