<template>
  <!-- 询价-已完成 -->

  <div>
    <!-- 已经完成 头部 -->
    <div class="jiansuo">
      <div class="jiansuo-seek">
        <div class="seek-box">
          <div class="seek-top">
            <div class="seek-left">原厂型号</div>
            <div class="seek-right">日期</div>
          </div>
          <div class="seek-btt">
            <div class="input-left">
              <el-input clearable v-model="input" placeholder></el-input>
            </div>
            <div class="input-right">
              <el-date-picker
                v-model="value2"
                align="right"
                size="mini"
                type="date"
                placeholder="选择日期"
                 value-format="yyyy-MM-dd"
                :picker-options="pickerOptions"
              ></el-date-picker>
            </div>
          </div>
        </div>
        <div class="btt-btns">
          <el-button type="success" size="mini" @click="sear">检索</el-button>
          <el-button type="primary" size="mini" @click="f5()">刷新</el-button>
        </div>
      </div>
      <!-- 内容区域 -->
      <el-button type="success" size="mini">授权代理商</el-button>
          
      <div class="for-box" v-for="item in tableData" :key="item.id">
        <div class="table-header">
          <div class="he-left">
            <span class="header-max">{{item.number}}</span>
            <span class="header-left">{{item.clientCode}}</span>
            <span class="item">{{item.data}}</span>
          </div>
          <span class="header-right">{{item.salesmanComName}} - {{item.salesmanName}}</span>
        </div>
        <el-table
          border
          size="mini"
          show-header
          :resizable="false"
          ref="filterTable"
          :data="item.buyerModels"
          :highlight-current-row="bc"
          style="width: 100%"
        >
          <el-table-column type="index" label="Ln." :resizable="false" width="40"></el-table-column>
          <el-table-column
            :resizable="false"
            sortable
            align="center"
            prop="date"
            label="日期"
            width="100"
            @click="s(row)"
          >
            <template scope="scope">
              <span v-if="hidee" >{{ scope.row.date }}</span>
              <el-input size="mini" v-else placeholder="请输入内容" v-model="scope.row.date"></el-input>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            prop="number"
            label="采购报价单号"
            sortable
            :resizable="false"
            width="120"
          >
            <template scope="scope">
              <span v-if="hidee" style="color:blue;">{{ scope.row.number }}</span>
              <el-input size="mini" v-else placeholder="请输入内容" v-model="scope.row.number"></el-input>
            </template>
          </el-table-column>
          <el-table-column sortable :resizable="false" prop="clientModel" label="客户型号" width="165">
            <template scope="scope">
              <span v-if="hidee" style="color:rgb(65,195,99);">
                {{
                scope.row.clientModel
                }}
              </span>
              <el-input size="mini" v-else placeholder="请输入内容" v-model="scope.row.clientModel"></el-input>
            </template>
          </el-table-column>

          <el-table-column sortable :resizable="false" prop="originalModel" label="原厂型号" width="185">
             <template scope="scope">
              <span v-if="hidee" >{{ scope.row.originalModel }}</span>
              <el-input size="mini" v-else placeholder="请输入内容" v-model="scope.row.originalModel"></el-input>
            </template>
          </el-table-column>

          <el-table-column
            sortable
            header-align="center"
            align="right"
            :resizable="false"
            prop="enquiryNum"
            label="询价数量"
            width="110"
          >
           <template scope="scope">
              <span v-if="hidee" >{{ scope.row.enquiryNum }}</span>
              <el-input size="mini" v-else placeholder="请输入内容" v-model="scope.row.enquiryNum"></el-input>
            </template>
          </el-table-column>
          <el-table-column
            sortable
            header-align="center"
            align="right"
            :resizable="false"
            prop="offerNum"
            label="报价数量"
            width="110"
          >
           <template scope="scope">
              <span v-if="hidee" >{{ scope.row.offerNum }}</span>
              <el-input size="mini" v-else placeholder="请输入内容" v-model="scope.row.offerNum"></el-input>
            </template>
          </el-table-column>
          <el-table-column
            sortable
            align="center"
            :resizable="false"
            prop="batchNumberRequire"
            label="批号"
            width="80"
          >
           <template scope="scope">
              <span v-if="hidee" >{{ scope.row.batchNumberRequire }}</span>
              <el-input size="mini" v-else placeholder="请输入内容" v-model="scope.row.batchNumberRequire"></el-input>
            </template>
          </el-table-column>

          <el-table-column
            sortable
            align="center"
            :resizable="false"
            prop="currencyValue"
            label="币别"
            width="80"
          >
           <template scope="scope">
              <span v-if="hidee" >{{ scope.row.currencyValue }}</span>
              <el-input size="mini" v-else placeholder="请输入内容" v-model="scope.row.currencyValue"></el-input>
            </template>
          </el-table-column>
          <el-table-column
            sortable
            align="center"
            :resizable="false"
            prop="price"
            label="单价"
            width="80"
          >
           <template scope="scope">
              <span v-if="hidee" >{{ scope.row.price }}</span>
              <el-input size="mini" v-else placeholder="请输入内容" v-model="scope.row.price"></el-input>
            </template>
          </el-table-column>
          <el-table-column align="center" :resizable="false" prop="taxRateValue" label="税率" width="80">
             <template scope="scope">
              <span v-if="hidee" >{{ scope.row.taxRateValue }}</span>
              <el-input size="mini" v-else placeholder="请输入内容" v-model="scope.row.taxRateValue"></el-input>
            </template>
          </el-table-column>
          <el-table-column
            sortable
            align="center"
            :resizable="false"
            prop="spq"
            label="SPQ"
            width="80"
          >
           <template scope="scope">
              <span v-if="hidee" >{{ scope.row.spq }}</span>
              <el-input size="mini" v-else placeholder="请输入内容" v-model="scope.row.spq"></el-input>
            </template>
          </el-table-column>
          <el-table-column
            sortable
            align="center"
            :resizable="false"
            prop="moq"
            label="MOQ"
            width="80"
          >
           <template scope="scope">
              <span v-if="hidee" >{{ scope.row.moq }}</span>
              <el-input size="mini" v-else placeholder="请输入内容" v-model="scope.row.moq"></el-input>
            </template>
          </el-table-column>
          <el-table-column
            sortable
            align="center"
            :resizable="false"
            prop="supName"
            label="供应商"
            width="145"
          >
           <template scope="scope">
              <span v-if="hidee" >{{ scope.row.supName }}</span>
              <el-input size="mini" v-else placeholder="请输入内容" v-model="scope.row.supName"></el-input>
            </template>
          </el-table-column>
          <el-table-column
            sortable
            align="center"
            :resizable="false"
            prop="buyerName"
            label="采购员"
            width="100"
          >
           <template scope="scope">
              <span v-if="hidee" >{{ scope.row.buyerName }}</span>
              <el-input size="mini" v-else placeholder="请输入内容" v-model="scope.row.buyerName"></el-input>
            </template>
          </el-table-column>
          <el-table-column sortable :resizable="false" prop="buyerRemarks" label="采购备注">

             <template scope="scope">
              <span v-if="hidee" >{{ scope.row.buyerRemarks }}</span>
              <el-input size="mini" v-else placeholder="请输入内容" v-model="scope.row.buyerRemarks"></el-input>
            </template>
          </el-table-column>
        </el-table>
        <div class="btt-btn">
          <el-button type="success" size="mini" @click="hold(item.buyerModels)">保存</el-button>
          <el-button type="primary" size="mini" @click="modi">修改</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {achieveEnquiryList,updateOfferBuyer} from '../../../api/enquiry'
export default {
  data() {
    return {
      datas:[],
      buyerModels:[],
      hidee: true,
      bc: true,
      input: "",
      value2: "",
      tableData: [],
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [
          {
            text: "今天",
            onClick(picker) {
              picker.$emit("pick", new Date());
            }
          },
          {
            text: "昨天",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit("pick", date);
            }
          },
          {
            text: "一周前",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
            }
          }
        ]
      }
    };
  },
  methods: {
    f5() {
      location.reload();
    },
    // 修改
    modi() {
      this.hidee = !this.hidee;
      console.log(this.datas)
    },
    // 保存
    hold(ev) {
      this.hidee = true;
      let data = ev
      console.log(ev)
      updateOfferBuyer(data).then(res =>{
        console.log(res)
      })
    },
    // 检索
    sear(){
      let data = {
        originalModel:this.input,
        data:this.value2,
      }
      achieveEnquiryList(data).then(res =>{
        this.tableData = res.result.list
        console.log(this.tableData)
        // this.buyerModels = res.result
      })
    }
  },
  created(){
    this.sear()
  }
};
</script>
<style scoped src="./index.css">
</style>
