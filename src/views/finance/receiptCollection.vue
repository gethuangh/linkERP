<template>
  <div class="finance">
    <div>
      <div style="display: flex;align-items: flex-end;">
        <div class="el-button--mini el-button title" style="background: #3366FF">收款汇总</div>
        <el-button size="mini" class="search" @click="search">检索</el-button>
        <el-date-picker
          size="mini"
          v-model="valuess"
          value-format="yyyy-MM-dd"
          type="daterange"
          range-separator="至"
          start-placeholder="起始日期"
          end-placeholder="终止日期"
        ></el-date-picker>
      </div>

      <div style="width: 1550px;padding-top:10px;">
        <el-table border size="mini" :data="collectionGatherList.list" style="width: 100%">
          <el-table-column align="center" label="序号" width="45">
            <template slot-scope="scope">
              <span v-if="scope.$index == 0">No.</span>
              <span v-if="scope.$index != 0">{{ scope.$index }}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" label="客户代码" width="140">
            <template slot-scope="scope">
              <el-select v-if="scope.$index == 0" size="mini" v-model="value1" placeholder=" ">
                <el-option
                  v-for="item in codeDropDown"
                  :key="item.value"
                  :label="item.clientCode"
                  :value="item.clientCode"
                ></el-option>
              </el-select>
              <span v-if="scope.$index != 0" class="blue-decoration">{{ scope.row.clientCode }}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" width="260" label="客户名称">
            <template slot-scope="scope">
              <el-select v-if="scope.$index == 0" size="mini" v-model="value2" placeholder=" ">
                <el-option
                  v-for="item in customerPullDown"
                  :key="item.value"
                  :label="item.clientName"
                  :value="item.clientName"
                ></el-option>
              </el-select>
              <span v-if="scope.$index != 0">{{ scope.row.clientName }}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" width="120" label="客户类型">
            <template slot-scope="scope">
              <el-select v-if="scope.$index == 0" size="mini" v-model="value3" placeholder=" ">
                <el-option
                  v-for="item in customerType"
                  :key="item.id"
                  :label="item.attrName"
                  :value="item.id"
                ></el-option>
              </el-select>
              <span v-if="scope.$index != 0">{{ scope.row.clientType }}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" width="120" label="所属国家">
            <template slot-scope="scope">
              <el-select v-if="scope.$index == 0" size="mini" v-model="value4" placeholder=" ">
                <el-option
                  v-for="item in states"
                  :key="item.id"
                  :label="item.name"
                  :value="item.id"
                ></el-option>
              </el-select>
              <span v-if="scope.$index != 0">{{ scope.row.countryName }}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" width="100" label="付款条件">
            <template slot-scope="scope">
              <el-select v-if="scope.$index == 0" size="mini" v-model="value5" placeholder>
                <el-option
                  v-for="item in paymenttotal"
                  :key="item.value"
                  :label="item"
                  :value="item"
                ></el-option>
              </el-select>
              <span v-if="scope.$index != 0">{{ scope.row.payment }}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" width="120" label="部门">
            <template slot-scope="scope">
              <el-select v-if="scope.$index == 0" size="mini" v-model="value6" placeholder>
                <el-option
                  v-for="item in departmentPullDown"
                  :key="item.value"
                  :label="item.departmentName"
                  :value="item.departmentName"
                ></el-option>
              </el-select>
              <span v-if="scope.$index != 0">{{ scope.row.departmentName }}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" width="120" label="业务员">
            <template slot-scope="scope">
              <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo1"></el-input>
              <span v-if="scope.$index != 0">{{ scope.row.salesManName }}</span>
            </template>
          </el-table-column>
          <el-table-column align="right" width="170" label="应收款（本位币）">
            <template slot-scope="scope">
              <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo2"></el-input>
              <span v-if="scope.$index != 0">{{ scope.row.collectionAmount }}</span>
            </template>
          </el-table-column>
          <el-table-column align="right" width="170" label="已收款（本位币）">
            <template slot-scope="scope">
              <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo3"></el-input>
              <span v-if="scope.$index != 0">{{ scope.row.paymentAmount }}</span>
            </template>
          </el-table-column>
          <el-table-column align="right" label="欠款（本位币）">
            <template slot-scope="scope">
              <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo4"></el-input>
              <span v-if="scope.$index != 0">{{ scope.row.oweAmount }}</span>
            </template>
          </el-table-column>
        </el-table>

        <Pagination
          style="padding-top:10px;"
          @sizeChange="xzsizeChange"
          @currentChange="xzcurrentChange"
          :total="total"
        ></Pagination>
      </div>
    </div>
  </div>
