<template>
  <!-- 询价-未完成 -->
  <div class="cont">
    <!-- 顶部 部分 -->
    <div class="cont-top">
      <template>
        <el-table :data="tableData2" border size="mini">
          <el-table-column :resizable="false" prop="date" label="进程" width="80"></el-table-column>
          <template slot="empty">
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

            <div style="width:290px;">
              <el-input size="mini" :clearable="whit" placeholder v-model="input"></el-input>
            </div>

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
          </template>
          <el-table-column :resizable="false" prop="name" label="优先级" width="75"></el-table-column>
          <el-table-column
            :resizable="false"
            prop="name"
            label="客户型号"
            width="160"
            style="text-align:left;"
          ></el-table-column>
          <el-table-column :resizable="false" prop="name" label="品牌" width="75"></el-table-column>
          <el-table-column :resizable="false" prop="name" label="期货要求" width="75"></el-table-column>
        </el-table>
      </template>
      <div class="btn">
        <el-button type="success" size="mini" @click="search">检索</el-button>
        <el-button type="info" @click="btn()" size="mini">清空</el-button>
        <el-button type="primary" size="mini" @click="f5()">刷新</el-button>
      </div>
    </div>
    <div class="un-conter" v-for="(item,index) in tableData" :key="index">
      <div class="table-header">
        <div class="he-left">
          <span class="header-left">{{item.clientName}}</span>
          <span class="item">2019-09-02</span>
        </div>
        <span class="header-right">LINK APAC - MICHAEL JIAO</span>
      </div>
      <conter
        @ditch="getDitch"
        @offer="getOffer"
        :ditch="ditch"
        :tableData="item.enquiryModels"
        :result="result"
        :show="show"
        @all="all"
      ></conter>
      <el-button type="info" size="mini" @click="finsh(item.id)">完 成</el-button>
      <el-button v-if="unfinished" type="warning" size="mini" @click="wait(item.id)">待回复</el-button>
    </div>
  </div>
</template>

<script>
import conter from "../component/conter/index";
import {
  unlist,
  specType,
  historyOffer,
  achieveEnquiry,
  enquiryCourse,
  enquiryPriority,
  enquiryDeliveryRequire,
  brand,
  turnReplyEnquiryGroup
} from "../../../api/enquiry";
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
      brand: [],
      input: "",
      value: "",
      value1: "",
      value2: "",
      value3: "",
      tableData: [],
      enquiryId: "",
      turnReplyEnquiryGroup: [],
      course: 0,
      enquiryId: null,
      clientModel: null
    };
  },
  components: {
    conter
  },
  methods: {
    // 头部清空选中
    btn() {
      this.delete(["value", "value1", "value2", "value3", "input"]);
    },
    f5() {
      location.reload();
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
    // 请求列表数据
    search() {
      // 页数，个数，进程，
      let params = {
        // pageNumber: 1,
        // pageSize: 3,
        filterCourse: this.value,
        priority: this.value1,
        clientModel: this.input,
        brandId: this.value2,
        deliveryRequire: this.value3,
        course: this.course
      };
      console.log(params);
      unlist(params).then(res => {
        this.tableData = res.result.list;
        console.log(this.tableData);
      });
    },
    // 获取客户型号
    getDitch(data) {
      let tex = { clientModel: data };
      //  根据客户型号，查询增值渠道
      specType(tex).then(res => {
        this.ditch = res.result;
      });
    },

    // 获取询价单id 和 客户型号 查询询价单报价和历史报价
    getOffer(data, data1) {
      this.enquiryId = data;
      this.clientModel = data1;
      let datas = { enquiryId: data, clientModel: data1 };
      historyOffer(datas).then(res => {
        this.result = res.result;
      });
    },

    // 完成
    finsh(val) {
      let id = { enquiryGroupId: val };
      achieveEnquiry(id).then(res => {
        this.search();
      });
    },
    // 待回复
    wait(val) {
      let id = { enquiryGroupId: val };
      turnReplyEnquiryGroup(id).then(res => {
        this.search();
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
        });
      }
    },
    // 货期要求
    hq() {
      if (this.enquiryDeliveryRequire == "") {
        enquiryDeliveryRequire().then(res => {
          this.enquiryDeliveryRequire = res.result;
        });
      }
    },
    // 品牌
    pp() {
      if (this.brand == "") {
        brand().then(res => {
          this.brand = res.result;
        });
      }
    }
  },
  created() {
    this.search();
    if (this.$route.path == "/enquiry/unfinished") {
      this.unfinished = true;
      this.course = 1;
      console.log("unfinished");
      this.search();
    } else if (this.$route.path == "/enquiry/dfinished") {
      this.unfinished = false;
      this.course = 0;
      console.log("dfinished");
      this.search();
    }
  },
  watch: {
    $route(to, from) {
      if (to.path == "/enquiry/unfinished") {
        this.unfinished = true;
        this.course = 1;
        console.log("unfinished");
        this.search();
      } else if (to.path == "/enquiry/dfinished") {
        this.unfinished = false;
        this.course = 0;
        console.log("dfinished");
        this.search();
      }
    }
  }
};
</script>

<style scoped src="./index.css"></style>
