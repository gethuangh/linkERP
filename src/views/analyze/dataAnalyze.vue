<template>
  <div>
    <div class="data-box">
      <!-- 头部 -->
      <div class="data-title">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>数据分析结果</span>
          </div>
          <div class="text-flex flex">
            <div class="text-left flex">
              <div class="text-name">分析内容:</div>
              <span v-if="content.checkList.length>=5">全部</span>
              <span
                v-else
                style="margin-right:5px;"
                v-for="item in content.checkList"
                :key="item"
              >{{item}}</span>
            </div>
            <div class="text-right flex">
              <div class="text-name">分析日期:</div>
              <span class="text-value">{{content.dateString}}</span>
            </div>
          </div>

          <div class="text-flex flex">
            <div class="text-left flex">
              <div class="text-name">时间段:</div>
              <span class="text-value">{{content.timequ}}</span>
            </div>
            <div class="text-right flex">
              <div class="text-name">分析人:</div>
              <span class="text-value">MICHAEL JIAO</span>
            </div>
          </div>

          <div class="text-flex flex">
            <div class="text-left flex">
              <div class="text-name">分析结果货币：</div>
              <span class="text-value">{{content.rmb}}</span>
            </div>
            <!-- <div class="text-right flex">
                   <div class="text-name">分析日期:</div>
                  <span class="text-value">全部</span>
            </div>-->
          </div>
        </el-card>
      </div>
      <!-- 分析内容 -->

      <div class="content-box" v-if="purchaseQuotations||purchaseOrders||salesQuotes||salesOrders">
        <div class="tree-title">分析内容</div>
        <div class="data-tree" style="width: 480px;">
          <tree
            :cls="kh.main"
            :name="kh.name"
            :titile="kh.titile"
            :data="kh.data"
            :color="kh.color"
            :num="kh.num"
            v-if="customerInquirys"
          ></tree>
        </div>

        <div class="flex">
          <!-- 一个表 -->
          <div class="data-tree" style="width: 480px;">
            <tree
              :cls="kh1.main"
              :name="kh1.name"
              :titile="kh1.titile"
              :data="kh1.data"
              :color="kh1.color"
              :num="kh1.num"
              v-if="purchaseQuotations"
            ></tree>
          </div>
          <!-- 一个表 -->
          <div class="data-tree" style="width: 480px;">
            <tree
              :cls="kh2.main"
              :name="kh2.name"
              :titile="kh2.titile"
              :data="kh2.data"
              :color="kh2.color"
              :num="kh2.num"
              v-if="purchaseOrders"
            ></tree>
          </div>
        </div>

        <div class="flex">
          <!-- 一个表 -->
          <div class="data-tree" style="width: 480px;">
            <tree
              :cls="kh3.main"
              :name="kh3.name"
              :titile="kh3.titile"
              :data="kh3.data"
              :color="kh3.color"
              :num="kh3.num"
              v-if="salesQuotes"
            ></tree>
          </div>
          <!-- 一个表 -->
          <div class="data-tree" style="width: 480px;">
            <tree
              :cls="kh4.main"
              :name="kh4.name"
              :titile="kh4.titile"
              :data="kh4.data"
              :color="kh4.color"
              :num="kh4.num"
              v-if="salesOrders"
            ></tree>
          </div>
        </div>
      </div>

      <!-- 比例  采购报价/询价 -->
      <div class="content-box" v-if="purchaseCustomers||salesQuoteOrders">
        <div class="tree-title">
          比例：采购报价/客户询价
          <span style="margin-left:350px;">比例：销售报价/销售订单</span>
        </div>
        <div class="flex">
          <pie :purc="purc" v-if="purchaseCustomers"></pie>
          <div style="width: 350px;height: 220px;" v-else></div>
          <pie :purc="purc1" v-if="salesQuoteOrders"></pie>
        </div>
      </div>

      <!-- 部门 -->
      <div class="content-box" v-if="departmentPerformances">
        <div class="tree-title">部门</div>
        <div class>
          <!-- <div class="section-box">
          <p>区域</p>-->
          <!-- <div class="section-text">
              <span>LINK APAC</span>
              <span>1000万</span>
              <span>比例 30%</span>
          </div>-->
          <!-- <div class="section-text">
              <span>LINK APAC</span>
              <span>1000万</span>
              <span>比例 30%</span>
            </div>
            <div class="section-text">
              <span>LINK APAC</span>
              <span>1000万</span>
              <span>比例 30%</span>
            </div>
          </div>-->
          <div class="ds-box">
            <ds :source="source" v-if="departmentPerformances"></ds>
          </div>
        </div>
      </div>

      <!-- LINK -->
      <div class="link-box" v-if="purchaseCustomers||salesQuoteOrders">
        <div class="content-box">
          <div class="tree-title">LINK JAPAN</div>
          <div class="flex">
            <div class="purc-title">比例：采购报价 / 客户询价</div>
            <div class="purc-title2">比例：销售报价 / 销售订单</div>
            <pie :purc="purc" v-if="purchaseCustomers"></pie>
            <div style="width: 350px;height: 220px;" v-else></div>
            <pie :purc="purc1" v-if="salesQuoteOrders"></pie>
          </div>
          <!-- 分割 -->
          <div class="link-title">LINK EUROPE</div>
          <div class="flex">
            <div class="purc-title3">比例：采购报价 / 客户询价</div>
            <div class="purc-title4">比例：销售报价 / 销售订单</div>
            <pie :purc="purc" v-if="purchaseCustomers"></pie>
            <div style="width: 350px;height: 220px;" v-else></div>
            <pie :purc="purc1" v-if="salesQuoteOrders"></pie>
          </div>
        </div>
      </div>

      <!-- 甜甜圈 -->
      <div class="link-box" v-if="purchaseCustomers||salesQuoteOrders">
        <div class="content-box">
          <!-- 销售部 -->
          <div class="link-titles">销售部</div>
          <!-- 第一部分 -->
          <div class="doughnut-box flex">
            <div class="doughnut-cont">
              <p class="cont-title">客户询价</p>
              <div class="cont-text">
                <p>国际贸易部： xxxx条</p>
                <p>终端业务部： xxxx条</p>
                <p>市场销售部： xxxx条</p>
              </div>
            </div>
            <doughnut :doughnut="doughnut"></doughnut>
            <div style="display:black;">
              <div class="flex">
                <span>国际贸易部：</span>
                <div class="doughnut-num">
                  <el-progress
                    status="success"
                    :text-inside="true"
                    :stroke-width="20"
                    :percentage="70"
                  ></el-progress>
                </div>
              </div>
              <div class="flex">
                <span>终端业务部：</span>
                <div class="doughnut-num">
                  <el-progress :text-inside="true" :stroke-width="20" :percentage="70"></el-progress>
                </div>
              </div>
              <div class="flex">
                <span>国内业务部：</span>
                <div class="doughnut-num">
                  <el-progress :color="hs" :text-inside="true" :stroke-width="20" :percentage="70"></el-progress>
                </div>
              </div>
            </div>
          </div>
          <!-- 第二部分 -->
          <div class="doughnut-box flex">
            <div class="doughnut-cont">
              <p class="cont-title">销售报价</p>
              <div class="cont-text">
                <p>国际贸易部： xxxx条</p>
                <p>终端业务部： xxxx条</p>
                <p>市场销售部： xxxx条</p>
              </div>
            </div>
            <doughnut :doughnut="doughnut"></doughnut>
            <div style="display:black;">
              <div class="flex">
                <span>国际贸易部：</span>
                <div class="doughnut-num">
                  <el-progress
                    status="success"
                    :text-inside="true"
                    :stroke-width="20"
                    :percentage="70"
                  ></el-progress>
                </div>
              </div>
              <div class="flex">
                <span>终端业务部：</span>
                <div class="doughnut-num">
                  <el-progress :text-inside="true" :stroke-width="20" :percentage="70"></el-progress>
                </div>
              </div>
              <div class="flex">
                <span>国内业务部：</span>
                <div class="doughnut-num">
                  <el-progress :color="hs" :text-inside="true" :stroke-width="20" :percentage="70"></el-progress>
                </div>
              </div>
            </div>

            <div class="doughnut-cont">
              <p class="cont-title">销售订单</p>
              <div class="cont-text">
                <p>国际贸易部： xxxx条</p>
                <p>终端业务部： xxxx条</p>
                <p>市场销售部： xxxx条</p>
              </div>
            </div>
            <doughnut :doughnut="doughnut"></doughnut>
            <div style="display:black;">
              <div class="flex">
                <span>国际贸易部：</span>
                <div class="doughnut-num">
                  <el-progress
                    status="success"
                    :text-inside="true"
                    :stroke-width="20"
                    :percentage="70"
                  ></el-progress>
                </div>
              </div>
              <div class="flex">
                <span>终端业务部：</span>
                <div class="doughnut-num">
                  <el-progress :text-inside="true" :stroke-width="20" :percentage="70"></el-progress>
                </div>
              </div>
              <div class="flex">
                <span>国内业务部：</span>
                <div class="doughnut-num">
                  <el-progress :color="hs" :text-inside="true" :stroke-width="20" :percentage="70"></el-progress>
                </div>
              </div>
            </div>
          </div>

          <!-- 采购部 -->
          <div class="link-titles">采购部</div>
          <!-- 第二部分 -->
          <div class="doughnut-box flex">
            <div class="doughnut-cont">
              <p class="cont-title">采购报价</p>
              <div class="cont-text">
                <p>国际贸易部： xxxx条</p>
                <p>终端业务部： xxxx条</p>
                <p>市场销售部： xxxx条</p>
              </div>
            </div>
            <doughnut :doughnut="doughnut"></doughnut>
            <div style="display:black;">
              <div class="flex">
                <span>国际贸易部：</span>
                <div class="doughnut-num">
                  <el-progress
                    status="success"
                    :text-inside="true"
                    :stroke-width="20"
                    :percentage="70"
                  ></el-progress>
                </div>
              </div>
              <div class="flex">
                <span>终端业务部：</span>
                <div class="doughnut-num">
                  <el-progress :text-inside="true" :stroke-width="20" :percentage="70"></el-progress>
                </div>
              </div>
              <div class="flex">
                <span>国内业务部：</span>
                <div class="doughnut-num">
                  <el-progress :color="hs" :text-inside="true" :stroke-width="20" :percentage="70"></el-progress>
                </div>
              </div>
            </div>

            <div class="doughnut-cont">
              <p class="cont-title">采购订单</p>
              <div class="cont-text">
                <p>国际贸易部： xxxx条</p>
                <p>终端业务部： xxxx条</p>
                <p>市场销售部： xxxx条</p>
              </div>
            </div>
            <doughnut :doughnut="doughnut"></doughnut>
            <div style="display:black;">
              <div class="flex">
                <span>国际贸易部：</span>
                <div class="doughnut-num">
                  <el-progress
                    status="success"
                    :text-inside="true"
                    :stroke-width="20"
                    :percentage="70"
                  ></el-progress>
                </div>
              </div>
              <div class="flex">
                <span>终端业务部：</span>
                <div class="doughnut-num">
                  <el-progress :text-inside="true" :stroke-width="20" :percentage="70"></el-progress>
                </div>
              </div>
              <div class="flex">
                <span>国内业务部：</span>
                <div class="doughnut-num">
                  <el-progress :color="hs" :text-inside="true" :stroke-width="20" :percentage="70"></el-progress>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 职员 -->
      <div class="link-box" v-if="purchaseCustomers||salesQuoteOrders">
        <div class="content-box">
          <!-- 销售部 -->
          <div class="link-titles">职员</div>
          <!-- 第一部分 -->
          <div class="doughnut-box flex">
            <div class="doughnut-cont">
              <p class="cont-titles">销售部</p>
              <!-- <div class="cont-text">
                <p>国际贸易部： xxxx条</p>
                <p>国际贸易部： xxxx条</p>
                <p>国际贸易部： xxxx条</p>
              </div>-->
            </div>
            <doughnut :doughnut="doughnut"></doughnut>
            <div style="display:black;">
              <div class="flex">
                <span>国际贸易部：</span>
                <div class="doughnut-num">
                  <el-progress
                    status="success"
                    :text-inside="true"
                    :stroke-width="20"
                    :percentage="70"
                  ></el-progress>
                </div>
              </div>
              <div class="flex">
                <span>终端业务部：</span>
                <div class="doughnut-num">
                  <el-progress :text-inside="true" :stroke-width="20" :percentage="70"></el-progress>
                </div>
              </div>
              <div class="flex">
                <span>国内业务部：</span>
                <div class="doughnut-num">
                  <el-progress :color="hs" :text-inside="true" :stroke-width="20" :percentage="70"></el-progress>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import tree from "./component/tree";
