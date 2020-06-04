<template>
  <div class="stock-index">
    <div class="flex-box">
      <el-input
        size="mini"
        v-model="inputOne"
        placeholder="请输入内容"
        style="width: 255px;padding-right: 10px;"
      ></el-input>
      <el-button size="mini" @click="sears" type="success">查询</el-button>
    </div>

    <div class="gray-back white-header" style="width: 1110px;padding: 0 0 40px 0;">
      <el-table border size="mini" :data="productmodel" style="width: 100%;">
        <el-table-column sortable prop="modelName" label="原厂型号" width="185"></el-table-column>
        <el-table-column sortable align="center" prop="brandName" label="品牌" width="75"></el-table-column>
        <el-table-column align="center" prop="minPackNum" width="75" label="包装数量"></el-table-column>
        <el-table-column align="center" prop="packTypeName" width="75" label="包装"></el-table-column>
        <el-table-column align="center" prop="salePrice" width="85" label="建议报价">
          <template slot-scope="scope">
            <span style="color: #00f;font-weight: 700;">{{ scope.row.salePrice }}</span>
          </template>
        </el-table-column>
        <el-table-column align="center" width="85" label="最低报价">
          <template slot-scope="scope">
            <span style="color: #00f;font-weight: 700;">{{ scope.row.minPrice }}</span>
          </template>
        </el-table-column>
        <el-table-column align="center" prop="description" width="235" label="描述"></el-table-column>
        <el-table-column prop="remark" label="备注"></el-table-column>
      </el-table>
    </div>

    <el-tabs class="tabs-one" v-model="activeNameOne" type="card">
      <el-tab-pane>
        <span slot="label">
          即时库存
          <span class="tabs-num">{{reserve.instantStock}}</span>
        </span>
        <div class="gray-back" style="width: 1350px">
          <el-table border size="mini" :data="reserve.instantInventory" style="width: 100%;">
            <el-table-column sortable label="原厂型号" width="185">
              <template slot-scope="scope">
                <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo"></el-input>
                <span v-if="scope.$index != 0">{{ scope.row.modelNumber }}</span>
              </template>
            </el-table-column>
            <el-table-column sortable align="center" label="品牌" width="75">
              <template slot-scope="scope">
                <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo"></el-input>
                <span v-if="scope.$index != 0">{{ scope.row.brand }}</span>
              </template>
            </el-table-column>
            <el-table-column sortable align="center" width="75" label="数量">
              <template slot-scope="scope">
                <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo"></el-input>
                <span v-if="scope.$index != 0">{{ scope.row.quantity }}</span>
              </template>
            </el-table-column>
            <el-table-column sortable align="center" width="75" label="批号">
              <template slot-scope="scope">
                <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo"></el-input>
                <span v-if="scope.$index != 0">{{ scope.row.lotNumber }}</span>
              </template>
            </el-table-column>
            <el-table-column sortable align="center" width="85" label="产地">
              <template slot-scope="scope">
                <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo"></el-input>
                <span v-if="scope.$index != 0">{{ scope.row.origin }}</span>
              </template>
            </el-table-column>
            <el-table-column sortable align="center" width="120" label="仓库">
              <template slot-scope="scope">
                <el-select v-if="scope.$index == 0" size="mini" v-model="value" placeholder=" ">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
                <span v-if="scope.$index != 0">{{ scope.row.warehouse }}</span>
              </template>
            </el-table-column>
            <el-table-column sortable align="center" width="100" label="包装数量">
              <template slot-scope="scope">
                <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo"></el-input>
                <span v-if="scope.$index != 0">{{ scope.row.spq }}</span>
              </template>
            </el-table-column>
            <el-table-column align="center" sortable width="80" label="包装">
              <template slot-scope="scope">
                <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo"></el-input>
                <span v-if="scope.$index != 0">{{ scope.row.pack }}</span>
              </template>
            </el-table-column>
            <el-table-column align="center" width="100" label="成本">
              <template slot-scope="scope">
                <el-select v-if="scope.$index == 0" size="mini" v-model="value" placeholder=" ">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
                <span v-if="scope.$index != 0">{{ scope.row.costPrice }}</span>
              </template>
            </el-table-column>
            <el-table-column width="80" align="center" label="采购人">
              <template slot-scope="scope">
                <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo"></el-input>
                <span v-if="scope.$index != 0">{{ scope.row.buyerName }}</span>
              </template>
            </el-table-column>
            <el-table-column width="160" align="center" label="入库日期">
              <template slot-scope="scope">
                <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo"></el-input>
                <span v-if="scope.$index != 0">{{ scope.row.storageDate }}</span>
              </template>
            </el-table-column>
            <el-table-column prop="none" label="照片">
              <template slot-scope="scope">
                <el-image
                  v-for="item in scope.row.image"
                  :key="item"
                  style="width: 80px; height: 30px;padding-right: 10px;"
                  :src="item"
                  fit="fill"
                ></el-image>
              </template>
            </el-table-column>
          </el-table>
          <div class="total-num">
            <span>总计库存</span>
            <span>{{reserve.totalNumber}}</span>
          </div>
          <div class="total-num">
            <span>可售数量</span>
            <span style="color: #00f">{{reserve.availableSale}}</span>
          </div>
        </div>
      </el-tab-pane>

      <el-tab-pane label="已接订单" name="second">
        <span slot="label">
          已接订单
          <span class="tabs-num">{{(reserve.ordersReceived)}}</span>
        </span>
        <div class="gray-back" style="width: 1500px">
          <el-table border size="mini" :data="receivedOrder" style="width: 100%;">
            <el-table-column sortable label="原厂型号" width="185">
              <template slot-scope="scope">
                <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo"></el-input>
                <span v-if="scope.$index != 0">{{ scope.row.originalModel }}</span>
              </template>
            </el-table-column>
            <el-table-column sortable align="center" label="品牌" width="75">
              <template slot-scope="scope">
                <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo"></el-input>
                <span v-if="scope.$index != 0">{{ scope.row.brandName }}</span>
              </template>
            </el-table-column>
            <el-table-column sortable align="center" width="75" label="数量">
              <template slot-scope="scope">
                <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo"></el-input>
                <span v-if="scope.$index != 0">{{ scope.row.number }}</span>
              </template>
            </el-table-column>
            <el-table-column sortable align="center" width="75" label="批号">
              <template slot-scope="scope">
                <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo"></el-input>
                <span v-if="scope.$index != 0">{{ scope.row.batchNumber }}</span>
              </template>
            </el-table-column>
            <el-table-column align="center" width="85" label="税率">
              <template slot-scope="scope">
                <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo"></el-input>
                <span v-if="scope.$index != 0">{{ scope.row.taxRate }}</span>
              </template>
            </el-table-column>
            <el-table-column sortable align="center" width="80" label="币别">
              <template slot-scope="scope">
                <el-select v-if="scope.$index == 0" size="mini" v-model="value" placeholder=" ">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
                <span v-if="scope.$index != 0">{{ scope.row.currency }}</span>
              </template>
            </el-table-column>
            <el-table-column sortable align="center" width="120" label="销售单价">
              <template slot-scope="scope">
                <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo"></el-input>
                <span v-if="scope.$index != 0">{{ scope.row.price }}</span>
              </template>
            </el-table-column>
            <el-table-column align="center" sortable width="100" label="总计金额">
              <template slot-scope="scope">
                <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo"></el-input>
                <span v-if="scope.$index != 0">{{ scope.row.usdTotalPrice }}</span>
              </template>
            </el-table-column>
            <el-table-column sortable align="center" width="100" label="发货日期">
              <template slot-scope="scope">
                <el-date-picker
                  size="mini"
                  value-format="yyyy-MM-dd"
                  v-if="scope.$index == 0"
                  v-model="value"
                  type="date"
                  placeholder="选择日期"
                ></el-date-picker>
                <span v-if="scope.$index != 0">{{ scope.row.ShipDate }}</span>
              </template>
            </el-table-column>
            <el-table-column sortable width="85" align="center" label="销售员">
              <template slot-scope="scope">
                <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo"></el-input>
                <span v-if="scope.$index != 0">{{ scope.row.salesManName }}</span>
              </template>
            </el-table-column>
            <el-table-column sortable width="110" align="center" label="客户代码">
              <template slot-scope="scope">
                <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo"></el-input>
                <span v-if="scope.$index != 0">{{ scope.row.clientCode }}</span>
              </template>
            </el-table-column>
            <el-table-column align="center" sortable width="160" label="客户">
              <template slot-scope="scope">
                <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo"></el-input>
                <span v-if="scope.$index != 0">{{ scope.row.clientName }}</span>
              </template>
            </el-table-column>
            <el-table-column align="center" sortable width="95" label="录入日期">
              <template slot-scope="scope">
                <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo"></el-input>
                <span v-if="scope.$index != 0">{{ scope.row.createTime }}</span>
              </template>
            </el-table-column>
            <el-table-column align="center" prop="remarks" label="备注"></el-table-column>
          </el-table>
        </div>
      </el-tab-pane>

      <el-tab-pane label="特价渠道" name="third">
        <span slot="label">
          特价渠道
          <span class="tabs-num">{{reserve.specialChannels}}</span>
        </span>
        <div class="gray-back" style="width: 1500px">
          <el-table border size="mini" :data="specialChannel" style="width: 100%;">
            <el-table-column sortable label="原厂型号" width="185">
              <template slot-scope="scope">
                <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo"></el-input>
                <span v-if="scope.$index != 0">{{ scope.row.modelNumber }}</span>
              </template>
            </el-table-column>
            <el-table-column sortable align="center" label="品牌" width="75">
              <template slot-scope="scope">
                <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo"></el-input>
                <span v-if="scope.$index != 0">{{ scope.row.brandName }}</span>
              </template>
            </el-table-column>
            <el-table-column sortable align="center" width="75" label="数量">
              <template slot-scope="scope">
                <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo"></el-input>
                <span v-if="scope.$index != 0">{{ scope.row.tempSpotNum }}</span>
              </template>
            </el-table-column>
            <el-table-column sortable align="center" width="75" label="批号">
              <template slot-scope="scope">
                <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo"></el-input>
                <span v-if="scope.$index != 0">{{ scope.row.batchNumber }}</span>
              </template>
            </el-table-column>
            <el-table-column sortable align="center" width="85" label="货期">
              <template slot-scope="scope">
                <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo"></el-input>
                <span v-if="scope.$index != 0">{{ scope.row.receiveDelivery }}</span>
              </template>
            </el-table-column>
            <el-table-column sortable align="center" width="120" label="最小起订量">
              <template slot-scope="scope">
                <el-select v-if="scope.$index == 0" size="mini" v-model="value" placeholder=" ">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
                <span v-if="scope.$index != 0">{{ scope.row.moq }}</span>
              </template>
            </el-table-column>
            <el-table-column sortable align="center" width="95" label="包装数量">
              <template slot-scope="scope">
                <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo"></el-input>
                <span v-if="scope.$index != 0">{{ scope.row.spq }}</span>
              </template>
            </el-table-column>
            <el-table-column align="center" sortable width="80" label="包装">
              <template slot-scope="scope">
                <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo"></el-input>
                <span v-if="scope.$index != 0">{{ scope.row.receivePack }}</span>
              </template>
            </el-table-column>
            <el-table-column align="center" width="100" label="成本">
              <template slot-scope="scope">
                <el-select v-if="scope.$index == 0" size="mini" v-model="value" placeholder=" ">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
                <span v-if="scope.$index != 0">{{ scope.row.costPrice }}</span>
              </template>
            </el-table-column>
            <el-table-column sortable width="85" align="center" label="采购员">
              <template slot-scope="scope">
                <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo"></el-input>
                <span v-if="scope.$index != 0">{{ scope.row.letter }}</span>
              </template>
            </el-table-column>
            <el-table-column sortable width="110" align="center" label="供应商代码">
              <template slot-scope="scope">
                <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo"></el-input>
                <span v-if="scope.$index != 0">{{ scope.row.supCode }}</span>
              </template>
            </el-table-column>
            <el-table-column align="center" sortable width="160" label="供应商">
              <template slot-scope="scope">
                <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo"></el-input>
                <span v-if="scope.$index != 0">{{ scope.row.supName }}</span>
              </template>
            </el-table-column>
            <el-table-column align="center" sortable width="95" label="录入日期">
              <template slot-scope="scope">
                <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo"></el-input>
                <span v-if="scope.$index != 0">{{ scope.row.createTime }}</span>
              </template>
            </el-table-column>
            <el-table-column align="center" prop="remark" label="备注"></el-table-column>
          </el-table>
        </div>
      </el-tab-pane>

      <el-tab-pane label="虚拟库存" name="fourth">
        <span slot="label">
          虚拟库存
          <span class="tabs-num">{{reserve.totalNumber}}</span>
        </span>
        <div class="gray-back" style="width: 1500px">
          <el-table border size="mini" :data="virtual" style="width: 100%;">
            <el-table-column sortable label="原厂型号" width="185">
              <template slot-scope="scope">
                <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo"></el-input>
                <span v-if="scope.$index != 0">{{ scope.row.originalModel }}</span>
              </template>
            </el-table-column>
            <el-table-column sortable align="center" label="品牌" width="75">
              <template slot-scope="scope">
                <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo"></el-input>
                <span v-if="scope.$index != 0">{{ scope.row.brand }}</span>
              </template>
            </el-table-column>
            <el-table-column sortable align="center" width="75" label="数量">
              <template slot-scope="scope">
                <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo"></el-input>
                <span v-if="scope.$index != 0">{{ scope.row.quantity }}</span>
              </template>
            </el-table-column>
            <el-table-column sortable align="center" width="75" label="批号">
              <template slot-scope="scope">
                <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo"></el-input>
                <span v-if="scope.$index != 0">{{ scope.row.lotNumber }}</span>
              </template>
            </el-table-column>
            <el-table-column sortable align="center" width="85" label="货期">
              <template slot-scope="scope">
                <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo"></el-input>
                <span v-if="scope.$index != 0">{{ scope.row.delivery }}</span>
              </template>
            </el-table-column>
            <el-table-column sortable align="center" width="120" label="最小起订量">
              <template slot-scope="scope">
                <el-select v-if="scope.$index == 0" size="mini" v-model="value" placeholder=" ">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
                <span v-if="scope.$index != 0">{{ scope.row.moq }}</span>
              </template>
            </el-table-column>
            <el-table-column sortable align="center" width="95" label="包装数量">
              <template slot-scope="scope">
                <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo"></el-input>
                <span v-if="scope.$index != 0">{{ scope.row.packingQuantity }}</span>
              </template>
            </el-table-column>
            <el-table-column align="center" sortable width="80" label="包装">
              <template slot-scope="scope">
                <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo"></el-input>
                <span v-if="scope.$index != 0">{{ scope.row.pack }}</span>
              </template>
            </el-table-column>
            <el-table-column align="center" width="100" label="成本">
              <template slot-scope="scope">
                <el-select v-if="scope.$index == 0" size="mini" v-model="value" placeholder=" ">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
                <span v-if="scope.$index != 0">{{ scope.row.cost }}</span>
              </template>
            </el-table-column>
            <el-table-column sortable width="85" align="center" label="采购员">
              <template slot-scope="scope">
                <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo"></el-input>
                <span v-if="scope.$index != 0">{{ scope.row.buyerName }}</span>
              </template>
            </el-table-column>
            <el-table-column sortable width="110" align="center" label="供应商代码">
              <template slot-scope="scope">
                <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo"></el-input>
                <span v-if="scope.$index != 0">{{ scope.row.vendorCode }}</span>
              </template>
            </el-table-column>
            <el-table-column align="center" sortable width="160" label="供应商">
              <template slot-scope="scope">
                <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo"></el-input>
                <span v-if="scope.$index != 0">{{ scope.row.supplier }}</span>
              </template>
            </el-table-column>
            <el-table-column align="center" sortable width="95" label="录入日期">
              <template slot-scope="scope">
                <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo"></el-input>
                <span v-if="scope.$index != 0">{{ scope.row.createTime }}</span>
              </template>
            </el-table-column>
            <el-table-column align="center" prop="remark" label="备注"></el-table-column>
          </el-table>
        </div>
      </el-tab-pane>
    </el-tabs>

    <el-tabs class="tabs-two" v-model="activeNameTwo" type="card">
      <el-tab-pane>
        <span slot="label">
          处理中的订单
          <span class="tabs-num">(1)</span>
        </span>
        <div class="gray-back" style="width: 1500px">
          <el-table border size="mini" :data="tableDataTwo" style="width: 100%;">
            <el-table-column sortable label="原厂型号" width="185">
              <template slot-scope="scope">
                <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo"></el-input>
                <span v-if="scope.$index != 0">{{ scope.row.text }}</span>
              </template>
            </el-table-column>
            <el-table-column sortable align="center" label="品牌" width="75">
              <template slot-scope="scope">
                <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo"></el-input>
                <span v-if="scope.$index != 0">{{ scope.row.letter }}</span>
              </template>
            </el-table-column>
            <el-table-column sortable align="center" width="75" label="数量">
              <template slot-scope="scope">
                <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo"></el-input>
                <span v-if="scope.$index != 0">{{ scope.row.num }}</span>
              </template>
            </el-table-column>
            <el-table-column sortable align="center" width="75" label="批号">
              <template slot-scope="scope">
                <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo"></el-input>
                <span v-if="scope.$index != 0">{{ scope.row.num }}</span>
              </template>
            </el-table-column>
            <el-table-column align="center" width="85" label="税率">
              <template slot-scope="scope">
                <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo"></el-input>
                <span v-if="scope.$index != 0">{{ scope.row.num }}</span>
              </template>
            </el-table-column>
            <el-table-column sortable align="center" width="80" label="币别">
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
            <el-table-column sortable align="center" width="120" label="销售单价">
              <template slot-scope="scope">
                <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo"></el-input>
                <span v-if="scope.$index != 0">{{ scope.row.num }}</span>
              </template>
            </el-table-column>
            <el-table-column align="center" sortable width="100" label="总计金额">
              <template slot-scope="scope">
                <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo"></el-input>
                <span v-if="scope.$index != 0">{{ scope.row.price }}</span>
              </template>
            </el-table-column>
            <el-table-column sortable align="center" width="100" label="发货日期">
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
            <el-table-column sortable width="85" align="center" label="销售员">
              <template slot-scope="scope">
                <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo"></el-input>
                <span v-if="scope.$index != 0">{{ scope.row.letter }}</span>
              </template>
            </el-table-column>
            <el-table-column sortable width="110" align="center" label="客户代码">
              <template slot-scope="scope">
                <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo"></el-input>
                <span v-if="scope.$index != 0">{{ scope.row.letter }}</span>
              </template>
            </el-table-column>
            <el-table-column align="center" sortable width="160" label="客户">
              <template slot-scope="scope">
                <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo"></el-input>
                <span v-if="scope.$index != 0">{{ scope.row.letter }}</span>
              </template>
            </el-table-column>
            <el-table-column align="center" sortable width="95" label="录入日期">
              <template slot-scope="scope">
                <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo"></el-input>
                <span v-if="scope.$index != 0">{{ scope.row.data }}</span>
              </template>
            </el-table-column>
            <el-table-column align="center" prop="none" label="备注"></el-table-column>
          </el-table>
        </div>
      </el-tab-pane>

      <el-tab-pane label="采购在途" name="second">
        <span slot="label">
          采购在途
          <span class="tabs-num">(1)</span>
        </span>
        <div class="gray-back" style="width: 1500px">
          <el-table border size="mini" :data="tableDataTwo" style="width: 100%;">
            <el-table-column sortable label="原厂型号" width="185">
              <template slot-scope="scope">
                <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo"></el-input>
                <span v-if="scope.$index != 0">{{ scope.row.text }}</span>
              </template>
            </el-table-column>
            <el-table-column sortable align="center" label="品牌" width="75">
              <template slot-scope="scope">
                <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo"></el-input>
                <span v-if="scope.$index != 0">{{ scope.row.letter }}</span>
              </template>
            </el-table-column>
            <el-table-column sortable align="center" width="75" label="数量">
              <template slot-scope="scope">
                <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo"></el-input>
                <span v-if="scope.$index != 0">{{ scope.row.num }}</span>
              </template>
            </el-table-column>
            <el-table-column sortable align="center" width="75" label="批号">
              <template slot-scope="scope">
                <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo"></el-input>
                <span v-if="scope.$index != 0">{{ scope.row.num }}</span>
              </template>
            </el-table-column>
            <el-table-column align="center" width="85" label="税率">
              <template slot-scope="scope">
                <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo"></el-input>
                <span v-if="scope.$index != 0">{{ scope.row.num }}</span>
              </template>
            </el-table-column>
            <el-table-column sortable align="center" width="80" label="币别">
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
            <el-table-column sortable align="center" width="120" label="销售单价">
              <template slot-scope="scope">
                <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo"></el-input>
                <span v-if="scope.$index != 0">{{ scope.row.num }}</span>
              </template>
            </el-table-column>
            <el-table-column align="center" sortable width="100" label="总计金额">
              <template slot-scope="scope">
                <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo"></el-input>
                <span v-if="scope.$index != 0">{{ scope.row.price }}</span>
              </template>
            </el-table-column>
            <el-table-column sortable align="center" width="100" label="发货日期">
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
            <el-table-column sortable width="85" align="center" label="销售员">
              <template slot-scope="scope">
                <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo"></el-input>
                <span v-if="scope.$index != 0">{{ scope.row.letter }}</span>
              </template>
            </el-table-column>
            <el-table-column sortable width="110" align="center" label="客户代码">
              <template slot-scope="scope">
                <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo"></el-input>
                <span v-if="scope.$index != 0">{{ scope.row.letter }}</span>
              </template>
            </el-table-column>
            <el-table-column align="center" sortable width="160" label="客户">
              <template slot-scope="scope">
                <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo"></el-input>
                <span v-if="scope.$index != 0">{{ scope.row.letter }}</span>
              </template>
            </el-table-column>
            <el-table-column align="center" sortable width="95" label="录入日期">
              <template slot-scope="scope">
                <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo"></el-input>
                <span v-if="scope.$index != 0">{{ scope.row.data }}</span>
              </template>
            </el-table-column>
            <el-table-column align="center" prop="none" label="备注"></el-table-column>
          </el-table>
        </div>
      </el-tab-pane>
    </el-tabs>

    <el-tabs class="tabs-three" v-model="activeNameThree" type="card">
      <el-tab-pane>
        <span slot="label">
          出库记录
          <span class="tabs-num">{{(stockOutRecord.length-1)}}</span>
        </span>
        <div class="gray-back" style="width: 1500px">
          <el-table border size="mini" :data="stockOutRecord" style="width: 100%;">
            <el-table-column sortable label="原厂型号" width="185">
              <template slot-scope="scope">
                <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo"></el-input>
                <span v-if="scope.$index != 0">{{ scope.row.originalModel }}</span>
              </template>
            </el-table-column>
            <el-table-column sortable align="center" label="品牌" width="75">
              <template slot-scope="scope">
                <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo"></el-input>
                <span v-if="scope.$index != 0">{{ scope.row.brandName }}</span>
              </template>
            </el-table-column>
            <el-table-column sortable align="center" width="75" label="数量">
              <template slot-scope="scope">
                <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo"></el-input>
                <span v-if="scope.$index != 0">{{ scope.row.number }}</span>
              </template>
            </el-table-column>
            <el-table-column sortable align="center" width="75" label="批号">
              <template slot-scope="scope">
                <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo"></el-input>
                <span v-if="scope.$index != 0">{{ scope.row.batchNumber }}</span>
              </template>
            </el-table-column>
            <el-table-column align="center" width="85" label="税率">
              <template slot-scope="scope">
                <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo"></el-input>
                <span v-if="scope.$index != 0">{{ scope.row.taxRateString }}</span>
              </template>
            </el-table-column>
            <el-table-column sortable align="center" width="80" label="币别">
              <template slot-scope="scope">
                <el-select v-if="scope.$index == 0" size="mini" v-model="value" placeholder=" ">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
                <span v-if="scope.$index != 0">{{ scope.row.currencyString }}</span>
              </template>
            </el-table-column>
            <el-table-column sortable align="center" width="120" label="销售单价">
              <template slot-scope="scope">
                <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo"></el-input>
                <span v-if="scope.$index != 0">{{ scope.row.price }}</span>
              </template>
            </el-table-column>
            <el-table-column align="center" sortable width="100" label="总计金额">
              <template slot-scope="scope">
                <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo"></el-input>
                <span v-if="scope.$index != 0">{{ scope.row.totalPrice }}</span>
              </template>
            </el-table-column>
            <el-table-column sortable align="center" width="100" label="发货日期">
              <template slot-scope="scope">
                <el-select v-if="scope.$index == 0" size="mini" v-model="value" placeholder=" ">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
                <span v-if="scope.$index != 0">{{ scope.row.sentTime }}</span>
              </template>
            </el-table-column>
            <el-table-column sortable width="85" align="center" label="采购员">
              <template slot-scope="scope">
                <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo"></el-input>
                <span v-if="scope.$index != 0">{{ scope.row.buyerName }}</span>
              </template>
            </el-table-column>
            <el-table-column sortable width="110" align="center" label="客户代码">
              <template slot-scope="scope">
                <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo"></el-input>
                <span v-if="scope.$index != 0">{{ scope.row.clientCode }}</span>
              </template>
            </el-table-column>
            <el-table-column align="center" sortable width="160" label="客户">
              <template slot-scope="scope">
                <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo"></el-input>
                <span v-if="scope.$index != 0">{{ scope.row.clientName }}</span>
              </template>
            </el-table-column>
            <el-table-column align="center" sortable width="95" label="录入日期">
              <template slot-scope="scope">
                <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo"></el-input>
                <span v-if="scope.$index != 0">{{ scope.row.enterTime }}</span>
              </template>
            </el-table-column>
            <el-table-column prop="none" label="照片">
              <template slot-scope="scope">
                <el-image
                  v-for="item in scope.row.picture"
                  :key="item.split[1]"
                  style="width: 80px; height: 30px;padding-right: 10px;"
                  :src="item"
                  fit="fill"
                ></el-image>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-tab-pane>

      <el-tab-pane label="入库记录" name="second">
        <span slot="label">
          入库记录
          <span class="tabs-num">{{(queryEntryList.length-1)}}</span>
        </span>
        <div class="gray-back" style="width: 1500px">
          <el-table border size="mini" :data="queryEntryList" style="width: 100%;">
            <el-table-column sortable label="原厂型号" width="185">
              <template slot-scope="scope">
                <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo"></el-input>
                <span v-if="scope.$index != 0">{{ scope.row.originalModel }}</span>
              </template>
            </el-table-column>
            <el-table-column sortable align="center" label="品牌" width="75">
              <template slot-scope="scope">
                <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo"></el-input>
                <span v-if="scope.$index != 0">{{ scope.row.brandName }}</span>
              </template>
            </el-table-column>
            <el-table-column sortable align="center" width="75" label="数量">
              <template slot-scope="scope">
                <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo"></el-input>
                <span v-if="scope.$index != 0">{{ scope.row.number }}</span>
              </template>
            </el-table-column>
            <el-table-column sortable align="center" width="75" label="批号">
              <template slot-scope="scope">
                <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo"></el-input>
                <span v-if="scope.$index != 0">{{ scope.row.batchNumber }}</span>
              </template>
            </el-table-column>
            <el-table-column align="center" width="85" label="税率">
              <template slot-scope="scope">
                <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo"></el-input>
                <span v-if="scope.$index != 0">{{ scope.row.taxRateValue }}</span>
              </template>
            </el-table-column>
            <el-table-column sortable align="center" width="80" label="币别">
              <template slot-scope="scope">
                <el-select v-if="scope.$index == 0" size="mini" v-model="value" placeholder=" ">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
                <span v-if="scope.$index != 0">{{ scope.row.currencyValue }}</span>
              </template>
            </el-table-column>
            <el-table-column sortable align="center" width="120" label="销售单价">
              <template slot-scope="scope">
                <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo"></el-input>
                <span v-if="scope.$index != 0">{{ scope.row.price }}</span>
              </template>
            </el-table-column>
            <el-table-column align="center" sortable width="100" label="总计金额">
              <template slot-scope="scope">
                <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo"></el-input>
                <span v-if="scope.$index != 0">{{ scope.row.totalPrice }}</span>
              </template>
            </el-table-column>
            <el-table-column sortable align="center" width="100" label="发货日期">
              <template slot-scope="scope">
                <el-select v-if="scope.$index == 0" size="mini" v-model="value" placeholder=" ">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
                <span v-if="scope.$index != 0">{{ scope.row.shipmentsData }}</span>
              </template>
            </el-table-column>
            <el-table-column sortable width="85" align="center" label="销售员">
              <template slot-scope="scope">
                <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo"></el-input>
                <span v-if="scope.$index != 0">{{ scope.row.salesManName }}</span>
              </template>
            </el-table-column>
            <el-table-column sortable width="110" align="center" label="客户代码">
              <template slot-scope="scope">
                <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo"></el-input>
                <span v-if="scope.$index != 0">{{ scope.row.supplierCode }}</span>
              </template>
            </el-table-column>
            <el-table-column align="center" sortable width="160" label="客户">
              <template slot-scope="scope">
                <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo"></el-input>
                <span v-if="scope.$index != 0">{{ scope.row.supplierName }}</span>
              </template>
            </el-table-column>
            <el-table-column align="center" sortable width="95" label="录入日期">
              <template slot-scope="scope">
                <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo"></el-input>
                <span v-if="scope.$index != 0">{{ scope.row.createTime }}</span>
              </template>
            </el-table-column>
            <el-table-column prop="none" label="照片">
              <template slot-scope="scope">
                <el-image
                  v-for="item in scope.row.urlList"
                  :key="item.split[1]"
                  style="width: 80px; height: 30px;padding-right: 10px;"
                  :src="item"
                  fit="fill"
                ></el-image>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-tab-pane>
    </el-tabs>

    <el-dialog width="1685px" title="快速查询" :visible.sync="dialogSearchAll">
      <stockSearchAll :productmodel="productmodel"></stockSearchAll>
    </el-dialog>
  </div>
