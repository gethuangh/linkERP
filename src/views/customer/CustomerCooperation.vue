<template>
  <div class="customer-view">
    <div class="title">
      合作客户
      <el-button type="text" @click="dialogFormVisible = true" size="mini" class="btn">Add</el-button>
    </div>
    <el-table :data="thispartner" size="mini" border :header-cell-style="headerStyle">
      <el-table-column
        prop="createTime"
        label="创建日期"
        align="center"
        width="115"
        :formatter="formatter"
        class-name="italic"
        sortable
      ></el-table-column>
      <el-table-column
        prop="chineseName"
        label="客户名称"
        width="250"
        class-name="bg1"
        :formatter="formatter"
        sortable
      ></el-table-column>
      <el-table-column
        prop="levelName"
        label="级别"
        align="center"
        width="75"
        :formatter="formatter"
        sortable
      ></el-table-column>
      <el-table-column
        prop="categoryName"
        label="类别"
        align="center"
        width="90"
        :formatter="formatter"
        sortable
      ></el-table-column>
      <el-table-column
        prop="industryName"
        label="行业"
        align="center"
        width="95"
        :formatter="formatter"
        sortable
      ></el-table-column>
      <el-table-column
        prop="countryName"
        label="所属国家"
        align="center"
        width="100"
        :formatter="formatter"
        sortable
      ></el-table-column>
      <el-table-column
        prop="connectionArea"
        label="联络地区"
        align="center"
        width="105"
        :formatter="formatter"
        sortable
      ></el-table-column>
      <el-table-column
        prop="orderDate"
        label="最近订单日期"
        align="center"
        width="125"
        :formatter="formatter"
        sortable
      ></el-table-column>
      <el-table-column
        prop="monthGrossProfit"
        label="本月毛利润"
        class-name="bg1"
        width="125"
        align="center"
        :formatter="formatter"
        sortable
      ></el-table-column>
      <el-table-column
        prop="yearhGrossProfit"
        label="本年毛利润"
        class-name="bg1"
        width="130"
        align="center"
        :formatter="formatter"
        sortable
      ></el-table-column>
      <el-table-column
        prop="monthSales"
        label="本月销售额"
        class-name="bg2"
        width="125"
        align="center"
        :formatter="formatter"
        sortable
      ></el-table-column>
      <el-table-column
        prop="yearhSales"
        label="本年销售额"
        class-name="bg2"
        width="130"
        align="center"
        :formatter="formatter"
        sortable
      ></el-table-column>
      <el-table-column
        prop="profitMargin"
        label="利润率"
        align="center"
        width="110"
        :formatter="formatter"
        sortable
      ></el-table-column>
      <el-table-column
        prop="inquiryMonth"
        label="本月询价"
        align="center"
        width="95"
        :formatter="formatter"
        sortable
      ></el-table-column>
      <el-table-column
        prop="quoteMonth"
        label="本月报价 "
        align="center"
        width="100"
        :formatter="formatter"
        sortable
      ></el-table-column>
      <el-table-column
        prop="inquiryYear"
        label="本年询价"
        align="center"
        width="95"
        :formatter="formatter"
        sortable
      ></el-table-column>
      <el-table-column
        prop="yearQuote"
        label="本年报价"
        align="center"
        width="95"
        :formatter="formatter"
        sortable
      ></el-table-column>
      <el-table-column
        prop="salesman"
        label="业务员"
        align="center"
        width="85"
        :formatter="formatter"
        sortable
      ></el-table-column>
    </el-table>

    <el-dialog width="80%" title="新增客户" :visible.sync="dialogFormVisible">
      <addCustomer @ok="ok" @quxiao="quxiao"></addCustomer>
    </el-dialog>
  </div>
</template>

<script>
import { partner } from "../../api/customer";
import { customerAdd } from "@/api/customer";
import addCustomer from "./common/NewCustomer";
export default {
  name: "",
  data() {
    return {
      dialogFormVisible: false,
      thispartner: [{}],
      headerStyle: {
        fontSize: "12px",
        fontWeight: "bold",
        color: "#000",
        backgroundColor: "#e5ffe5",
        borderTop: "2px solid #41c363"
      },
      tableData: []
    };
  },
  created() {
    //合作客户
    let type = { type: "31" };
    partner(type).then(res => {
      this.thispartner = res.result;
    });

    var result = [];
    for (var i = 0; i < 7; i++) {
      result.push({
        createDate: "2018-05-15",
        name: "鸿海精密仪器(中国)有限公司",
        level: "A",
        category: "代工厂",
        industry: "",
        country: "中国",
        liaisonArea: "中国-深圳",
        latestOrder: "2018-05-02",
        monthProfit: 32005,
        yearProfit: 32005,
        monthSale: 258790,
        yearSale: 258790,
        profitMargin: 12.36,
        monthInquiry: 135,
        monthOffer: 35,
        yearInquiry: 1135,
        yearOffer: 135,
        salesman: "刘威"
      });
      result.push({
        createDate: "2018-05-22",
        name: "AAA ELECTRONICS",
        level: "B",
        category: "贸易商",
        industry: "",
        country: "美国",
        liaisonArea: "美国-FL",
        latestOrder: "2018-05-26",
        monthProfit: 32005,
        yearProfit: 32005,
        monthSale: 258790,
        yearSale: 258790,
        profitMargin: 10.54,
        monthInquiry: 110,
        monthOffer: 45,
        yearInquiry: 1100,
        yearOffer: 145,
        salesman: "焦文杰"
      });
      result.push({
        createDate: "2018-06-05",
        name: "华为科技有限公司",
        level: "C",
        category: "最终客户",
        industry: "通信",
        country: "中国",
        liaisonArea: "中国-深圳",
        latestOrder: "2018-06-05",
        monthProfit: 32005,
        yearProfit: 32005,
        monthSale: 258790,
        yearSale: 258790,
        profitMargin: 22.1,
        monthInquiry: 800,
        monthOffer: 15,
        yearInquiry: 1800,
        yearOffer: 115,
        salesman: "焦文杰"
      });
    }
    this.tableData = result;
  },
  methods: {
    ok(data) {
      customerAdd(data).then(res => {
        console.log(res);
        this.dialogFormVisible = false;
      });
    },
    quxiao() {
      this.dialogFormVisible = false;
    },
    formatter(row, column, cellValue) {
      return cellValue || "-";
    }
  },
  components: { addCustomer }
};
</script>

<style lang='scss'>
@import "./common/tableView.scss";
</style>
