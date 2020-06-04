<template>
  <div class="finance">
    <div>
      <div style="display: flex;align-items: flex-end;">
        <div class="el-button--mini el-button title" style="background: #3366FF">冲账明细</div>
        <el-button size="mini" class="search" @click="search">检索</el-button>
        <el-date-picker
          @change="change"
          size="mini"
          value-format="yyyy-MM-dd"
          v-model="valuess"
          type="daterange"
          range-separator="至"
          start-placeholder="起始日期"
          end-placeholder="终止日期"
        ></el-date-picker>
      </div>

      <div style="width: 1705px;padding-top:10px;">
        <el-table border size="mini" :data="chargebackDetails.list" style="width: 100%">
          <el-table-column align="center" label="序号" width="45">
            <template slot-scope="scope">
              <span v-if="scope.$index == 0">No.</span>
              <span v-if="scope.$index != 0">{{ scope.$index }}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" label="入库单号" width="80">
            <template slot-scope="scope">
              <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo1"></el-input>
              <span v-if="scope.$index != 0" class="blue-orderNumber">{{ scope.row.orderNumber }}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" label="采购订单号" width="80">
            <template slot-scope="scope">
              <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo2"></el-input>
              <span v-if="scope.$index != 0">{{ scope.row.purchaseOrder }}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" label="供应商发票号" width="120">
            <template slot-scope="scope">
              <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo3"></el-input>
              <span v-if="scope.$index != 0">{{ scope.row.letter }}</span>
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
          <el-table-column align="center" width="75" label="科目明细">
            <template slot-scope="scope">
              <el-select v-if="scope.$index == 0" size="mini" v-model="value2" placeholder=" ">
                <el-option
                  v-for="item in accountDetails"
                  :key="item.id"
                  :label="item.attrName"
                  :value="item.id"
                ></el-option>
              </el-select>
              <span v-if="scope.$index != 0">{{ scope.row.accountDetailsName }}</span>
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
              <span v-if="scope.$index != 0">{{ scope.row.currencyName }}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" width="170" label="原厂型号">
            <template slot-scope="scope">
              <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo4"></el-input>
              <span v-if="scope.$index != 0">{{ scope.row.originalModel }}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" width="75" label="数量">
            <template slot-scope="scope">
              <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo5"></el-input>
              <span v-if="scope.$index != 0">{{ scope.row.number }}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" width="75" label="税率">
            <template slot-scope="scope">
              <el-select v-if="scope.$index == 0" size="mini" v-model="value4" placeholder=" ">
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
          <el-table-column align="center" width="75" label="实际单价">
            <template slot-scope="scope">
              <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo6"></el-input>
              <span v-if="scope.$index != 0">{{ scope.row.price }}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" width="95" label="应付款">
            <template slot-scope="scope">
              <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo7"></el-input>
              <span v-if="scope.$index != 0">{{ scope.row.totalPrice }}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" width="95" label="实付款">
            <template slot-scope="scope">
              <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo8"></el-input>
              <span v-if="scope.$index != 0">{{ scope.row. paymentAmount }}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" width="95" label="欠款">
            <template slot-scope="scope">
              <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo9"></el-input>
              <span v-if="scope.$index != 0">{{ scope.row.totalPrice-scope.row. paymentAmount }}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" width="75" label="付款条件">
            <template slot-scope="scope">
              <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo10"></el-input>
              <span
                v-if="scope.$index != 0"
              >{{ scope.row.paymentBeforeName }}{{ scope.row.paymentRearName }}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" width="75" label="入库日期">
            <template slot-scope="scope">
              <el-date-picker
                size="mini"
                value-format="yyyy-MM-dd"
                v-if="scope.$index == 0"
                v-model="inputTwo11"
                type="date"
                placeholder="选择日期"
              ></el-date-picker>
              <span v-if="scope.$index != 0">{{ scope.row.godownDate }}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" width="75" label="付款日期">
            <template slot-scope="scope">
              <el-date-picker
                size="mini"
                value-format="yyyy-MM-dd"
                v-if="scope.$index == 0"
                v-model="inputTwo12"
                type="date"
                placeholder="选择日期"
              ></el-date-picker>
              <span v-if="scope.$index != 0">{{ scope.row.payDate }}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" width="75" label="采购员">
            <template slot-scope="scope">
              <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo13"></el-input>
              <span v-if="scope.$index != 0">{{ scope.row.buyerName }}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" label="状态">
            <template slot-scope="scope">
              <el-select v-if="scope.$index == 0" size="mini" v-model="value5" placeholder>
                <el-option
                  v-for="item in status"
                  :key="item.id"
                  :label="item.attrName"
                  :value="item.id"
                ></el-option>
              </el-select>
              <span v-if="scope.$index != 0">
                <span v-if="scope.row.orderStatus != '4'" style="color:#41C363">待收款</span>
                <span v-else>已收款</span>
              </span>
            </template>
          </el-table-column>
        </el-table>

        <Pagination
          style="padding-top:10px;"
          @sizeChange="xzsizeChange"
          @currentChange="xzcurrentChange"
          :total="fkztotal"
        ></Pagination>
      </div>
    </div>
  </div>
