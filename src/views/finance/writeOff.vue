<template>
  <div class="finance">
    <!-- 待销账 -->
    <!-- <div class="being-write-off">

            <div style="display: flex;align-items: flex-end;">
                <div class="el-button--mini el-button title">待销账-到账单</div>
                <el-button size="mini" class="search">检索</el-button>
            </div>

            <div style="width: 1700px;padding-top:10px;">
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
                            <span v-if="scope.$index != 0" class="blue-decoration">{{ scope.row.salesOrderNumber }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                        align="center"
                        label="到账日期"
                        width="120">
                        <template slot-scope="scope">
                            <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo"></el-input>
                            <span v-if="scope.$index != 0">{{ scope.row.data }}</span>
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
                                <span v-if="scope.row.status == '待销账'" style="color:#41C363">{{ scope.row.status }}</span>
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
                                <span v-if="scope.row.orderStatus == '已出库'" style="color:#41C363">{{ scope.row.orderStatus }}</span>
                                <span v-else style="color:#f00">{{ scope.row.orderStatus }}</span>
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
                                size="mini" class="go-write-off" 
                                v-if="scope.row.orderStatus == '已出库'" 
                                @click="goWriteOff(scope.row.salesOrderNumber)">
                                    去销账
                                </el-button>
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
            </div>

    </div>-->
    <!-- 待销账 -->
    <!-- <div class="being-write-off">
      <div style="display: flex;align-items: flex-end;">
        <div class="el-button--mini el-button title">待销账-到账单</div>
        <el-button size="mini" class="search">检索</el-button>
      </div>

      <div style="width: 1700px;padding-top:10px;">
        <el-table border size="mini" :data="invoiceLinked.list" style="width: 100%">
          <el-table-column align="center" label="序号" width="45">
            <template slot-scope="scope">
              <span v-if="scope.$index == 0">No.</span>
              <span v-if="scope.$index != 0">{{ scope.$index }}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" label="到账单号" width="120">
            <template slot-scope="scope">
              <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwos1"></el-input>
              <span v-if="scope.$index != 0" class="blue-decoration">{{ scope.row.invoiceNumber }}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" label="到账日期" width="120">
            <template slot-scope="scope">
              <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwos2"></el-input>
              <span v-if="scope.$index != 0">{{ scope.row.creditDate }}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" width="265" label="付款公司名称">
            <template slot-scope="scope">
              <el-input
                style="width: 100%"
                v-if="scope.$index == 0"
                size="mini"
                v-model="inputTwos3"
              ></el-input>
              <span v-if="scope.$index != 0">{{ scope.row.paymentCompany }}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" width="75" label="财务科目">
            <template slot-scope="scope">
              <el-select v-if="scope.$index == 0" size="mini" v-model="values1" placeholder=" ">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
              <span v-if="scope.$index != 0">{{ scope.row.financialAccountName }}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" width="120" label="科目明细">
            <template slot-scope="scope">
              <el-select v-if="scope.$index == 0" size="mini" v-model="values2" placeholder=" ">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
              <span v-if="scope.$index != 0">{{ scope.row.accountDetailsName }}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" width="75" label="货币">
            <template slot-scope="scope">
              <el-select v-if="scope.$index == 0" size="mini" v-model="values3" placeholder=" ">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
              <span v-if="scope.$index != 0">{{ scope.row.arrivalBillCurrencyName }}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" width="120" label="金额">
            <template slot-scope="scope">
              <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwos4"></el-input>
              <span v-if="scope.$index != 0">{{ scope.row.amountCredited }}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" width="75" label="税率">
            <template slot-scope="scope">
              <el-select v-if="scope.$index == 0" size="mini" v-model="values4" placeholder=" ">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
              <span v-if="scope.$index != 0">{{ scope.row.taxRateName }}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" width="120" label="收款银行">
            <template slot-scope="scope">
              <el-select v-if="scope.$index == 0" size="mini" v-model="values5" placeholder=" ">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
              <span v-if="scope.$index != 0">{{ scope.row.bankName }}</span>
            </template>
          </el-table-column>
          <el-table-column width="100" align="center" label="收款单位">
            <template slot-scope="scope">
              <el-select v-if="scope.$index == 0" size="mini" v-model="values6" placeholder=" ">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
              <span v-if="scope.$index != 0">{{ scope.row.accountNumber }}</span>
            </template>
          </el-table-column>
          <el-table-column width="75" align="center" label="状态">
            <template slot-scope="scope">
              <el-select v-if="scope.$index == 0" size="mini" v-model="values7" placeholder=" ">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
              <span v-if="scope.$index != 0">
                <span style="color:#41C363">待销账</span>
              </span>
            </template>
          </el-table-column>
          <el-table-column width="75" align="center" label="订单状态">
            <template slot-scope="scope">
              <el-select v-if="scope.$index == 0" size="mini" v-model="values8" placeholder=" ">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
              <template v-if="scope.$index != 0">
                <span
                  v-if="scope.row.orderStatus == '5'"
                  style="color:#41C363"
                >{{ scope.row.orderStatus }}</span>
                <span v-else style="color:#f00">{{ scope.row.orderStatus }}</span>
              </template>
            </template>
          </el-table-column>
          <el-table-column width="75" align="center" label="操作">
            <template slot-scope="scope">
              <el-select v-if="scope.$index == 0" size="mini" v-model="values9" placeholder=" ">
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
                  class="go-write-off"
                  @click="goWriteOff(scope.row.salesOrderNumber)"
                >去销账</el-button>
              </template>
            </template>
          </el-table-column>
          <el-table-column width="100" align="center" label="录入人">
            <template slot-scope="scope">
              <el-select v-if="scope.$index == 0" size="mini" v-model="values10" placeholder=" ">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
              <span v-if="scope.$index != 0">{{ scope.row.creatorIdName }}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" label="录入日期">
            <template slot-scope="scope">
              <el-select v-if="scope.$index == 0" size="mini" v-model="values11" placeholder=" ">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
              <span v-if="scope.$index != 0">{{ scope.row.createTime }}</span>
            </template>
          </el-table-column>
        </el-table>

        <Pagination
          style="padding-top:10px;"
          @sizeChange="dxzsizeChange"
          @currentChange="dxzcurrentChange"
          :total="dxztotal"
        ></Pagination>
      </div>
    </div>-->
    <!-- 待销账 -->
    <div class="being-write-off">
      <div style="display: flex;align-items: flex-end;">
        <div class="el-button--mini el-button title">待销账-到账单</div>
        <el-button size="mini" class="search" @click="search">检索</el-button>
      </div>

      <div style="width: 1700px;padding-top:10px;">
        <el-table border size="mini" :data="invoiceLinked.list" style="width: 100%">
          <el-table-column align="center" label="序号" width="45">
            <template slot-scope="scope">
              <span v-if="scope.$index == 0">No.</span>
              <span v-if="scope.$index != 0">{{ scope.$index }}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" label="到账单号" width="120">
            <template slot-scope="scope">
              <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwos1"></el-input>
              <span v-if="scope.$index != 0" class="blue-decoration">{{ scope.row.invoiceNumber }}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" label="到账日期" width="120">
            <template slot-scope="scope">
              <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwos2"></el-input>
              <span v-if="scope.$index != 0">{{ scope.row.creditDate }}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" width="265" label="付款公司名称">
            <template slot-scope="scope">
              <el-input
                style="width: 100%"
                v-if="scope.$index == 0"
                size="mini"
                v-model="inputTwos3"
              ></el-input>
              <span v-if="scope.$index != 0">{{ scope.row.paymentCompany }}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" width="75" label="财务科目">
            <template slot-scope="scope">
              <el-select v-if="scope.$index == 0" size="mini" v-model="values1" placeholder=" ">
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
              <el-select v-if="scope.$index == 0" size="mini" v-model="values2" placeholder=" ">
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
              <el-select v-if="scope.$index == 0" size="mini" v-model="values3" placeholder=" ">
                <el-option
                  v-for="item in currencyCode"
                  :key="item.id"
                  :label="item.attrName"
                  :value="item.id"
                ></el-option>
              </el-select>
              <span v-if="scope.$index != 0">{{ scope.row.arrivalBillCurrencyName }}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" width="120" label="金额">
            <template slot-scope="scope">
              <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwos4"></el-input>
              <span v-if="scope.$index != 0">{{ scope.row.amountCredited }}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" width="75" label="税率">
            <template slot-scope="scope">
              <el-select v-if="scope.$index == 0" size="mini" v-model="values4" placeholder=" ">
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
              <el-select v-if="scope.$index == 0" size="mini" v-model="values5" placeholder=" ">
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
              <el-select v-if="scope.$index == 0" size="mini" v-model="values6" placeholder=" ">
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
              <el-select v-if="scope.$index == 0" size="mini" v-model="values7" placeholder=" ">
                <el-option
                  v-for="item in status"
                  :key="item.id"
                  :label="item.attrName"
                  :value="item.id"
                ></el-option>
              </el-select>
              <span v-if="scope.$index != 0">
                <span style="color:#41C363">待销账</span>
              </span>
            </template>
          </el-table-column>
          <el-table-column width="75" align="center" label="订单状态">
            <template slot-scope="scope">
              <el-select v-if="scope.$index == 0" size="mini" v-model="values8" placeholder=" ">
                <el-option
                  v-for="item in orderStatus"
                  :key="item.id"
                  :label="item.name"
                  :value="item.id"
                ></el-option>
              </el-select>
              <template v-if="scope.$index != 0">
                <span
                  v-if="scope.row.orderStatus == '5' ||scope.row.orderStatus == '6'"
                  style="color:#41C363"
                >已出库</span>
                <span v-else style="color:#f00">未出库</span>
              </template>
            </template>
          </el-table-column>
          <el-table-column width="75" align="center" label="操作">
            <template slot-scope="scope">
              <el-select v-if="scope.$index == 0" size="mini" v-model="values9" placeholder=" ">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
              <template v-if="scope.$index != 0">
                <el-button
                  v-if="scope.row.orderStatus == '5' ||scope.row.orderStatus == '6'"
                  size="mini"
                  class="go-write-off"
                  @click="goWriteOff(scope.row.salesOrderNumber)"
                >去销账</el-button>
              </template>
            </template>
          </el-table-column>
          <el-table-column width="100" align="center" label="录入人">
            <template slot-scope="scope">
              <el-select v-if="scope.$index == 0" size="mini" v-model="values10" placeholder=" ">
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
                v-model="values11"
                type="date"
                placeholder="选择日期"
              ></el-date-picker>
              <!-- <el-select v-if="scope.$index == 0" size="mini" v-model="values11" placeholder=" ">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>-->
              <span v-if="scope.$index != 0">{{ scope.row.createTime }}</span>
            </template>
          </el-table-column>
        </el-table>

        <Pagination
          style="padding-top:10px;"
          @sizeChange="dxzsizeChange"
          @currentChange="dxzcurrentChange"
          :total="dxztotal"
        ></Pagination>
      </div>
    </div>
    <el-dialog :title="itemNum + ' - 去销账'" :visible.sync="goWriteOffDialog" width="1850px">
      <go-write-off></go-write-off>
    </el-dialog>

    <!-- <el-select size="mini" v-model="testSelected" placeholder="3333333">
            <template v-if="optionsTest.length == 0">
                <el-option
                    :label="testValue"
                    :value="testSelected">
                </el-option>
            </template>
            <template v-else>
                <el-option
                    v-for="item in optionsTest"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
            </template>            
    </el-select>-->
  </div>
</template>

<script>
import bus from "@/assets/Bus";
import Pagination from "@/components/Pagination.vue";
import goWriteOff from "./popups/goWriteOff.vue";
import { invoiceLinked } from "../../api/finance";
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
  name: "",
  components: { Pagination, goWriteOff },
  data() {
    return {
      // testSelected: 23,
      // testValue: '测试内容',
      // optionsTest: [],
      invoiceLinked: [],
      total: 0,

      inputTwo: null,
      value: null,
      options: [],
      inputTwos1: null,
      inputTwos2: null,
      inputTwos3: null,
      inputTwos4: null,
      values1: null,
      values2: null,
      values3: null,
      values4: null,
      values5: null,
      values6: null,
      values7: null,
      values8: null,
      values9: null,
      values10: null,
      values11: null,
      //去销账
      goWriteOffDialog: false,
      itemNum: null,
      dxztotal: 10,
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
    goWriteOff(salesOrderNumber) {
      this.itemNum = salesOrderNumber;
      this.goWriteOffDialog = true;
    },
    //待销账接口
    invoiceLinkedFun(size, num) {
      let se = {};
      let invoiceLinkeddata = {
        pageSize: size,
        pageNum: num,
        status: 1,
        invoiceNumber: this.inputTwos1,
        creditDate: this.inputTwos2,
        paymentCompany: this.inputTwos3,
        financialAccount: this.values1,
        accountDetails: this.values2,
        arrivalBillCurrency: this.values3,
        amountCredited: this.inputTwos4,
        taxRate: this.values4,
        bank: this.values5,
        collectionUnit: this.values6,
        status: this.values7,
        orderStatus: this.values8,
        creatorIdName: this.values10,
        createTime: this.values11
      };
      invoiceLinked(invoiceLinkeddata).then(res => {
        this.invoiceLinked = res.result;
        this.invoiceLinked.list.unshift(se);
        this.dxztotal = this.invoiceLinked.total;
      });
    },
    // 待销账分页
    dxzsizeChange(res) {
      this.invoiceLinkedFun(res, 1);
      this.xzfy = res;
    },
    dxzcurrentChange(res) {
      this.invoiceLinkedFun(this.xzfy, res);
    },
    search() {
      this.invoiceLinkedFun(this.xzfy, 1);
    }
  },
  created() {
    //bus.on('xxx',() => { })
    // 待销账
    this.invoiceLinkedFun(10, 1);
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