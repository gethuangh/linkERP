
<template>
  <div class="stock-index">
    <div class="gray-back" style="width: 100%;padding:10px 0 15px;min-height: 150px;">
      <el-table size="mini" :data="tableData" style="width: 100%;color: #00f">
        <el-table-column prop="date" label="原厂型号" width="150">
          <template slot-scope="scope">
            <el-input size="mini" v-if="show" placeholder="必填" v-model="scope.row.originalModel"></el-input>
            <span v-else>{{ scope.row.originalModel }}</span>
          </template>
        </el-table-column>
        <el-table-column align="center" prop="name" label="品牌" width="80">
          <template slot-scope="scope">
            <el-input size="mini" v-if="show" placeholder="必填" v-model="scope.row.brand"></el-input>
            <span v-else>{{ scope.row.brand }}</span>
          </template>
        </el-table-column>
        <el-table-column align="center" prop="name" label="数量" width="55">
          <template slot-scope="scope">
            <el-input size="mini" v-if="show" placeholder="必填" v-model="scope.row.quantity"></el-input>
            <span v-else>{{ scope.row.quantity }}</span>
          </template>
        </el-table-column>
        <el-table-column align="center" prop="name" label="MOQ" width="55">
          <template slot-scope="scope">
            <el-input size="mini" v-if="show" placeholder v-model="scope.row.moq"></el-input>
            <span v-else>{{ scope.row.moq }}</span>
          </template>
        </el-table-column>
        <el-table-column align="center" prop="name" label="批号" width="55">
          <template slot-scope="scope">
            <el-input size="mini" v-if="show" placeholder="必填" v-model="scope.row.lotNumber"></el-input>
            <span v-else>{{ scope.row.lotNumber }}</span>
          </template>
        </el-table-column>
        <el-table-column align="center" prop="name" label="货期" width="100">
          <template slot-scope="scope">
            <el-input size="mini" v-if="show" placeholder="必填" v-model="scope.row.delivery"></el-input>
            <span v-else>{{ scope.row.delivery }}</span>
          </template>
        </el-table-column>
        <el-table-column align="center" prop="name" label="录入人" width="70">
          <template slot-scope="scope">
            <el-input size="mini" v-if="show" placeholder="必填" v-model="scope.row.inputPerson"></el-input>
            <span v-else>{{ scope.row.inputPerson }}</span>
          </template>
        </el-table-column>
        <el-table-column align="center" prop="name" label="包装数量" width="60">
          <template slot-scope="scope">
            <el-input size="mini" v-if="show" placeholder v-model="scope.row.packingQuantity"></el-input>
            <span v-else>{{ scope.row.packingQuantity }}</span>
          </template>
        </el-table-column>
        <el-table-column align="center" prop="name" label="成本" width="55">
          <template slot-scope="scope">
            <el-input size="mini" v-if="show" placeholder v-model="scope.row.cost"></el-input>
            <span v-else>{{ scope.row.cost }}</span>
          </template>
        </el-table-column>
        <el-table-column align="center" prop="name" label="采购员" width="65">
          <template slot-scope="scope">
            <el-input size="mini" v-if="show" placeholder v-model="scope.row.buyer"></el-input>
            <span v-else>{{ scope.row.buyer }}</span>
          </template>
        </el-table-column>
        <el-table-column align="center" prop="name" label="供应商代码" width="80">
          <template slot-scope="scope">
            <el-input size="mini" v-if="show" placeholder v-model="scope.row.vendorCode"></el-input>
            <span v-else>{{ scope.row.vendorCode }}</span>
          </template>
        </el-table-column>
        <el-table-column align="center" prop="name" label="供应商" width="155">
          <template slot-scope="scope">
            <el-input size="mini" v-if="show" placeholder v-model="scope.row.supplier"></el-input>
            <span v-else>{{ scope.row.supplier }}</span>
          </template>
        </el-table-column>
        <el-table-column align="center" prop="none" label="备注">
          <template slot-scope="scope">
            <el-input size="mini" v-if="show" placeholder v-model="scope.row.remark"></el-input>
            <span v-else>{{ scope.row.remark }}</span>
          </template>
        </el-table-column>
      </el-table>
      <el-button
        size="mini"
        icon="el-icon-plus"
        style="background: #99CC00;border-radius: 0"
        @click="addRow"
      ></el-button>
    </div>

    <el-button size="mini" type="success" @click="seav">保存</el-button>
    <el-button size="mini" type="warning" @click="setamend">修改</el-button>

    <!-- <el-dialog
      class="special-model-import"
      title="批量导入"
      append-to-body
      width="1100px"
      :visible.sync="dialogTableVisible"
    >
      <div class="gray-back" style="width: 100%;min-height: 150px;">
        <el-table size="mini" border :data="tableDataImport" style="width: 100%;color: #00f">
          <el-table-column prop="date" label="原厂型号" width="180"></el-table-column>
          <el-table-column align="center" prop="name" label="品牌" width="50"></el-table-column>
          <el-table-column align="center" prop="name" label="quantity" width="55"></el-table-column>
          <el-table-column align="center" prop="name" label="MOQ" width="55"></el-table-column>
          <el-table-column align="center" prop="name" label="包装" width="50"></el-table-column>
          <el-table-column align="center" prop="name" label="货期" width="100"></el-table-column>
          <el-table-column align="center" prop="name" label="现货数量" width="70"></el-table-column>
          <el-table-column align="center" prop="name" label="货币" width="60"></el-table-column>
          <el-table-column align="center" prop="name" label="单价" width="65"></el-table-column>
          <el-table-column align="center" prop="name" label="供应商代码" width="85"></el-table-column>
          <el-table-column align="center" prop="name" label="供应商" width="155"></el-table-column>
          <el-table-column align="center" prop="none" label="备注"></el-table-column>
        </el-table>
      </div>
    </el-dialog>-->
  </div>
</template>

<script>
import bus from "@/assets/Bus";
import { virtualAddList } from "../../api/stock";

export default {
  name: "specialModelAdd",
  components: {},
  data() {
    return {
      show: false,
      dialogTableVisible: false,
      tableData: [
        {
          vendorCode: "",
          supplier: "",
          cost: "",
          originalModel: "",
          inputPerson: "",
          quantity: "",
          mpq: "",
          moq: "",
          standardDelivery: "",
          lotNumber: "",
          brand: "",
          costcost: "",
          delivery: "",
          packingQuantity: "",
          batchNumber: "",
          remark: "",
          buyer: ""
        }
      ],
      tableDataImport: []
    };
  },
  methods: {
    importM() {
      this.dialogTableVisible = true;
    },
    // 新增
    addRow() {
      this.tableData.push({
        vendorCode: "",
        supplier: "",
        cost: "",
        originalModel: "",
        inputPerson: "",
        quantity: "",
        mpq: "",
        moq: "",
        standardDelivery: "",
        lotNumber: "",
        brand: "",
        costcost: "",
        delivery: "",
        packingQuantity: "",
        batchNumber: "",
        remark: "",
        buyer: ""
      });
    },
    // 保存
    seav() {
      let data = this.tableData;
      virtualAddList(data).then(res => {
        console.log(res);
      });
    },
    // 修改
    setamend() {
      this.show = !this.show;
    }
  },
  created() {}
};
</script>

<style lang="scss">
.special-model-import {
  .el-dialog__header {
    background: #d7d7d7;
  }
  .el-dialog__body {
    padding: 0;
    min-height: 200px;
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
}
</style>