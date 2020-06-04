<template>
  <div class="finance">
    <!-- 全部 -->
    <div>
      <div style="display: flex;align-items: flex-end;">
        <div class="el-button--mini el-button title" style="background: #99CC00">到账单-全部</div>
        <el-button size="mini" class="search" @click="search">检索</el-button>
      </div>

      <div style="width: 1700px;padding-top:10px;">
        <el-table
          border
          size="mini"
          :data="allBills.list"
          style="width: 100%"
          :row-class-name="tableRowClassName"
        >
          <el-table-column align="center" label="序号" width="45">
            <template slot-scope="scope">
              <span v-if="scope.$index == 0">No.</span>
              <span v-if="scope.$index != 0">{{ scope.$index }}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" label="到账单号" width="120">
            <template slot-scope="scope">
              <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo1"></el-input>
              <span v-if="scope.$index != 0" class="blue-decoration">{{ scope.row.singleNumber }}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" label="到账日期" width="120">
            <template slot-scope="scope">
              <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo2"></el-input>
              <span v-if="scope.$index != 0">{{ scope.row.creditDate }}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" width="265" label="付款公司名称">
            <template slot-scope="scope">
              <el-input
                style="width: 100%"
                v-if="scope.$index == 0"
                size="mini"
                v-model="inputTwo3"
              ></el-input>
              <span v-if="scope.$index != 0">{{ scope.row.paymentCustomer }}</span>
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
              <span v-if="scope.$index != 0">{{ scope.row.financialAccountName }}</span>
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
              <span v-if="scope.$index != 0">{{ scope.row.accountDetailsName }}</span>
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
              <span v-if="scope.$index != 0">{{ scope.row.currencyName }}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" width="120" label="金额">
            <template slot-scope="scope">
              <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo4"></el-input>
              <span v-if="scope.$index != 0">{{ scope.row.amountCredited }}</span>
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
          <el-table-column align="center" width="120" label="收款银行">
            <template slot-scope="scope">
              <el-select v-if="scope.$index == 0" size="mini" v-model="value5" placeholder=" ">
                <el-option
                  v-for="item in bank"
                  :key="item.id"
                  :label="item.attrName"
                  :value="item.id"
                ></el-option>
              </el-select>
              <span v-if="scope.$index != 0">{{ scope.row.bankName }}</span>
            </template>
          </el-table-column>
          <el-table-column width="100" align="center" label="收款单位">
            <template slot-scope="scope">
              <el-select v-if="scope.$index == 0" size="mini" v-model="value6" placeholder=" ">
                <el-option
                  v-for="item in selectunit"
                  :key="item.id"
                  :label="item.bankName"
                  :value="item.id"
                ></el-option>
              </el-select>
              <span v-if="scope.$index != 0">{{ scope.row.collectionUnitName }}</span>
            </template>
          </el-table-column>
          <el-table-column width="75" align="center" label="状态">
            <template slot-scope="scope">
              <el-select v-if="scope.$index == 0" size="mini" v-model="value7" placeholder=" ">
                <el-option
                  v-for="item in status"
                  :key="item.id"
                  :label="item.attrName"
                  :value="item.id"
                ></el-option>
              </el-select>
              <span v-if="scope.$index != 0">
                <span v-if="scope.row.status == '1'" style="color:#41C363">待销账</span>
                <span v-if="scope.row.status == '0'" style="color:#41C363">待关联</span>
                <span v-if="scope.row.status == '2'">已销账</span>
              </span>
            </template>
          </el-table-column>
          <el-table-column width="75" align="center" label="订单状态">
            <template slot-scope="scope">
              <el-select v-if="scope.$index == 0" size="mini" v-model="value8" placeholder=" ">
                <el-option
                  v-for="item in orderStatus"
                  :key="item.id"
                  :label="item.name"
                  :value="item.id"
                ></el-option>
              </el-select>
              <template v-if="scope.$index != 0">
                <span
                  v-if="scope.row.orderStatus != '5' && scope.row.orderStatus != '6'"
                  style="color:#ff0000"
                >未出库</span>
                <span v-else-if="scope.row.status == '2' && scope.row.orderStatus == '5'">已出库</span>
                <span v-else style="color:#41C363">{{ scope.row.order }}</span>
              </template>
            </template>
          </el-table-column>
          <el-table-column width="75" align="center" label="操作">
            <template slot-scope="scope">
              <el-select v-if="scope.$index == 0" size="mini" v-model="value9" placeholder=" ">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
              <template v-if="scope.$index != 0">
                <el-button
                  size="mini"
                  class="go-associate"
                  v-if="scope.row.status == '0'"
                  @click="goAssociate(scope.row.item)"
                >去关联</el-button>
                <el-button
                  size="mini"
                  class="go-write-off"
                  v-else-if="scope.row.status == '1'"
                  @click="goWriteOff(scope.row.item)"
                >去销账</el-button>
                <span
                  class="green-decoration"
                  v-else-if="scope.row.status == '2' && scope.row.orderStatus == '5'"
                  @click="writeOffDetail(scope.row.item)"
                >销账明细</span>
              </template>
            </template>
          </el-table-column>
          <el-table-column width="100" align="center" label="录入人">
            <template slot-scope="scope">
              <el-select v-if="scope.$index == 0" size="mini" v-model="value10" placeholder=" ">
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
                v-if="scope.$index == 0"
                value-format="yyyy-MM-dd"
                v-model="value11"
                type="date"
                placeholder="选择日期"
              ></el-date-picker>
              <!-- <el-select v-if="scope.$index == 0" size="mini" v-model="value11" placeholder=" ">
                                <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
              </el-select>-->
              <span v-if="scope.$index != 0">{{ scope.row.createTime }}</span>
            </template>
          </el-table-column>
        </el-table>

        <Pagination
          @sizeChange="dxzsizeChange"
          @currentChange="dxzcurrentChange"
          style="padding-top:10px;"
          :total="alltotal"
        ></Pagination>
      </div>
    </div>

    <el-dialog :title="itemNum + ' - 去关联'" :visible.sync="goAssociateDialog" width="1850px">
      <go-associate></go-associate>
    </el-dialog>

    <el-dialog :title="itemNum + ' - 去销账'" :visible.sync="goWriteOffDialog" width="1850px">
      <go-write-off></go-write-off>
    </el-dialog>

    <el-dialog :title="itemNum + ' - 销账明细'" :visible.sync="writeOffDetailDialog" width="1850px">
      <go-write-off></go-write-off>
    </el-dialog>
  </div>