</template>
<script>
import Bus from "@/assets/Bus";
import stockSearchAll from "./searchAll.vue";
import {
  productmodel,
  reserve,
  receivedOrder,
  specialChannel,
  stockOutRecord,
  virtual,
  queryEntryList
} from "../../api/stock";
export default {
  name: "stock",
  components: {
    stockSearchAll
  },
  data() {
    return {
      dialogSearchAll: false,

      value: "",

      inputOne: "",
      inputTwo: "",
      tableDataTwo: [],
      activeNameOne: "",
      activeNameTwo: "",
      activeNameThree: "",

      options: [{}],
      // 型号信息
      productmodel: [],
      //   及时库存
      reserve: [{}],
      // 已接订单
      receivedOrder: [{}],
      // 特价渠道
      specialChannel: [{}],
      // 虚拟库存
      virtual: [{}],
      //出库记录
      stockOutRecord: [{}],
      // 入库
      queryEntryList: [{}]
    };
  },
  methods: {},
  mounted() {
    Bus.$on("searchAll", () => {
      this.dialogSearchAll = true;
    });
  },
  created() {
    // bus.on("xxx", () => {});
  },
  methods: {
    //   查找
    sears() {
      // 型号信息
      this.productmodelFun();
    },
    //   总和
    productmodelFun() {
      // this.inputOne
      let modelName = { modelName: "测试商品一" };
      let da = {};
      // 型号信息
      productmodel(modelName).then(res => {
        this.productmodel = [];
        this.productmodel.push(res.result);
      });
      //   及时库存
      let modelNumber = { modelNumber: "测试商品一" };
      reserve(modelNumber).then(res => {
        this.reserve = res.result;
        // this.reserve.unshift(da);
      });
      // 已接订单
      receivedOrder(modelNumber).then(res => {
        this.receivedOrder = res.result;
        // this.receivedOrder.unshift(da);
      });

      // 特价渠道
      specialChannel(modelNumber).then(res => {
        this.specialChannel = res.result;
        this.specialChannel.unshift(da);
      });
      // 虚拟库存
      virtual(modelNumber).then(res => {
        this.virtual = res.result;
        this.virtual.unshift(da);
      });
      // 出库记录
      let originalModel = { originalModel: "测试商品一" };
      stockOutRecord(originalModel).then(res => {
        this.stockOutRecord = res.result;
        this.stockOutRecord.unshift(da);
        console.log(this.stockOutRecord);
      });
      // 入库记录
      let queryEntryListData = { type: 1, originalModel: "测试商品一" };
      queryEntryList(queryEntryListData).then(res => {
        this.queryEntryList = res.result.list;
        this.queryEntryList.unshift(da);
        console.log(this.queryEntryList);
      });
    }
  }
};
</script>