</template>

<script>
import bus from "@/assets/Bus";
import Pagination from "@/components/Pagination.vue";
import {
  collectionGatherList,
  customerPullDown,
  codeDropDown,
  customerType,
  states,
  paymentBefore,
  paymentRear,
  departmentPullDown
} from "../../api/finance";
export default {
  name: "",
  components: { Pagination },
  data() {
    return {
      total: 0,
      valuess: "",
      collectionGatherList: [],
      inputTwo1: null,
      inputTwo2: null,
      inputTwo3: null,
      inputTwo4: null,
      value1: null,
      value2: null,
      value3: null,
      value4: null,
      value5: null,
      value6: null,
      options: [],
      length: 0,
      czfy: 10,
      // 客户名称
      customerPullDown: null,
      // 客户代码
      codeDropDown: null,
      // 客户类型
      customerType: null,
      // 国家
      states: null,
      // 付款前后
      paymentBefore: null,
      paymentRear: null,
      paymenttotal: [],
      // 部门
      departmentPullDown: null,
      startingTime: null,
      endTime: null
    };
  },
  methods: {
    //接口
    collectionGatherListFun(size, num) {
      if (this.valuess != null) {
        this.startingTime = this.valuess[0];
        this.endTime = this.valuess[1];
      }

      let se = {};
      let collectionGatherListData = {
        num: size,
        page: num,
        clientCode: this.value1,
        clientName: this.value2,
        type: this.value3,
        country: this.value4,
        payment: this.value5,
        departmentName: this.value6,
        salesManName: this.inputTwo1,
        collectionAmount: this.inputTwo2,
        paymentAmount: this.inputTwo3,
        oweAmount: this.inputTwo4,
        startingTime: this.startingTime,
        endTime: this.endTime
      };

      collectionGatherList(collectionGatherListData).then(res => {
        this.collectionGatherList = res.result;
        this.collectionGatherList.list.unshift(se);
        // this.length = this.collectionGatherList.list.length-1
        this.total = this.collectionGatherList.total;
      });
    },
    search() {
      this.collectionGatherListFun(this.czfy, 1);
    },
    //分页
    xzsizeChange(res) {
      this.collectionGatherListFun(res, 1);
      this.czfy = res;
    },
    xzcurrentChange(res) {
      this.collectionGatherListFun(this.czfy, res);
    }
  },
  created() {
    this.collectionGatherListFun(10, 1);
    // 客户名称
    customerPullDown().then(res => {
      this.customerPullDown = res.result;
    });
    // 客户代码
    codeDropDown().then(res => {
      this.codeDropDown = res.result;
    });
    // 客户类型
    customerType().then(res => {
      this.customerType = res.result;
    });
    // 国家
    states().then(res => {
      this.states = res.result;
    });
    // 付款前后
    paymentBefore().then(res => {
      this.paymentBefore = res.result;
      paymentRear().then(res => {
        this.paymentRear = res.result;
        this.paymentBefore.forEach((val, index) => {
          this.paymenttotal.push(
            this.paymentBefore[index].attrName +
              this.paymentRear[index].attrName
          );
        });
      });
    });
    //    部门
    departmentPullDown().then(res => {
      this.departmentPullDown = res.result;
    });
  }
};
</script>

<style lang='scss'>
</style>