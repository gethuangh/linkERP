<template>
  <div class="add-sales-order">
    <operation-group @iconwenjian="iconwenjian"></operation-group>
    <h2 class="title">销售订单</h2>
    <el-form class="form" label-width="65px" label-position="left">
      <div class="form-row">
        <div class="form-col form-col1">
          <div class="btn btn1">选择关联的销售报价单</div>
          <div class="btn btn2">生成形式发票PI</div>
        </div>
        <div class="form-col form-col4" style="margin-left: 490px">
          单据编号：
          <span class="number">SO55833692</span>
        </div>
      </div>
      <div class="form-row">
        <div class="form-col form-col1">
          <el-form-item label="客户：">
            <el-input size="mini" clearable v-model="name1"></el-input>
          </el-form-item>
        </div>
        <div class="form-col form-col2">
          <el-form-item label="联系人：">
            <el-input size="mini" clearable v-model="name2"></el-input>
          </el-form-item>
        </div>
        <div class="form-col form-col3">
          <el-form-item label="付款方式：">
            <el-select v-model="name3" clearable size="mini" placeholder="请选择">
              <el-option label="方式一" value="1"></el-option>
              <el-option label="方式二" value="2"></el-option>
            </el-select>
          </el-form-item>
        </div>
        <div class="form-col form-col4">
          <el-form-item label="发票地址：">
            <el-input size="mini" clearable v-model="name4"></el-input>
          </el-form-item>
        </div>
      </div>
      <div class="form-row">
        <div class="form-col form-col1">
          <el-form-item label="收货公司：">
            <el-input size="mini" clearable v-model="name5"></el-input>
          </el-form-item>
        </div>
        <div class="form-col form-col2">
          <el-form-item label="联系人：">
            <el-input size="mini" clearable v-model="name6"></el-input>
          </el-form-item>
        </div>
        <div class="form-col form-col3">
          <el-form-item label="电话：">
            <el-input size="mini" clearable v-model="name7"></el-input>
          </el-form-item>
        </div>
        <div class="form-col form-col4">
          <el-form-item label="收货地址：">
            <el-select v-model="name8" clearable size="mini" placeholder="请选择">
              <el-option label="方式一" value="1"></el-option>
              <el-option label="方式二" value="2"></el-option>
            </el-select>
          </el-form-item>
        </div>
      </div>
      <div class="form-row" style="margin-top: 20px">
        <div class="form-col form-col1">
          <el-form-item label="销售公司：">
            <el-select v-model="name9" clearable size="mini" placeholder="请选择">
              <el-option label="方式一" value="1"></el-option>
              <el-option label="方式二" value="2"></el-option>
            </el-select>
          </el-form-item>
        </div>
        <div class="form-col form-col2">
          <el-form-item label="发货方式：">
            <el-select v-model="name10" clearable size="mini" placeholder="请选择">
              <el-option label="方式一" value="1"></el-option>
              <el-option label="方式二" value="2"></el-option>
            </el-select>
          </el-form-item>
        </div>
        <div class="form-col form-col3">
          <el-form-item label="运费支付：">
            <el-select v-model="name11" clearable size="mini" placeholder="请选择">
              <el-option label="方式一" value="1"></el-option>
              <el-option label="方式二" value="2"></el-option>
            </el-select>
          </el-form-item>
        </div>
        <div class="form-col form-col5">
          <el-form-item label="运费账号：">
            <el-input size="mini" clearable v-model="name12"></el-input>
          </el-form-item>
        </div>
        <div class="form-col form-col6">
          <el-form-item label="关税账号：">
            <el-input size="mini" clearable v-model="name13"></el-input>
          </el-form-item>
        </div>
      </div>
    </el-form>
    <div class="table-wrap">
      <el-table
        size="mini"
        :data="tableData"
        header-row-class-name="table-header"
        :cell-style="cellStyle"
      >
        <el-table-column label="ID" width="30" prop="a" align="center"></el-table-column>
        <el-table-column label="客户单号" width="105" prop="b"></el-table-column>
        <el-table-column label="客户型号" width="130" prop="c"></el-table-column>
        <el-table-column label="原厂型号" width="155" prop="d"></el-table-column>
        <el-table-column label="品牌" align="center" width="90" prop="e"></el-table-column>
        <el-table-column label="数量" align="right" width="65" prop="f"></el-table-column>
        <el-table-column label="批号" align="center" width="85" prop="g"></el-table-column>
        <el-table-column label="币别" align="center" width="38" prop="h"></el-table-column>
        <el-table-column label="税率" align="center" width="70" prop="i"></el-table-column>
        <el-table-column label="订单单价" align="right" width="70" prop="j"></el-table-column>
        <el-table-column label="订单总价" align="right" width="85" prop="k"></el-table-column>
        <el-table-column label="发货日期" align="right" width="85" prop="l"></el-table-column>
        <el-table-column label="佣金" align="right" width="75" prop="m"></el-table-column>
        <el-table-column label="实际单价" align="right" width="85" prop="n"></el-table-column>
        <el-table-column label="应收总价" align="right" width="85" prop="o"></el-table-column>
        <el-table-column label="备注" width="220" prop="p"></el-table-column>
        <el-table-column label="相关文件" width="85">
          <i class="iconfont iconAdobe_reader_logo_"></i>
        </el-table-column>
      </el-table>
      <div class="total-row">
        <div class="lattice">订单总额：</div>
        <div class="lattice">3252.00</div>
      </div>
    </div>
    <div class="footer">
      <div class="remark">
        <span>备注：</span>
        <el-input v-model="name14" size="mini"></el-input>
      </div>
      <div class="input-group">
        <div class="input-item">
          <span>制单人</span>
          <el-input size="mini" v-model="name15"></el-input>
        </div>
        <div class="input-item">
          <span>审核人</span>
          <el-input size="mini" v-model="name16"></el-input>
        </div>
        <div class="input-item">
          <span>销售员</span>
          <el-input size="mini" v-model="name17"></el-input>
        </div>
        <div class="input-item">
          <span>单据日期</span>
          <el-date-picker
            size="mini"
            value-format="yyyy-MM-dd"
            v-model="name18"
            type="date"
            placeholder="选择日期"
          ></el-date-picker>
        </div>
        <div class="input-item">
          <span>审核日期</span>
          <el-date-picker
            size="mini"
            value-format="yyyy-MM-dd"
            v-model="name19"
            type="date"
            placeholder="选择日期"
          ></el-date-picker>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import OperationGroup from "./OperationGroup.vue";