</template>

<script>
import bus from "@/assets/Bus";
import Pagination from "@/components/Pagination.vue";
import { chargebackDetails } from "../../api/finance";
// 下拉接口
import {
  financialAccount,
  accountDetails,
  currencyCode,
  taxRate,
  bank,
  vendorNameDropDown
} from "../../api/finance";
export default {
  name: "",
  components: { Pagination },
  data() {
    return {
      total: 0,
      chargebackDetails: [],
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
      value1: null,
      value2: null,
      value3: null,
      value4: null,
      value5: null,
      options: [],
      value1: null,
      fkztotal: 0,
      // 下拉
      // 财务科目
      financialAccount: null,
      // 科目明细
      accountDetails: null,
      // 货币
      currencyCode: null,
      // 税率
      taxRate: null,
      // 银行
      bank: null,
      // 状态
      status: [
        {
          id: 0,
          attrName: "待关联"
        },
        {
          id: 1,
          attrName: "待冲账"
        },
        {
          id: 2,
          attrName: "已冲账"
        }
      ],
      //   供应商名称
      vendorNameDropDown: null,
      valuess: "",
      startingTime: "",
      endTime: ""
    };
  },
  methods: {
    change(value) {
      console.log(value);
      if (value == null) {
        this.valuess = "";
        value = "";
        console.log(this.valuess);
      } // value = []
    },
    // 待冲账接口
    chargebackDetailsFun(size, num) {
      let se = {};
      if (this.valuess != null) {
        this.startingTime = this.valuess[0];
        this.endTime = this.valuess[1];
      }
      let chargebackDetailsData = {
        pageSize: size,
        pageNum: num,
        isOffset: 1,
        orderNumber: this.inputTwo1,
        purchaseOrder: this.inputTwo2,
        supplierName: this.value1,
        accountDetails: this.value2,
        currency: this.value3,
        originalModel: this.inputTwo4,
        number: this.inputTwo5,
        taxRate: this.value4,
        price: this.inputTwo6,
        totalPrice: this.inputTwo7,
        paymentConstraint: this.inputTwo8,
        godownDate: this.inputTwo11,
        payDate: this.inputTwo12,
        buyerName: this.inputTwo13,
        orderStatus: this.value5,
        startingTime: this.startingTime,
        endTime: this.endTime
      };
      chargebackDetails(chargebackDetailsData).then(res => {
        this.chargebackDetails = res.result;
        this.fkztotal = this.chargebackDetails.total;
        this.chargebackDetails.list.unshift(se);
        console.log(this.chargebackDetails);
      });
    },
    search() {
      this.chargebackDetailsFun(this.czfy, 1);
    },
    // 带冲账分页
    xzsizeChange(res) {
      this.chargebackDetailsFun(res, 1);
      this.czfy = res;
    },
    xzcurrentChange(res) {
      this.chargebackDetailsFun(this.czfy, res);
    }
  },
  created() {
    //bus.on('xxx',() => { })
    this.chargebackDetailsFun(10, 1);
    //    下拉财务科目
    financialAccount().then(res => {
      this.financialAccount = res.result;
    });
    //    科目明细
    accountDetails().then(res => {
      this.accountDetails = res.result;
    });
    // 货币
    currencyCode().then(res => {
      this.currencyCode = res.result;
    });
    // 税率
    taxRate().then(res => {
      this.taxRate = res.result;
    });
    // 银行
    bank().then(res => {
      this.bank = res.result;
    });
    //   供应商名称
    vendorNameDropDown().then(res => {
      this.vendorNameDropDown = res.result;
    });
  }
};
</script>

<style lang='scss' src="./style.scss"></style>