<template>
  <!-- 报价-询价中 -->
  <div class="cont addEn">
    <!-- 顶部 部分 -->
    <div class="cont-top">
      <div class="inquery-searching">
        <div class="sear-box">
          <div class="sear-by" style="width:80px;">
            <div class="sear-top">进程</div>
            <div class="sear-btt">
              <el-select size="mini" @click.native="jinc" v-model="value" clearable placeholder>
                <el-option
                  :clearable="whit"
                  v-for="item in enquiryCourse"
                  :key="item.attrKey"
                  :label="item.attrName"
                  :value="item.attrKey"
                  size="mini"
                ></el-option>
              </el-select>
            </div>
          </div>
          <div class="sear-by" style="width:80px;">
            <div class="sear-top">优先级</div>
            <div class="sear-btt">
              <el-select size="mini" @click.native="yxj" v-model="value1" clearable placeholder>
                <el-option
                  :clearable="whit"
                  v-for="item in enquiryPriority"
                  :key="item.attrKey"
                  :label="item.attrName"
                  size="mini"
                  :value="item.attrKey"
                ></el-option>
              </el-select>
            </div>
          </div>
          <div class="sear-by" style="width:170px;">
            <div class="sear-top" style="text-align:left;margin-left:5px;">客户型号</div>
            <div class="sear-btt">
              <el-input v-model="input" size="mini" placeholder="请输入内容"></el-input>
            </div>
          </div>
          <div class="sear-by" style="width:80px;">
            <div class="sear-top" style="text-align:left;margin-left:5px;">品牌</div>
            <div class="sear-btt">
              <el-select size="mini" @click.native="pp" v-model="value2" clearable placeholder>
                <el-option
                  :clearable="whit"
                  v-for="item in brand"
                  :key="item.id"
                  size="mini"
                  :label="item.name"
                  :value="item.id"
                ></el-option>
              </el-select>
            </div>
          </div>
          <div class="sear-by" style="width:80px;">
            <div class="sear-top">货期要求</div>
            <div class="sear-btt">
              <el-select size="mini" @click.native="hq" v-model="value3" clearable placeholder>
                <el-option
                  :clearable="whit"
                  v-for="item in enquiryDeliveryRequire"
                  :key="item.id"
                  size="mini"
                  :label="item.attrName"
                  :value="item.id"
                ></el-option>
              </el-select>
            </div>
          </div>
          <div class="sear-by" style="width:190px;">
            <div class="sear-top">客户名称</div>
            <div class="sear-btt">
              <el-select @click.native="kh" size="mini" v-model="value4" placeholder>
                <el-option
                  v-for="item in client"
                  :key="item.id"
                  :label="item.chineseName"
                  :value="item.id"
                ></el-option>
              </el-select>
            </div>
          </div>
          <div class="sear-by" style="width:80px;">
            <div class="sear-top">联系人</div>
            <div class="sear-btt">
              <el-input v-model="input1" size="mini" placeholder="请输入内容"></el-input>
            </div>
          </div>
          <div class="sear-by" style="width:60px;">
            <div class="sear-top">结果</div>
            <div class="sear-btt">
              <el-input v-model="input2" size="mini" placeholder="请输入内容"></el-input>
            </div>
          </div>
        </div>
      </div>
      <div class="btn">
        <el-button type="success" size="mini" @click="search">检索</el-button>
        <el-button type="info" @click="btn()" size="mini">清空</el-button>
        <el-button type="primary" size="mini" @click="f5()">刷新</el-button>
      </div>
    </div>
    <div class="un-conter" v-for="item in tableData" :key="item.date">
      <div class="table-header">
        <div class="he-left">
          <span class="header-left">AC0032</span>
          <i>
            <el-tooltip class="item" effect="dark" content="复制" placement="bottom">
              <i class="icon copy iconfont" @click.stop="copyCode()">&#xe603;</i>
            </el-tooltip>
          </i>
        </div>
        <div>
          <span class="item">2019-09-02</span>
          <span class="header-right">LINK APAC - MICHAEL JIAO</span>
        </div>
      </div>
      <!-- <conter @ditch="getDitch" :ditch="ditch" :tableData="item.enquiryModels" :show="show"></conter> -->
      <conter
        @ditch="getDitch"
        @offer="getOffer"
        :ditch="ditch"
        :tableData="item.enquiryModels"
        :result="result"
        :show="show"
        @all="all"
      ></conter>
      <el-button
        v-if="unfinished"
        type="info"
        size="mini"
        @click.stop="dialogTableVisible = true"
      >催 促</el-button>
      <el-button type="primary" size="mini" @click.stop="dialogTableVisible1(item)">去报价</el-button>
    </div>
    <el-dialog title="新增客户询价单" :visible.sync="dialogTableVisible">
      <addEnquiry :tableData="tableData" :addtd="addtd"></addEnquiry>
    </el-dialog>
    <div class="toQuote">
      <el-dialog width="1400px" title="编辑报价单" :visible.sync="dialogTableVisibles">
        <toQuote :enquiryWithOfferBuyerModels="enquiryWithOfferBuyerModels"></toQuote>
      </el-dialog>
    </div>
  </div>
