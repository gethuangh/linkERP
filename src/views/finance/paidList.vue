<template>
  <div class="finance">
    <div>
      <div style="display: flex;align-items: flex-end;">
        <div class="el-button--mini el-button title" style="background: #41C363">已付款</div>
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
        <el-table border size="mini" :data="paidList.list" style="width: 100%">
          <el-table-column align="center" label="序号" width="45">
            <template slot-scope="scope">
              <span v-if="scope.$index == 0">No.</span>
              <span v-if="scope.$index != 0">{{ scope.$index }}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" label="付款单号" width="80">
            <template slot-scope="scope">
              <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo1"></el-input>
              <span v-if="scope.$index != 0" class="blue-decoration">{{ scope.row.receiptNumber }}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" label="出库日期" width="80">
            <template slot-scope="scope">
              <el-date-picker
                size="mini"
                value-format="yyyy-MM-dd"
                v-if="scope.$index == 0"
                v-model="inputTwo2"
                type="date"
                placeholder="选择日期"
              ></el-date-picker>
              <span v-if="scope.$index != 0">{{ scope.row.godownDate }}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" label="应收日期" width="80">
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
          <el-table-column align="center" label="采购订单号" width="80">
            <template slot-scope="scope">
              <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo4"></el-input>
              <span
                v-if="scope.$index != 0"
                style="text-decoration: underline"
              >{{ scope.row.buyerOrderNumber }}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" label="出库单号" width="80">
            <template slot-scope="scope">
              <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo5"></el-input>
              <span
                v-if="scope.$index != 0"
                style="text-decoration: underline"
              >{{ scope.row.godownNumber }}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" label="形式发票号码" width="120">
            <template slot-scope="scope">
              <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo6"></el-input>
              <span
                v-if="scope.$index != 0"
                style="text-decoration: underline"
              >{{ scope.row.proformaInvoice }}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" width="190" label="供应商名称">
            <template slot-scope="scope">
              <el-select v-if="scope.$index == 0" size="mini" v-model="value1" placeholder=" ">
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
              <span v-if="scope.$index != 0">{{ scope.row.buyerName }}</span>
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
                <span style="color:#41C363">
                  <b>已收款</b>
                </span>
                <!-- <span v-else><b>{{ scope.row.status }}</b></span> -->
              </span>
            </template>
          </el-table-column>
        </el-table>

        <div style="justify-content: space-between" class="flex-model">
          <p style="font-size: 14px;">RMB应收合计：{{num}}，共{{length}}个欠款信息</p>
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
import {
  paidList,
  vendorNameDropDown,
  taxRate,
  currencyCode,
  currencyExchangeRateList
} from "../../api/finance";
export default {
  name: "",
  components: { Pagination },
  data() {
    return {
      total: 0,
      valuess: "",
      czfy: 10,
      inputTwo: null,
      value: null,
      num: 0,
      options: [],
      paidList: [],
      num: 0,
      inputTwo10: null,
      inputTwo11: null,
      inputTwo12: null,
      inputTwo13: null,
      inputTwo14: null,
      inputTwo8: null,
      inputTwo9: null,
      inputTwo5: null,
      inputTwo6: null,
      inputTwo7: null,
      inputTwo4: null,
      inputTwo3: null,
      inputTwo2: null,
      inputTwo1: null,
      value5: null,
      value4: null,
      value3: null,
      value2: null,
      value1: null,
      length: 0,
      // 货币
      currencyCode: null,
      // 税率
      taxRate: null,
      // 汇率
      currencyExchangeRateList: null,
      //   供应商名称
      vendorNameDropDown: null,
      startTime: null,
      endTime: null
    };
  },
  methods: {
    paidListFun(size, num) {
      if (this.valuess != null) {
        this.startTime = this.valuess[0];
        this.endTime = this.valuess[1];
      }

      let se = {};
      let paidListData = {
        num: size,
        page: num,
        receiptNumber: this.inputTwo1,
        godownDate: this.inputTwo2,
        receivedDate: this.inputTwo3,
        buyerOrderNumber: this.inputTwo4,
        godownNumber: this.inputTwo5,
        proformaInvoice: this.inputTwo6,
        supplierName: this.value1,
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
        buyerName: this.inputTwo14,
        startTime: this.startTime,
        endTime: this.endTime
      };
      paidList(paidListData).then(res => {
        this.paidList = res.result.paidList;
        this.paidList.list.unshift(se);
        this.length = this.paidList.list.length - 1;
        this.num = res.result.paidAmountSum;
        this.total = this.paidList.total;
      });
    },
    search() {
      this.paidListFun(this.czfy, 1);
    },
    //分页
    xzsizeChange(res) {
      this.paidListFun(res, 1);
      this.czfy = res;
    },
    xzcurrentChange(res) {
      this.paidListFun(this.czfy, res);
    }
  },
  created() {
    this.paidListFun(10, 1);
    //   供应商名称
    vendorNameDropDown().then(res => {
      this.vendorNameDropDown = res.result;
    });
    // 货币
    currencyCode().then(res => {
      this.currencyCode = res.result;
    });
    // 税率
    taxRate().then(res => {
      this.taxRate = res.result;
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