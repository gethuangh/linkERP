<template>
  <div class="finance">
    <div>
      <div style="display: flex;align-items: flex-end;">
        <div class="el-button--mini el-button title" style="background: #3366FF">付款单-全部</div>
        <el-button size="mini" class="search" @click="search">检索</el-button>
      </div>

      <!-- <div style="width: 1700px;padding-top:10px;">
                <el-table
                    border size="mini"
                    :data="tableDataOne"
                    style="width: 100%">
                    <el-table-column
                        align="center"
                        label="序号"
                        width="45">
                        <template slot-scope="scope">
                            <span v-if="scope.$index == 0" >No.</span>
                            <span v-if="scope.$index != 0">{{ scope.$index }}</span>                        
                        </template>
                    </el-table-column>
                    <el-table-column
                        align="center"
                        label="到账单号"
                        width="120">
                        <template slot-scope="scope">
                            <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo"></el-input>
                            <span v-if="scope.$index != 0" class="blue-decoration">{{ scope.row.payOrderNum }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                        align="center"
                        label="到账日期"
                        width="120">
                        <template slot-scope="scope">
                            <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo"></el-input>
                            <span v-if="scope.$index != 0">{{ scope.row.letter }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                        align="center"
                        width="265"
                        label="付款公司名称">
                        <template slot-scope="scope">
                            <el-input style="width: 100%" v-if="scope.$index == 0" size="mini" v-model="inputTwo"></el-input>
                            <span v-if="scope.$index != 0">{{ scope.row.place }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                        align="center"
                        width="75"
                        label="财务科目">
                        <template slot-scope="scope">
                            <el-select v-if="scope.$index == 0" size="mini" v-model="value" placeholder=" ">
                                <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                            <span v-if="scope.$index != 0">{{ scope.row.num }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                        align="center"
                        width="120"
                        label="科目明细">
                        <template slot-scope="scope">
                            <el-select v-if="scope.$index == 0" size="mini" v-model="value" placeholder=" ">
                                <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                            <span v-if="scope.$index != 0">{{ scope.row.letter }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                        align="center"
                        width="75"
                        label="货币">
                        <template slot-scope="scope">
                            <el-select v-if="scope.$index == 0" size="mini" v-model="value" placeholder=" ">
                                <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                            <span v-if="scope.$index != 0">{{ scope.row.letter }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                        align="center"
                        width="120"
                        label="金额">
                        <template slot-scope="scope">
                            <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo"></el-input>
                            <span v-if="scope.$index != 0">{{ scope.row.num }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                        align="center"
                        width="75"
                        label="税率">
                        <template slot-scope="scope">
                            <el-select v-if="scope.$index == 0" size="mini" v-model="value" placeholder=" ">
                                <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                            <span v-if="scope.$index != 0">{{ scope.row.letter }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                        align="center"
                        width="120"
                        label="收款银行">
                        <template slot-scope="scope">
                            <el-select v-if="scope.$index == 0" size="mini" v-model="value" placeholder=" ">
                                <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                            <span v-if="scope.$index != 0">{{ scope.row.price }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                        width="100"
                        align="center"
                        label="收款单位">
                        <template slot-scope="scope">
                            <el-select v-if="scope.$index == 0" size="mini" v-model="value" placeholder=" ">
                                <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                            <span v-if="scope.$index != 0">{{ scope.row.letter }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                        width="75"
                        align="center"
                        label="状态">
                        <template slot-scope="scope">
                            <el-select v-if="scope.$index == 0" size="mini" v-model="value" placeholder=" ">
                                <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                            <span v-if="scope.$index != 0">
                                <span v-if="scope.row.status == '待冲账'" style="color:#41C363">{{ scope.row.status }}</span>
                                <span v-else>{{ scope.row.status }}</span>
                            </span>
                        </template>
                    </el-table-column>
                    <el-table-column
                        width="75"
                        align="center"
                        label="订单状态">
                        <template slot-scope="scope">
                            <el-select v-if="scope.$index == 0" size="mini" v-model="value" placeholder=" ">
                                <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                            <template v-if="scope.$index != 0">                                
                                <span v-if="scope.row.status == '已冲账' && scope.row.order == '已入库'">{{ scope.row.order }}</span>
                                <span v-else-if="scope.row.order == '未入库'" style="color:#f00">{{ scope.row.order }}</span>
                                <span v-else style="color:#41C363">{{ scope.row.order }}</span>
                            </template>                            
                        </template>
                    </el-table-column>
                    <el-table-column
                        width="75"
                        align="center"
                        label="操作">
                        <template slot-scope="scope">
                            <el-select v-if="scope.$index == 0" size="mini" v-model="value" placeholder=" ">
                                <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                            <template v-if="scope.$index != 0">
                                <el-button 
                                size="mini" class="go-offset"
                                v-if="scope.row.operating == '去冲账'" 
                                @click="goOffset(scope.row.payOrderNum)">
                                    {{ scope.row.operating }}
                                </el-button>
                                <span 
                                v-else-if="scope.row.operating == '冲账明细'" 
                                class="green-decoration"
                                @click="offsetDetail(scope.row.payOrderNum)">
                                    {{ scope.row.operating }}
                                </span>
                            </template>
                            
                        </template>
                    </el-table-column>
                    <el-table-column
                        width="100"
                        align="center"
                        label="录入人">
                        <template slot-scope="scope">
                            <el-select v-if="scope.$index == 0" size="mini" v-model="value" placeholder=" ">
                                <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                            <span v-if="scope.$index != 0">{{ scope.row.data }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                        align="center"
                        label="录入日期">
                        <template slot-scope="scope">
                            <el-select v-if="scope.$index == 0" size="mini" v-model="value" placeholder=" ">
                                <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                            <span v-if="scope.$index != 0">{{ scope.row.data }}</span>
                        </template>
                    </el-table-column>
                </el-table>

                <Pagination style="padding-top:10px;" :total="total"></Pagination>
      </div>-->

      <div style="width: 1700px;padding-top:10px;">
        <el-table border size="mini" :data="receiptreceipt.list" style="width: 100%">
          <el-table-column align="center" label="序号" width="45">
            <template slot-scope="scope">
              <span v-if="scope.$index == 0">No.</span>
              <span v-if="scope.$index != 0">{{ scope.$index }}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" label="到账单号" width="120">
            <template slot-scope="scope">
              <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwoss1"></el-input>
              <span v-if="scope.$index != 0" class="blue-decoration">{{ scope.row.idsingleNumber }}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" label="到账日期" width="120">
            <template slot-scope="scope">
              <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwoss2"></el-input>
              <span v-if="scope.$index != 0">{{ scope.row.paymentDate }}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" width="265" label="收款公司名称">
            <template slot-scope="scope">
              <el-input
                style="width: 100%"
                v-if="scope.$index == 0"
                size="mini"
                v-model="inputTwoss3"
              ></el-input>
              <span v-if="scope.$index != 0">{{ scope.row.username }}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" width="75" label="财务科目">
            <template slot-scope="scope">
              <el-select v-if="scope.$index == 0" size="mini" v-model="valuess1" placeholder=" ">
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
              <el-select v-if="scope.$index == 0" size="mini" v-model="valuess2" placeholder=" ">
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
              <el-select v-if="scope.$index == 0" size="mini" v-model="valuess3" placeholder=" ">
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
              <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwoss4"></el-input>
              <span v-if="scope.$index != 0">{{ scope.row.paymentAmount }}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" width="75" label="税率">
            <template slot-scope="scope">
              <el-select v-if="scope.$index == 0" size="mini" v-model="valuess4" placeholder=" ">
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
          <el-table-column align="center" width="120" label="付款银行">
            <template slot-scope="scope">
              <el-select v-if="scope.$index == 0" size="mini" v-model="valuess5" placeholder=" ">
                <el-option
                  v-for="item in bank"
                  :key="item.id"
                  :label="item.attrName"
                  :value="item.id"
                ></el-option>
              </el-select>
              <span v-if="scope.$index != 0">{{ scope.row.paymentBankName }}</span>
            </template>
          </el-table-column>
          <el-table-column width="100" align="center" label="付款单位">
            <template slot-scope="scope">
              <el-select v-if="scope.$index == 0" size="mini" v-model="valuess6" placeholder=" ">
                <el-option
                  v-for="item in selectunit"
                  :key="item.id"
                  :label="item.bankName"
                  :value="item.id"
                ></el-option>
              </el-select>
              <span v-if="scope.$index != 0">{{ scope.row.receivablesCompany }}</span>
            </template>
          </el-table-column>
          <el-table-column width="75" align="center" label="状态">
            <template slot-scope="scope">
              <el-select v-if="scope.$index == 0" size="mini" v-model="valuess7" placeholder=" ">
                <el-option
                  v-for="item in status"
                  :key="item.id"
                  :label="item.attrName"
                  :value="item.id"
                ></el-option>
              </el-select>
              <span v-if="scope.$index != 0">
                <span v-if="scope.row.isOffset == '1'" style="color:#41C363">待冲账</span>
                <span v-else>已冲账</span>
              </span>
            </template>
          </el-table-column>
          <el-table-column width="75" align="center" label="订单状态">
            <template slot-scope="scope">
              <el-select v-if="scope.$index == 0" size="mini" v-model="valuess8" placeholder=" ">
                <el-option
                  v-for="item in orderStatus"
                  :key="item.id"
                  :label="item.name"
                  :value="item.id"
                ></el-option>
              </el-select>
              <template v-if="scope.$index != 0">
                <span
                  v-if="scope.row.orderStatus == '0' && scope.row.orderStatus == '1' && scope.row.orderStatus == '2'"
                  style="color:#f00"
                >未入库</span>
                <span v-else style="color:#41C363">已入库</span>
              </template>
            </template>
          </el-table-column>
          <el-table-column width="75" align="center" label="操作">
            <template slot-scope="scope">
              <el-select v-if="scope.$index == 0" size="mini" v-model="valuess9" placeholder=" ">
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
                  class="go-offset"
                  v-if="scope.row.isOffset == '1' || scope.row.orderStatus=='3'"
                  @click="goOffset(scope.row.payOrderNum)"
                >去冲账</el-button>
                <span
                  v-else-if="scope.row.isOffset!='1'"
                  class="green-decoration"
                  @click="offsetDetail(scope.row.payOrderNum)"
                >冲账明细</span>
              </template>
            </template>
          </el-table-column>
          <el-table-column width="100" align="center" label="录入人">
            <template slot-scope="scope">
              <el-select v-if="scope.$index == 0" size="mini" v-model="valuess10" placeholder=" ">
                <el-option
                  v-for="item in selectData"
                  :key="item.id"
                  :label="item.realName"
                  :value="item.id"
                ></el-option>
              </el-select>
              <span v-if="scope.$index != 0">{{ scope.row.realName }}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" label="录入日期">
            <template slot-scope="scope">
              <el-date-picker
                size="mini"
                v-if="scope.$index == 0"
                value-format="yyyy-MM-dd"
                v-model="valuess11"
                type="date"
                placeholder="选择日期"
              ></el-date-picker>
              <!-- <el-select v-if="scope.$index == 0" size="mini" v-model="valuess11" placeholder=" ">
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
          @sizeChange="xzsizeChange"
          @currentChange="xzcurrentChange"
          :total="fkztotal"
        ></Pagination>
      </div>
    </div>

    <el-dialog :title="itemNum + ' - 去冲账'" :visible.sync="goOffsetDialog" width="1700px">
      <go-offset></go-offset>
    </el-dialog>

    <el-dialog :title="itemNum + ' - 冲账明细'" :visible.sync="offsetDetailDialog" width="1700px">
      <offsetDetail></offsetDetail>
    </el-dialog>
  </div>
</template>

<script>
import bus from "@/assets/Bus";
import Pagination from "@/components/Pagination.vue";
import goOffset from "./popups/goOffset.vue";
import offsetDetail from "./popups/offsetDetail.vue";
import { receiptreceipt } from "../../api/finance";
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
  customerPullDown
} from "../../api/finance";
export default {
  name: "",
  components: { Pagination, goOffset, offsetDetail },
  data() {
    return {
      inputTwoss1: null,
      inputTwoss2: null,
      inputTwoss3: null,
      inputTwoss4: null,
      itemNum: null,
      goOffsetDialog: false,
      offsetDetailDialog: false,
      valuess1: null,
      valuess2: null,
      valuess3: null,
      valuess4: null,
      valuess5: null,
      valuess6: null,
      valuess7: null,
      valuess8: null,
      valuess9: null,
      valuess10: null,
      valuess11: null,
      inputTwo: null,
      value: "",
      options: [],
      receiptreceipt: [],
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
      //   录入人
      selectData: null,
      // 收款单位
      selectunit: null,
      // 业务员
      salesman: null,
      // 客户名称
      customerPullDown: null,
      orderStatus: [
        { id: 3, name: "已入库" },
        { id: 2, name: "未入库" }
      ]
    };
  },
  methods: {
    goOffset(itemNum) {
      this.itemNum = itemNum;
      this.goOffsetDialog = true;
    },
    offsetDetail(itemNum) {
      this.itemNum = itemNum;
      this.offsetDetailDialog = true;
    },
    // 待冲账接口
    receiptreceiptFun(size, num) {
      let se = {};
      let receiptreceiptData = {
        pageSize: size,
        pageNum: num,
        idsingleNumber: this.inputTwoss1,
        paymentDate: this.inputTwoss2,
        receivablesCompany: this.inputTwoss3,
        financialAccount: this.valuess1,
        accountDetails: this.valuess2,
        currency: this.valuess3,
        paymentAmount: this.inputTwoss4,
        taxRate: this.valuess4,
        paymentBank: this.valuess5,
        paymentUnit: this.valuess6,
        isOffset: this.valuess7,
        orderStatus: this.valuess8,
        creatorId: this.valuess10,
        createTime: this.valuess11
      };
      receiptreceipt(receiptreceiptData).then(res => {
        this.receiptreceipt = res.result;
        this.fkztotal = this.receiptreceipt.total;
        this.receiptreceipt.list.unshift(se);
      });
    },
    search() {
      this.receiptreceiptFun(this.czfy, 1);
    },
    // 带冲账分页
    xzsizeChange(res) {
      this.receiptreceiptFun(res, 1);
      this.czfy = res;
    },
    xzcurrentChange(res) {
      this.receiptreceiptFun(this.czfy, res);
    }
  },
  created() {
    //bus.on('xxx',() => { })
    this.receiptreceiptFun(10, 1);
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
    // 客户名称
    customerPullDown().then(res => {
      this.customerPullDown = res.result;
    });
  }
};
</script>

<style lang='scss' src="./style.scss"></style>