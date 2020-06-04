<template>
  <div class="finance">
    <div>
      <div style="display: flex;align-items: flex-end;">
        <div class="el-button--mini el-button title" style="background: #41C363">已收款</div>
        <el-button size="mini" class="search" @click="search">检索</el-button>
        <el-date-picker
          size="mini"
          v-model="valuess"
          type="daterange"
          value-format="yyyy-MM-dd"
          range-separator="至"
          start-placeholder="起始日期"
          end-placeholder="终止日期"
        ></el-date-picker>
      </div>

      <div style="width: 1705px;padding-top:10px;">
        <el-table border size="mini" :data="paidFor.list" style="width: 100%">
          <el-table-column align="center" label="序号" width="45">
            <template slot-scope="scope">
              <span v-if="scope.$index == 0">No.</span>
              <span v-if="scope.$index != 0">{{ scope.$index }}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" label="收款单号" width="80">
            <template slot-scope="scope">
              <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo1"></el-input>
              <span v-if="scope.$index != 0" class="blue-decoration">{{ scope.row.singleNumber }}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" label="出库日期" width="120">
            <template slot-scope="scope">
              <el-date-picker
                size="mini"
                value-format="yyyy-MM-dd"
                v-if="scope.$index == 0"
                v-model="inputTwo2"
                type="date"
                placeholder="选择日期"
              ></el-date-picker>
              <span v-if="scope.$index != 0">{{ scope.row.outboundDate }}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" label="应收日期" width="120">
            <template slot-scope="scope">
              <el-date-picker
                size="mini"
                value-format="yyyy-MM-dd"
                v-if="scope.$index == 0"
                v-model="inputTwo3"
                type="date"
                placeholder="选择日期"
              ></el-date-picker>
              <span v-if="scope.$index != 0">{{ scope.row.receivedDate }}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" label="销售订单号" width="80">
            <template slot-scope="scope">
              <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo4"></el-input>
              <span
                v-if="scope.$index != 0"
                style="text-decoration: underline"
              >{{ scope.row.orderNumber }}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" label="出库单号" width="80">
            <template slot-scope="scope">
              <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo5"></el-input>
              <span
                v-if="scope.$index != 0"
                style="text-decoration: underline"
              >{{ scope.row.numberDelivery }}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" label="客户订单号" width="120">
            <template slot-scope="scope">
              <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo6"></el-input>
              <span
                v-if="scope.$index != 0"
                style="text-decoration: underline"
              >{{ scope.row.clientNumber }}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" width="190" label="客户名称">
            <template slot-scope="scope">
              <el-select v-if="scope.$index == 0" size="mini" v-model="value1" placeholder=" ">
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
          <el-table-column align="center" width="75" label="税率">
            <template slot-scope="scope">
              <el-select v-if="scope.$index == 0" size="mini" v-model="value2" placeholder=" ">
                <el-option
                  v-for="item in taxRate"
                  :key="item.id"
                  :label="item.attrName"
                  :value="item.id"
                ></el-option>
              </el-select>
              <span v-if="scope.$index != 0">{{ scope.row.taxRateName }}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" width="50" label="货币">
            <template slot-scope="scope">
              <el-select v-if="scope.$index == 0" size="mini" v-model="value3" placeholder>
                <el-option
                  v-for="item in currencyCode"
                  :key="item.id"
                  :label="item.attrName"
                  :value="item.id"
                ></el-option>
              </el-select>
              <span v-if="scope.$index != 0">{{ scope.row.currencyNaem }}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" width="75" label="汇率">
            <template slot-scope="scope">
              <el-select v-if="scope.$index == 0" size="mini" v-model="value4" placeholder>
                <el-option
                  v-for="item in currencyExchangeRateList"
                  :key="item.id"
                  :label="item.currencyName"
                  :value="item.id"
                ></el-option>
              </el-select>
              <span v-if="scope.$index != 0">{{ scope.row.exchangeRate }}</span>
            </template>
          </el-table-column>
          <el-table-column align="left" width="170" label="原厂型号">
            <template slot-scope="scope">
              <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo7"></el-input>
              <span v-if="scope.$index != 0">{{ scope.row.originalModel }}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" width="75" label="数量">
            <template slot-scope="scope">
              <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo8"></el-input>
              <span v-if="scope.$index != 0">{{ scope.row.number }}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" width="75" label="销售单价">
            <template slot-scope="scope">
              <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo9"></el-input>
              <span v-if="scope.$index != 0">{{ scope.row.price }}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" width="95" label="应收款">
            <template slot-scope="scope">
              <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo10"></el-input>
              <span v-if="scope.$index != 0">{{ scope.row.totalPrice }}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" width="95" label="实收款">
            <template slot-scope="scope">
              <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo11"></el-input>
              <span v-if="scope.$index != 0">{{ scope.row.amountCredited }}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" width="95" label="欠款">
            <template slot-scope="scope">
              <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo12"></el-input>
              <span v-if="scope.$index != 0">{{ scope.row.totalPrice-scope.row.amountCredited }}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" width="75" label="付款条件">
            <template slot-scope="scope">
              <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo13"></el-input>
              <span
                v-if="scope.$index != 0"
              >{{ scope.row.paymentBeforeName }}{{ scope.row.paymentRearName }}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" width="75" label="销售员">
            <template slot-scope="scope">
              <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo14"></el-input>
              <span v-if="scope.$index != 0">{{ scope.row.salesManName }}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" label="状态">
            <template slot-scope="scope">
              <el-select v-if="scope.$index == 0" size="mini" v-model="value5" placeholder>
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
              <span v-if="scope.$index != 0">
                <!-- v-if="scope.row.orderStatus == '6'" -->
                <span style="color:#41C363">
                  <b>已收款</b>
                </span>
                <!-- <span v-else><b>未收款</b></span> -->
              </span>
            </template>
          </el-table-column>
        </el-table>

        <div style="justify-content: space-between" class="flex-model">
          <p style="font-size: 14px;">RMB已收合计：{{sumOfRMB}}，共{{length}}个收款信息</p>
          <Pagination
            style="padding-top:10px;"
            @sizeChange="xzsizeChange"
            @currentChange="xzcurrentChange"
            :total="total"
          ></Pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import bus from "@/assets/Bus";
