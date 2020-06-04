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

    <!-- <el-dialog title="" :visible.sync="" width=""></el-dialog> -->
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
  taxRate,
  vendorNameDropDown
} from "../../api/finance";
export default {
  name: "",
  components: { Pagination },
  data() {
    return {
      total: 0,
      valuess1: "",
      valuess2: "",
      valuess3: "",
      inputTwo: "",
      value: "",
      options: [],

      itemNum: "",
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
      //   销售
      saleInvoiceList: [],
      xsfz: 10,
      xstotal: 0,
      value1s: null,
      value2s: null,
      value3s: null,
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
      inputTwo12ss: null,
      // 客户名称
      customerPullDown: null,
      //   供应商名称
      vendorNameDropDown: null,
      // 税率
      taxRate: null
    };
  },
  methods: {
    tableRowClassName({ row, rowIndex }) {
      if (row.status == "待开销项" || row.status == "待开进项") {
        return "blue-font";
      }
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
        console.log(res);
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
        console.log(res);
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
        console.log(res);
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
    // 开票申请接口
    this.invoiceListFun(10, 1);
    // 销售发票
    this.saleInvoiceListFun(10, 1);
    // 采购发票
    this.buyerInvoiceListFun(10, 1);
    // 税率
    taxRate().then(res => {
      this.taxRate = res.result;
    });
    // 客户名称
    customerPullDown().then(res => {
      this.customerPullDown = res.result;
    });
    //   供应商名称
    vendorNameDropDown().then(res => {
      this.vendorNameDropDown = res.result;
    });
  }
};
</script>

<style lang='scss' src="./style.scss"></style>