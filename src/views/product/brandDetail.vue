<template>
  <div>
    <div class="top-label">
      <div class="label-left">
        <p>品牌名称</p>
        <el-autocomplete
          size="mini"
          v-model="brandName"
          :fetch-suggestions="querySearch"
          placeholder="请输入内容"
          :trigger-on-focus="false"
          @select="handleSelect"
        ></el-autocomplete>
      </div>
      <div class="label-left">
        <p>授权代理商</p>
        <el-autocomplete
          size="mini"
          v-model="agent"
          :fetch-suggestions="querySearch"
          placeholder="请输入内容"
          :trigger-on-focus="false"
          @select="handleSelect"
        ></el-autocomplete>
      </div>
      <div class="label-left">
        <p>优质贸易商</p>
        <el-autocomplete
          size="mini"
          v-model="trader"
          :fetch-suggestions="querySearch"
          placeholder="请输入内容"
          :trigger-on-focus="false"
          @select="handleSelect"
        ></el-autocomplete>
      </div>
      <div class="label-left">
        <p></p>
        <el-button size="mini" type="success">检索</el-button>
      </div>
      <div class="label-left">
        <p></p>
        <el-button size="mini" type="info" plain @click="clear">清空</el-button>
      </div>
    </div>

    <div class="main-box">
      <div class="left-part">
        <!-- 品牌基本信息 -->
        <div class="brand-basis">
          <div style="width:260px;">
            <el-image style="width: 180px; height: 50px" :src="productbrand.logoUrl" fit="fit"></el-image>
          </div>
          <div style="flex: 1;">
            <el-row>
              <el-col :span="3">品牌名称</el-col>
              <el-col :span="6">
                <b>{{productbrand.name}}</b>
              </el-col>
              <el-col :span="3">本年成交额</el-col>
              <el-col :span="5">
                <span class="green-i">{{productbrand.turnoverThisYear}}</span>万元
              </el-col>
              <el-col :span="3">历史成交额</el-col>
              <el-col :span="4">
                <span class="green-i">{{productbrand.turnoverThisAll}}</span>万元
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="3">品牌简称</el-col>
              <el-col :span="6">
                <b>{{productbrand.alias}}</b>
              </el-col>
              <el-col :span="3">本年成交比例</el-col>
              <el-col :span="5">
                <span class="green-i">{{productbrand.turnoverRatioThisYear}}</span>%
              </el-col>
              <el-col :span="3">历史成交比例</el-col>
              <el-col :span="4">
                <span class="green-i">{{productbrand.turnoverRatioThisAll}}</span>%
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="3">所属国家</el-col>
              <el-col :span="6">
                <b>{{productbrand.countryName}}</b>
              </el-col>
              <el-col :span="3">本年利润率</el-col>
              <el-col :span="5">
                <span class="green-i">{{productbrand.profitMarginThisYear}}</span>%
              </el-col>
              <el-col :span="3">历史利润率</el-col>
              <el-col :span="4">
                <span class="green-i">{{productbrand.profitMarginThisAll}}</span>%
              </el-col>
            </el-row>
          </div>
        </div>

        <!-- 授权代理商 -->
        <div class="no-border-wrap">
          <i class="green-block"></i>
          <el-table class="no-border" size="small" :data="agentAndLinkmanList" style="width: 100%">
            <el-table-column class-name="blackFont" width="180" label="授权代理商" prop="name"></el-table-column>
            <el-table-column type="expand">
              <template slot-scope="scope">
                <el-table
                  size="mini"
                  :show-header="false"
                  :data="scope.row.linkmanAndSpecTypeNumModelList"
                >
                  <el-table-column width="230" label="授权代理商"></el-table-column>
                  <el-table-column width="70" label="地区" prop="category"></el-table-column>
                  <el-table-column width="80" label="联系人" prop="name"></el-table-column>
                  <el-table-column width="130" label="座机电话" prop="plane"></el-table-column>
                  <el-table-column width="130" label="手机" prop="phone"></el-table-column>
                  <el-table-column width="100" label="QQ" prop="qqNumber">
                    <template slot-scope="scope">
                      <a
                        target="_blank"
                        :href="'http://wpa.qq.com/msgrd?v=3&uin='+scope.row.qqNumber+'&site=qq&menu=yes'"
                      >
                        {{scope.row.qqNumber}}
                        <img
                          border="0"
                          src="img/button_11.gif"
                          alt="点击这里给我发消息"
                          title="点击这里给我发消息"
                        />
                      </a>
                    </template>
                  </el-table-column>
                  <el-table-column width="100" label="微信" prop="wechatNumber"></el-table-column>
                  <el-table-column class-name="greenFont" label="特价型号" prop="specTypeNum"></el-table-column>
                  <el-table-column label="查看联系人">
                    <template slot-scope>
                      <el-button size="mini" type="success" plain>联系人</el-button>
                    </template>
                  </el-table-column>
                </el-table>
              </template>
            </el-table-column>
            <el-table-column width="70" label="地区"></el-table-column>
            <el-table-column width="80" label="联系人"></el-table-column>
            <el-table-column width="130" label="座机电话"></el-table-column>
            <el-table-column width="130" label="手机"></el-table-column>
            <el-table-column width="100" label="QQ"></el-table-column>
            <el-table-column width="100" label="微信"></el-table-column>
            <el-table-column label="特价型号"></el-table-column>
          </el-table>
        </div>

        <!-- 优质贸易商 -->
        <div class="no-border-wrap">
          <i class="green-block"></i>
          <el-table class="no-border" size="small" :data="tradeAndLinkmanList" style="width: 100%">
            <el-table-column class-name="blackFont" width="180" label="优质贸易商" prop="name"></el-table-column>
            <el-table-column type="expand">
              <template slot-scope="props">
                <el-table
                  size="mini"
                  :show-header="false"
                  :data="props.row.linkmanAndProductModels"
                >
                  <el-table-column width="230" label="授权代理商"></el-table-column>
                  <el-table-column width="70" label="地区" prop="category"></el-table-column>
                  <el-table-column width="80" label="联系人" prop="name"></el-table-column>
                  <el-table-column width="130" label="座机电话" prop="plane"></el-table-column>
                  <el-table-column width="130" label="手机" prop="phone"></el-table-column>
                  <el-table-column width="100" label="QQ" prop="qqNumber">
                    <template slot-scope="scope">
                      <a
                        target="_blank"
                        :href="'http://wpa.qq.com/msgrd?v=3&uin='+scope.row.qqNumber+'&site=qq&menu=yes'"
                      >
                        {{scope.row.qqNumber}}
                        <img
                          border="0"
                          src="img/button_11.gif"
                          alt="点击这里给我发消息"
                          title="点击这里给我发消息"
                        />
                      </a>
                    </template>
                  </el-table-column>
                  <el-table-column width="100" label="微信" prop="wechatNumber"></el-table-column>
                  <el-table-column class-name="greenFont" label="主营产品系列" prop="majorProduct"></el-table-column>
                </el-table>
              </template>
            </el-table-column>
            <el-table-column width="70" label="地区"></el-table-column>
            <el-table-column width="80" label="联系人"></el-table-column>
            <el-table-column width="130" label="座机电话"></el-table-column>
            <el-table-column width="130" label="手机"></el-table-column>
            <el-table-column width="100" label="QQ"></el-table-column>
            <el-table-column width="100" label="微信"></el-table-column>
            <el-table-column label="主营产品系列"></el-table-column>
          </el-table>
        </div>

        <!-- 产品系列 -->
        <div class="no-border-wrap">
          <i class="green-block"></i>
          <div class="row-title">产品系列</div>
          <div class="row-cont">
            <p v-for="item in productSeries" :key="item.index">{{ item.value }}</p>
          </div>
        </div>

        <!-- 特价型号 -->
        <div class="no-border-wrap">
          <i class="green-block"></i>
          <div class="row-title">
            特价型号
            <em>(725)</em>
          </div>
          <el-table size="mini" :data="spectype" style="width: 100%">
            <el-table-column prop="modelNumber" label="型号" width="170"></el-table-column>
            <el-table-column prop="tempSpotNum" label="临时现货数量" width="120"></el-table-column>
            <el-table-column prop="mpq" label="最小包装量MPQ" width="120"></el-table-column>
            <el-table-column prop="moq" label="最小起订量MOQ" width="120"></el-table-column>
            <el-table-column prop="standardDelivery" label="标准交期" width="100"></el-table-column>
            <el-table-column prop="supName" label="供应商" width="170"></el-table-column>
            <el-table-column prop="buyerName" label="采购员" width="100"></el-table-column>
            <el-table-column prop="createTime" label="录入日期"></el-table-column>
          </el-table>
        </div>
      </div>

      <div class="right-part">
        <!-- 母/子品牌 -->
        <!-- <div class="no-border-wrap">
          <i class="green-block"></i>
          <div class="row-title">母/子品牌</div>
          <div class="row-brand">
            <div class="mother-brand">
              <p>母品牌</p>
              <el-image
                style="width: 145px; height: 57px"
                :src="relation.parentBrand.logoUrl"
                fit="fit"
              ></el-image>
              <p>{{relation.parentBrand.name}}</p>
            </div>
            <div class="children-brand" v-for="item in relation.subBrand" :key="item.index">
              <p>子品牌</p>
              <el-image style="width: 145px; height: 57px" :src="item.logoUrl" fit="fit"></el-image>
              <p>{{item.name}}</p>
            </div>
          </div>
        </div>-->

        <!-- 销售询价/采购报价 比例图 -->
        <div class="no-border-wrap">
          <i class="green-block"></i>
          <div class="row-title">销售询价/采购报价 比例图</div>
          <div style="display: flex; justify-content: space-between;padding-top: 20px;">
            <doughnut v-if="flag" :doughnut="doughnut"></doughnut>
            <doughnut v-if="flag" :doughnut="doughnuts"></doughnut>
          </div>
        </div>

        <!-- 销售 报价/成交 比例图 -->
        <div class="no-border-wrap">
          <i class="green-block"></i>
          <div class="row-title">销售 报价/成交 比例图</div>
          <div style="display: flex; justify-content: space-between;padding-top: 20px;">
            <doughnut v-if="flags" :doughnut="doughnut1"></doughnut>
            <doughnut v-if="flags" :doughnut="doughnut2"></doughnut>
          </div>
        </div>

        <!-- 销售询价 / 采购报价 线形图 -->
        <div class="no-border-wrap">
          <i class="green-block"></i>
          <div class="row-title" style="display:flex">
            销售询价 / 采购报价 线形图
            <el-date-picker
              @change="change1"
              size="mini"
              style="margin-top:-5px"
              v-model="valuess1"
              type="daterange"
              value-format="yyyy-MM-dd"
              range-separator="至"
              start-placeholder="起始日期"
              end-placeholder="终止日期"
            ></el-date-picker>
          </div>
          <el-select @change="change1" size="mini" v-model="value1" placeholder="请选择时间段">
            <el-option v-for="item in dateType" :key="item.id" :label="item.name" :value="item.id"></el-option>
          </el-select>
          <div style="padding-top: 20px;">
            <stack :data="datas" v-if="flag1"></stack>
          </div>
        </div>

        <!-- 销售报价 / 成交 线形图 -->
        <div class="no-border-wrap">
          <i class="green-block"></i>
          <div class="row-title" style="display:flex">
            销售报价 / 成交 线形图
            <el-date-picker
              size="mini"
              @change="change2"
              style="margin-top:-5px;margin-left:30px"
              v-model="valuess2"
              type="daterange"
              value-format="yyyy-MM-dd"
              range-separator="至"
              start-placeholder="起始日期"
              end-placeholder="终止日期"
            ></el-date-picker>
          </div>
          <el-select @change="change2" size="mini" v-model="value2" placeholder="请选择时间段">
            <el-option v-for="item in dateType" :key="item.id" :label="item.name" :value="item.id"></el-option>
          </el-select>
          <div style="padding-top: 20px;">
            <stack :data="datass" v-if="flag2"></stack>
          </div>
        </div>

        <!-- 成交金额 线形图 -->
        <div class="no-border-wrap">
          <i class="green-block"></i>
          <div class="row-title" style="display:flex">
            成交金额 线
            <el-date-picker
              size="mini"
              @change="change3"
              style="margin-top:-5px;margin-left:30px"
              v-model="valuess3"
              type="daterange"
              value-format="yyyy-MM-dd"
              range-separator="至"
              start-placeholder="起始日期"
              end-placeholder="终止日期"
            ></el-date-picker>
          </div>
          <el-select @change="change3" size="mini" v-model="value3" placeholder="请选择时间段">
            <el-option v-for="item in dateType" :key="item.id" :label="item.name" :value="item.id"></el-option>
          </el-select>
          <div style="padding-top: 20px;">
            <stackone :data="datass3" v-if="flag3"></stackone>
          </div>
        </div>

        <!-- 销售利润 线形图 -->
        <div class="no-border-wrap">
          <i class="green-block"></i>
          <div class="row-title" style="display:flex">
            销售利润 线
            <el-date-picker
              size="mini"
              @change="change4"
              style="margin-top:-5px;margin-left:30px"
              v-model="valuess4"
              type="daterange"
              value-format="yyyy-MM-dd"
              range-separator="至"
              start-placeholder="起始日期"
              end-placeholder="终止日期"
            ></el-date-picker>
          </div>
          <el-select @change="change4" size="mini" v-model="value4" placeholder="请选择时间段">
            <el-option v-for="item in dateType" :key="item.id" :label="item.name" :value="item.id"></el-option>
          </el-select>
          <div style="padding-top: 20px;">
            <stackone :data="datass4" v-if="flag4"></stackone>
          </div>
        </div>

        <!-- 销售额 / 毛利润 柱形图 -->
        <div class="no-border-wrap">
          <i class="green-block"></i>
          <div class="row-title" style="display:flex">
            销售额 / 毛利润 线形图
            <el-date-picker
              size="mini"
              @change="change5"
              style="margin-top:-5px;margin-left:30px"
              v-model="valuess5"
              type="daterange"
              value-format="yyyy-MM-dd"
              range-separator="至"
              start-placeholder="起始日期"
              end-placeholder="终止日期"
            ></el-date-picker>
          </div>
          <el-select @change="change5" size="mini" v-model="value5" placeholder="请选择时间段">
            <el-option v-for="item in dateType" :key="item.id" :label="item.name" :value="item.id"></el-option>
          </el-select>
          <div style="padding-top: 20px;">
            <ds :source="datass5" v-if="flag5"></ds>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import bus from "@/assets/Bus";
