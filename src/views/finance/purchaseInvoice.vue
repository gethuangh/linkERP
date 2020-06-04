<template>
  <div class="finance">
    <!-- 采购发票 -->
    <div>
      <div style="display: flex;align-items: flex-end;">
        <div class="el-button--mini el-button title" style="background: #FF99CC">采购发票</div>
        <el-button size="mini" class="search" @click="search3">检索</el-button>
        <el-date-picker
          size="mini"
          v-model="valuess3"
          type="daterange"
          value-format="yyyy-MM-dd"
          range-separator="至"
          start-placeholder="起始日期"
          end-placeholder="终止日期"
        ></el-date-picker>
      </div>

      <div style="width: 1700px;padding-top:10px;">
        <el-table
          border
          size="mini"
          :data="buyerInvoiceList.list"
          style="width: 100%"
          :row-class-name="tableRowClassName"
        >
          <el-table-column class-name="original-font" align="center" label="序号" width="45">
            <template slot-scope="scope">
              <span v-if="scope.$index == 0">No.</span>
              <span v-if="scope.$index != 0">{{ scope.$index }}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" label="进项发票号" width="110">
            <template slot-scope="scope">
              <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo1ss"></el-input>
              <span
                v-if="scope.$index != 0"
                style="text-decoration: underline"
              >{{ scope.row.invoiceNumber }}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" label="入库单号" width="95">
            <template slot-scope="scope">
              <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo2ss"></el-input>
              <span
                v-if="scope.$index != 0"
                style="text-decoration: underline"
              >{{ scope.row.godownEntryNumber }}</span>
            </template>
          </el-table-column>
          <el-table-column align="left" width="240" label="供应商名称">
            <template slot-scope="scope">
              <el-select v-if="scope.$index == 0" size="mini" v-model="value1ss" placeholder=" ">
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
              <el-select v-if="scope.$index == 0" size="mini" v-model="value2ss" placeholder=" ">
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
              <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo3ss"></el-input>
              <span v-if="scope.$index != 0">{{ scope.row.originalModel }}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" width="65" label="数量">
            <template slot-scope="scope">
              <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo4ss"></el-input>
              <span v-if="scope.$index != 0">{{ scope.row.number }}</span>
            </template>
          </el-table-column>
          <el-table-column align="right" width="75" label="含税单价">
            <template slot-scope="scope">
              <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo5ss"></el-input>
              <span v-if="scope.$index != 0">{{ scope.row.withTaxPrice }}</span>
            </template>
          </el-table-column>
          <el-table-column align="right" width="95" label="价税合计">
            <template slot-scope="scope">
              <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo6ss"></el-input>
              <span v-if="scope.$index != 0">{{ scope.row.withTaxTotalPrice }}</span>
            </template>
          </el-table-column>
          <el-table-column align="right" width="95" label="已开发票">
            <template slot-scope="scope">
              <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo7ss"></el-input>
              <span v-if="scope.$index != 0">{{ scope.row.issuedInvoice }}</span>
            </template>
          </el-table-column>
          <el-table-column align="right" width="95" label="待开发票">
            <template slot-scope="scope">
              <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo8ss"></el-input>
              <span v-if="scope.$index != 0">{{ scope.row.needIssuedInvoice }}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" width="95" label="开票日期">
            <template slot-scope="scope">
              <el-date-picker
                size="mini"
                value-format="yyyy-MM-dd"
                v-if="scope.$index == 0"
                v-model="inputTwo9ss"
                type="date"
                placeholder="选择日期"
              ></el-date-picker>
              <span v-if="scope.$index != 0">{{ scope.row.issuedDate }}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" width="95" label="开票状态">
            <template slot-scope="scope">
              <el-select v-if="scope.$index == 0" size="mini" v-model="value3ss" placeholder=" ">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
              <span v-if="scope.$index != 0">
                <span v-if="scope.row.issuedStatus == '0'" style="color: #f00">待开进项</span>
                <span v-else>已开进项</span>
              </span>
            </template>
          </el-table-column>
          <el-table-column align="center" width="95" label="付款条件">
            <template slot-scope="scope">
              <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo10ss"></el-input>
              <span v-if="scope.$index != 0">{{ scope.row.paymentValue }}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" width="90" label="入库日期">
            <template slot-scope="scope">
              <el-date-picker
                size="mini"
                value-format="yyyy-MM-dd"
                v-if="scope.$index == 0"
                v-model="inputTwo11ss"
                type="date"
                placeholder="选择日期"
              ></el-date-picker>
              <span v-if="scope.$index != 0">{{ scope.row.godownDate }}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" label="采购员">
            <template slot-scope="scope">
              <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo12ss"></el-input>
              <span v-if="scope.$index != 0">{{ scope.row.buyerName }}</span>
            </template>
          </el-table-column>
        </el-table>

        <Pagination
          style="padding-top:10px;"
          @sizeChange="cgsizeChange"
          @currentChange="cgcurrentChange"
          :total="cgtotal"
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
  vendorNameDropDown,
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
      valuess3: "",
      itemNum: null,

      //   采购
      buyerInvoiceList: [],
      cgfz: 10,
      cgtotal: 0,
      value1ss: null,
      value2ss: null,
      value3ss: null,
      inputTwo1ss: null,
      inputTwo2ss: null,
      inputTwo3ss: null,
      inputTwo4ss: null,
      inputTwo5ss: null,
      inputTwo6ss: null,
      inputTwo7ss: null,
      inputTwo8ss: null,
      inputTwo9ss: null,
      inputTwo10ss: null,
      inputTwo11ss: null,
      inputTwo12ss: null
    };
  },
  methods: {
    tableRowClassName({ row, rowIndex }) {
      if (row.status == "待开进项") {
        return "blue-font";
      }
    },
    // 采购发票
    buyerInvoiceListFun(size, num) {
      let se = {};
      if (this.valuess3 != null) {
        var startTime = this.valuess3[0];
        var endTime = this.valuess3[1];
      }
      console.log(startTime);
      let buyerInvoiceListData = {
        num: size,
        page: num,
        invoiceNumber: this.inputTwo1ss,
        stockOutNumber: this.inputTwo2ss,
        supplierName: this.value1ss,
        taxRate: this.value2ss,
        originalModel: this.inputTwo3ss,
        number: this.inputTwo4ss,
        withTaxPrice: this.inputTwo5ss,
        withTaxTotalPrice: this.inputTwo6ss,
        issuedInvoice: this.inputTwo7ss,
        needIssuedInvoice: this.inputTwo8ss,
        issuedDate: this.inputTwo9ss,
        issuedStatus: this.value3ss,
        paymentValue: this.inputTwo10ss,
        godownDate: this.inputTwo11ss,
        buyerName: this.inputTwo12ss,
        startTime: startTime,
        endTime: endTime
      };
      buyerInvoiceList(buyerInvoiceListData).then(res => {
        this.buyerInvoiceList = res.result;
        this.buyerInvoiceList.list.unshift(se);
        this.cgtotal = this.buyerInvoiceList.total;
      });
    },
    search3() {
      this.buyerInvoiceListFun(this.czfy, 1);
    },
    //分页
    cgsizeChange(res) {
      this.buyerInvoiceListFun(res, 1);
      this.cgfy = res;
    },
    cgcurrentChange(res) {
      this.buyerInvoiceListFun(this.czfy, res);
    }
  },
  created() {
    //bus.on('xxx',() => { })
    this.buyerInvoiceListFun(10, 1);
    // 税率
    taxRate().then(res => {
      this.taxRate = res.result;
    });
    //   供应商名称
    vendorNameDropDown().then(res => {
      this.vendorNameDropDown = res.result;
    });
  }
};
</script>

<style lang='scss' src="./style.scss"></style>