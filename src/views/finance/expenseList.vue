<template>
  <div class="finance">
    <div>
      <div style="display: flex;align-items: flex-end;">
        <div class="el-button--mini el-button title" style="background: #FF99CC">费用单-全部</div>
        <el-button size="mini" class="search" @click="search">检索</el-button>
      </div>

      <div style="width: 1700px;padding-top:10px;">
        <el-table border size="mini" :data="financeBill.list" style="width: 100%">
          <el-table-column align="center" label="序号" width="45">
            <template slot-scope="scope">
              <span v-if="scope.$index == 0">No.</span>
              <span v-if="scope.$index != 0">{{ scope.$index }}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" label="费用单号" width="100">
            <template slot-scope="scope">
              <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo1"></el-input>
              <span v-if="scope.$index != 0" class="blue-decoration">{{ scope.row.number }}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" label="付款日期" width="120">
            <template slot-scope="scope">
              <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo2"></el-input>
              <span v-if="scope.$index != 0">{{ scope.row.payDay }}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" width="210" label="消费人">
            <template slot-scope="scope">
              <el-input
                style="width: 100%"
                v-if="scope.$index == 0"
                size="mini"
                v-model="inputTwo3"
              ></el-input>
              <span v-if="scope.$index != 0">{{ scope.row.customerName }}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" width="75" label="财务科目">
            <template slot-scope="scope">
              <el-select v-if="scope.$index == 0" size="mini" v-model="value1" placeholder=" ">
                <el-option
                  v-for="item in financialAccount"
                  :key="item.value"
                  :label="item.attrName"
                  :value="item.id"
                ></el-option>
              </el-select>
              <span v-if="scope.$index != 0">{{ scope.row.financialAccountString }}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" width="120" label="科目明细">
            <template slot-scope="scope">
              <el-select v-if="scope.$index == 0" size="mini" v-model="value2" placeholder=" ">
                <el-option
                  v-for="item in accountDetails"
                  :key="item.id"
                  :label="item.attrName"
                  :value="item.id"
                ></el-option>
              </el-select>
              <span v-if="scope.$index != 0">{{ scope.row.accountDetailsString }}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" width="75" label="货币">
            <template slot-scope="scope">
              <el-select v-if="scope.$index == 0" size="mini" v-model="value3" placeholder=" ">
                <el-option
                  v-for="item in currencyCode"
                  :key="item.id"
                  :label="item.attrName"
                  :value="item.id"
                ></el-option>
              </el-select>
              <span v-if="scope.$index != 0">{{ scope.row.currencyString }}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" width="120" label="金额">
            <template slot-scope="scope">
              <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo4"></el-input>
              <span v-if="scope.$index != 0">{{ scope.row.payTotal }}</span>
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
              <span v-if="scope.$index != 0">{{ scope.row.taxRateString }}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" width="120" label="付款银行">
            <template slot-scope="scope">
              <el-select v-if="scope.$index == 0" size="mini" v-model="value5" placeholder=" ">
                <el-option
                  v-for="item in bank"
                  :key="item.id"
                  :label="item.attrName"
                  :value="item.id"
                ></el-option>
              </el-select>
              <span v-if="scope.$index != 0">{{ scope.row.bankString }}</span>
            </template>
          </el-table-column>
          <el-table-column width="100" align="center" label="付款单位">
            <template slot-scope="scope">
              <el-select v-if="scope.$index == 0" size="mini" v-model="value6" placeholder=" ">
                <el-option
                  v-for="item in departmentPullDown"
                  :key="item.value"
                  :label="item.departmentName"
                  :value="item.departmentName"
                ></el-option>
              </el-select>
              <span v-if="scope.$index != 0">{{ scope.row.customerCompany }}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" width="220" label="收益公司">
            <template slot-scope="scope">
              <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo5"></el-input>
              <span v-if="scope.$index != 0">{{ scope.row.benefitCompanyName }}</span>
            </template>
          </el-table-column>
          <el-table-column width="75" align="center" label="明细">
            <template slot-scope="scope">
              <el-select v-if="scope.$index == 0" size="mini" v-model="value7" placeholder=" ">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
              <template v-if="scope.$index != 0">
                <span class="green-decoration" @click="openDetail(scope.row.chargeOrderNum)">费用明细</span>
              </template>
            </template>
          </el-table-column>
          <el-table-column width="100" align="center" label="录入人">
            <template slot-scope="scope">
              <el-select v-if="scope.$index == 0" size="mini" v-model="value8" placeholder=" ">
                <el-option
                  v-for="item in selectData"
                  :key="item.id"
                  :label="item.realName"
                  :value="item.id"
                ></el-option>
              </el-select>
              <span v-if="scope.$index != 0">{{ scope.row.creatorName }}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" label="录入日期">
            <template slot-scope="scope">
              <el-date-picker
                size="mini"
                value-format="yyyy-MM-dd"
                v-if="scope.$index == 0"
                v-model="inputTwo6"
                type="date"
                placeholder="选择日期"
              ></el-date-picker>
              <!-- <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo6"></el-input> -->
              <span v-if="scope.$index != 0">{{ scope.row.createTime }}</span>
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

    <el-dialog title="费用单 - 新增" :visible.sync="newdetailDialog" width="1040px">
      <expenseListNew
        :departmentPullDown="departmentPullDown"
        :bank="bank"
        :financialAccount="financialAccount"
        :accountDetails="accountDetails"
        :currencyCode="currencyCode"
      ></expenseListNew>
    </el-dialog>

    <el-dialog :title="itemNum + ' - 费用明细'" :visible.sync="detailDialog" width="1700px">
      <chargeDetail></chargeDetail>
    </el-dialog>
  </div>
