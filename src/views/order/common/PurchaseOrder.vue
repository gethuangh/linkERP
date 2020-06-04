<template>
  <!-- 采购订单 -->
  <div class="sales-order">
    <div class="sales-order-header">
      <div class="sales-order-header-title" :style="{backgroundColor: title.bg}">{{ title.text }}</div>
      <Pagination
        @currentChange="currentChange"
        :total="total"
        :layout="layout"
        :next="next"
        :prev="prev"
        :pageSize="pageSize"
      ></Pagination>
      <a href="javascript:;" @click="all" class="sales-order-header-all">（查看全部）</a>
      <a href="javascript:;" @click="exportHistory">（导出全部）</a>
    </div>
    <el-table
      size="mini"
      stripe
      :cell-style="cellStyle"
      :data="tableData"
      border
      class="sales-order-table"
    >
      <el-table-column width="75">
        <template slot-scope="scope">
          <el-button
            v-if="scope.$index === 0"
            class="search-btn"
            type="primary"
            size="mini"
            plain
            @click="Search"
          >Search</el-button>
          <div v-else-if="isFinish" class="sales-order-table-operation">
            <i class="iconfont iconlikai"></i>
          </div>
          <div v-else class="sales-order-table-operation">
            <i class="iconfont iconlikai"></i>
            <i class="iconfont iconxiezi" @click="setinput(scope.row)"></i>
            <i class="iconfont iconcha" @click="deleFun(scope.row)"></i>
          </div>
        </template>
      </el-table-column>
      <el-table-column width="75" prop="a" label="单据日期" class-name="blue-font" align="center">
        <template slot-scope="scope">
          <el-date-picker
            size="mini"
            value-format="yyyy-MM-dd"
            v-if="scope.$index == 0"
            v-model="value1"
            type="date"
            placeholder="选择日期"
          ></el-date-picker>
          <el-input
            size="mini"
            v-else-if="scope.$index != 0&&inputId==scope.row.id&&show"
            placeholder
            v-model="scope.row.dataTime"
          ></el-input>
          <span v-else>{{ scope.row.dataTime }}</span>
        </template>
      </el-table-column>
      <el-table-column width="40" prop="b" label="季度" class-name="blue-font" align="center">
        <template slot-scope="scope">
          <el-input size="mini" clearable v-model="value2" v-if="scope.$index === 0"></el-input>
          <span
            v-else
          >{{ scope.row.quarter=="1"?'第一季度 ':(scope.row.quarter=="2"?"第二季度":(scope.row.quarter=="3"?"第三季度":"第四季度")) }}</span>
        </template>
      </el-table-column>
      <el-table-column width="75" prop="c" label="采购订单号" class-name="blue-font" align="center">
        <template slot-scope="scope">
          <el-input size="mini" clearable v-model="value3" v-if="scope.$index === 0"></el-input>
          <el-input
            size="mini"
            v-else-if="scope.$index != 0&&inputId==scope.row.id&&show"
            placeholder
            v-model="scope.row.orderNumber"
          ></el-input>
          <span v-else>{{ scope.row.orderNumber }}</span>
        </template>
      </el-table-column>
      <el-table-column width="75" prop="d" label="客户订单号" class-name="blue-font" align="center">
        <template slot-scope="scope">
          <el-input size="mini" clearable v-model="value4" v-if="scope.$index === 0"></el-input>
          <el-input
            size="mini"
            v-else-if="scope.$index != 0&&inputId==scope.row.id&&show"
            placeholder
            v-model="scope.row.clientNumber"
          ></el-input>
          <span v-else>{{ scope.row.clientNumber }}</span>
        </template>
      </el-table-column>
      <el-table-column width="160" prop="e" label="原厂型号" class-name="blue-font">
        <template slot-scope="scope">
          <el-input size="mini" clearable v-model="value6" v-if="scope.$index === 0"></el-input>
          <el-input
            size="mini"
            v-else-if="scope.$index != 0&&inputId==scope.row.id&&show"
            placeholder
            v-model="scope.row.originalModel"
          ></el-input>
          <span v-else>{{ scope.row.originalModel }}</span>
        </template>
      </el-table-column>
      <el-table-column width="70" prop="f" label="品牌" class-name="blue-font" align="center">
        <template slot-scope="scope">
          <el-input size="mini" clearable v-model="value7" v-if="scope.$index === 0"></el-input>
          <el-input
            size="mini"
            v-else-if="scope.$index != 0&&inputId==scope.row.id&&show"
            placeholder
            v-model="scope.row.brandName"
          ></el-input>
          <span v-else>{{ scope.row.brandName }}</span>
        </template>
      </el-table-column>
      <el-table-column width="60" prop="g" label="数量" class-name="blue-font" align="center">
        <template slot-scope="scope">
          <el-input size="mini" clearable v-model="value8" v-if="scope.$index === 0"></el-input>
          <el-input
            size="mini"
            v-else-if="scope.$index != 0&&inputId==scope.row.id&&show"
            placeholder
            v-model="scope.row.number"
          ></el-input>
          <span v-else>{{ scope.row.number }}</span>
        </template>
      </el-table-column>
      <el-table-column width="40" prop="h" label="批号" class-name="blue-font" align="center">
        <template slot-scope="scope">
          <el-input size="mini" clearable v-model="value9" v-if="scope.$index === 0"></el-input>
          <el-input
            size="mini"
            v-else-if="scope.$index != 0&&inputId==scope.row.id&&show"
            placeholder
            v-model="scope.row.batchNumber"
          ></el-input>
          <span v-else>{{ scope.row.batchNumber }}</span>
        </template>
      </el-table-column>
      <el-table-column width="80" prop="i" label="采购单价" class-name="blue-font" align="center">
        <template slot-scope="scope">
          <el-input size="mini" clearable v-model="value10" v-if="scope.$index === 0"></el-input>
          <el-input
            size="mini"
            v-else-if="scope.$index != 0&&inputId==scope.row.id&&show"
            placeholder
            v-model="scope.row.price"
          ></el-input>
          <span v-else>{{ scope.row.price }}</span>
        </template>
      </el-table-column>
      <el-table-column width="95" prop="j" label="采购总价" class-name="blue-font" align="center">
        <template slot-scope="scope">
          <el-input size="mini" clearable v-model="value11" v-if="scope.$index === 0"></el-input>
          <el-input
            size="mini"
            v-else-if="scope.$index != 0&&inputId==scope.row.id&&show"
            placeholder
            v-model="scope.row.totalPrice"
          ></el-input>
          <span v-else>{{ scope.row.totalPrice }}</span>
        </template>
      </el-table-column>
      <el-table-column width="35" prop="k" label="税率" align="center">
        <template slot-scope="scope">
          <el-select
            class="custom-input"
            v-model="value12"
            clearable
            v-if="scope.$index === 0"
            size="mini"
            placeholder="请选择"
          >
            <el-option
              v-for="item in taxRate"
              :key="item.id"
              :label="item.attrName"
              :value="item.id"
            ></el-option>
          </el-select>
          <el-input
            size="mini"
            v-else-if="scope.$index != 0&&inputId==scope.row.id&&show"
            placeholder
            v-model="scope.row.taxRateValue"
          ></el-input>
          <span v-else>{{ scope.row.taxRateValue }}</span>
        </template>
      </el-table-column>
      <el-table-column width="65" prop="l" label="美金单价" align="center">
        <template slot-scope="scope">
          <el-input size="mini" clearable v-model="value13" v-if="scope.$index === 0"></el-input>
          <el-input
            size="mini"
            v-else-if="scope.$index != 0&&inputId==scope.row.id&&show"
            placeholder
            v-model="scope.row.usdPrice"
          ></el-input>
          <span v-else>{{ scope.row.usdPrice }}</span>
        </template>
      </el-table-column>
      <el-table-column width="80" prop="m" label="美金总价" align="center">
        <template slot-scope="scope">
          <el-input size="mini" clearable v-model="value14" v-if="scope.$index === 0"></el-input>
          <el-input
            size="mini"
            v-else-if="scope.$index != 0&&inputId==scope.row.id&&show"
            placeholder
            v-model="scope.row.usdTotalPrice"
          ></el-input>
          <span v-else>{{ scope.row.usdTotalPrice }}</span>
        </template>
      </el-table-column>
      <el-table-column width="90" prop="n" label="毛利润" class-name="blue-font" align="center">
        <template slot-scope="scope">
          <el-input size="mini" clearable v-model="value15" v-if="scope.$index === 0"></el-input>
          <el-input
            size="mini"
            v-else-if="scope.$index != 0&&inputId==scope.row.id&&show"
            placeholder
            v-model="scope.row.grossProfit"
          ></el-input>
          <span v-else>{{ scope.row.grossProfit }}</span>
        </template>
      </el-table-column>
      <el-table-column width="70" prop="o" label="毛利润率" class-name="blue-font" align="center">
        <template slot-scope="scope">
          <el-input size="mini" clearable v-model="value16" v-if="scope.$index === 0"></el-input>
          <el-input
            size="mini"
            v-else-if="scope.$index != 0&&inputId==scope.row.id&&show"
            placeholder
            v-model="scope.row.grossProfitMargin"
          ></el-input>
          <span v-else>{{ scope.row.grossProfitMargin }}</span>
        </template>
      </el-table-column>
      <el-table-column width="65" prop="p" label="供应商代码" class-name="blue-font" align="center">
        <template slot-scope="scope">
          <el-input size="mini" clearable v-model="value17" v-if="scope.$index === 0"></el-input>
          <el-input
            size="mini"
            v-else-if="scope.$index != 0&&inputId==scope.row.id&&show"
            placeholder
            v-model="scope.row.clientCode"
          ></el-input>
          <span v-else>{{ scope.row.clientCode }}</span>
        </template>
      </el-table-column>
      <el-table-column width="120" prop="q" label="供应商简称" class-name="blue-font" align="center">
        <template slot-scope="scope">
          <el-input size="mini" clearable v-model="value18" v-if="scope.$index === 0"></el-input>
          <el-input
            size="mini"
            v-else-if="scope.$index != 0&&inputId==scope.row.id&&show"
            placeholder
            v-model="scope.row.clientAbbreviation"
          ></el-input>
          <span v-else>{{ scope.row.clientAbbreviation }}</span>
        </template>
      </el-table-column>
      <el-table-column width="85" prop="r" label="公司" class-name="blue-font">
        <template slot-scope="scope">
          <el-select
            v-if="scope.$index === 0"
            class="custom-input"
            v-model="value19"
            clearable
            size="mini"
            placeholder="请选择"
          >
            <el-option
              v-for="item in companyAll"
              :key="item.id"
              :label="item.departmentName"
              :value="item.departmentName"
            ></el-option>
          </el-select>
          <el-input
            size="mini"
            v-else-if="scope.$index != 0&&inputId==scope.row.id&&show"
            placeholder
            v-model="scope.row.salesmanComName"
          ></el-input>
          <span v-else>{{ scope.row.salesmanComName }}</span>
        </template>
      </el-table-column>
      <el-table-column width="55" prop="s" label="采购员" class-name="blue-font" align="center">
        <template slot-scope="scope">
          <el-select
            v-if="scope.$index === 0"
            class="custom-input"
            v-model="value20"
            clearable
            size="mini"
            placeholder="请选择"
          >
            <el-option
              v-for="item in orderStatus"
              :key="item.id"
              :label="item.realName"
              :value="item.id"
            ></el-option>
          </el-select>
          <el-input
            size="mini"
            v-else-if="scope.$index != 0&&inputId==scope.row.id&&show"
            placeholder
            v-model="scope.row.salesManName"
          ></el-input>
          <span v-else>{{ scope.row.salesManName }}</span>
        </template>
      </el-table-column>
      <el-table-column width="75" prop="t" label="交期" class-name="blue-font" align="center">
        <template slot-scope="scope">
          <el-input size="mini" clearable v-model="value21" v-if="scope.$index === 0"></el-input>
          <el-input
            size="mini"
            v-else-if="scope.$index != 0&&inputId==scope.row.id&&show"
            placeholder
            v-model="scope.row.predictStockOutData"
          ></el-input>
          <span v-else>{{ scope.row.predictStockOutData }}</span>
        </template>
      </el-table-column>
      <el-table-column width="55" prop="s" label="销售员" class-name="blue-font" align="center">
        <template slot-scope="scope">
          <el-select
            v-if="scope.$index === 0"
            class="custom-input"
            v-model="value22"
            clearable
            size="mini"
            placeholder="请选择"
          >
            <el-option
              v-for="item in orderStatus"
              :key="item.id"
              :label="item.realName"
              :value="item.id"
            ></el-option>
          </el-select>
          <el-input
            size="mini"
            v-else-if="scope.$index != 0&&inputId==scope.row.id&&show"
            placeholder
            v-model="scope.row.salesManName"
          ></el-input>
          <span v-else>{{ scope.row.salesManName }}</span>
        </template>
      </el-table-column>
      <el-table-column width="100" prop="u" label="订单状态" align="center">
        <template slot-scope="scope">
          <el-select size="mini" clearable v-if="scope.$index === 0" v-model="value21">
            <el-option label="审核未通过" value="-1"></el-option>
            <el-option label="待审核" value="0"></el-option>
            <el-option label="已审核待采购" value="1"></el-option>
            <el-option label="已采购待入库" value="2"></el-option>
            <el-option label="部分入库" value="3"></el-option>
            <el-option label="已入库待发货" value="4"></el-option>
            <el-option label="已出库" value="5"></el-option>
            <el-option label="已收款" value="6"></el-option>
          </el-select>
          <template v-else>
            <span style="color: #FF0000">{{scope.row.orderStatusValue}}</span>
          </template>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import Pagination from "../../../components/Pagination";
