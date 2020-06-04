<template>
  <div class="finance">
    <!-- 待关联 -->
    <!-- <div class="being-associate">
      <div style="display: flex;align-items: flex-end;">
        <div class="el-button--mini el-button title">到账单-待关联</div>
        <el-button size="mini" class="search">检索</el-button>
      </div>

      <div style="width: 1700px;padding-top:10px;">
        <el-table border size="mini" :data="inquirep" style="width: 100%">
          <el-table-column align="center" label="序号" width="45">
            <template slot-scope="scope">
              <span v-if="scope.$index == 0">No.</span>
              <span v-if="scope.$index != 0">{{ scope.$index }}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" label="到账单号" width="120">
            <template slot-scope="scope">
              <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo"></el-input>
              <span v-if="scope.$index != 0" class="blue-decoration">{{ scope.row.singleNumber }}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" label="到账日期" width="120">
            <template slot-scope="scope">
              <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo"></el-input>
              <span v-if="scope.$index != 0">{{ scope.row.creditDate }}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" width="265" label="付款公司名称">
            <template slot-scope="scope">
              <el-input style="width: 100%" v-if="scope.$index == 0" size="mini" v-model="inputTwo"></el-input>
              <span v-if="scope.$index != 0">{{ scope.row.place }}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" width="75" label="财务科目">
            <template slot-scope="scope">
              <el-select v-if="scope.$index == 0" size="mini" v-model="value" placeholder=" ">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
              <span v-if="scope.$index != 0">{{ scope.row.num }}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" width="120" label="科目明细">
            <template slot-scope="scope">
              <el-select v-if="scope.$index == 0" size="mini" v-model="value" placeholder=" ">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
              <span v-if="scope.$index != 0">{{ scope.row.letter }}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" width="75" label="货币">
            <template slot-scope="scope">
              <el-select v-if="scope.$index == 0" size="mini" v-model="value" placeholder=" ">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
              <span v-if="scope.$index != 0">{{ scope.row.letter }}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" width="120" label="金额">
            <template slot-scope="scope">
              <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo"></el-input>
              <span v-if="scope.$index != 0">{{ scope.row.num }}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" width="75" label="税率">
            <template slot-scope="scope">
              <el-select v-if="scope.$index == 0" size="mini" v-model="value" placeholder=" ">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
              <span v-if="scope.$index != 0">{{ scope.row.letter }}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" width="120" label="收款银行">
            <template slot-scope="scope">
              <el-select v-if="scope.$index == 0" size="mini" v-model="value" placeholder=" ">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
              <span v-if="scope.$index != 0">{{ scope.row.price }}</span>
            </template>
          </el-table-column>
          <el-table-column width="100" align="center" label="收款单位">
            <template slot-scope="scope">
              <el-select v-if="scope.$index == 0" size="mini" v-model="value" placeholder=" ">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
              <span v-if="scope.$index != 0">{{ scope.row.letter }}</span>
            </template>
          </el-table-column>
          <el-table-column width="75" align="center" label="状态">
            <template slot-scope="scope">
              <el-select v-if="scope.$index == 0" size="mini" v-model="value" placeholder=" ">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
              <span v-if="scope.$index != 0">
                <span v-if="scope.row.status == '待关联'" style="color:#41C363">{{ scope.row.status }}</span>
              </span>
            </template>
          </el-table-column>
          <el-table-column width="75" align="center" label="业务员">
            <template slot-scope="scope">
              <el-select v-if="scope.$index == 0" size="mini" v-model="value" placeholder=" ">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
              <span v-if="scope.$index != 0">{{ scope.row.letter }}</span>
            </template>
          </el-table-column>
          <el-table-column width="75" align="center" label="操作">
            <template slot-scope="scope">
              <el-select v-if="scope.$index == 0" size="mini" v-model="value" placeholder=" ">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
              <template v-if="scope.$index != 0">
                <el-button
                  @click="goAssociate(scope.row.item)"
                  size="mini"
                  v-if="scope.row.operating == '去关联'"
                  class="go-associate"
                >{{ scope.row.operating }}</el-button>
              </template>
            </template>
          </el-table-column>
          <el-table-column width="100" align="center" label="录入人">
            <template slot-scope="scope">
              <el-select v-if="scope.$index == 0" size="mini" v-model="value" placeholder=" ">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
              <span v-if="scope.$index != 0">{{ scope.row.data }}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" label="录入日期">
            <template slot-scope="scope">
              <el-select v-if="scope.$index == 0" size="mini" v-model="value" placeholder=" ">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
              <span v-if="scope.$index != 0">{{ scope.row.data }}</span>
            </template>
          </el-table-column>
        </el-table>

        <Pagination style="padding-top:10px;" :total="total"></Pagination>
      </div>
    </div>-->
    <div class="being-associate">
      <div style="display: flex;align-items: flex-end;">
        <div class="el-button--mini el-button title">到账单-待关联</div>
        <el-button size="mini" class="search" @click="search">检索</el-button>
      </div>

      <div style="width: 1700px;padding-top:10px;">
        <el-table border size="mini" :data="inquirep.list" style="width: 100%">
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
              <el-date-picker
                size="mini"
                value-format="yyyy-MM-dd"
                v-if="scope.$index == 0"
                v-model="inputTwo2"
                type="date"
                placeholder="选择日期"
              ></el-date-picker>
              <!-- <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo2"></el-input> -->
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
              <span v-if="scope.$index != 0">{{ scope.row.accountNumber }}</span>
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
                <span style="color:#41C363">待关联</span>
              </span>
            </template>
          </el-table-column>
          <el-table-column width="75" align="center" label="业务员">
            <template slot-scope="scope">
              <el-select v-if="scope.$index == 0" size="mini" v-model="value8" placeholder=" ">
                <el-option
                  v-for="item in salesman"
                  :key="item.value"
                  :label="item.salesman"
                  :value="item.salesman"
                ></el-option>
              </el-select>
              <span v-if="scope.$index != 0">{{ scope.row.salesman }}</span>
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
                <el-button @click="goAssociate(scope.row.item)" size="mini" class="go-associate">
                  <!-- {{ scope.row.operating }} -->
                  去关联
                </el-button>
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
              <span v-if="scope.$index != 0">{{ scope.row.creatorIdName }}</span>
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
          style="padding-top:10px;"
          @sizeChange="dglsizeChange"
          @currentChange="dglcurrentChange"
          :total="dgltotal"
        ></Pagination>
      </div>
    </div>
    <el-dialog title="到账单 - 新增" :visible.sync="arriveNewDialog" width="1040px">
      <arriveNew
        :financialAccount="financialAccount"
        :accountDetails="accountDetails"
        :taxRate="taxRate"
        :bank="bank"
        :selectunit="selectunit"
      ></arriveNew>
    </el-dialog>

    <el-dialog :title="itemNum + ' - 去关联'" :visible.sync="goAssociateDialog" width="1850px">
      <go-associate></go-associate>
    </el-dialog>
  </div>