</template>

<script>
// import conter from "../component/conter/index";
import conter from "../../enquiry/component/conter/index";
import addEnquiry from "../component/addEnquiry/addEnquiry";
import toQuote from "../component/toQuote/toQuote";
import {
  unlist,
  specType,
  historyOffer,
  achieveEnquiry,
  enquiryCourse,
  enquiryPriority,
  enquiryDeliveryRequire,
  brand,
  client
} from "../../../api/enquiry";
import { pushEntity } from "../../../api/quote";
export default {
  data() {
    return {
      // 下拉数据
      result: [],
      show: true,
      ditch: [],
      tableData2: [],
      whit: true,
      enquiryCourse: [],
      enquiryPriority: [],
      enquiryDeliveryRequire: [],
      client: [],
      brand: [],
      input: "",
      input1: "",
      input2: "",
      value: "",
      value1: "",
      value2: "",
      value3: "",
      value4: "",
      ditch: [],
      result: [],
      addtd: true,
      show: false,
      tableData2: [],
      whit: true,
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      tableData: [],
      show: true,
      dialogTableVisible: false,
      dialogTableVisibles: false,
      dialogFormVisible: false,
      unfinished: 0,
      enquiryWithOfferBuyerModels: [],
      course: -2,
      enquiryId: null,
      clientModel: null
    };
  },
  components: {
    conter,
    addEnquiry,
    toQuote
  },
  methods: {
    // 头部清空选中
    btn() {
      this.delete(["value", "value1", "value2", "value3", "input", "value4"]);
    },
    f5() {
      location.reload();
    },
    // 复制
    copyCode(scope) {
      this.copy(scope.row.date);
    },
    // 请求列表数据
    search() {
      // 页数，个数，进程，
      let params = {
        pageNumber: 1,
        pageSize: 23,
        filterCourse: this.value,
        priority: this.value1,
        clientModel: this.input,
        brandId: this.value2,
        deliveryRequire: this.value3,
        clientId: this.value4,
        clientContactName: this.input1,
        result: this.input2,
        course: this.course
      };
      // console.log(params);
      unlist(params).then(res => {
        this.tableData = res.result.list;
        console.log(this.tableData);
      });
    },
    getDitch(data) {
      let tex = { clientModel: data };
      specType(tex).then(res => {
        this.ditch = res.result;
      });
    },
    all() {
      let datas = {
        enquiryId: this.enquiryId,
        clientModel: this.clientModel,
        pageSize: 100
      };
      historyOffer(datas).then(res => {
        this.result = res.result;
      });
    },
    // 获取询价单id 和 客户型号 查询询价单报价和历史报价
    getOffer(data, data1) {
      let datas = { enquiryId: data, clientModel: data1 };
      this.enquiryId = data;
      this.clientModel = data1;
      // console.log(datas)
      historyOffer(datas).then(res => {
        // console.log(res);
        this.result = res.result;
      });
    },
    // 进程
    jinc() {
      if (this.enquiryCourse == "") {
        enquiryCourse().then(res => {
          this.enquiryCourse = res.result;
        });
      }
    },
    //  优先级
    yxj() {
      if (this.enquiryPriority == "") {
        enquiryPriority().then(res => {
          this.enquiryPriority = res.result;
          // console.log(res.result);
        });
      }
    },
    // 货期要求
    hq() {
      if (this.enquiryDeliveryRequire == "") {
        enquiryDeliveryRequire().then(res => {
          this.enquiryDeliveryRequire = res.result;
          // console.log(res.result);
        });
      }
    },
    // 品牌
    pp() {
      if (this.brand == "") {
        brand().then(res => {
          this.brand = res.result;
          // console.log(this.brand);
        });
      }
    },
    // 客户
    kh() {
      if (this.client == "") {
        client().then(res => {
          this.client = res.result;
          // console.log(this.client);
        });
      }
    },
    // 去报价
    dialogTableVisible1(val) {
      this.dialogTableVisibles = true;
      console.log(val.id);
      let id = { enquiryGroupId: val.id };
      pushEntity(id).then(res => {
        this.enquiryWithOfferBuyerModels = res.result;
      });
    }
  },
  created() {
    // 路由判断
    if (this.$route.path == "/quote/index") {
      this.unfinished = true;
      this.course = -2;
      this.search();
    } else if (this.$route.path == "/quote/indexs") {
      this.unfinished = false;
      this.course = -1;
      this.search();
    }
  },
  watch: {
    $route(to, from) {
      // 路由发生改变重新获取数据
      if (to.path == "/quote/index") {
        this.unfinished = true;
        this.course = -2;
        this.search();
      } else if (to.path == "/quote/indexs") {
        this.unfinished = false;
        this.course = -1;
        this.search();
      }
    }
  }
};
</script>

<style scoped src="./inquery.css"></style>
