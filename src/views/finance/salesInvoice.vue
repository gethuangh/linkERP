<template>
  <div class="finance">
    <!-- 销售发票 -->
    <div>
      <div style="display: flex;align-items: flex-end;">
        <div class="el-button--mini el-button title" style="background: #3366FF">销售发票</div>
        <el-button size="mini" class="search" @click="search2">检索</el-button>
        <el-date-picker
          size="mini"
          v-model="valuess2"
          value-format="yyyy-MM-dd"
          type="daterange"
          range-separator="至"
          start-placeholder="起始日期"
          end-placeholder="终止日期"
        ></el-date-picker>
      </div>

      <div style="width: 1700px;padding-top:10px;">
        <el-table
          border
          size="mini"
          :data="saleInvoiceList.list"
          style="width: 100%"
          :row-class-name="tableRowClassName"
        >
          <el-table-column class-name="original-font" align="center" label="序号" width="45">
            <template slot-scope="scope">
              <span v-if="scope.$index == 0">No.</span>
              <span v-if="scope.$index != 0">{{ scope.$index }}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" label="销售发票号" width="110">
            <template slot-scope="scope">
              <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo1s"></el-input>
              <span
                v-if="scope.$index != 0"
                style="text-decoration: underline"
              >{{ scope.row.invoiceNumber }}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" label="出库单号" width="95">
            <template slot-scope="scope">
              <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo2s"></el-input>
              <span
                v-if="scope.$index != 0"
                style="text-decoration: underline"
              >{{ scope.row.stockOutNumber }}</span>
            </template>
          </el-table-column>
          <el-table-column align="left" width="240" label="客户名称">
            <template slot-scope="scope">
              <el-select v-if="scope.$index == 0" size="mini" v-model="value1s" placeholder=" ">
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
              <el-select v-if="scope.$index == 0" size="mini" v-model="value2s" placeholder=" ">
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
          <el-table-column align="left" width="220" label="原厂型号">
            <template slot-scope="scope">
              <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo3s"></el-input>
              <span v-if="scope.$index != 0">{{ scope.row.originalModel }}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" width="65" label="数量">
            <template slot-scope="scope">
              <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo4s"></el-input>
              <span v-if="scope.$index != 0">{{ scope.row.number }}</span>
            </template>
          </el-table-column>
          <el-table-column align="right" width="75" label="含税单价">
            <template slot-scope="scope">
              <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo5s"></el-input>
              <span v-if="scope.$index != 0">{{ scope.row.withTaxPrice }}</span>
            </template>
          </el-table-column>
          <el-table-column align="right" width="95" label="价税合计">
            <template slot-scope="scope">
              <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo6s"></el-input>
              <span v-if="scope.$index != 0">{{ scope.row.withTaxTotalPrice }}</span>
            </template>
          </el-table-column>
          <el-table-column align="right" width="95" label="已开发票">
            <template slot-scope="scope">
              <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo7s"></el-input>
              <span v-if="scope.$index != 0">{{ scope.row.issuedInvoice }}</span>
            </template>
          </el-table-column>
          <el-table-column align="right" width="95" label="待开发票">
            <template slot-scope="scope">
              <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo8s"></el-input>
              <span v-if="scope.$index != 0">{{ scope.row.needIssuedInvoice }}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" width="95" label="开票日期">
            <template slot-scope="scope">
              <el-date-picker
                size="mini"
                value-format="yyyy-MM-dd"
                v-if="scope.$index == 0"
                v-model="inputTwo9s"
                type="date"
                placeholder="选择日期"
              ></el-date-picker>
              <span v-if="scope.$index != 0">{{ scope.row.issuedDate }}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" width="95" label="开票状态">
            <template slot-scope="scope">
              <el-select v-if="scope.$index == 0" size="mini" v-model="value3s" placeholder=" ">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
              <span v-if="scope.$index != 0">
                <span v-if="scope.row.issuedStatus == '0'" style="color: #f00">待开销项</span>
                <span v-else>已开销项</span>
              </span>
            </template>
          </el-table-column>
          <el-table-column align="center" width="95" label="付款条件">
            <template slot-scope="scope">
              <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo10s"></el-input>
              <span v-if="scope.$index != 0">{{ scope.row.paymentValue }}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" width="90" label="出库日期">
            <template slot-scope="scope">
              <el-date-picker
                size="mini"
                value-format="yyyy-MM-dd"
                v-if="scope.$index == 0"
                v-model="inputTwo11s"
                type="date"
                placeholder="选择日期"
              ></el-date-picker>
              <span v-if="scope.$index != 0">{{ scope.row.stockOutDate }}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" label="销售员">
            <template slot-scope="scope">
              <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo12s"></el-input>
              <span v-if="scope.$index != 0">{{ scope.row.salesManName }}</span>
            </template>
          </el-table-column>
        </el-table>

        <Pagination
          style="padding-top:10px;"
          @sizeChange="xssizeChange"
          @currentChange="xscurrentChange"
          :total="xstotal"
        ></Pagination>
      </div>
    </div>
  </div>
