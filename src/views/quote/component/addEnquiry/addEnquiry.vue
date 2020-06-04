<template>
  <div>
    <!-- 新增询价 -->
    <!-- 弹窗表格 -->
    <div class="tan-box add-box">
      <div class="xiala-tops">
        <div class="xiala-hedaer">
          <div style="display:flex">
            <span>客户名称：</span>
            <el-select @click.native="kh" size="mini" v-model="value1" placeholder>
              <el-option
                v-for="item in client"
                :key="item.id"
                :label="item.chineseName"
                :value="item.id"
              ></el-option>
            </el-select>
          </div>
          <div style="display:flex">
            <span>采购员：</span>
            <el-select size="mini" v-model="value2" placeholder>
              <el-option
                v-for="item in selectData"
                :key="item.id"
                :label="item.realName"
                :value="item.id"
              ></el-option>
            </el-select>
          </div>
          <div style="display:flex">
            <span>客户联系人：</span>
            <el-input size="mini" placeholder="请输入内容" v-model="value3"></el-input>
          </div>
          <div style="display:flex">
            <span>公司：</span>
            <el-input size="mini" placeholder="请输入内容" v-model="value3s"></el-input>
          </div>
          <div style="display:flex">
            <span>销售员：</span>
            <el-input size="mini" placeholder="请输入内容" v-model="value3ss"></el-input>
          </div>
        </div>
        <el-table
          border
          size="mini"
          show-header
          :resizable="false"
          ref="filterTable"
          :data="tableData"
          style="width: 100%"
        >
          <el-table-column algin="center" type="index" label="Ln." :resizable="false" width="40"></el-table-column>
          <el-table-column
            :resizable="false"
            sortable
            prop="name"
            label="进程"
            width="80"
            algin="center"
            @click="s(row)"
          >
            <template>
              <el-select size="mini" v-model="value4" clearable placeholder>
                <el-option
                  v-for="item in enquiryCourse"
                  :key="item.attrKey"
                  :label="item.attrName"
                  :value="item.attrKey"
                  size="mini"
                ></el-option>
              </el-select>
              <!-- <span v-if="hidee">{{ scope.row.date }}</span> -->
              <!-- <el-input size="mini" v-else placeholder="请输入内容" v-model="scope.row.date"></el-input> -->
            </template>
          </el-table-column>
          <el-table-column
            algin="center"
            prop="name"
            label="结果"
            sortable
            :resizable="false"
            width="80"
          >
            <template scope="scope">
              <span v-if="hidee">{{ scope.row.result }}</span>
              <el-input size="mini" v-else placeholder="请输入内容" v-model="scope.row.result"></el-input>
            </template>
          </el-table-column>
          <el-table-column
            algin="center"
            sortable
            :resizable="false"
            prop="date"
            label="日期"
            width="100"
          >
            <template scope="scope">
              <span v-if="hidee">{{ scope.row.date }}</span>
              <el-input size="mini" v-else placeholder="请输入内容" v-model="scope.row.date"></el-input>
            </template>
          </el-table-column>
          <el-table-column
            algin="center"
            sortable
            :resizable="false"
            prop="date"
            label="询价单号"
            width="100"
          >
            <template scope="scope">
              <span v-if="hidee" style="color:blue;">
                {{
                scope.row.number
                }}
              </span>
              <el-input size="mini" v-else placeholder="请输入内容" v-model="scope.row.number"></el-input>
            </template>
          </el-table-column>

          <el-table-column algin="center" :resizable="false" prop="name" label="优先级" width="74">
            <template>
              <!-- <span v-if="hidee">{{ scope.row.date }}</span> -->
              <!-- <el-input size="mini" v-else placeholder="请输入内容" v-model="scope.row.date"></el-input> -->
              <el-select size="mini" v-model="value5" clearable placeholder>
                <el-option
                  v-for="item in enquiryPriority"
                  :key="item.attrKey"
                  :label="item.attrName"
                  size="mini"
                  :value="item.attrKey"
                ></el-option>
              </el-select>
            </template>
          </el-table-column>

          <el-table-column sortable :resizable="false" prop="date" label="品牌" width="90">
            <template>
              <el-select size="mini" v-model="value6" clearable placeholder>
                <el-option
                  v-for="item in brand"
                  :key="item.id"
                  size="mini"
                  :label="item.name"
                  :value="item.id"
                ></el-option>
              </el-select>
              <!-- <span v-if="hidee">{{ scope.row.brandName }}</span>
              <el-input size="mini" v-else placeholder="请输入内容" v-model="scope.row.brandName"></el-input>-->
            </template>
          </el-table-column>
          <el-table-column sortable :resizable="false" prop="date" label="客户型号" width="180">
            <template scope="scope">
              <span v-if="hidee">{{ scope.row.clientModel }}</span>
              <el-input size="mini" v-else placeholder="请输入内容" v-model="scope.row.clientModel"></el-input>
            </template>
          </el-table-column>
          <el-table-column
            sortable
            :resizable="false"
            algin="center"
            prop="name"
            label="询价数量"
            width="110"
          >
            <template scope="scope">
              <span v-if="hidee">{{ scope.row.enquiryNum }}</span>
              <el-input size="mini" v-else placeholder="请输入内容" v-model="scope.row.enquiryNum"></el-input>
            </template>
          </el-table-column>

          <el-table-column sortable :resizable="false" prop="name" label="货期要求" width="110">
            <div class style="text-align:center">
              <el-select size="mini" v-model="value7" clearable placeholder>
                <el-option
                  v-for="item in enquiryDeliveryRequire"
                  :key="item.id"
                  size="mini"
                  :label="item.attrName"
                  :value="item.id"
                ></el-option>
              </el-select>
            </div>
          </el-table-column>
          <el-table-column sortable :resizable="false" prop="name" label="批号要求" width="110">
            <template scope="scope">
              <span v-if="hidee" style=" font-weight: 800;">{{ scope.row.batchNumberRequire }}</span>
              <el-input
                size="mini"
                v-else
                placeholder="请输入内容"
                v-model="scope.row.batchNumberRequire"
              ></el-input>
            </template>
          </el-table-column>
          <el-table-column
            sortable
            :resizable="false"
            align="right"
            prop="name"
            label="税率"
            width="80"
          >
            <template>
              <div class style="text-align:center">
                <el-select size="mini" v-model="value8">
                  <el-option
                    v-for="item in taxRate"
                    :key="item.id"
                    :label="item.attrName"
                    :value="item.id"
                  ></el-option>
                </el-select>
              </div>
            </template>
          </el-table-column>
          <el-table-column
            sortable
            align="right"
            :resizable="false"
            prop="name"
            label="接受价"
            width="90"
          >
            <template scope="scope">
              <span v-if="hidee">{{ scope.row.acceptPrice }}</span>
              <el-input size="mini" v-else placeholder="请输入内容" v-model="scope.row.acceptPrice"></el-input>
            </template>
          </el-table-column>
          <!-- <el-table-column
            align="center"
            sortable
            :resizable="false"
            prop="name"
            label="公司"
            width="105"
          >
            <template scope="scope">
              <span v-if="hidee">{{ scope.row.salesmanComName }}</span>
              <el-input size="mini" v-else placeholder="请输入内容" v-model="scope.row.salesmanComName"></el-input>
            </template>
          </el-table-column>-->
          <!-- <el-table-column
            align="center"
            sortable
            :resizable="false"
            prop="name"
            label="销售员"
            width="102"
          >
            <template scope="scope">
              <span v-if="hidee">{{ scope.row.salesmanName }}</span>
              <el-input size="mini" v-else placeholder="请输入内容" v-model="scope.row.salesmanName"></el-input>
            </template>
          </el-table-column>-->
          <el-table-column sortable :resizable="false" prop="name" label="销售备注" width>
            <template scope="scope">
              <span v-if="hidee">{{ scope.row.salesmanRemarks }}</span>
              <el-input size="mini" v-else placeholder="请输入内容" v-model="scope.row.salesmanRemarks"></el-input>
            </template>
          </el-table-column>
        </el-table>
        <div class="btn-flex" v-if="addtd">
          <div class="btn-img" @click="addtable">
            <i class="el-icon-plus"></i>
          </div>
          <div class="btt-btns">
            <el-button type="success" @click="hold" size="mini">保存</el-button>
            <el-button type="primary" @click="modi" size="mini">修改</el-button>
            <el-button type="info" size="mini" @click="rem">清空</el-button>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="batch">
      <el-button type="primary" size="mini">批量录入</el-button>
      <el-table :data="tableData" size="mini" border style="width: 100%">
        <el-table-column prop="date" label="客户型号" header-align="center" width="220">
          <template slot-scope="scope">
            <div v-if="scope.$index === 0" style="text-align:center;">< ></div>
            <span v-else style="color:rgb(65,195,99);">{{ scope.row.name }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="name" label="品牌" align="center" width="90">
          <template slot-scope="scope">
            <div v-if="scope.$index === 0" style="text-align:center;">< ></div>
            <span v-else style="color:blue;">{{ scope.row.name }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="name" label="数量" align="center" width="95">
          <template slot-scope="scope">
            <div v-if="scope.$index === 0" style="text-align:center;">< ></div>
            <span v-else>{{ scope.row.name }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="name" label="期货要求" align="center" width="120">
          <template slot-scope="scope">
            <div v-if="scope.$index === 0" style="text-align:center;">< ></div>
            <span v-else>{{ scope.row.name }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="name" label="批次要求" align="center" width="100">
          <template slot-scope="scope">
            <div v-if="scope.$index === 0" style="text-align:center;">< ></div>
            <span v-else>{{ scope.row.name }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="name" label="客户接受价" align="center" width="100">
          <template slot-scope="scope">
            <div v-if="scope.$index === 0" style="text-align:center;">< ></div>
            <span v-else>{{ scope.row.name }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="name" label="销售备注" align="center" width="190">
          <template slot-scope="scope">
            <div v-if="scope.$index === 0" style="text-align:center;">< ></div>
            <span v-else>{{ scope.row.name }}</span>
          </template>
        </el-table-column>
      </el-table>
      <el-button type="success" size="mini" @click="subm">提交</el-button>
    </div>-->
  </div>
</template>
<script>
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
} from "@/api/enquiry";

import { selectData } from "@/api/stock";
import { bulkInsert, pushEntity } from "@/api/quote";
import {
  financialAccount,
  accountDetails,
  currencyCode,
  taxRate,
  bank,
  currencyExchangeRateList
} from "@/api/finance";
export default {
  data() {
    return {
      hidee: true,
      counter: 0,
      row: [],
      value: "",
      options: [],
      client: [],
      value1: "",
      value2: "",
      value3: "",
      value3s: "",
      value3ss: "",
      value4: "",
      value5: "",
      value6: "",
      value7: "",
      value8: "",
      tableData: [
        {
          number: "",
          course: "",
          result: "",
          data: "",
          priority: "",
          brandId: "",
          brandName: "",
          clientModel: "",
          enquiryNum: "",
          deliveryRequire: "",
          batchNumberRequire: "",
          acceptPrice: "",
          currency: "",
          taxRate: "",
          salesmanRemarks: ""
        }
      ],
      addtd: true,
      selectData: [],
      taxRate: [],
      enquiryCourse: [],
      enquiryPriority: [],
      enquiryDeliveryRequire: [],
      brand: []
    };
  },
  created() {
    // this.dialogTableVisible = this.dialogTableVisible
    // this.tableData = this.tableData;
    // this.addtd = this.addtd;
    selectData().then(res => {
      this.selectData = res.result;
    });
    // 税率
    taxRate().then(res => {
      this.taxRate = res.result;
    });
    // 进程
    enquiryCourse().then(res => {
      this.enquiryCourse = res.result;
    });
    // 优先级
    enquiryPriority().then(res => {
      this.enquiryPriority = res.result;
    });
    // 货期要求
    enquiryDeliveryRequire().then(res => {
      this.enquiryDeliveryRequire = res.result;
    });
    // 品牌
    brand().then(res => {
      this.brand = res.result;
    });
  },
  methods: {
    // 添加一行
    addtable() {
      let row = {
        number: "",
        course: "",
        result: "",
        data: "",
        priority: "",
        brandId: "",
        brandName: "",
        clientModel: "",
        enquiryNum: "",
        deliveryRequire: "",
        batchNumberRequire: "",
        acceptPrice: "",
        currency: "",
        taxRate: "",
        salesmanRemarks: ""
      };
      this.tableData.push(row);
      // 记录一下添加的行数 从0开始
      this.counter += 1;
    },
    // 清空
    rem() {
      // this.tableData1.pop();
      this.tableData = [];
      // 清空完 添加一个空的数组
      let row = {
        number: "",
        course: "",
        result: "",
        data: "",
        priority: "",
        brandId: "",
        brandName: "",
        clientModel: "",
        enquiryNum: "",
        deliveryRequire: "",
        batchNumberRequire: "",
        acceptPrice: "",
        currency: "",
        taxRate: "",
        salesmanRemarks: ""
      };
      this.tableData.push(row);
      this.$emit("fnc", this.tableData);
      // 计数器也清空为0
      this.counter = 0;
    },

    // 修改
    modi() {
      this.hidee = !this.hidee;
    },
    // 保存
    hold() {
      this.hidee = true;
      // 新增
      let data = {
        clientId: this.value1,
        buyerId: this.value2,
        clientContactName: this.value3,
        salesmanComName: this.value3s,
        salesmanName: this.value3ss,
        enquiryVos: this.tableData
      };
      console.log(data);
      bulkInsert(data).then(res => {});
    },
    // 客户
    kh() {
      if (this.client == "") {
        client().then(res => {
          this.client = res.result;
        });
      }
    }
  }
};
</script>
<style scoped src="../../../enquiry/unfinished/index.css">
</style>