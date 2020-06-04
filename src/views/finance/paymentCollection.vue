<template>
  <div class="finance">
    <div>
      <div style="display: flex;align-items: flex-end;">
        <div class="el-button--mini el-button title" style="background: #3366FF">付款汇总</div>
        <el-button size="mini" class="search" @click="search">检索</el-button>
        <el-date-picker
          size="mini"
          v-model="valuess"
          type="daterange"
          range-separator="至"
          start-placeholder="起始日期"
          end-placeholder="终止日期"
        ></el-date-picker>
      </div>

      <div style="width: 1550px;padding-top:10px;">
        <el-table border size="mini" :data="paymentGatherList.list" style="width: 100%">
          <el-table-column align="center" label="序号" width="45">
            <template slot-scope="scope">
              <span v-if="scope.$index == 0">No.</span>
              <span v-if="scope.$index != 0">{{ scope.$index }}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" label="供应商代码" width="140">
            <template slot-scope="scope">
              <el-select v-if="scope.$index == 0" size="mini" v-model="value1" placeholder=" ">
                <el-option
                  v-for="item in vendorCodeDropDown"
                  :key="item.value"
                  :label="item.supplierCode"
                  :value="item.supplierCode"
                ></el-option>
              </el-select>
              <span v-if="scope.$index != 0" class="blue-decoration">{{ scope.row.supplierCode }}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" width="260" label="供应商名称">
            <template slot-scope="scope">
              <el-select v-if="scope.$index == 0" size="mini" v-model="value2" placeholder=" ">
                <el-option
                  v-for="item in vendorNameDropDown"
                  :key="item.value"
                  :label="item.supplierName"
                  :value="item.supplierName"
                ></el-option>
              </el-select>
              <span v-if="scope.$index != 0">{{ scope.row.supplierName }}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" width="120" label="供应商类型">
            <template slot-scope="scope">
              <el-select v-if="scope.$index == 0" size="mini" v-model="value3" placeholder=" ">
                <el-option
                  v-for="item in supplierType"
                  :key="item.id"
                  :label="item.attrName"
                  :value="item.id"
                ></el-option>
              </el-select>
              <span v-if="scope.$index != 0">{{ scope.row.typeValue }}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" width="120" label="地区">
            <template slot-scope="scope">
              <el-select v-if="scope.$index == 0" size="mini" v-model="value4" placeholder=" ">
                <el-option
                  v-for="item in states"
                  :key="item.id"
                  :label="item.name"
                  :value="item.id"
                ></el-option>
              </el-select>
              <span v-if="scope.$index != 0">{{ scope.row.area }}</span>
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
              <span v-if="scope.$index != 0">{{ scope.row.paymentValue }}</span>
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
          <el-table-column align="center" width="120" label="采购员">
            <template slot-scope="scope">
              <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo1"></el-input>
              <span v-if="scope.$index != 0">{{ scope.row.buyerName }}</span>
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
  paymentGatherList,
  paymentBefore,
  paymentRear,
  departmentPullDown,
  states,
  vendorNameDropDown,
  vendorCodeDropDown,
  supplierType
} from "../../api/finance";
export default {
  name: "",
  components: { Pagination },
  data() {
    return {
      total: 0,
      valuess: "",
      num: 0,
      length: 0,
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
      paymentGatherList: [],
      // 国家
      states: null,
      // 付款前后
      paymentBefore: null,
      paymentRear: null,
      paymenttotal: [],
      // 部门
      departmentPullDown: null,
      // 供应商名称
      vendorNameDropDown: null,
      // 供应商代码
      vendorCodeDropDown: null,
      // 供应商类型
      supplierType: null,
      startTime: null,
      endTime: null
    };
  },
  methods: {
    paymentGatherListFun(size, num) {
      let se = {};
      if (this.valuess != null) {
        this.startTime = this.valuess[0];
        this.endTime = this.valuess[1];
      }

      let paymentGatherListData = {
        num: size,
        page: num,
        supplierCode: this.value1,
        supplierName: this.value2,
        type: this.value3,
        area: this.value4,
        paymentValue: this.value5,
        departmentName: this.value6,
        buyerName: this.inputTwo1,
        collectionAmount: this.inputTwo2,
        paymentAmount: this.inputTwo3,
        oweAmount: this.inputTwo4,
        startTime: this.startTime,
        endTime: this.endTime
      };
      paymentGatherList(paymentGatherListData).then(res => {
        this.paymentGatherList = res.result;
        this.paymentGatherList.list.unshift(se);
        this.total = this.paymentGatherList.total;
      });
    },
    search() {
      this.paymentGatherListFun(this.czfy, 1);
    },
    //分页
    xzsizeChange(res) {
      this.paymentGatherListFun(res, 1);
      this.czfy = res;
    },
    xzcurrentChange(res) {
      this.paymentGatherListFun(this.czfy, res);
    }
  },
  created() {
    this.paymentGatherListFun(10, 1);
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
    //   供应商名称
    vendorNameDropDown().then(res => {
      this.vendorNameDropDown = res.result;
    });
    // 供应商代码
    vendorCodeDropDown().then(res => {
      this.vendorCodeDropDown = res.result;
    });
    // 类型
    supplierType().then(res => {
      this.supplierType = res.result;
      console.log(res);
    });
  }
};
</script>

<style lang='scss'>
</style>