</template>

<script>
import bus from "@/assets/Bus";
import Pagination from "@/components/Pagination.vue";
import goAssociate from "./popups/goAssociate.vue";
import goWriteOff from "./popups/goWriteOff.vue";
import { allBills } from "../../api/finance";
// 下拉接口
import {
  financialAccount,
  accountDetails,
  currencyCode,
  taxRate,
  bank,
  selectData,
  selectunit,
  salesman
} from "../../api/finance";

export default {
  name: "associate",
  components: { Pagination, goAssociate, goWriteOff },
  data() {
    return {
      alltotal: 0,

      inputTwo: null,
      value: null,
      options: [],
      allBills: [],
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
      value7: null,
      value8: null,
      value9: null,
      value10: null,
      value11: null,
      itemNum: null,

      //去关联
      goAssociateDialog: false,

      //去销账
      goWriteOffDialog: false,

      //销账明细
      writeOffDetailDialog: false,
      size: 10,
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
          attrName: "待销账"
        },
        {
          id: 2,
          attrName: "已销账"
        }
      ],
      //   录入人
      selectData: null,
      // 收款单位
      selectunit: null,
      // 业务员
      salesman: null,
      orderStatus: [
        { id: 5, name: "已出库" },
        { id: 4, name: "未出库" }
      ]
    };
  },
  methods: {
    //蓝底
    tableRowClassName({ row, rowIndex }) {
      if (row.status == "待关联") {
        return "associate-back";
      }
      return "";
    },
    //去关联
    goAssociate(itemnum) {
      this.itemNum = itemnum;
      this.goAssociateDialog = true;
    },
    //去销账
    goWriteOff(salesOrderNumber) {
      this.itemNum = salesOrderNumber;
      this.goWriteOffDialog = true;
    },
    //销账明细
    writeOffDetail(salesOrderNumber) {
      this.itemNum = salesOrderNumber;
      this.writeOffDetailDialog = true;
    },
    // 全部到账单接口
    allBillsFun(num, size) {
      let data = {
        pageNum: num,
        pageSize: size,
        singleNumber: this.inputTwo1,
        creditDate: this.inputTwo2,
        paymentCustomer: this.inputTwo3,
        financialAccount: this.value1,
        accountDetails: this.value2,
        currency: this.value3,
        amountCredited: this.inputTwo4,
        taxRate: this.value4,
        bank: this.value5,
        collectionUnit: this.value6,
        status: this.value7,
        orderStatus: this.value8,
        creatorId: this.value10,
        createTime: this.value11
      };
      let da = {};
      allBills(data).then(res => {
        this.allBills = res.result;
        this.alltotal = res.result.total;
        this.allBills.list.unshift(da);
      });
    },
    search() {
      this.allBillsFun(1, this.size);
    },
    // 分页
    dxzsizeChange(data) {
      this.allBillsFun(1, data);
      this.size = data;
    },
    dxzcurrentChange(data) {
      this.allBillsFun(data, this.size);
    }
  },
  created() {
    this.allBillsFun(1, 10);
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
    // 收款单位
    selectunit().then(res => {
      this.selectunit = res.result;
    });
    // 业务员
    salesman().then(res => {
      this.salesman = res.result;
    });
  }
};
</script>

<style lang='scss' src="./style.scss"></style>