import pie from "./component/pie";
import ds from "./component/ds";
import doughnut from "./component/doughnut";
import {
  // 客户询价
  customerInquiry,
  purchaseCustomer,
  cpiRatio,
  departmentCustomerInquiry,
  // 销售报价
  salesQuote,
  salesQuoteOrder,
  // 部门各区域近期业绩柱形图
  departmentPerformance,
  departmentalSalesQuotation,
  // 销售订单
  salesOrder,
  departmentalSalesOrder,
  // 采购报价
  purchaseQuotation,
  purchasingDepartment,
  // 采购订单
  purchaseOrder,
  purchaseDepartmentOrder
} from "@/api/analyze";
export default {
  data() {
    return {
      purchaseDepartmentOrder: "",
      purchaseDepartmentOrders: false,
      purchaseOrder: "",
      purchaseOrders: false,
      purchasingDepartment: "",
      purchasingDepartments: false,
      purchaseQuotation: "",
      purchaseQuotations: false,
      departmentalSalesOrder: "",
      departmentalSalesOrders: false,
      salesOrder: "",
      salesOrders: false,
      // 销售订单总计
      salesOrderNum: "",
      departmentalSalesQuotation: "",
      departmentalSalesQuotations: false,
      departmentPerformance: "",
      departmentPerformances: false,
      salesQuoteOrder: "",
      salesQuoteOrders: false,
      salesQuote: "",
      salesQuotes: false,
      customerInquiry: "",
      customerInquirys: false,
      purchaseCustomer: "",
      purchaseCustomers: false,
      cpiRatio: "",
      cpiRatios: false,
      departmentCustomerInquiry: "",
      departmentCustomerInquiryts: false,
      hs: "#909399",
      kh: {
        main: "main",
        name: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        titile: "客户询价    ",
        num: "12000",
        data: [10, 52, 200, 334, 390, 330, 220],
        color: ["rgb(153,204,0)"]
      },
      kh1: {
        main: "main",
        name: ["snb", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        titile: "采购报价 ",
        num: "1560010",
        data: [10, 52, 200, 334, 390, 330, 220],
        color: ["rgb(153,204,0)"]
      },
      kh2: {
        main: "main",
        name: ["snb", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        titile: "采购订单    ",
        num: "1560010",
        data: [10, 52, 200, 334, 390, 330, 220],
        color: ["rgb(153,204,0)"]
      },
      kh3: {
        main: "main",
        name: ["snb", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        titile: "销售报价    ",
        num: "1560010条",
        data: [10, 52, 200, 334, 390, 330, 220],
        color: ["rgb(153,204,0)"]
      },
      kh4: {
        main: "main",
        name: ["snb", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        titile: "销售订单    ",
        num: "1560010条",
        data: [10, 52, 200, 334, 390, 330, 220],
        color: ["rgb(153,204,0)"]
      },
      // 采购数据
      purc: {
        data: ["采购报价数", "客户询价数"],
        title: "采购询价比(条目数)",
        datas: [
          { value: 335, name: "采购报价数" },
          { value: 1548, name: "客户询价数" }
        ]
      },
      // 采购数据
      purc1: {
        data: ["销售报价数", "销售订单数"],
        title: "销售订单(报价比)",
        datas: [
          { value: 335, name: "销售报价数" },
          { value: 1548, name: "搜索引擎" }
        ]
      },
      purc2: {
        data: ["视频广告", "搜索引擎"],
        title: "销售订单(报价比)",
        datas: [
          { value: 335, name: "视频广告" },
          { value: 1548, name: "搜索引擎" }
        ]
      },
      purc3: {
        data: ["视频广告", "搜索引擎"],
        title: "销售订单/报价比（条目数）",
        datas: [
          { value: 335, name: "视频广告" },
          { value: 1548, name: "搜索引擎" }
        ]
      },
      purc4: {
        data: ["视频广告", "搜索引擎"],
        title: "采购询报比（条目数）",
        datas: [
          { value: 335, name: "视频广告" },
          { value: 1548, name: "搜索引擎" }
        ]
      },
      purc5: {
        data: ["视频广告", "搜索引擎"],
        title: "销售订单/报价比（条目数）",
        datas: [
          { value: 335, name: "视频广告" },
          { value: 1548, name: "搜索引擎" }
        ]
      },
      // 部门
      source: [["product"], ["一月", 0], ["二月", 0], ["三月", 0], ["四月", 0]],
      // 甜甜圈
      doughnut: {
        text: "客户询价比例",
        data: [
          { value: 335, name: "直接访问" },
          { value: 310, name: "邮件营销" },
          { value: 234, name: "联盟广告" },
          { value: 135, name: "视频广告" },
          { value: 1548, name: "搜索引擎" }
        ]
      },
      data: "",
      content: ""
    };
  },
  components: {
    tree,
    pie,
    ds,
    doughnut
  },
  created() {
    // 获取本地储存的下拉数据
    this.data = JSON.parse(sessionStorage.getItem("data"));
    this.content = JSON.parse(sessionStorage.getItem("content"));
    this.getContent();
  },
  mounted() {},
  methods: {
    getContent() {
      let then = this;
      var content = then.content.checkList;
      console.log(content);
      let data = then.data;
      // 部门id
      let parentId = 1;
      //部门 各区域近期业绩柱形图
      departmentPerformance(data).then(res => {
        then.departmentPerformance = res.result;
        res.result.forEach((val, index, item) => {
          //  部门名称
          then.source[0] = item[index].departmentName;
          then.source[index + 1][0] = item[index].month;
          then.source[index + 1][1] = item[index].chineseYuan;
        });
        then.source[0].unshift("product");
        then.departmentPerformances = true;
      });
      //公司采购报价数 客户询价数 销售订单数 销售报价数
      cpiRatio(data).then(res => {
        then.cpiRatio = res.result;
        then.cpiRatios = true;
      });
      content.forEach((val, index, item) => {
        if (val == "客户询价") {
          // 客户询价
          customerInquiry(data).then(res => {
            then.customerInquiry = res.result;
            then.customerInquiry.forEach((val, index, item) => {
              //  月份
              then.kh.name[index] = item[index].week;
              // 数量
              then.kh.data[index] = item[index].quantity;
            });
            then.kh.num = res.result.sun;
            then.customerInquirys = true;
          });
          //比例采购报价/客户询价
          purchaseCustomer(data).then(res => {
            then.purchaseCustomer = res.result;
            then.purc.datas[0].value = res.result.purchaseQuotation;
            then.purc.datas[1].value = res.result.customerInquiry;
            // then.purc.title = "采购询价比" + "(" + res.result.sun + ")";
            then.purc.title = `采购询价比  ( ${res.result.sun}   )`;
            then.purchaseCustomers = true;
          });
          //销售部门查询客户询价
          // （部门id）
          departmentCustomerInquiry(parentId).then(res => {
            then.departmentCustomerInquiry = res.result;
            then.departmentCustomerInquirys = true;
          });
        }
        if (val == "销售报价") {
          //销售报价
          salesQuote(data).then(res => {
            then.salesQuote = res.result;
            then.salesQuote.forEach((val, index, item) => {
              //  月份
              then.kh3.name[index] = item[index].week;
              // 数量
              then.kh3.data[index] = item[index].quantity;
            });
            then.kh3.num = then.salesQuote.sun;
            then.salesQuotes = true;
          });
          //比例 销售报价/销售订单
          salesQuoteOrder(data).then(res => {
            then.salesQuoteOrder = res.result;
            then.purc.datas[0].value = res.result.salesQuote;
            then.purc.datas[1].value = res.result.salesOrder;
            then.purc.title = "销售订单" + "(" + res.result.sun + ")";
            then.salesQuoteOrders = true;
          });
          //根据销售部门查询销售报价
          // （部门id）
          departmentalSalesQuotation(parentId).then(res => {
            then.departmentalSalesQuotation = res.result;
            then.departmentalSalesQuotations = true;
          });
        }
        if (val == "销售订单") {
          // 销售订单
          salesOrder(data).then(res => {
            then.salesOrder = res.result.salesOrder;
            then.salesQuote.forEach((val, index, item) => {
              //  月份
              then.kh4.name[index] = item[index].week;
              // 数量
              then.kh4.data[index] = item[index].quantity;
            });
            then.kh4.num = res.result.sun;
            then.salesOrders = true;
          });
          //比例 销售报价/销售订单
          salesQuoteOrder(data).then(res => {
            then.salesQuoteOrder = res.result;
            then.salesQuoteOrders = true;
          });

          //销售部门查询销售订单
          departmentalSalesOrder(parentId).then(res => {
            then.departmentalSalesOrder = res.result;
            then.departmentalSalesOrders = true;
          });
        }
        if (val == "采购报价") {
          //采购报价
          purchaseQuotation(data).then(res => {
            then.purchaseQuotation = res.result;
            res.result.forEach((val, index, item) => {
              //  月份
              then.kh1.name[index] = item[index].week;
              // 数量
              then.kh1.data[index] = item[index].quantity;
            });
            then.kh1.num = res.result.sun;
            then.purchaseQuotations = true;
          });
          //比例采购报价/客户询价
          purchaseCustomer(data).then(res => {
            then.purchaseCustomer = res.result;
            then.purc.datas[0].value = res.result.purchaseQuotation;
            then.purc.datas[1].value = res.result.customerInquiry;
            then.purc.title = "采购询价比" + "(" + res.result.sun + ")";
            then.purchaseCustomers = true;
          });
          // 采购部门 采购报价
          purchasingDepartment(parentId).then(res => {
            then.purchasingDepartment = res.result;
            then.purchasingDepartments = true;
          });
        }
        if (val == "采购订单") {
          //采购订单
          purchaseOrder(data).then(res => {
            then.purchaseOrder = res.result;
            res.result.forEach((val, index, item) => {
              //  月份
              then.kh2.name[index] = item[index].week;
              // 数量
              then.kh2.data[index] = item[index].receivableTotalPrice;
            });
            then.kh2.num = res.result.sun;
            then.purchaseOrders = true;
          });
          // 采购部门 采购订单
          purchaseDepartmentOrder(parentId).then(res => {
            then.purchaseDepartmentOrder = res.result;
            then.purchaseDepartmentOrders = true;
          });
        }
      });
    }
  }
};
</script>

<style scoped src="./dataAnalyze.css"></style>