import Pagination from "@/components/Pagination.vue";
import { paidFor, sumOfRMB } from "../../api/finance";
import {
  currencyCode,
  taxRate,
  customerPullDown,
  currencyExchangeRateList
} from "../../api/finance";
export default {
  name: "",
  components: { Pagination },
  data() {
    return {
      total: 0,
      valuess: "",
      paidFor: [],
      inputTwo: null,
      value: "",
      options: [],
      length: 0,
      sumOfRMB: 0,
      inputTwo1: null,
      inputTwo2: null,
      inputTwo3: null,
      inputTwo4: null,
      inputTwo5: null,
      inputTwo6: null,
      inputTwo7: null,
      inputTwo8: null,
      inputTwo9: null,
      inputTwo10: null,
      inputTwo11: null,
      inputTwo12: null,
      inputTwo13: null,
      inputTwo14: null,
      value1: null,
      value2: null,
      value3: null,
      value4: null,
      value5: null,
      // 货币
      currencyCode: null,
      // 税率
      taxRate: null,
      // 客户名称
      customerPullDown: null,
      // 汇率
      currencyExchangeRateList: null,
      startingTime: null,
      endTime: null
    };
  },
  methods: {
    //接口
    paidForFun(size, num) {
      if (this.valuess != null) {
        this.startingTime = this.valuess[0];
        this.endTime = this.valuess[1];
      }

      let se = {};
      let paidForData = {
        pageSize: size,
        pageNum: num,
        singleNumber: this.inputTwo1,
        outboundDate: this.inputTwo2,
        receivedDate: this.inputTwo3,
        orderNumber: this.inputTwo4,
        numberDelivery: this.inputTwo5,
        clientNumber: this.inputTwo6,
        clientName: this.value1,
        taxRate: this.value2,
        currency: this.value3,
        exchangeRateId: this.value4,
        originalModel: this.inputTwo7,
        number: this.inputTwo8,
        price: this.inputTwo9,
        totalPrice: this.inputTwo10,
        amountCredited: this.inputTwo11,
        paymentConstraint: this.inputTwo13,
        salesManName: this.inputTwo14,
        startingTime: this.startingTime,
        endTime: this.endTime
      };
      paidFor(paidForData).then(res => {
        this.paidFor = res.result;
        this.paidFor.list.unshift(se);
        this.length = this.paidFor.list.length - 1;
        this.total = this.paidFor.total;
      });
    },
    search() {
      this.paidForFun(this.czfy, 1);
    },
    //分页
    xzsizeChange(res) {
      this.paidForFun(res, 1);
      this.czfy = res;
    },
    xzcurrentChange(res) {
      this.paidForFun(this.czfy, res);
    }
  },
  created() {
    this.paidForFun(10, 1);
    sumOfRMB().then(res => {
      this.sumOfRMB = res.result;
    });
    // 货币
    currencyCode().then(res => {
      this.currencyCode = res.result;
    });
    // 税率
    taxRate().then(res => {
      this.taxRate = res.result;
    });
    // 客户名称
    customerPullDown().then(res => {
      this.customerPullDown = res.result;
    });
    // 汇率
    currencyExchangeRateList().then(res => {
      this.currencyExchangeRateList = res.result;
    });
  }
};
</script>

<style lang='scss'>
</style>