<style lang='scss'>
.stock-index {
  .el-dialog {
    background: #eaeaea;
  }

  .el-table {
    border-color: #999;
  }
  .el-table--border td,
  .el-table--border th,
  .el-table__body-wrapper
    .el-table--border.is-scrolling-left
    ~ .el-table__fixed {
    border-color: #999;
    color: #666;
  }

  .el-table--border::after,
  .el-table--group::after,
  .el-table::before {
    background-color: #999;
  }

  .el-tabs--card > .el-tabs__header .el-tabs__item {
    border-color: #999;
  }

  .el-tabs--card > .el-tabs__header {
    border-bottom: 1px solid #fff;
  }

  .gray-back {
    .el-table tr {
      background-color: #f3f3f3;
    }
    .el-table th.is-leaf {
      background-color: #f3f3f3;
    }
  }

  .white-header {
    .el-table th.is-leaf {
      background-color: #fff;
    }
  }

  .flex-box {
    display: flex;
    padding: 10px 0 20px;
  }

  // .el-table--mini td, .el-table--mini th {
  //     padding: 0;
  //     color: #666;
  // }
  // .el-table td, .el-table th {
  //     padding: 0;
  //     color: #666;
  // }

  .el-tabs__header {
    margin-bottom: 0;
  }

  .el-tabs__content {
    margin-top: -1px;
  }

  .el-tabs--card > .el-tabs__header .el-tabs__item {
    font-size: 12px;
    background-color: #d7d7d7;

    .tabs-num {
      color: #f00;
    }
  }

  .el-tabs--card > .el-tabs__header .el-tabs__item.is-active {
    color: #fff;
    background-color: #99cc00;
    font-weight: 700;

    .tabs-num {
      color: #fff;
    }
  }

  .el-tabs--card > .el-tabs__header .el-tabs__item:hover {
    color: #fff;
  }

  .tabs-one {
    padding-bottom: 40px;

    .total-num {
      padding: 10px 0;
      font-weight: 700;
      padding-left: 185px;
      border: 1px solid #999;
      border-width: 0 1px 1px 1px;

      display: flex;

      span {
        display: block;
        text-align: center;
        width: 55px;
        padding: 0 10px;
      }
    }
  }

  .tabs-two {
    padding-bottom: 40px;
  }
}
</style>