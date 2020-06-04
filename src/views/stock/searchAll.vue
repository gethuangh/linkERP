<template>
  <div class="search-all">
    <div class="flex-box">
      <el-input
        size="mini"
        v-model="inputOnes"
        placeholder="请输入内容"
        style="width: 255px;padding-right: 10px;"
      ></el-input>
      <el-button size="mini" type="success" @click="sears">查询</el-button>
    </div>

    <div class="gray-back seven-header" style="width: 1350px;padding: 0 0 20px 0;">
      <el-table border size="mini" :data="productmodel" style="width: 100%;">
        <el-table-column label="原厂型号" width="200">
          <template slot-scope="scope">
            <b>{{ scope.row.modelName }}</b>
          </template>
        </el-table-column>
        <el-table-column align="center" prop="brandName" label="品牌" width="75"></el-table-column>
        <el-table-column align="center" prop="minPackNum" width="75" label="包装数量"></el-table-column>
        <el-table-column align="center" prop="packTypeName" width="75" label="包装"></el-table-column>
        <el-table-column align="center" width="100" label="建议报价">
          <template slot-scope="scope">
            <span style="color: #00f;font-weight: 700;">{{ scope.row.salePrice }}</span>
          </template>
        </el-table-column>
        <el-table-column align="center" width="100" label="最低报价">
          <template slot-scope="scope">
            <span style="color: #00f;font-weight: 700;">{{ scope.row.minPrice }}</span>
          </template>
        </el-table-column>
        <el-table-column align="center" prop="description" width="340" label="描述"></el-table-column>
        <el-table-column prop="remark" label="备注"></el-table-column>
      </el-table>
    </div>

    <div class="main-box">
      <div>
        <p>即时入库</p>
        <el-table
          show-summary
          size="mini"
          border
          :data="reserve"
          style="width: 100%"
          :row-class-name="tableRowClassName"
        >
          <el-table-column sortable prop="warehouse" label="仓库" width="90"></el-table-column>
          <el-table-column sortable align="center" prop="lotNumber" label="批号" width="70"></el-table-column>
          <el-table-column sortable align="center" prop="quantity" width="95" label="现货数量"></el-table-column>
          <el-table-column sortable align="center" prop="origin" label="产地" width="80"></el-table-column>
          <el-table-column sortable align="center" prop="costPrice" label="成本价" width="85"></el-table-column>
          <el-table-column sortable align="center" prop="storageDate" label="入库日期"></el-table-column>
        </el-table>

        <div style="font-weight: 700;padding: 20px 5px 0 5px;">预计出库</div>
        <el-table
          size="mini"
          border
          :data="forecastOutbound"
          style="width: 100%;padding-bottom: 20px;"
          :row-class-name="tableRowClassName"
        >
          <el-table-column sortable prop="predictStockOutData" label="预计出库日期" width="110"></el-table-column>
          <el-table-column align="center" prop="number" label="数量" width="60"></el-table-column>
          <el-table-column align="center" prop="batchNumber" width="60" label="批号"></el-table-column>
          <el-table-column align="center" prop="price" label="销售单价" width="70"></el-table-column>
          <el-table-column sortable prop="clientName" label="客户" width="160"></el-table-column>
          <el-table-column sortable align="center" prop="salesManName" label="销售员"></el-table-column>
        </el-table>
      </div>
      <div>
        <p>预计入库</p>
        <el-table
          size="mini"
          border
          :data="expectedStorage"
          style="width: 100%;padding-bottom: 20px;"
          :row-class-name="tableRowClassName"
        >
          <el-table-column sortable prop="predictArrivalData" label="预计入库日期" width="110"></el-table-column>
          <el-table-column sortable align="center" prop="number" label="数量" width="80"></el-table-column>
          <el-table-column sortable align="center" prop="price" width="90" label="下单单价"></el-table-column>
          <el-table-column sortable align="center" prop="buyerName" label="采购员" width="90"></el-table-column>
          <el-table-column align="center" sortable prop="supplierName" label="供应商"></el-table-column>
        </el-table>
      </div>
      <div>
        <p>增值渠道</p>
        <el-table
          size="mini"
          border
          :data="specialChannel"
          style="width: 100%;padding-bottom: 20px;"
          :row-class-name="tableRowClassName"
        >
          <el-table-column align="center" prop="createTime" label="更新日期" width="100"></el-table-column>
          <el-table-column align="center" prop="price" label="单价" width="70"></el-table-column>
          <el-table-column align="center" prop="tempSpotNum" width="75" label="现货数量"></el-table-column>
          <el-table-column align="center" prop="receiveDelivery" label="货期" width="70"></el-table-column>
          <el-table-column sortable align="center" prop="buyerName" label="采购员" width="85"></el-table-column>
          <el-table-column align="center" sortable prop="supName" label="供应商"></el-table-column>
        </el-table>
      </div>
      <div>
        <p>历史采购报价</p>
        <el-table size="mini" border :data="salesOffer" style="width: 100%;padding-bottom: 20px;">
          <el-table-column sortable align="center" prop="dateString" label="日期" width="100"></el-table-column>
          <el-table-column sortable align="center" prop="offerNum" width="75" label="数量"></el-table-column>
          <el-table-column sortable align="center" prop="buyerPrice" label="单价" width="70"></el-table-column>
          <el-table-column sortable align="center" prop="batchNumberRequire" label="批号" width="70"></el-table-column>
          <el-table-column sortable prop="buyerName" label="采购员" width="80"></el-table-column>
          <el-table-column sortable prop="supName " label="供应商"></el-table-column>
        </el-table>
      </div>
      <div>
        <p>历史销售订单</p>
        <el-table
          size="mini"
          border
          :data="SalesOrdersOfBeing"
          style="width: 100%;padding-bottom: 20px;"
        >
          <el-table-column
            sortable
            align="center"
            prop="predictStockOutData"
            label="出库日期"
            width="100"
          ></el-table-column>
          <el-table-column sortable align="center" prop="number" width="75" label="数量"></el-table-column>
          <el-table-column sortable align="center" prop="batchNumber" label="批号" width="70"></el-table-column>
          <el-table-column sortable align="center" prop="salesManName" label="销售员" width="80"></el-table-column>
          <el-table-column sortable align="center" prop="price" label="单价" width="70"></el-table-column>
          <el-table-column sortable align="center" prop="clientName" label="客户"></el-table-column>
        </el-table>
      </div>
      <div>
        <p>历史采购订单</p>
        <el-table size="mini" border :data="orderList" style="width: 100%;padding-bottom: 20px;">
          <el-table-column sortable align="center" prop="dataTime" label="入库日期" width="100"></el-table-column>
          <el-table-column sortable align="center" prop="number" width="75" label="数量"></el-table-column>
          <el-table-column sortable align="center" prop="price" label="下单单价" width="80"></el-table-column>
          <el-table-column sortable align="center" prop="buyerName" label="采购员" width="80"></el-table-column>
          <el-table-column sortable align="center" prop="supplierName" label="供应商"></el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
