
<template>
  <div class="stock-index">
    <el-button size="mini" style="background: #99CC00" @click="importM">批量导入</el-button>

    <div class="gray-back" style="width: 100%;padding:10px 0 15px;min-height: 150px;">
      <el-table size="mini" :data="tableData" style="width: 100%;color: #00f">
        <el-table-column prop="date" label="原厂型号" width="180">
          <template slot-scope="scope">
            <el-input size="mini" v-if="show" placeholder v-model="scope.row.modelNumber"></el-input>
            <span v-else>{{ scope.row.modelNumber }}</span>
          </template>
        </el-table-column>
        <el-table-column align="center" prop="name" label="品牌" width="80">
          <template slot-scope="scope">
            <el-input size="mini" v-if="show" placeholder v-model="scope.row.brandName"></el-input>
            <span v-else>{{ scope.row.brandName }}</span>
          </template>
        </el-table-column>
        <el-table-column align="center" prop="name" label="SPQ" width="55">
          <template slot-scope="scope">
            <el-input size="mini" v-if="show" placeholder v-model="scope.row.spq"></el-input>
            <span v-else>{{ scope.row.spq }}</span>
          </template>
        </el-table-column>
        <el-table-column align="center" prop="name" label="MOQ" width="55">
          <template slot-scope="scope">
            <el-input size="mini" v-if="show" placeholder v-model="scope.row.moq"></el-input>
            <span v-else>{{ scope.row.moq }}</span>
          </template>
        </el-table-column>
        <el-table-column align="center" prop="name" label="包装" width="55">
          <template slot-scope="scope">
            <el-input size="mini" v-if="show" placeholder v-model="scope.row.receivePack"></el-input>
            <span v-else>{{ scope.row.receivePack }}</span>
          </template>
        </el-table-column>
        <el-table-column align="center" prop="name" label="货期" width="100">
          <template slot-scope="scope">
            <el-input size="mini" v-if="show" placeholder v-model="scope.row.receiveDelivery"></el-input>
            <span v-else>{{ scope.row.receiveDelivery }}</span>
          </template>
        </el-table-column>
        <el-table-column align="center" prop="name" label="现货数量" width="70">
          <template slot-scope="scope">
            <el-input size="mini" v-if="show" placeholder v-model="scope.row.tempSpotNum"></el-input>
            <span v-else>{{ scope.row.tempSpotNum }}</span>
          </template>
        </el-table-column>
        <el-table-column align="center" prop="name" label="货币" width="60">
          <template slot-scope="scope">
            <el-input size="mini" v-if="show" placeholder v-model="scope.row.receiveCurrency"></el-input>
            <span v-else>{{ scope.row.receiveCurrency }}</span>
          </template>
        </el-table-column>
        <el-table-column align="center" prop="name" label="单价" width="65">
          <template slot-scope="scope">
            <el-input size="mini" v-if="show" placeholder v-model="scope.row.price"></el-input>
            <span v-else>{{ scope.row.price }}</span>
          </template>
        </el-table-column>
        <el-table-column align="center" prop="name" label="供应商代码" width="80">
          <template slot-scope="scope">
            <el-input size="mini" v-if="show" placeholder v-model="scope.row.supCode"></el-input>
            <span v-else>{{ scope.row.supCode }}</span>
          </template>
        </el-table-column>
        <el-table-column align="center" prop="name" label="供应商" width="155">
          <template slot-scope="scope">
            <el-input size="mini" v-if="show" placeholder v-model="scope.row.supName"></el-input>
            <span v-else>{{ scope.row.supName }}</span>
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

    <el-dialog
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
          <el-table-column align="center" prop="name" label="SPQ" width="55"></el-table-column>
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
    </el-dialog>
  </div>
</template>

<script>
import bus from "@/assets/Bus";
import { supplierSpectypeAddList } from "../../api/stock";
export default {
  name: "specialModelAdd",
  components: {},
  data() {
    return {
      show: false,
      dialogTableVisible: false,
      tableData: [
        {
          supCode: "",
          supName: "",
          price: "",
          modelNumber: "",
          tempSpotNum: "",
          spq: "",
          mpq: "",
          moq: "",
          standardDelivery: "",
          receivePack: "",
          brandName: "",
          costPrice: "",
          receiveDelivery: "",
          receiveCurrency: "",
          batchNumber: "",
          remark: ""
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
        supCode: "",
        supName: "",
        price: "",
        modelNumber: "",
        tempSpotNum: "",
        spq: "",
        mpq: "",
        moq: "",
        standardDelivery: "",
        receivePack: "",
        brandName: "",
        costPrice: "",
        receiveDelivery: "",
        receiveCurrency: "",
        batchNumber: "",
        remark: ""
      });
    },
    // 保存
    seav() {
      let data = this.tableData;
      supplierSpectypeAddList(data).then(res => {
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