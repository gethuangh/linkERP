<template>
  <div class="order-query">
    <div class="order-query-title">单据查询 >></div>
    <el-table
      :data="[1]"
      border
      size="mini"
      class="order-query-table"
      header-row-class-name="order-query-table-header"
    >
      <el-table-column width="80">
        <el-button class="search-btn" type="primary" size="mini" @click="search" plain>Search</el-button>
      </el-table-column>
      <el-table-column label="单据类型" width="95">
        <el-select class="custom-input" v-model="value1" clearable size="mini" placeholder="请选择">
          <el-option label="ALL" value="0"></el-option>
          <el-option label="采购申请单" value="1"></el-option>
          <el-option label="销售订单" value="2"></el-option>
          <el-option label="采购订单" value="3"></el-option>
          <el-option label="入库单" value="4"></el-option>
          <el-option label="出库单" value="5"></el-option>
          <el-option label="调拨单" value="6"></el-option>
          <el-option label="发运单" value="7"></el-option>
        </el-select>
      </el-table-column>
      <el-table-column label="起始日期" width="155" align="center">
        <el-date-picker
          value-format="yyyy-MM-dd"
          class="date-input"
          size="mini"
          v-model="value2"
          type="date"
          placeholder="选择日期"
        ></el-date-picker>
      </el-table-column>
      <el-table-column label="终止日期" width="155" align="center">
        <el-date-picker
          value-format="yyyy-MM-dd"
          class="date-input"
          size="mini"
          v-model="value3"
          type="date"
          placeholder="选择日期"
        ></el-date-picker>
      </el-table-column>
      <el-table-column label="单据编号" width="110" align="center">
        <el-input class="custom-input" size="mini" clearable v-model="value4"></el-input>
      </el-table-column>
      <el-table-column label="客户订单号" width="100" align="center">
        <el-input class="custom-input" size="mini" clearable v-model="value5"></el-input>
      </el-table-column>
      <el-table-column label="原型厂号" width="205">
        <el-input class="custom-input" size="mini" clearable v-model="value6"></el-input>
      </el-table-column>
      <el-table-column label="采购员" width="110" align="center">
        <el-select class="custom-input" v-model="value7" clearable size="mini" placeholder="请选择">
          <el-option
            v-for="item in orderStatus"
            :key="item.id"
            :label="item.realName"
            :value="item.id"
          ></el-option>
        </el-select>
      </el-table-column>
      <el-table-column label="销售员" width="110" align="center">
        <el-select class="custom-input" v-model="value8" clearable size="mini" placeholder="请选择">
          <el-option
            v-for="item in orderStatus"
            :key="item.id"
            :label="item.realName"
            :value="item.id"
          ></el-option>
        </el-select>
      </el-table-column>
      <el-table-column label="公司" width="225" align="center">
        <el-select class="custom-input" v-model="value9" clearable size="mini" placeholder="请选择">
          <el-option
            v-for="item in companyAll"
            :key="item.id"
            :label="item.departmentName"
            :value="item.departmentName"
          ></el-option>
        </el-select>
      </el-table-column>
      <el-table-column label="订单状态" width="160" align="center">
        <el-select class="custom-input" v-model="value10" clearable size="mini" placeholder="请选择">
          <el-option label="审核未通过" value="-1"></el-option>
          <el-option label="待审核" value="0"></el-option>
          <el-option label="已审核待采购" value="1"></el-option>
          <el-option label="已采购待入库" value="2"></el-option>
          <el-option label="部分入库" value="3"></el-option>
          <el-option label="已入库待发货" value="4"></el-option>
          <el-option label="已出库" value="5"></el-option>
          <el-option label="已收款" value="6"></el-option>
        </el-select>
      </el-table-column>
      <el-table-column width="90">
        <el-button class="search-btn" type="primary" size="mini" @click="search" plain>Search</el-button>
      </el-table-column>
    </el-table>

    <sales-order
      v-if="buyerApplyflag&&value1=='0'||value1=='1'"
      :title="{text: '采购申请单',bg: '#99CCFF'}"
      class="spacing"
      :total="buyerApplytotal"
      :tableData="buyerApply"
      :orderStatus="orderStatus"
      @setNum="setNum1"
      @deleFun="deleFun1"
      @SearchFun="SearchFun1"
      @setinput="setinput1"
      :taxRate="taxRate"
      :companyAll="companyAll"
      @all="all"
    ></sales-order>
    <sales-order
      v-if="salesOrderflag&&value1=='0'||value1=='1'"
      :title="{text: '销售订单',bg: '#41C363'}"
      class="spacing"
      :total="salesOrdertotal"
      @deleFun="deleFun2"
      :orderStatus="orderStatus"
      @setinput="setinput2"
      @setNum="setNum2"
      @SearchFun="SearchFun2"
      :taxRate="taxRate"
      :tableData="salesOrder"
      :companyAll="companyAll"
      @all="alls"
    ></sales-order>
    <warehouse-receipt
      @setNum="setNum3"
      :companyAll="companyAll"
      @SearchFun="SearchFun3"
      :orderStatus="orderStatus"
      :taxRate="taxRate"
      :total="godownEntrytotal"
      :tableData="godownEntry"
      v-if="godownEntryflag&&value1=='0'||value1=='1'"
      :title="{text: '入库单', bg: '#99CC00'}"
      class="spacing"
      @all="allss"
    ></warehouse-receipt>
  </div>