import { insertSalesOrder } from "../../../../src/api/order";
export default {
  data() {
    return {
      name1: "",
      name2: "",
      name3: "",
      name4: "",
      name5: "",
      name6: "",
      name7: "",
      name8: "",
      name9: "",
      name10: "",
      name11: "",
      name12: "",
      name13: "",
      name14: "",
      name15: "",
      name16: "",
      name17: "",
      name18: "",
      name19: "",
      tableData: [
        {
          a: 1,
          b: "46859956DDW",
          c: "K4B1G1646I-BYK0T",
          d: "K4B1G1646I-BYK0T",
          e: "SAMSUNG",
          f: "1000",
          g: "18+",
          h: "usd",
          i: "0%",
          j: 3.252,
          k: "3252.00",
          l: "2019-01-03",
          m: 0,
          n: 3.252,
          o: "3252.00",
          p: ""
        }
      ]
    };
  },
  components: {
    OperationGroup
  },
  methods: {
    cellStyle({ columnIndex }) {
      switch (columnIndex) {
        case 0:
          return { color: "#000" };
          break;
        case 7:
          return { backgroundColor: "#FFF099" };
          break;
        case 8:
          return { backgroundColor: "#FFF099", color: "#000" };
          break;
        case 12:
        case 13:
        case 14:
          return { backgroundColor: "#99CC00" };
          break;
      }
    },
    iconwenjian() {
      let insertSalesOrder = {
        orderNumber: orderNumber,
        clientName: this.name1,
        clientContactName: this.name2,
        paymentId: this.name3,
        billingAddress: this.name4,
        receivingCompanyName: this.name5,
        receivingCompanyContactName: this.name6,
        phone: this.name7,
        receivingAddress: this.name8,
        salesCompanyId: this.name9,
        deliveryId: this.name10,
        feePaymentId: this.name11,
        feeAccount: this.name12,
        customAccount: this.name13,
        // 总金额
        totalAmount: totalAmount,
        remark: this.name14,
        sss: this.name15,
        checkManName: this.name16,
        salesManName: this.name17,
        sss: this.name18,
        checkDate: this.name19,
        // 销售订单列表必填
        orderDetailVos: orderDetailVos
      };
      insertSalesOrder(insertSalesOrderData).then(res => {});
    }
  }
};
</script>

