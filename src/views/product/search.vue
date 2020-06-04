<template>
  <div>
    <div style="width: 1660px">
      <div class="top-part">
        <!-- 型号基础信息 -->
        <div class="table-title">
          <p class="borderB">
            <i class="green-block"></i>
            <span>{{productmodelName}}</span>
          </p>
          <el-table
            header-row-class-name="brownHeader"
            align="center"
            style="width: 100%"
            size="mini"
            border
            :data="productmodel"
          >
            <el-table-column width="130" align="center" prop="brandName" label="品牌"></el-table-column>
            <el-table-column width="130" align="center" prop="packageName" label="封装"></el-table-column>
            <el-table-column width="130" align="center" prop="packTypeName" label="包装"></el-table-column>
            <el-table-column align="center" prop="minPackNum" label="最小包装数"></el-table-column>
            <el-table-column align="center" prop="basePrice" label="基础报价"></el-table-column>
            <el-table-column align="center" prop="minPrice" label="最低报价"></el-table-column>
            <el-table-column align="center" prop="description" label="器件描述" width="410"></el-table-column>
            <el-table-column align="center" prop="remark" label="备注" width="330"></el-table-column>
          </el-table>
        </div>
      </div>

      <div style="display: flex;width: 100%;justify-content: space-between;">
        <div class="left-part">
          <!-- 库存信息 -->
          <div class="table-title">
            <p class="borderB">
              <i class="green-block"></i>
              <span>库存信息</span>
            </p>
            <el-table
              header-row-class-name="brownHeader"
              align="center"
              style="width: 100%"
              size="mini"
              border
              :data="stockInfo"
            >
              <el-table-column width="130" align="center" prop="text" label="仓库"></el-table-column>
              <el-table-column class-name="tiltFont" width="130" align="center" label="数量">
                <template slot-scope="scope">
                  <span v-if="scope.row.num <= 0" style="color: red">{{ scope.row.num }}</span>
                  <span v-else>{{ scope.row.num }}</span>
                </template>
              </el-table-column>
              <el-table-column class-name="tiltFont" width="130" align="center" label="可售数量">
                <template slot-scope="scope">
                  <span v-if="scope.row.num <= 0" style="color: red">{{ scope.row.num }}</span>
                  <span v-else>{{ scope.row.num }}</span>
                </template>
              </el-table-column>
              <el-table-column
                class-name="tiltFont"
                width="100"
                align="center"
                prop="num"
                label="批号"
              ></el-table-column>
              <el-table-column
                class-name="tiltFont"
                width="100"
                align="center"
                prop="letter"
                label="产地"
              ></el-table-column>
              <el-table-column width="100" align="center" prop="data" label="入库日期"></el-table-column>
              <el-table-column class-name="tiltFont" align="center" prop="num" label="预计出库"></el-table-column>
              <el-table-column align="center" prop="data" label="预计出库日期"></el-table-column>
            </el-table>
          </div>

          <!-- 在途采购订单 -->
          <div class="table-title">
            <p class="borderB">
              <i class="green-block"></i>
              <span>
                在途采购订单
                <span class="tips-num">({{orderListNum}})</span>
              </span>
            </p>
            <el-table
              header-row-class-name="brownHeader"
              align="center"
              style="width: 100%"
              size="mini"
              border
              :data="orderList"
            >
              <el-table-column width="130" align="center" prop="dataTime" label="采购日期"></el-table-column>
              <el-table-column width="220" align="center" prop="originalModel" label="规格型号"></el-table-column>
              <el-table-column width="110" align="center" prop="brandName" label="品牌"></el-table-column>
              <el-table-column width="80" align="center" prop="number" label="数量"></el-table-column>
              <el-table-column width="100" align="center" prop="price" label="单价"></el-table-column>
              <el-table-column width="140" align="center" prop="supplierName" label="客户名称"></el-table-column>
              <el-table-column width="80" align="center" prop="supplierCode" label="代码"></el-table-column>
              <el-table-column width="100" align="center" prop="buyerName" label="采购人"></el-table-column>
              <el-table-column align="center" prop="predictArrivalData" label="预计入库日期"></el-table-column>
            </el-table>
          </div>

          <!-- 未交客户订单 -->
          <div class="table-title">
            <p class="borderB">
              <i class="green-block"></i>
              <span>
                未交客户订单
                <span class="tips-num">({{orderNotGiveNum}})</span>
              </span>
            </p>
            <el-table
              header-row-class-name="brownHeader"
              align="center"
              style="width: 100%"
              size="mini"
              border
              :data="orderNotGive"
            >
              <el-table-column width="130" align="center" prop="dataTime" label="定单日期"></el-table-column>
              <el-table-column width="220" align="center" prop="originalModel" label="规格型号"></el-table-column>
              <el-table-column width="110" align="center" prop="brandName" label="品牌"></el-table-column>
              <el-table-column width="80" align="center" prop="number" label="数量"></el-table-column>
              <el-table-column width="100" align="center" prop="price" label="单价"></el-table-column>
              <el-table-column width="140" align="center" prop="clientName" label="客户名称"></el-table-column>
              <el-table-column width="80" align="center" prop="clientCode" label="代码"></el-table-column>
              <el-table-column width="100" align="center" prop="salesManName" label="销售员"></el-table-column>
              <el-table-column align="center" prop="predictStockOutData" label="预计出库日期"></el-table-column>
            </el-table>
          </div>

          <!-- 近期询价 -->
          <div class="table-title">
            <p class="borderB">
              <i class="green-block"></i>
              <span>
                近
                <span class="tips-num">(5)</span>次询价
              </span>
            </p>
            <el-table
              header-row-class-name="brownHeader"
              align="center"
              style="width: 100%"
              size="mini"
              border
              :data="enquiryAllList"
            >
              <el-table-column width="130" align="center" prop="data" label="日期"></el-table-column>
              <el-table-column width="220" align="center" prop="clientModel" label="规格型号"></el-table-column>
              <el-table-column width="110" align="center" prop="brandName" label="品牌"></el-table-column>
              <el-table-column width="80" align="center" prop="enquiryNum" label="询价数量"></el-table-column>
              <el-table-column width="100" align="center" prop="acceptPrice" label="供应商单价"></el-table-column>
              <el-table-column width="140" align="center" prop="clientName" label="供应商"></el-table-column>
              <el-table-column width="80" align="center" prop="clientCode" label="代码"></el-table-column>
              <el-table-column width="100" align="center" prop="salesmanName" label="采购人"></el-table-column>
              <el-table-column align="center" prop="salesmanRemarks" label="备注"></el-table-column>
            </el-table>
            <div class="get-more">
              <router-link to>查看更多</router-link>
            </div>
          </div>

          <!-- 近期报价 -->
          <div class="table-title">
            <p class="borderB">
              <i class="green-block"></i>
              <span>
                近
                <span class="tips-num">(5)</span>次报价
              </span>
            </p>
            <el-table
              header-row-class-name="brownHeader"
              align="center"
              style="width: 100%"
              size="mini"
              border
              :data="salesOfferlist"
            >
              <el-table-column width="130" align="center" prop="dateString" label="日期"></el-table-column>
              <el-table-column width="220" align="center" prop="productModelName" label="规格型号"></el-table-column>
              <el-table-column width="110" align="center" prop="brandName" label="品牌"></el-table-column>
              <el-table-column width="80" align="center" prop="offerNum" label="报价数量"></el-table-column>
              <el-table-column width="100" align="center" prop="offerPrice" label="报价单价"></el-table-column>
              <el-table-column width="140" align="center" prop="clientName" label="客户名称"></el-table-column>
              <el-table-column width="80" align="center" prop="clientCode" label="代码"></el-table-column>
              <el-table-column width="100" align="center" prop="salesmanName" label="销售员"></el-table-column>
              <el-table-column align="center" prop="remark" label="备注"></el-table-column>
            </el-table>
            <div class="get-more">
              <router-link to>查看更多</router-link>
            </div>
          </div>

          <!-- 近期采购订单 -->
          <div class="table-title">
            <p class="borderB">
              <i class="green-block"></i>
              <span>
                近
                <span class="tips-num">(5)</span>次采购订单
              </span>
            </p>
            <el-table
              header-row-class-name="brownHeader"
              align="center"
              style="width: 100%"
              size="mini"
              border
              :data="buyerOrderorderList"
            >
              <el-table-column width="130" align="center" prop="dateTime" label="日期"></el-table-column>
              <el-table-column width="220" align="center" prop="originalModel" label="规格型号"></el-table-column>
              <el-table-column width="110" align="center" prop="brandName" label="品牌"></el-table-column>
              <el-table-column width="80" align="center" prop="num" label="报价数量"></el-table-column>
              <el-table-column width="100" align="center" prop="price" label="报价单价"></el-table-column>
              <el-table-column width="140" align="center" prop="clientAbbreviation" label="客户名称"></el-table-column>
              <el-table-column width="80" align="center" prop="clientCode" label="代码"></el-table-column>
              <el-table-column width="100" align="center" prop="buyerName" label="采购人"></el-table-column>
              <el-table-column align="center" prop="text" label="备注"></el-table-column>
            </el-table>
            <div class="get-more">
              <router-link to>查看更多</router-link>
            </div>
          </div>

          <!-- 近期销售订单 -->
          <div class="table-title">
            <p class="borderB">
              <i class="green-block"></i>
              <span>
                近
                <span class="tips-num">(5)</span>次销售订单
              </span>
            </p>
            <el-table
              header-row-class-name="brownHeader"
              align="center"
              style="width: 100%"
              size="mini"
              border
              :data="salesOrderSalesOrdersOfBeing"
            >
              <el-table-column width="130" align="center" prop="dataTime" label="日期"></el-table-column>
              <el-table-column width="220" align="center" prop="originalModel" label="规格型号"></el-table-column>
              <el-table-column width="110" align="center" prop="brandName" label="品牌"></el-table-column>
              <el-table-column width="80" align="center" prop="number" label="报价数量"></el-table-column>
              <el-table-column width="100" align="center" prop="price" label="报价单价"></el-table-column>
              <el-table-column width="140" align="center" prop="clientName" label="客户名称"></el-table-column>
              <el-table-column width="80" align="center" prop="clientCode" label="代码"></el-table-column>
              <el-table-column width="100" align="center" prop="salesManName" label="销售员"></el-table-column>
              <el-table-column align="center" prop="text" label="备注"></el-table-column>
            </el-table>
            <div class="get-more">
              <router-link to>查看更多</router-link>
            </div>
          </div>
        </div>

        <div class="right-part">
          <!-- 优势供应商 -->
          <div class="table-title">
            <p class="borderB">
              <i class="green-block"></i>
              <span>优势供应商</span>
            </p>
            <el-table
              header-row-class-name="brownHeader"
              cell-class-name="brownCell"
              align="center"
              style="width: 100%"
              size="mini"
              border
              :data="supplier"
            >
              <el-table-column width="70" align="center" prop="code" label="代码"></el-table-column>
              <el-table-column width="150" align="center" prop="name" label="供应商"></el-table-column>
              <el-table-column width="70" align="center" prop="type" label="性质"></el-table-column>
              <el-table-column width="140" align="center" prop="connect" label="联系人"></el-table-column>
              <el-table-column align="center" label="联络">
                <div style="display: flex;">
                  <i class="iconfont">&#xe676;</i>
                  <i class="iconfont">&#xe601;</i>
                  <i class="iconfont" style="font-size: 14px;padding: 0 0 0 5px;">&#xe6c1;</i>
                </div>
              </el-table-column>
            </el-table>
            <div class="get-more">
              <router-link style="padding-right: 20px;" to>查看更多</router-link>
            </div>
          </div>

          <!-- 价格趋势 -->
          <div class="table-title">
            <p>
              <i class="green-block"></i>
              <span>价格趋势</span>
            </p>
            <div style="display:flex">
              <el-date-picker
                size="mini"
                @change="change3"
                style="margin-top:0px;margin-left:30px"
                v-model="valuess3"
                type="daterange"
                value-format="yyyy-MM-dd"
                range-separator="至"
                start-placeholder="起始日期"
                end-placeholder="终止日期"
              ></el-date-picker>
              <el-select @change="change3" size="mini" v-model="value3" placeholder="请选择时间段">
                <el-option
                  v-for="item in dateType"
                  :key="item.id"
                  :label="item.name"
                  :value="item.id"
                ></el-option>
              </el-select>
            </div>
            <div style="padding-top: 20px;">
              <stackone :data="datass3" v-if="flag3"></stackone>
            </div>
          </div>

          <!-- 询价 / 下单客户比例 -->
          <div class="table-title">
            <p>
              <i class="green-block"></i>
              <span>询价 / 下单客户比例</span>
            </p>
            <div style="display:flex">
              <el-date-picker
                size="mini"
                @change="change2"
                style="margin-top:0px;margin-left:30px"
                v-model="valuess2"
                type="daterange"
                value-format="yyyy-MM-dd"
                range-separator="至"
                start-placeholder="起始日期"
                end-placeholder="终止日期"
              ></el-date-picker>
              <el-select @change="change2" size="mini" v-model="value2" placeholder="请选择时间段">
                <el-option
                  v-for="item in dateType"
                  :key="item.id"
                  :label="item.name"
                  :value="item.id"
                ></el-option>
              </el-select>
            </div>
            <div style="display: flex;">
              <!-- v-if="flag" -->
              <doughnut :doughnut="doughnut"></doughnut>
              <doughnut :doughnut="doughnuts"></doughnut>
            </div>

            <!-- 询价 / 成交次数统计 -->
            <div class="table-title">
              <p>
                <i class="green-block"></i>
                <span>询价 / 成交次数统计</span>
              </p>
              <div style="display:flex">
                <el-date-picker
                  size="mini"
                  @change="change1"
                  style="margin-top:0px;margin-left:30px"
                  v-model="valuess1"
                  type="daterange"
                  value-format="yyyy-MM-dd"
                  range-separator="至"
                  start-placeholder="起始日期"
                  end-placeholder="终止日期"
                ></el-date-picker>
                <el-select @change="change1" size="mini" v-model="value1" placeholder="请选择时间段">
                  <el-option
                    v-for="item in dateType"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id"
                  ></el-option>
                </el-select>
              </div>
              <stack :data="datas" v-if="flag1"></stack>
            </div>

            <!-- 询价 / 成交统计 -->
            <div class="table-title">
              <p>
                <i class="green-block"></i>
                <span>询价 / 成交统计</span>
              </p>
              <div style="display:flex">
                <el-date-picker
                  size="mini"
                  @change="change0"
                  style="margin-top:0px;margin-left:30px"
                  v-model="valuess0"
                  type="daterange"
                  value-format="yyyy-MM-dd"
                  range-separator="至"
                  start-placeholder="起始日期"
                  end-placeholder="终止日期"
                ></el-date-picker>
                <el-select @change="change0" size="mini" v-model="value0" placeholder="请选择时间段">
                  <el-option
                    v-for="item in dateType"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id"
                  ></el-option>
                </el-select>
              </div>
              <ds :source="datass0" v-if="flag0"></ds>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import bus from "@/assets/Bus";