</template>

<script>
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
} from "../../../api/order";
import { taxRate } from "../../../api/finance";
import SalesOrder from "./SalesOrder";
import WarehouseReceipt from "./WarehouseReceipt.vue";
import Pagination from "../../../components/Pagination";
export default {
  data() {
    return {
      layout: "prev, pager, next, total",
      total: 0,
      next: ">>",
      prev: "<<",
      orderType: "",
      startDate: null,
      endDate: null,
      value1: "0",
      value2: null,
      value3: null,
      value4: null,
      value5: null,
      value6: null,
      value7: null,
      value8: null,
      value9: null,
      value10: null,
      salesORd: [],
      // 采购清单
      buyerApply: [],
      buyerApplytotal: 0,
      buyerApplyflag: false,
      buyerApplyNum1: 1,
      buyerApplyNum2: 1,
      buyerApplyNum3: 1,
      // 销售订单
      salesOrder: [],
      salesOrdertotal: 0,
      salesOrderflag: false,
      // 入库单
      godownEntry: [],
      godownEntrytotal: 0,
      orderStatus: [],
      godownEntryflag: false,
      // 税率
      taxRate: [],
      taxRateflag: false,
      // 公司
      companyAll: [],
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
      },
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
      }
    };
  },
  methods: {
    // 删除采购申请单
    deleFun1(row) {
      console.log(row);
      let data = { orderId: row.id };
      buyerOrderdel(data).then(res => {
        this.buyerApplyFun();
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
    setinput2() {
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
    deleFun2(row) {
      let data = { orderId: row.id };
      delSalesOrder(data).then(res => {
        this.buyerApplyFun();
      });
    },
    // 查询
    search() {
      this.buyerApplyFun();
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
    setNum3(val) {
      this.buyerApplyNum3 = val;
      this.SearchFun3();
    },
    all() {
      let data = { type: 0, pageNumber: 1, pageSize: 100 };
      let da = {};
      queryBuyerApply(data).then(res => {
        this.buyerApply = res.result.list;
        this.buyerApply.unshift(da);
        this.buyerApplytotal = res.result.total;
        this.buyerApplyflag = true;
      });
    },
    alls() {
      let data = { type: 0, pageNumber: 1, pageSize: 100 };
      let da = {};
      SalesOrdersOfBeing(data).then(res => {
        console.log(res);
        this.salesOrder = res.result.list;
        this.salesOrder.unshift(da);
        this.salesOrdertotal = res.result.total;
        this.salesOrderflag = true;
      });
    },
    // 采购清单查询
    SearchFun1(val) {
      if (val != undefined) {
        this.vals = val;
      }
      this.buyerApplyflag = false;
      let data = {
        type: 0,
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
        pageNumber: this.buyerApplyNum1
      };
      let da = {};
      queryBuyerApply(data).then(res => {
        this.buyerApply = res.result.list;
        this.buyerApply.unshift(da);
        this.buyerApplytotal = res.result.total;
        this.buyerApplyflag = true;
      });
    },
    // 销售订单查询
    SearchFun2(val) {
      if (val != undefined) {
        this.valss = val;
      }
      this.salesOrderflag = false;
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
        pageNumber: this.buyerApplyNum2
      };
      let da = {};
      SalesOrdersOfBeing(data).then(res => {
        this.salesOrder = res.result.list;
        this.salesOrder.unshift(da);
        this.salesOrdertotal = res.result.total;
        this.salesOrderflag = true;
      });
      console.log(data);
    },
    allss() {
      let data = { type: 0, pageNumber: 1, pageSize: 100 };
      let da = {};
      queryEntryList(data).then(res => {
        this.godownEntry = res.result.list;
        this.godownEntry.unshift(da);
        this.godownEntrytotal = res.result.total;
        this.godownEntryflag = true;
      });
    },
    // 入库单
    SearchFun3(val) {
      if (val != undefined) {
        this.valsss = val;
      }
      this.godownEntryflag = false;
      let data = {
        dateTime: this.valsss.value1,
        startTime: this.value2,
        endTime: this.value3,
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
    // 整体查询接口
    buyerApplyFun() {
      this.buyerApplyflag = false;
      this.salesOrderflag = false;
      this.godownEntryflag = false;
      let data = {
        invoType: 0,

        // pageSize: 1,
        // pageNumber: this.buyerApplyNum1,
        startTime: this.value2,
        endTime: this.value3,
        orderNumber: this.value4,
        clientOrderNumber: this.value5,
        originalModel: this.value6,
        salesManId: this.value7,
        buyerId: this.value8,
        comId: this.value9,
        orderStatus: this.value10
      };
      queryOverAll(data).then(res => {
        let da = {};
        switch (data.invoType) {
          // 全部
          case 0:
            this.buyerApply = res.result.stockOut.list;
            this.buyerApply.unshift(da);
            this.buyerApplytotal = res.result.stockOut.total;
            this.salesOrder = res.result.salesOrder.list;
            this.salesOrder.unshift(da);
            this.salesOrdertotal = res.result.salesOrder.total;
            this.godownEntry = res.result.godownEntry.list;
            this.godownEntry.unshift(da);
            this.godownEntrytotal = res.result.godownEntry.total;
            this.buyerApplyflag = true;
            this.salesOrderflag = true;
            this.godownEntryflag = true;
            break;
          // 采购申请单
          case 1:
            this.buyerApply = res.result.stockOut.list;
            this.buyerApply.unshift(da);
            this.buyerApplytotal = res.result.stockOut.total;
            this.buyerApplyflag = true;
            break;
          // 销售订单
          case 2:
            this.salesOrder = res.result.salesOrder.list;
            this.salesOrder.unshift(da);
            this.salesOrdertotal = res.result.salesOrder.total;
            this.salesOrderflag = true;
            break;
          // 入库单
          case 4:
            this.godownEntry = res.result.godownEntry.list;
            this.godownEntry.unshift(da);
            this.godownEntrytotal = res.result.godownEntry.total;
            this.godownEntryflag = true;
            break;
        }
      });
    }
  },
  components: { SalesOrder, WarehouseReceipt, Pagination },
  created() {
    this.buyerApplyFun();
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
  }
};
</script>

<style lang='scss'>
.order-query {
  margin-top: 60px;
  &-title {
    width: 150px;
    height: 20px;
    line-height: 20px;
    background-color: $theme-color;
    padding: 0 5px;
    font-weight: bold;
    color: #fff;
  }
  &-table-header {
    th {
      // background-color: #D7D7D7;
      color: #000;
      font-weight: normal;
    }
  }
  &-table {
    .search-btn {
      padding: 7px 8px;
    }
    .custom-input {
      width: 100%;
      input {
        padding: 0 5px;
      }
    }
    .date-input {
      width: 130px;
    }
  }
}
</style>