import bus from "@/assets/Bus";
import {
  productmodel,
  reserve,
  forecastOutbound,
  expectedStorage,
  specialChannel
} from "../../api/stock";
import { salesOffer } from "../../api/quote";
import { SalesOrdersOfBeing, orderList } from "../../api/order";
export default {
  name: "stockSearchAll",
  components: {},
  data() {
    return {
      inputOne: "",
      inputOnes: "",
      // 型号信息
      productmodel: [],
      //   及时库存
      reserve: [{}],
      //   预计出库
      forecastOutbound: [{}],
      //   预计入库
      expectedStorage: [{}],
      //   特价渠道
      specialChannel: [],
      // 历史采购报价
      salesOffer: [],
      // 历史销售订单
      SalesOrdersOfBeing: [],
      //   历史采购订单
      orderList: []
    };
  },
  methods: {
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex % 2 === 1) {
        return "gray-row";
      }
      return "";
    },
    //   查找
    sears() {
      // 型号信息
      let modelName = { modelName: "测试商品一" };
      let da = {};
      productmodel(modelName).then(res => {
        this.productmodel = [];
        this.productmodel.push(res.result);
      });
      //   及时库存
      let modelNumber = { modelNumber: "测试商品一" };
      reserve(modelNumber).then(res => {
        this.reserve = res.result.instantInventory;
        // this.reserve.unshift(da);
      });
      //   预计出库
      forecastOutbound(modelNumber).then(res => {
        this.forecastOutbound = res.result;
      });
      //   预计入库
      expectedStorage(modelNumber).then(res => {
        this.expectedStorage = res.result;
      });
      // 特价渠道
      specialChannel(modelNumber).then(res => {
        this.specialChannel = res.result;
      });
      let productModelName = { productModelName: "测试商品一" };
      //   历史采购报价
      salesOffer(productModelName).then(res => {
        this.salesOffer = res.result.list;
      });
      //   历史销售订单
      let SalesOrdersOfBeingData = { type: 1, originalModel: "测试商品一" };
      SalesOrdersOfBeing(SalesOrdersOfBeingData).then(res => {
        this.SalesOrdersOfBeing = res.result.list;
      });
      //   历史采购订单
      orderList(SalesOrdersOfBeingData).then(res => {
        this.orderList = res.result.list;
        this.orderList.unshift(da);
        console.log(res);
      });
    }
  },
  created() {
    //bus.on('xxx',() => { })
  }
};
</script>

<style lang='scss'>
.search-all {
  padding: 0 5px;

  .seven-header {
    .el-table .el-table__header th.is-leaf {
      background-color: #777;
      color: #fff;
    }
  }

  .main-box {
    width: 1635px;
    border: 1px solid #999;
    border-width: 1px 0 0 1px;
    display: flex;
    flex-wrap: wrap;

    > div {
      width: 544px;
      min-height: 255px;
      border: 1px solid #999;
      border-width: 0 1px 1px 0;
      background: #fff;

      p {
        width: 100%;
        color: #fff;
        background: #41c363;
        font-weight: 700;
        padding: 0 5px;
        box-sizing: border-box;
      }

      .el-table--mini td,
      .el-table--mini th {
        padding: 0;
        color: #666;
      }
      .el-table td,
      .el-table th {
        padding: 0;
        color: #666;
      }

      .el-table th {
        background: #d7d7d7;
        border-right: 1px solid #fff;
        border-bottom: 0;
      }
      .el-table th:nth-last-child(2) {
        border-right: 1px solid #d7d7d7;
      }
    }

    .el-table--border::after,
    .el-table--group::after {
      width: 0;
    }

    .el-table {
      border: none;

      td {
        background: #fff;
        border-right: 1px solid #eaeaea;
        border-bottom: 1px solid #eaeaea;
      }
      .gray-row td {
        background: #eaeaea;
        border-right: 1px solid #fff;
        border-bottom: 1px solid #eaeaea;
      }
      .gray-row td:nth-last-child(1) {
        border-right: 1px solid #eaeaea;
      }
    }

    .has-gutter td {
      background: #eaeaea;
      border-right: 1px solid #fff;
      border-bottom: 1px solid #eaeaea;
      border-top: 1px solid #fff;
    }

    .el-table .sort-caret.ascending {
      border-bottom-color: #999;
    }
    .el-table .sort-caret.descending {
      border-top-color: #999;
    }

    .el-table .caret-wrapper {
      width: 10px;
    }
  }
}
</style>