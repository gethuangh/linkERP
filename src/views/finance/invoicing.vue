<template>
  <div class="finance">
    <!-- 开票申请 -->
    <div>
      <div style="display: flex;align-items: flex-end;">
        <div class="el-button--mini el-button title" style="background: #f00">开票申请</div>
        <el-button size="mini" class="search" @click="search1">检索</el-button>
        <el-date-picker
          size="mini"
          v-model="valuess1"
          value-format="yyyy-MM-dd"
          type="daterange"
          range-separator="至"
          start-placeholder="起始日期"
          end-placeholder="终止日期"
        ></el-date-picker>
      </div>

      <div style="width: 1700px;padding-top:10px;">
        <el-table border size="mini" :data="invoiceList.list" style="width: 100%;color: #00f">
          <el-table-column class-name="original-font" align="center" label="序号" width="45">
            <template slot-scope="scope">
              <span v-if="scope.$index == 0">No.</span>
              <span v-if="scope.$index != 0">{{ scope.$index }}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" label="申请日期" width="120">
            <template slot-scope="scope">
              <el-date-picker
                size="mini"
                value-format="yyyy-MM-dd"
                v-if="scope.$index == 0"
                v-model="inputTwo1"
                type="date"
                placeholder="选择日期"
              ></el-date-picker>
              <span v-if="scope.$index != 0">{{ scope.row.applicantDate }}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" label="申请单号" width="120">
            <template slot-scope="scope">
              <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo2"></el-input>
              <span v-if="scope.$index != 0" class="blue-decoration">{{ scope.row.orderNumber }}</span>
            </template>
          </el-table-column>
          <el-table-column align="left" width="240" label="客户名称">
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
          <el-table-column align="left" width="230" label="原厂型号">
            <template slot-scope="scope">
              <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo3"></el-input>
              <span v-if="scope.$index != 0">{{ scope.row.originalModel }}</span>
            </template>
          </el-table-column>
          <el-table-column width="50" align="center" label="数量">
            <template slot-scope="scope">
              <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo4"></el-input>
              <span v-if="scope.$index != 0">{{ scope.row.number }}</span>
            </template>
          </el-table-column>
          <el-table-column width="75" align="right" label="含税单价">
            <template slot-scope="scope">
              <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo5"></el-input>
              <span v-if="scope.$index != 0">{{ scope.row.withTaxPrice }}</span>
            </template>
          </el-table-column>
          <el-table-column width="100" align="right" label="价税合计">
            <template slot-scope="scope">
              <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo6"></el-input>
              <span v-if="scope.$index != 0">{{ scope.row.withTaxTotalPrice }}</span>
            </template>
          </el-table-column>
          <el-table-column width="100" align="center" label="付款条件">
            <template slot-scope="scope">
              <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo7"></el-input>
              <span v-if="scope.$index != 0">{{ scope.row.paymentValue }}</span>
            </template>
          </el-table-column>
          <el-table-column width="120" align="center" label="出库日期">
            <template slot-scope="scope">
              <el-date-picker
                size="mini"
                value-format="yyyy-MM-dd"
                v-if="scope.$index == 0"
                v-model="inputTwo8"
                type="date"
                placeholder="选择日期"
              ></el-date-picker>
              <span v-if="scope.$index != 0">{{ scope.row.stockOutDate }}</span>
            </template>
          </el-table-column>
          <el-table-column width="120" align="center" label="要求开票日期">
            <template slot-scope="scope">
              <el-date-picker
                size="mini"
                value-format="yyyy-MM-dd"
                v-if="scope.$index == 0"
                v-model="inputTwo9"
                type="date"
                placeholder="选择日期"
              ></el-date-picker>
              <span v-if="scope.$index != 0">{{ scope.row.needIssuedInvoiceDate }}</span>
            </template>
          </el-table-column>
          <el-table-column width="100" align="center" label="销售员">
            <template slot-scope="scope">
              <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo10"></el-input>
              <span v-if="scope.$index != 0">{{ scope.row.salesManName }}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" label="备注">
            <template slot-scope="scope">
              <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo11"></el-input>
              <span v-if="scope.$index != 0">{{ scope.row.remark }}</span>
            </template>
          </el-table-column>
        </el-table>

        <Pagination
          style="padding-top:10px;"
          @sizeChange="kpsizeChange"
          @currentChange="kpcurrentChange"
          :total="kptotal"
        ></Pagination>
      </div>
    </div>

    <el-dialog title="开票申请" :visible.sync="invoicingDialog" width="1650px" class="bacground-white">
      <invoicing-apply></invoicing-apply>
    </el-dialog>
  </div>
</template>

<script>
import bus from "@/assets/Bus";
import Pagination from "@/components/Pagination.vue";
import invoicingApply from "./popups/invoicingApply.vue";
import {
  invoiceList,
  saleInvoiceList,
  buyerInvoiceList,
  customerPullDown,
  taxRate
} from "../../api/finance";
export default {
  name: "",
  components: { Pagination, invoicingApply },
  data() {
    return {
      total: 0,
      valuess1: "",
      valuess2: "",
      valuess3: "",
      inputTwo: "",
      value: "",
      options: [],

      itemNum: null,
      invoicingDialog: false,
      // 开票
      kpfz: 10,
      kptotal: 0,
      invoiceList: [],
      value1: null,
      value2: null,
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
      // 客户名称
      customerPullDown: null,
      taxRate: null
    };
  },
  methods: {
    addInvoicing() {
      this.invoicingDialog = true;
    },
    // 开票申请接口
    invoiceListFun(size, num) {
      if (this.valuess1 != null) {
        var startTime = this.valuess1[0];
        var endTime = this.valuess1[1];
      }
      let se = {};
      console.log(startTime);
      let invoiceListData = {
        num: size,
        page: num,
        applicantDate: this.inputTwo1,
        orderNumber: this.inputTwo2,
        clientName: this.value1,
        taxRate: this.value2,
        originalModel: this.inputTwo3,
        number: this.inputTwo4,
        withTaxPrice: this.inputTwo5,
        withTaxTotalPrice: this.inputTwo6,
        paymentValue: this.inputTwo7,
        stockOutDate: this.inputTwo8,
        needIssuedInvoiceDate: this.inputTwo9,
        salesManName: this.inputTwo10,
        remark: this.inputTwo11,
        startTime: startTime,
        endTime: endTime
      };
      invoiceList(invoiceListData).then(res => {
        this.invoiceList = res.result;
        this.invoiceList.list.unshift(se);
        this.kptotal = this.invoiceList.total;
      });
    },
    search1() {
      this.invoiceListFun(this.kpfz, 1);
    },
    //分页
    kpsizeChange(res) {
      this.invoiceListFun(res, 1);
      this.kpfz = res;
    },
    kpcurrentChange(res) {
      this.invoiceListFun(this.kpfz, res);
    }
  },
  created() {
    this.invoiceListFun(10, 1);
    // 税率
    taxRate().then(res => {
      this.taxRate = res.result;
    });
    // 客户名称
    customerPullDown().then(res => {
      this.customerPullDown = res.result;
    });
  }
};
</script>

<style lang='scss' src="./style.scss"></style>