import {
  productmodel,
  orderList,
  SalesOrdersOfBeing,
  enquiryAllList,
  salesOfferlist,
  buyerOrderorderList,
  salesOrderSalesOrdersOfBeing,
  advantageSupplier,
  priceTrend,
  enquiryAndClientPlaceOrderScale,
  enquiryAndDealTimesCount,
  enquiryAndDealCount
} from "../../api/product";
import stackone from "./stackoneCom";
import stack from "./stackCom";
import doughnut from "../analyze/component/doughnut";
import ds from "./dsCom";
export default {
  name: "productSearch",
  components: { stackone, doughnut, stack, ds },
  data() {
    return {
      dateType: [
        { id: 1, name: "按年" },
        { id: 2, name: "按月" },
        { id: 3, name: "按日" },
        { id: 4, name: "按周" },
        { id: 5, name: "按季度" }
      ],
      // 甜甜圈
      doughnut: {
        text: "(按条目数)",
        data: [
          { value: 0, name: "采购报价条目数" },
          { value: 0, name: "	询价条目数" }
        ]
      },
      doughnuts: {
        text: "(按金额)",
        data: [
          { value: 0, name: "采购报价金额" },
          { value: 0, name: "	询价金额" }
        ]
      },

      valuess3: ["2018-01-01", "2019-12-31"],
      value3: "",
      datass3: "",
      flag3: false,
      valuess2: ["2018-01-01", "2019-12-31"],
      value2: "",
      datass2: "",
      flag2: false,
      valuess1: ["2018-01-01", "2019-12-31"],
      value1: "",
      datass1: "",
      flag1: false,
      valuess0: ["2018-01-01", "2019-12-31"],
      value0: "",
      datass0: "",
      flag0: false,
      flag: false,
      exmpelUrl:
        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
      orderListNum: 0,
      // 型号基本信息
      productmodel: [],
      buyerOrderorderList: [],
      // 库存信息
      stockInfo: [],

      // 在途采购订单
      orderList: [],
      // 销售订单
      salesOrderSalesOrdersOfBeing: [],
      // 未交客户订单
      orderNotGive: [],
      orderNotGiveNum: 0,
      //近期询价
      enquiryAllList: [],

      //近期报价
      salesOfferlist: [],
      salesOrderSalesOrdersOfBeing: [],
      //供应商
      supplier: [],
      productmodelName: ""
    };
  },
  methods: {
    brownHeader() {},
    // 价格趋势
    jgqsFun() {
      this.flag3 = false;
      if (this.valuess3 != null) {
        var startTime = this.valuess3[0];
        var endTime = this.valuess3[1];
      }
      let priceTrendDatas = {
        productModel: "KSZ9021RNI",
        startTime: startTime,
        endTime: endTime,
        dateType: this.value3
      };
      priceTrend(priceTrendDatas).then(res => {
        let data = res.result;
        console.log(res);
        let datas = {
          dealTotal: [],
          date: [],
          name1: "价格趋势"
        };
        data.map((item, index) => {
          datas.dealTotal[index] = data[index].price;
          datas.date[index] = data[index].date;
        });
        this.datass3 = datas;
        this.flag3 = true;
      });
    },
    change3() {
      this.jgqsFun();
    },
    // 询价，下单客户比例
    xjxdFun() {
      this.flag2 = false;
      if (this.valuess2 != null) {
        var startTime = this.valuess2[0];
        var endTime = this.valuess2[1];
      }
      let data = {
        productModel: "KSZ9021RNI",
        startTime: startTime,
        endTime: endTime,
        dateType: this.value2
      };

      enquiryAndClientPlaceOrderScale(data).then(res => {
        console.log(res);
        // this.doughnuts.data[0].value = res.result.total.offerBuyerTotal;
        // this.doughnuts.data[1].value = res.result.total.enquiryTotal;
        // this.doughnut.data[0].value = res.result.itemNum.offerBuyerItemNum;
        // this.doughnut.data[1].value = res.result.itemNum.enquiryItemNum;
        this.flag = true;
      });
    },
    change2() {
      this.xjxdFun();
    },
    // 询价成交次数统计
    xsfun() {
      // 销售询价线形图
      this.flag1 = false;
      if (this.valuess1 != null) {
        var startTime = this.valuess1[0];
        var endTime = this.valuess1[1];
      }
      let enquiryAndDealTimesCountData = {
        productModel: "KSZ9021RNI",
        startTime: startTime,
        endTime: endTime,
        dateType: this.value1
      };
      enquiryAndDealTimesCount(enquiryAndDealTimesCountData).then(res => {
        let data = res.result;
        let datas = {
          enquiryItemNum: [],
          offerBuyerItemNum: [],
          date: [],
          name1: "询价次数",
          name2: "成交次数"
        };
        data.map((item, index) => {
          datas.enquiryItemNum[index] = data[index].enquiry;
          datas.offerBuyerItemNum[index] = data[index].deal;
          datas.date[index] = data[index].date;
        });
        this.datas = datas;
        console.log(this.datas);
        this.flag1 = true;
      });
    },
    change1() {
      this.xsfun();
    },
    // 询价成交总额
    salesTotalAndGrossFun() {
      this.flag0 = false;
      if (this.valuess0 != null) {
        var startTime = this.valuess0[0];
        var endTime = this.valuess0[1];
      }
      let enquiryAndDealCountDatas = {
        productModel: "KSZ9021RNI",
        startTime: startTime,
        endTime: endTime,
        dateType: this.value0
      };
      enquiryAndDealCount(enquiryAndDealCountDatas).then(res => {
        let data = res.result;
        let datas = [["product", "询价总额", "成交总额"]];

        data.map((item, index) => {
          datas.push([item.date, item.enquiry, item.deal]);
        });
        this.datass0 = datas;
        this.flag0 = true;
      });
    },
    change0() {
      this.salesTotalAndGrossFun();
    }
  },
  created() {
    // bus.on("xxx", () => {});
    // 价格趋势
    this.jgqsFun();
    // 询价下单客户比例
    this.xjxdFun();
    // 询价成交次数统计
    this.xsfun();
    // 成交总额
    this.salesTotalAndGrossFun();
    // 根据ID查询型号信息
    let productmodeldata = { modelName: "测试商品一" };
    productmodel(productmodeldata).then(res => {
      this.productmodel.push(res.result);
      this.productmodelName = this.productmodel[0].modelName;
    });

    // 在途采购订单
    // originalModel 原厂型号
    let orderListdata = { type: 0 };
    orderList(orderListdata).then(res => {
      // console.log(res)
      this.orderList = res.result.list;
      this.orderListNum = this.orderList.length;
      // console.log(this.orderList)
    });
    let SalesOrdersOfBeingData = { type: 0 };
    // 未交客户订单
    // originalModel
    SalesOrdersOfBeing(SalesOrdersOfBeingData).then(res => {
      this.orderNotGiveNum = res.result.list.length;
      this.orderNotGive = res.result.list;
    });

    let enquiryAllListData = { pageSize: 5 };
    // 近(5)次询价
    // clientModel   客户型号
    enquiryAllList(enquiryAllListData).then(res => {
      this.enquiryAllList = res.result.list;
    });

    // 报价
    // productModelName
    let salesOfferlistData = { num: 5 };
    salesOfferlist().then(res => {
      this.salesOfferlist = res.result.list;
    });

    // 采购订单
    // originalModel
    let buyerOrderorderListData = { pageSize: 5 };
    buyerOrderorderList(buyerOrderorderListData).then(res => {
      this.buyerOrderorderList = res.result.list;
    });

    // 销售订单
    // originalModel
    let salesOrderSalesOrdersOfBeingData = { pageSize: 5 };
    salesOrderSalesOrdersOfBeing(salesOrderSalesOrdersOfBeingData).then(res => {
      this.salesOrderSalesOrdersOfBeing = res.result.list;
    });

    // 优势供应商
    // productModel
    let advantageSupplierData = { productModel: "测试商品一", page: 5 };
    advantageSupplier(advantageSupplierData).then(res => {
      console.log(res);
    });

    //
  }
};
</script>

<style lang='scss' scoped>
.top-part {
  width: 1445px;
}

.left-part {
  width: 1120px;
}

.right-part {
  width: 520px;
}

.table-title {
  padding-bottom: 20px;

  .borderB {
    border-bottom: 2px solid $theme-color;
  }

  p {
    display: flex;
    align-items: flex-end;

    padding: 0 0 5px;

    .tips-num {
      color: blue;
      font-size: 12px;
      font-weight: 400;
      padding-left: 0;
    }

    span {
      font-size: 14px;
      font-weight: 700;
      padding-left: 15px;
    }
  }
  .green-block {
    display: block;
    width: 8px;
    height: 18px;
    background: $theme-color;
  }

  .get-more {
    width: 100%;
    text-align: right;
    height: 23px;
    line-height: 23px;

    a {
      color: $theme-color;
      padding-right: 55px;
    }
  }
}

.iconfont {
  padding: 0 3px;
}
</style>