</template>

<script>
import bus from "@/assets/Bus";
import Pagination from "@/components/Pagination.vue";
import chargeDetail from "./popups/chargeDetails.vue";
import expenseListNew from "./popups/expenseListNew.vue";
import { financeBill } from "../../api/finance";
// 下拉接口
import {
  financialAccount,
  accountDetails,
  currencyCode,
  taxRate,
  bank,
  selectData,
  selectunit,
  salesman,
  customerPullDown,
  vendorNameDropDown,
  departmentPullDown
} from "../../api/finance";
export default {
  name: "",
  components: { Pagination, chargeDetail, expenseListNew },
  data() {
    return {
      total: 0,
      financeBill: [],
      itemNum: null,
      detailDialog: false,
      newdetailDialog: false,
      inputTwo6: null,
      inputTwo5: null,
      inputTwo4: null,
      inputTwo3: null,
      inputTwo2: null,
      inputTwo1: null,
      value8: null,
      value7: null,
      value6: null,
      value5: null,
      value4: null,
      value3: null,
      value2: null,
      value1: null,
      options: [],
      czfy: 10,
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
      //   录入人
      selectData: null,
      // 付款单位
      departmentPullDown: null
    };
  },
  methods: {
    //打开费用明细
    openDetail(num) {
      this.itemNum = num;
      this.detailDialog = true;
    },
    financeBillFun(size, num) {
      let se = {};
      let financeBillData = {
        pageSize: size,
        pageNum: num,
        number: this.inputTwo1,
        payDay: this.inputTwo2,
        customerName: this.inputTwo3,
        financialAccount: this.value1,
        accountDetails: this.value2,
        currency: this.value3,
        payTotal: this.inputTwo4,
        taxRate: this.value4,
        bank: this.value5,
        customerCompany: this.value6,
        benefitCompanyName: this.inputTwo5,
        creatorId: this.value8,
        createTime: this.inputTwo6
      };
      financeBill(financeBillData).then(res => {
        this.financeBill = res.result;
        this.financeBill.list.unshift(se);
        // this.length = this.financeBill.list.length-1
        this.total = this.financeBill.total;
        console.log(this.financeBill);
      });
    },
    search() {
      this.financeBillFun(this.czfy, 1);
    },
    //分页
    xzsizeChange(res) {
      this.financeBillFun(res, 1);
      this.czfy = res;
    },
    xzcurrentChange(res) {
      this.financeBillFun(this.czfy, res);
    }
  },
  created() {
    bus.$on("expenseListNew", () => {
      this.newdetailDialog = true;
    });
    this.financeBillFun(10, 1);
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
    //   录入人
    selectData().then(res => {
      this.selectData = res.result;
    });
    // 付款单位
    departmentPullDown().then(res => {
      this.departmentPullDown = res.result;
    });
  }
};
</script>

<style lang='scss' src="./style.scss"></style>