<style lang='scss'>
.add-sales-order {
  .title {
    margin: 25px 0;
    text-align: center;
    font-size: 20px;
    color: #000;
    letter-spacing: 15px;
  }
  .form {
    font-size: 12px;
    color: #000;
    &-row {
      display: flex;
      .form-col {
        display: flex;
        .btn {
          height: 20px;
          line-height: 20px;
          text-align: center;
          color: #fff;
          font-weight: bold;
          cursor: pointer;
          user-select: none;
        }
        .btn1 {
          width: 135px;
          background-color: #99cc00;
        }
        .btn2 {
          width: 115px;
          margin-left: 10px;
          background-color: #41c363;
        }
        + .form-col {
          margin-left: 30px;
        }
        .el-select {
          width: 100%;
        }
      }
      .form-col1 {
        .el-form-item__content {
          width: 185px;
        }
      }
      .form-col2 {
        .el-form-item__content {
          width: 120px;
        }
      }
      .form-col3 {
        .el-form-item__content {
          width: 150px;
        }
      }
      .form-col4 {
        .number {
          margin-left: 5px;
          font-size: 14px;
          font-weight: bold;
          color: #ff0000;
        }
        .el-form-item__content {
          width: 370px;
        }
      }
      .form-col5 {
        .el-form-item__content {
          width: 110px;
        }
      }
      .form-col6 {
        margin-left: 60px !important;
        .el-form-item__content {
          width: 135px;
        }
      }
      .el-form-item {
        width: 100%;
        margin-bottom: 0;
        .el-form-item__label {
          padding: 0;
          font-size: 12px;
          color: #000;
        }
        .el-form-item__content {
          float: right;
          margin-left: 0 !important;
        }
      }
    }
  }
  .table-wrap {
    height: 250px;
    margin-top: 40px;
    border: 1px solid #ebeef5;
    .el-table {
      color: #0000ff;
      .table-header {
        th {
          font-weight: normal;
          color: #000;
        }
      }
      .iconAdobe_reader_logo_ {
        color: #ed0c0c;
      }
      .cell,
      th div {
        padding: 0 5px;
      }
      th,
      td {
        border-right: 1px solid #ebeef5;
        &:last-child {
          border-right: none;
        }
      }
      th:nth-last-child(2) {
        border-right: none;
      }
    }
    .total-row {
      display: flex;
      justify-content: flex-end;
      padding-right: 305px;
      border-bottom: 1px solid #ebeef5;
      .lattice {
        width: 85px;
        height: 37px;
        line-height: 37px;
        text-align: center;
        font-weight: bold;
        font-size: 12px;
        &:first-child {
          color: #000;
        }
        &:last-child {
          color: #0000ff;
        }
      }
    }
  }

  .footer {
    width: 1080px;
    font-size: 12px;
    color: #000;
    span {
      flex-shrink: 0;
      margin-right: 20px;
    }
    .remark {
      display: flex;
      align-items: center;
      margin-top: 15px;
    }
    .input-group {
      display: flex;
      justify-content: space-between;
      margin-top: 15px;
      .input-item {
        display: flex;
        align-items: center;
        .el-input {
          width: 100px;
        }
      }
    }
  }
}
</style>