import { exportBuyerOrder } from "@/api/order";
export default {
  data() {
    return {
      value1: "",
      value2: null,
      value3: null,
      value4: null,
      value5: null,
      value6: null,
      value7: null,
      value8: null,
      value9: null,
      value10: null,
      value21: null,
      value11: null,
      value12: null,
      value13: null,
      value14: null,
      value15: null,
      value16: null,
      value17: null,
      value18: null,
      value19: null,
      value20: null,
      value21: null,
      value22: null,
      value23: null,
      layout: "prev, pager, next, total",
      next: ">>",
      prev: "<<",
      pageSize: 10,
      inputId: null,
      show: false
    };
  },
  components: { Pagination },
  props: [
    "total",
    "tableData",
    "title",
    "isFinish",
    "taxRate",
    "orderStatus",
    "companyAll"
  ],
  methods: {
    all() {
      this.$emit("all");
    },
    // 导出历史报价
    exportHistory() {
      console.log("1");
      // this.importExls();
    },
    importExls() {
      // 设置当前日期
      let time = new Date();
      let year = time.getFullYear();
      let month = time.getMonth() + 1;
      let day = time.getDate();
      let name = year + "-" + month + "-" + day;

      exportBuyerOrder({
        enquiryId: this.clientModelid,
        clientModel: this.clientModel
      }).then(res => {
        let blob = new Blob([res], {
          type: "application/octet-stream"
        });
        let url = window.URL.createObjectURL(blob);
        let fileName = "全部报价" + name + ".xls";
        if ("download" in document.createElement("a")) {
          const a = document.createElement("a");
          a.href = url;
          a.download = fileName;
          a.style.display = "none";
          document.body.appendChild(a);
          a.click();
          URL.revokeObjectURL(a.href);
          document.body.removeChild(a);
        } else {
          navigator.msSaveBlob(blob, fileName);
        }
      });
    },
    cellStyle({ columnIndex, rowIndex }) {
      if (this.isFinish) {
        if (columnIndex === 22 && rowIndex !== 0) {
          return { backgroundColor: "#CCFFCC" };
        } else {
          return { color: "#000" };
        }
      } else {
        if (columnIndex === 5 && rowIndex !== 0) {
          return { backgroundColor: "#FFF099" };
        } else if (
          (columnIndex === 14 && rowIndex !== 0) ||
          (columnIndex === 15 && rowIndex !== 0)
        ) {
          return { backgroundColor: "#CCFFCC" };
        }
      }
    },
    currentChange(val) {
      this.$emit("setNum", val);
    },
    // 搜索时给父组件传值
    Search() {
      let data = {
        value1: this.value1,
        value2: this.value2,
        value3: this.value3,
        value4: this.value4,
        value5: this.value5,
        value6: this.value6,
        value7: this.value7,
        value8: this.value8,
        value9: this.value9,
        value10: this.value10,
        value11: this.value11,
        value12: this.value12,
        value13: this.value13,
        value14: this.value14,
        value15: this.value15,
        value16: this.value16,
        value17: this.value17,
        value18: this.value18,
        value19: this.value19,
        value20: this.value20,
        value21: this.value21,
        value22: this.value22,
        value23: this.value23
      };
      this.$emit("SearchFun", data);
    },
    deleFun(row) {
      this.$emit("deleFun", row);
    },
    setinput(row) {
      this.inputId = row.id;
      this.show = !this.show;
      this.$emit("setinput", row);
    }
  }
};
</script>

<style lang='scss'>
.sales-order {
  &-header {
    display: flex;
    align-items: center;
    &-title {
      width: 150px;
      height: 20px;
      padding: 0 5px;
      line-height: 20px;
      background-color: #99ccff;
      font-weight: bold;
      color: #fff;
    }
    &-all {
      color: #0000ff;
      cursor: pointer;
    }
    &-export {
      cursor: pointer;
      color: #993300;
    }
  }
  &-table {
    th {
      color: #000 !important;
      font-weight: normal;
    }
    .cell {
      padding: 0 !important;
    }
    .el-input__inner {
      padding: 0 5px;
    }
    .search-btn {
      padding: 7px 8px;
    }
    &-operation {
      display: flex;
      justify-content: space-around;
      .iconlikai,
      .iconxiezi {
        font-size: 14px;
      }
      .iconcha {
        font-size: 12px;
      }
    }
    .blue-font {
      color: #0000ff;
    }
  }
}
</style>