</template>

<script>
import bus from "@/assets/Bus";
import Pagination from "@/components/Pagination.vue";
import {
  invoiceList,
  saleInvoiceList,
  buyerInvoiceList,
  customerPullDown,
  taxRate
} from "../../api/finance";
export default {
  name: "",
  components: { Pagination },
  data() {
    return {
      total: 0,

      inputTwo: null,
      value1: null,
      options: [],

      itemNum: null,

      //   销售
      saleInvoiceList: [],
      xsfz: 10,
      xstotal: 0,
      value1s: null,
      value2s: null,
      value3s: null,
      valuess2: "",
      inputTwo1s: null,
      inputTwo2s: null,
      inputTwo3s: null,
      inputTwo4s: null,
      inputTwo5s: null,
      inputTwo6s: null,
      inputTwo7s: null,
      inputTwo8s: null,
      inputTwo9s: null,
      inputTwo10s: null,
      inputTwo11s: null,
      inputTwo12s: null,
      // 客户名称
      customerPullDown: null,
      taxRate: null
    };
  },
  methods: {
    tableRowClassName({ row, rowIndex }) {
      if (row.status == "待开销项") {
        return "blue-font";
      }
    },
    // 销售发票
    saleInvoiceListFun(size, num) {
      let se = {};
      if (this.valuess2 != null) {
        var startTime = this.valuess2[0];
        var endTime = this.valuess2[1];
      }
      console.log(startTime);
      let saleInvoiceListData = {
        num: size,
        page: num,
        invoiceNumber: this.inputTwo1s,
        stockOutNumber: this.inputTwo2s,
        clientName: this.value1s,
        taxRate: this.value2s,
        originalModel: this.inputTwo3s,
        number: this.inputTwo4s,
        withTaxPrice: this.inputTwo5s,
        withTaxTotalPrice: this.inputTwo6s,
        issuedInvoice: this.inputTwo7s,
        needIssuedInvoice: this.inputTwo8s,
        issuedDate: this.inputTwo9s,
        issuedStatus: this.value3s,
        paymentValue: this.inputTwo10s,
        stockOutDate: this.inputTwo11s,
        salesManName: this.inputTwo12s,
        startTime: startTime,
        endTime: endTime
      };
      saleInvoiceList(saleInvoiceListData).then(res => {
        this.saleInvoiceList = res.result;
        this.saleInvoiceList.list.unshift(se);
        this.xstotal = this.saleInvoiceList.total;
      });
    },
    search2() {
      this.saleInvoiceListFun(this.xsfz, 1);
    },
    //分页
    xssizeChange(res) {
      this.saleInvoiceListFun(res, 1);
      this.xsfz = res;
    },
    xscurrentChange(res) {
      this.saleInvoiceListFun(this.xsfz, res);
    }
  },
  created() {
    //bus.on('xxx',() => { })
    this.saleInvoiceListFun(10, 1);
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