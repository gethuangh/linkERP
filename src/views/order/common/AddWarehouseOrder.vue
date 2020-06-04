<template>
  <div class="add-warehouse-order">
    <operation-group @iconwenjian="iconwenjian"></operation-group>
    <h2 class="title">入库单</h2>
    <el-form class="form" label-width="85px" label-position="left">
      <div class="form-row">
        <div class="form-col form-col1">
          <div class="btn btn1">选择关联的采购报价单</div>
        </div>
        <div class="form-col form-col3" style="margin-left: 595px">
          单据编号：
          <span class="number">SO55833692</span>
        </div>
      </div>
      <div class="form-row">
        <div class="form-col form-col1">
          <el-form-item label="供应商：">
            <el-input size="mini" clearable v-model="name1"></el-input>
          </el-form-item>
        </div>
        <div class="form-col form-col2">
          <el-form-item label="付款方式：">
            <el-select v-model="name2" clearable size="mini" placeholder="请选择">
              <el-option label="方式一" value="1"></el-option>
              <el-option label="方式二" value="2"></el-option>
            </el-select>
          </el-form-item>
        </div>
        <div class="form-col form-col3">
          <el-form-item label="采购订单号：">
            <el-input size="mini" clearable v-model="name3"></el-input>
          </el-form-item>
        </div>
      </div>
      <div class="form-row">
        <div class="form-col form-col1">
          <el-form-item label="供应商联系人：">
            <el-input size="mini" clearable v-model="name4"></el-input>
          </el-form-item>
        </div>
        <div class="form-col form-col2">
          <el-form-item label="快递公司：">
            <el-select v-model="name5" clearable size="mini" placeholder="请选择">
              <el-option label="方式一" value="1"></el-option>
              <el-option label="方式二" value="2"></el-option>
            </el-select>
          </el-form-item>
        </div>
        <div class="form-col form-col3">
          <el-form-item label="采购订单日期：">
            <el-date-picker
              size="mini"
              value-format="yyyy-MM-dd"
              v-model="name6"
              type="date"
              placeholder="选择日期"
            ></el-date-picker>
          </el-form-item>
        </div>
      </div>
      <div class="form-row">
        <div class="form-col form-col1">
          <el-form-item label="付款方式：">
            <el-select v-model="name7" clearable size="mini" placeholder="请选择">
              <el-option label="方式一" value="1"></el-option>
              <el-option label="方式二" value="2"></el-option>
            </el-select>
          </el-form-item>
        </div>
        <div class="form-col form-col2">
          <el-form-item label="快递单号：">
            <el-input size="mini" clearable v-model="name8"></el-input>
          </el-form-item>
        </div>
        <div class="form-col form-col3">
          <el-form-item label="入库日期：">
            <el-date-picker
              size="mini"
              value-format="yyyy-MM-dd"
              v-model="name9"
              type="date"
              placeholder="选择日期"
            ></el-date-picker>
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
        style="width: 1220px"
      >
        <el-table-column label="原厂型号" width="178" prop="d"></el-table-column>
        <el-table-column label="品牌" align="center" width="65" prop="a"></el-table-column>
        <el-table-column label="数量" align="center" width="65" prop="f"></el-table-column>
        <el-table-column label="入库仓库" align="center" width="130" prop="b"></el-table-column>
        <el-table-column label="具体批号" align="center" width="60" prop="g"></el-table-column>
        <el-table-column label="产地" align="center" width="90" prop="h"></el-table-column>
        <el-table-column label="税率" align="center" width="45" prop="i"></el-table-column>
        <el-table-column label="货币" align="center" width="45" prop="h"></el-table-column>
        <el-table-column label="单价" align="right" width="70" prop="j"></el-table-column>
        <el-table-column label="总价" align="right" width="105" prop="k"></el-table-column>
        <el-table-column label="实际单价" align="right" width="85" prop="n"></el-table-column>
        <el-table-column label="应收总价" align="right" width="85" prop="o"></el-table-column>
        <el-table-column label="照片" align="center" width="110">
          <el-image
            style="width: 30px; height: 30px"
            src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
            :preview-src-list="['https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg']"
          ></el-image>
        </el-table-column>
        <el-table-column label="检测报告" width="85">
          <i class="iconfont iconAdobe_reader_logo_"></i>
        </el-table-column>
      </el-table>
      <div class="total-row">
        <div class="total-row-item">
          <div class="total-row-item-key">运费</div>
          <div class="total-row-item-value">
            <el-input v-model="name10" size="mini"></el-input>
          </div>
        </div>
        <div class="total-row-item">
          <div class="total-row-item-key">其他费用</div>
          <div class="total-row-item-value">
            <el-input v-model="name11" size="mini"></el-input>
          </div>
        </div>
        <div class="total-row-item bold">
          <div class="total-row-item-key">实际总价</div>
          <div class="total-row-item-value">￥1182.00</div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="remark">
        <span>备注：</span>
        <el-input v-model="name12" size="mini"></el-input>
      </div>
      <div class="input-group">
        <div class="input-item">
          <span>制单人</span>
          <el-input size="mini" v-model="name13"></el-input>
        </div>
        <div class="input-item">
          <span>审核人</span>
          <el-input size="mini" v-model="name14"></el-input>
        </div>
        <div class="input-item">
          <span>销售员</span>
          <el-input size="mini" v-model="name15"></el-input>
        </div>
        <div class="input-item">
          <span>单据日期</span>
          <el-date-picker
            size="mini"
            value-format="yyyy-MM-dd"
            v-model="name16"
            type="date"
            placeholder="选择日期"
          ></el-date-picker>
        </div>
        <div class="input-item">
          <span>审核日期</span>
          <el-date-picker
            size="mini"
            value-format="yyyy-MM-dd"
            v-model="name17"
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
import { addGodownEntry } from "../../../api/order";
import { Form } from "element-ui";
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
        case 4:
        case 5:
          return { backgroundColor: "#FFF099" };
          break;
        case 10:
        case 11:
          return { backgroundColor: "#99CC00" };
          break;
      }
    },
    iconwenjian() {
      let insertSalesOrder = {
        // 订单编号
        orderNumber: orderNumber,
        // 采购单ID
        buyerOrderId: buyerOrderId,
        // 采购订单编号
        buyerOrderNumber: this.name3,

        supplierId: this.name1,
        payment: this.name2,
        supplierLinkmanName: this.name4,
        expressComName: this.name5,
        buyerOrderDate: this.name6,
        payment: this.name7,
        expressNumber: this.name8,
        godownDate: this.name9,
        carriage: this.name10,

        otherCost: this.name11,
        // 总价
        orderPrice: orderPrice,
        remarks: this.name12,
        // 采购原名称
        buyerName: this.name12,
        //入库型号列表
        detailVos: orderTotalPrice
        // sss: this.name15,
        // checkManName: this.name16,
        // salesManName: this.name17,
        // sss: this.name18,
        // checkDate: this.name19
      };
      addBuyerOrder(insertSalesOrderData).then(res => {});
    }
  }
};
</script>

<style lang='scss'>
.add-warehouse-order {
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
          margin-left: 65px;
        }
        .el-select {
          width: 100%;
        }
      }
      .form-col1 {
        .el-form-item__content {
          width: 205px;
        }
      }
      .form-col2 {
        .el-form-item__content {
          width: 225px;
        }
      }
      .form-col3 {
        .number {
          margin-left: 5px;
          font-size: 14px;
          font-weight: bold;
          color: #ff0000;
        }
        .el-form-item__content {
          width: 190px;
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
      margin-left: 800px;
      margin-top: 50px;
      &-item {
        display: flex;
        align-items: center;
        font-size: 12px;
        color: #000;
        margin-bottom: 10px;
        &-key {
          width: 80px;
        }
        &-value {
          width: 90px;
          text-align: right;
          .el-input input {
            text-align: inherit;
          }
        }
        &.bold {
          font-weight: bold;
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