</template>

<script>
import bus from "@/assets/Bus";
import Pagination from "@/components/Pagination.vue";
import goAssociate from "./popups/goAssociate.vue";
import arriveNew from "./popups/arriveNew.vue";
import { inquirep } from "../../api/finance";
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
  components: { Pagination, goAssociate, arriveNew },
  data() {
    return {
      dgltotal: 0,
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
      arriveNewDialog: false,

      goAssociateDialog: false,
      itemNum: null,

      inputTwo: null,
      value: null,
      options: [],
      inquirep: [],
      fenye: 0,
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
      salesman: null
    };
  },
  methods: {
    //去关联
    goAssociate(itemnum) {
      this.itemNum = itemnum;
      this.goAssociateDialog = true;
    },
    // 未关联
    inquirepFun(size, num) {
      let da = {};
      let inqData = {
        pageNum: num,
        pageSize: size,
        status: 0,
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
        salesman: this.value8,
        creatorId: this.value10,
        createTime: this.value11
      };
      inquirep(inqData).then(res => {
        this.inquirep = res.result;
        this.dgltotal = this.inquirep.total;
        this.inquirep.list.unshift(da);
      });
    },
    // 搜索
    search() {
      this.inquirepFun(this.fenye, 1);
    },
    // 待关联分页
    dglsizeChange(res) {
      this.inquirepFun(res, 1);
      this.fenye = res;
    },
    dglcurrentChange(res) {
      this.inquirepFun(this.fenye, res);
    }
  },
  created() {
    bus.$on("arriveNew", () => {
      this.arriveNewDialog = true;
    });

    // 未关联接口
    this.inquirepFun(10, 1);
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