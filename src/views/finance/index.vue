<template>
  <div class="finance">
    <!-- 待关联 -->
    <div class="being-associate">
      <div style="display: flex;align-items: flex-end;">
        <div class="el-button--mini el-button title">待关联-到账单</div>
        <el-button size="mini" class="search">检索</el-button>
      </div>

      <div style="width: 1700px;padding-top:10px;">
        <el-table border size="mini" :data="productlist.list" style="width: 100%">
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
              <el-select
                @change="financialAccountfun"
                v-if="scope.$index == 0"
                size="mini"
                v-model="value1"
                placeholder=" "
              >
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
                value-format="yyyy-MM-dd"
                v-if="scope.$index == 0"
                v-model="value11"
                type="date"
                placeholder="选择日期"
              ></el-date-picker>
              <!-- <el-select v-if="scope.$index == 0" size="mini" v-model="value11" placeholder=" ">
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
          @sizeChange="dglsizeChange"
          @currentChange="dglcurrentChange"
          :total="dgltotal"
        ></Pagination>
      </div>
    </div>

    <!-- 待销账 -->
    <div class="being-write-off">
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
                  v-for="item in financialAccount"
                  :key="item.id"
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
                  v-for="item in orderStatuss"
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
              <!-- <el-select v-if="scope.$index == 0" size="mini" v-model="values11" placeholder=" ">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>-->
              <el-date-picker
                size="mini"
                v-if="scope.$index == 0"
                v-model="values11"
                type="date"
                placeholder="选择日期"
              ></el-date-picker>
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

    <!-- 待冲账 -->
    <div class="being-offset">
      <div style="display: flex;align-items: flex-end;">
        <div class="el-button--mini el-button title">待冲账-付款单</div>
        <el-button size="mini" class="search">检索</el-button>
      </div>

      <div style="width: 1700px;padding-top:10px;">
        <el-table border size="mini" :data="linkedPaymentSlip.list" style="width: 100%">
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
          <el-table-column align="center" width="265" label="付款公司名称">
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
                  :key="item.id"
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
          <el-table-column align="center" width="120" label="收款银行">
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
          <el-table-column width="100" align="center" label="收款单位">
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
                <span v-if="scope.row.orderStatus == '3'" style="color:#41C363">已入库</span>
                <span v-else-if="scope.row.orderStatus != '3' &&'4'" style="color:#ff0000">未入库</span>
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
                  v-if="scope.row.orderStatus == '3'"
                  class="go-offset"
                  @click="goOffset(scope.row.item)"
                >去冲账</el-button>
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
                v-model="valuess11"
                type="date"
                placeholder="选择日期"
              ></el-date-picker>
              <!-- <el-select v-if="scope.$index == 0" size="mini" v-model="valuess11" placeholder=" ">
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
          @sizeChange="xzsizeChange"
          @currentChange="xzcurrentChange"
          :total="fkztotal"
        ></Pagination>
      </div>
    </div>

    <el-dialog :title="itemNum + ' - 去关联'" :visible.sync="goAssociateDialog" width="1850px">
      <go-associate></go-associate>
    </el-dialog>

    <el-dialog :title="itemNum + ' - 去销账'" :visible.sync="goWriteOffDialog" width="1850px">
      <go-write-off></go-write-off>
    </el-dialog>

    <el-dialog :title="itemNum + ' - 去冲账'" :visible.sync="goOffsetDialog" width="1700px">
      <go-offset></go-offset>
    </el-dialog>
  </div>
</template>

<script>
import bus from "@/assets/Bus";
import Pagination from "@/components/Pagination.vue";
import goAssociate from "./popups/goAssociate.vue";
import goWriteOff from "./popups/goWriteOff.vue";
import goOffset from "./popups/goOffset.vue";
import {
  productlist,
  invoiceLinked,
  linkedPaymentSlip
} from "../../api/finance";
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
  name: "finance",
  components: { Pagination, goAssociate, goWriteOff, goOffset },
  data() {
    return {
      fkztotal: 0,
      dxztotal: 0,
      dgltotal: 0,
      total: 0,
      inputTwo: null,
      value: null,
      inputTwo1: null,
      inputTwo2: null,
      inputTwo3: null,
      inputTwo4: null,
      inputTwoss1: null,
      inputTwoss2: null,
      inputTwoss3: null,
      inputTwoss4: null,
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
      values12: null,
      options: [],

      itemNum: null,

      //去关联
      goAssociateDialog: false,
      productlist: [{}],

      //去销账
      goWriteOffDialog: false,
      invoiceLinked: [],

      //去冲账
      goOffsetDialog: false,
      linkedPaymentSlip: [],
      fenye: 10,
      xzfy: 10,
      czfy: 10,

      // 下拉
      // 财务科目
      financialAccount: "",
      // 科目明细
      accountDetails: "",
      // 货币
      currencyCode: "",
      // 税率
      taxRate: "",
      // 银行
      bank: "",
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
      selectData: "",
      // 收款单位
      selectunit: "",
      // 业务员
      salesman: "",
      orderStatus: [
        { id: 3, name: "已入库" },
        { id: 2, name: "未入库" }
      ],
      orderStatuss: [
        { id: 5, name: "已出库" },
        { id: 4, name: "未出库" }
      ]
    };
  },
  methods: {
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
    //去冲账
    goOffset(item) {
      this.itemNum = item;
      this.goOffsetDialog = true;
    },
    // 待关联接口
    productlistFun(res, num) {
      // pageSize
      // pageNum 页数
      let se = {};
      let productlistdata = { pageSize: res, pageNum: num, status: 0 };
      productlist(productlistdata).then(res => {
        this.productlist = res.result;
        this.productlist.list.unshift(se);
        this.dgltotal = this.productlist.total;
      });
    },
    //待销账接口
    invoiceLinkedFun(size, num) {
      let se = {};
      let invoiceLinkeddata = { pageSize: size, pageNum: num, status: 1 };
      invoiceLinked(invoiceLinkeddata).then(res => {
        this.invoiceLinked = res.result;
        this.invoiceLinked.list.unshift(se);
        this.dxztotal = this.invoiceLinked.total;
      });
    },
    // 待冲账接口
    linkedPaymentSlipFun(size, num) {
      let se = {};
      let linkedPaymentSlipData = { pageSize: size, pageNum: num, isOffset: 1 };
      linkedPaymentSlip(linkedPaymentSlipData).then(res => {
        this.linkedPaymentSlip = res.result;
        this.fkztotal = this.linkedPaymentSlip.total;
        this.linkedPaymentSlip.list.unshift(se);
      });
    },
    // 待关联分页
    dglsizeChange(res) {
      this.productlistFun(res, 1);
      this.fenye = res;
    },
    dglcurrentChange(res) {
      this.productlistFun(this.fenye, res);
    },

    // 待销账分页
    dxzsizeChange(res) {
      this.invoiceLinkedFun(res, 1);
      this.xzfy = res;
    },
    dxzcurrentChange(res) {
      this.invoiceLinkedFun(this.xzfy, res);
    },

    // 带冲账分页
    xzsizeChange(res) {
      this.linkedPaymentSlipFun(res, 1);
      this.czfy = res;
    },
    xzcurrentChange(res) {
      this.linkedPaymentSlipFun(this.czfy, res);
    },

    // 下拉
    // 财务科目
    financialAccountfun(id) {
      console.log(id);
    }
  },
  created() {
    // 待关联
    this.productlistFun(10, 1);

    // 待销账
    this.invoiceLinkedFun(10, 1);
    // 查询付款单
    this.linkedPaymentSlipFun(10, 1);

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