import doughnut from "../analyze/component/doughnut";
import ds from "./dsCom";
import stack from "./stackCom";
import stackone from "./stackoneCom";
import {
  productbrand,
  agentAndLinkmanList,
  tradeAndLinkmanList,
  spectype,
  relation,
  enquiryAndOfferBuyerScale,
  offerSalesAndDealScale,
  enquiryAndOfferBuyerItemNum,
  offerSalesAndDealItemNum,
  dealTotal,
  salesGross,
  salesTotalAndGross
} from "../../api/product";
export default {
  name: "brandDetail",
  data() {
    return {
      value1: "",
      value2: "",
      value3: "",
      value4: "",
      value5: "",
      dateType: [
        { id: 1, name: "按年" },
        { id: 2, name: "按月" },
        { id: 3, name: "按日" },
        { id: 4, name: "按周" },
        { id: 5, name: "按季度" }
      ],
      valuess: ["2018-01-01", "2019-12-31"],
      valuess1: ["2018-01-01", "2019-12-31"],
      valuess2: ["2018-01-01", "2019-12-31"],
      valuess3: ["2018-01-01", "2019-12-31"],
      valuess5: ["2018-01-01", "2019-12-31"],
      valuess4: ["2018-01-01", "2019-12-31"],
      brandLogoUrl:
        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",

      brandName: "",
      agent: "",
      trader: "",
      enquiryAndOfferBuyerScale: [],
      offerSalesAndDealScale: [],
      restaurants: [],
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
      doughnut1: {
        text: "(按条目数)",
        data: [
          { value: 0, name: "成交条目数" },
          { value: 0, name: "销售报价条目数" }
        ]
      },
      doughnut2: {
        text: "(按条目数)",
        data: [
          { value: 0, name: "成交条目数" },
          { value: 0, name: "销售报价条目数" }
        ]
      },

      datas: null,
      datass: null,
      datass1: null,
      datass2: null,
      datass3: null,
      datass4: null,
      datass5: null,
      optionsTwo: [],

      tableData: [],

      productSeries: [],

      agentAndLinkmanList: [],
      tradeAndLinkmanList: [],
      spectype: [],
      relation: [],
      childrenBrand: [{}, {}],
      id: null,
      productbrand: null,
      flag: false,
      flags: false,
      flag1: false,
      flag2: false,
      flag3: false,
      flag4: false,
      flag5: false,
      startTime: "",
      endTime: "",
      startTime1: "",
      endTime1: "",
      startTime2: "",
      endTime2: "",
      startTime3: "",
      endTime3: "",
      startTime4: "",
      endTime4: ""
    };
  },
  components: {
    doughnut,
    stack,
    stackone,
    ds
  },
  methods: {
    querySearch(queryString, callback) {
      var restaurants = this.restaurants;
      var results = queryString
        ? restaurants.filter(this.createFilter(queryString))
        : restaurants;
      // 调用 callback 返回建议列表的数据
      callback(results);
    },
    createFilter(queryString) {
      return restaurant => {
        return (
          restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) ===
          0
        );
      };
    },
    loadAll() {
      return this.selectedItem;
    },
    handleSelect(item) {
      console.log(item);
    },
    //清空
    clear() {
      this.brandName = "";
      this.agent = "";
      this.trader = "";
    },
    //  // 销售询价线形图
    xsfun() {
      // 销售询价线形图
      this.flag1 = false;
      if (this.valuess1 != null) {
        this.startTime = this.valuess1[0];
        this.endTime = this.valuess1[1];
      }
      let enquiryAndOfferBuyerItemNumData = {
        brandId: this.id,
        startTime: this.startTime,
        endTime: this.endTime,
        dateType: this.value1
      };
      enquiryAndOfferBuyerItemNum(enquiryAndOfferBuyerItemNumData).then(res => {
        let data = res.result;
        let datas = {
          enquiryItemNum: [],
          offerBuyerItemNum: [],
          date: [],
          name1: "询价条目数",
          name2: "报价条目数"
        };
        data.map((item, index) => {
          datas.enquiryItemNum[index] = data[index].enquiryItemNum;
          datas.offerBuyerItemNum[index] = data[index].offerBuyerItemNum;
          datas.date[index] = data[index].date;
        });
        this.datas = datas;
        this.flag1 = true;
      });
    },
    change1() {
      this.xsfun();
    },
    // 销售报价线形图
    offerSalesAndDealItemNumFun() {
      this.flag2 = false;
      if (this.valuess2 != null) {
        this.startTime1 = this.valuess2[0];
        this.endTime1 = this.valuess2[1];
      }
      let offerSalesAndDealItemNumDatas = {
        brandId: this.id,
        startTime: this.startTime1,
        endTime: this.endTime1,
        dateType: this.value2
      };
      offerSalesAndDealItemNum(offerSalesAndDealItemNumDatas).then(res => {
        let data = res.result;
        let datas = {
          enquiryItemNum: [],
          offerBuyerItemNum: [],
          date: [],
          name1: "销售报价条目数",
          name2: "成交条目数"
        };
        data.map((item, index) => {
          datas.enquiryItemNum[index] = data[index].offerSalesItemNum;
          datas.offerBuyerItemNum[index] = data[index].dealItemNum;
          datas.date[index] = data[index].date;
        });
        this.datass = datas;
        this.flag2 = true;
      });
    },
    change2() {
      this.offerSalesAndDealItemNumFun();
    },
    // 成交金额
    dealTotalFun() {
      this.flag3 = false;
      if (this.valuess3 != null) {
        this.startTime2 = this.valuess3[0];
        this.endTime2 = this.valuess3[1];
      }
      let dealTotalDatas = {
        brandId: this.id,
        startTime: this.startTime2,
        endTime: this.endTime2,
        dateType: this.value3
        // brandId: 2,
        // startTime: "2019-04-23",
        // endTime: "2019-12-25",
        // dateType: 1
      };
      dealTotal(dealTotalDatas).then(res => {
        let data = res.result;
        let datas = {
          dealTotal: [],
          date: [],
          name1: "成交金额"
        };
        data.map((item, index) => {
          datas.dealTotal[index] = data[index].dealTotal;
          datas.date[index] = data[index].date;
        });
        this.datass3 = datas;
        this.flag3 = true;
      });
    },
    change3() {
      this.dealTotalFun();
    },
    //销售利润
    salesGrossFun() {
      this.flag4 = false;
      if (this.valuess4 != null) {
        this.startTime3 = this.valuess4[0];
        this.endTime3 = this.valuess4[1];
      }
      let salesGrossDatas = {
        brandId: this.id,
        startTime: this.startTime3,
        endTime: this.endTime3,
        dateType: this.value4
        // brandId: 2,
        // startTime: "2019-04-23",
        // endTime: "2019-12-25",
        // dateType: 1
      };
      salesGross(salesGrossDatas).then(res => {
        let data = res.result;
        let datas = {
          dealTotal: [],
          date: [],
          name1: "销售利润"
        };
        data.map((item, index) => {
          datas.dealTotal[index] = data[index].salesGross;
          datas.date[index] = data[index].date;
        });
        this.datass4 = datas;
        this.flag4 = true;
      });
    },
    change4() {
      this.salesGrossFun();
    },
    //销售额/毛利润 柱形图
    salesTotalAndGrossFun() {
      this.flag5 = false;
      if (this.valuess5 != null) {
        this.startTime4 = this.valuess5[0];
        this.endTime4 = this.valuess5[1];
      }
      let salesTotalAndGrossDatas = {
        brandId: this.id,
        startTime: this.startTime4,
        endTime: this.endTime4,
        dateType: this.value5
      };
      salesTotalAndGross(salesTotalAndGrossDatas).then(res => {
        let data = res.result;
        let datas = [["product", "销售总额", "销售毛利润"]];
        console.log(data);
        data.map((item, index) => {
          datas.push([item.date, item.salesTotal, item.gross]);
        });
        this.datass5 = datas;
        this.flag5 = true;
      });
    },
    change5() {
      this.salesTotalAndGrossFun();
    }
  },
  created() {
    // bus.on("xxx", () => {});
    this.id = this.$route.query.id;
    let productbrandData = { brandId: this.id };
    productbrand(productbrandData).then(res => {
      this.productbrand = res.result;
    });
    agentAndLinkmanList(productbrandData).then(res => {
      this.agentAndLinkmanList = res.result;
    });
    tradeAndLinkmanList(productbrandData).then(res => {
      this.tradeAndLinkmanList = res.result;
    });
    let spectypedata = { brandId: this.id };
    spectype(spectypedata).then(res => {
      this.spectype = res.result;
    });
    relation(spectypedata).then(res => {
      this.relation = res.result;
    });
    let data = { brandId: this.id };

    enquiryAndOfferBuyerScale(data).then(res => {
      this.doughnuts.data[0].value = res.result.total.offerBuyerTotal;
      this.doughnuts.data[1].value = res.result.total.enquiryTotal;
      this.doughnut.data[0].value = res.result.itemNum.offerBuyerItemNum;
      this.doughnut.data[1].value = res.result.itemNum.enquiryItemNum;
      this.flag = true;
    });
    offerSalesAndDealScale(data).then(res => {
      this.doughnut1.data[0].value = res.result.itemNum.dealItemNum;
      this.doughnut1.data[1].value = res.result.itemNum.offerSalesItemNum;
      this.doughnut2.data[0].value = res.result.total.dealTotal;
      this.doughnut2.data[1].value = res.result.total.offerSalesTotal;
      this.flags = true;
    });
    // 销售询价
    this.xsfun();
    // 销售报价成交线
    this.offerSalesAndDealItemNumFun();
    // 成交金额
    this.dealTotalFun();
    // 销售利润
    this.salesGrossFun();
    // 销售利润/毛利润
    this.salesTotalAndGrossFun();
  },
  mounted() {
    this.restaurants = this.loadAll();
  }
};
</script>

