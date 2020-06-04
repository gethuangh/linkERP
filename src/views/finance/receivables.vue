<template>
  <div class="finance">
    <div>
      <div style="display: flex;align-items: flex-end;">
        <div class="el-button--mini el-button title" style="background: #f00">应收款</div>
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
        <el-table border size="mini" :data="receivableList.list" style="width: 100%">
          <el-table-column align="center" label="序号" width="45">
            <template slot-scope="scope">
              <span v-if="scope.$index == 0">No.</span>
              <span v-if="scope.$index != 0">{{ scope.$index }}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" label="订单日期" width="120">
            <template slot-scope="scope">
              <el-date-picker
                size="mini"
                value-format="yyyy-MM-dd"
                v-if="scope.$index == 0"
                v-model="inputTwo1"
                type="date"
                placeholder="选择日期"
              ></el-date-picker>
              <span v-if="scope.$index != 0">{{ scope.row.orderDate }}</span>
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
              <span v-if="scope.$index != 0">{{ scope.row.stockOutDate }}</span>
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
                class="blue-decoration"
              >{{ scope.row.salesOrderNumber }}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" label="出库单号" width="80">
            <template slot-scope="scope">
              <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo5"></el-input>
              <span v-if="scope.$index != 0" class="blue-decoration">{{ scope.row.stockOutNumber }}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" label="客户订单号" width="120">
            <template slot-scope="scope">
              <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo6"></el-input>
              <span v-if="scope.$index != 0" class="blue-decoration">{{ scope.row.clientNumber }}</span>
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
              <span v-if="scope.$index != 0">{{ scope.row.taxRateValue }}</span>
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
              <span v-if="scope.$index != 0">{{ scope.row.currencyValue }}</span>
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
              <span v-if="scope.$index != 0">{{ scope.row.collectionAmount }}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" width="95" label="实收款">
            <template slot-scope="scope">
              <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo11"></el-input>
              <span v-if="scope.$index != 0">{{ scope.row.paymentAmount }}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" width="95" label="欠款">
            <template slot-scope="scope">
              <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo12"></el-input>
              <span v-if="scope.$index != 0">{{ scope.row.oweAmount }}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" width="75" label="付款条件">
            <template slot-scope="scope">
              <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo13"></el-input>
              <span v-if="scope.$index != 0">{{ scope.row.paymentValue }}</span>
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
                <!-- v-if="scope.row.orderStatus != '4'" -->
                <span style="color:#f00">
                  <b>待收款</b>
                </span>
                <!-- <span v-else><b>已收款</b></span> -->
              </span>
            </template>
          </el-table-column>
        </el-table>

        <div style="justify-content: space-between" class="flex-model">
          <p style="font-size: 14px;">RMB应收合计：{{collectionAmountSum}}，共{{length}}个欠款信息</p>
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
import { receivableList } from "../../api/finance";
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
      length: 0,
      total: 0,
      inputTwo1: null,
      valuess: "",
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
      receivableList: [],
      inputTwo: null,
      value: null,
      options: [],
      czfy: 10,
      collectionAmountSum: 0,
      // 货币
      currencyCode: null,
      // 税率
      taxRate: null,
      // 客户名称
      customerPullDown: null,
      // 汇率
      currencyExchangeRateList: null,
      startTime: null,
      endTime: null
    };
  },
  methods: {
    // 接口

    receivableListFun(size, num) {
      let se = {};
      if (this.valuess != null) {
        this.startTime = this.valuess[0];
        this.endTime = this.valuess[1];
      }

      let receivableListData = {
        num: size,
        page: num,
        orderDate: this.inputTwo1,
        stockOutDate: this.inputTwo2,
        receivedDate: this.inputTwo3,
        salesOrderNumber: this.inputTwo4,
        stockOutNumber: this.inputTwo5,
        clientNumber: this.inputTwo6,
        clientName: this.value1,
        taxRate: this.value2,
        currency: this.value3,
        exchangeRateId: this.value4,
        originalModel: this.inputTwo7,
        number: this.inputTwo8,
        price: this.inputTwo9,
        collectionAmount: this.inputTwo10,
        paymentAmount: this.inputTwo11,
        oweAmount: this.inputTwo12,
        paymentValue: this.inputTwo13,
        salesManName: this.inputTwo14,
        startTime: this.startTime,
        endTime: this.endTime
      };
      receivableList(receivableListData).then(res => {
        this.receivableList = res.result.receivableList;
        this.length = res.result.receivableList.list.length;
        this.collectionAmountSum = res.result.collectionAmountSum;
        this.total = this.receivableList.total;
        this.receivableList.list.unshift(se);
        console.log(res);
      });
    },
    search() {
      this.receivableListFun(this.czfy, 1);
    },
    // 分页
    xzsizeChange(res) {
      this.receivableListFun(res, 1);
      this.czfy = res;
    },
    xzcurrentChange(res) {
      this.receivableListFun(this.czfy, res);
    }
  },
  created() {
    this.receivableListFun(10, 1);
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