<style lang='scss' scoped>
.el-input {
  width: auto;
}

.top-label {
  margin-bottom: 10px;
  text-align: left;
  display: flex;
}

.label-left {
  padding-right: 10px;
}

.label-left p {
  padding: 0 4px;
  margin: 0;
  height: 25px;
  line-height: 25px;
}

.main-box {
  display: flex;
  width: 1520px;
  justify-content: space-between;

  .left-part {
    width: 1030px;

    .brand-basis {
      display: flex;
      margin-top: 34px;
      margin-bottom: 40px;

      .el-col {
        height: 20px;
        line-height: 20px;
      }

      .green-i {
        color: $theme-color;
        padding-right: 10px;
        font-weight: 700;
      }
    }
  }
  .right-part {
    width: 425px;
  }

  .no-border-wrap {
    margin-bottom: 40px;
  }

  .row-title {
    border-bottom: 1px solid $theme-color;
    padding: 10px 10px 0;
    height: 23px;
    line-height: 23px;
    color: $theme-color;
    font-weight: 700;
  }
  .row-cont {
    display: flex;
    flex-wrap: wrap;

    p {
      width: 25%;
      padding: 5px 10px 0;
      box-sizing: border-box;
    }
  }

  .row-brand {
    display: flex;
    flex-wrap: wrap;

    > div {
      padding: 5px 0 15px;
    }

    .mother-brand {
      width: 50%;
      margin-right: 50%;
    }
    .children-brand {
      width: 50%;
    }
  }
}
</style>