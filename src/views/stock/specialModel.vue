<template>
  <div class="special-model">
    <div style="display: flex;align-items: flex-end;">
      <p class="el-button--mini" style="background: #99CC00;margin-right: 10px;">
        * 特价型号
        <span>{{(total)}}</span>
      </p>
      <el-button size="mini" style="background: #41C363">导出</el-button>
      <el-button size="mini" style="background: #FF99CC">导入</el-button>
      <Pagination
        @currentChange="currentChange"
        :total="total"
        :layout="layout"
        :next="next"
        :prev="prev"
        :pageSize="pageSize"
      ></Pagination>
      <el-link :underline="false" style="color: #0000ff" @click="openAll">查看全部</el-link>
      <el-link :underline="false" style="color: #993300" @click="exportHistory">导出全部</el-link>
    </div>

    <div class="gray-back" style="width: 1700px;padding-top:10px;">
      <el-table
        :row-class-name="tableRowClassName"
        border
        size="mini"
        :data="supplierSpectypeList"
        style="width: 100%;padding-bottom: 10px;"
      >
        <el-table-column label=" " width="90">
          <template slot-scope="scope">
            <el-button
              v-if="scope.$index == 0"
              size="mini"
              style="background: #6B97B9;"
              @click="search"
            >search</el-button>
            <span
              v-if="scope.$index != 0"
              style="display: flex;justify-content: space-around;color: #999;"
            >
              <i class="iconfont">&#xe6dd;</i>
              <i class="iconfont" @click="setinput(scope.row)">&#xe63c;</i>
              <i class="iconfont" @click="del(scope.row)">&#xe609;</i>
            </span>
          </template>
        </el-table-column>
        <el-table-column sortable align="center" label="类别" width="80">
          <template slot-scope="scope">
            <el-select v-if="scope.$index == 0" size="mini" v-model="inputTwo1" placeholder=" ">
              <el-option
                v-for="item in supplierType"
                :key="item.id"
                :label="item.attrName"
                :value="item.id"
              ></el-option>
            </el-select>
            <p
              class="el-button--mini"
              v-if="scope.$index != 0 && scope.row.type == '代理商'"
              style="background: #99CC00;"
              disable-transitions
            >{{scope.row.type}}</p>
            <p
              class="el-button--mini"
              v-else-if="scope.$index != 0 && scope.row.type == '贸易商'"
              style="background: #FF99CC;"
              disable-transitions
            >{{scope.row.type}}</p>
            <p
              class="el-button--mini"
              v-else-if="scope.$index != 0 && scope.row.type == '代工厂'"
              style="background: #3366FF;"
              disable-transitions
            >{{scope.row.type}}</p>
            <p
              class="el-button--mini"
              v-else-if="scope.$index != 0 && scope.row.type == '原厂'"
              style="background: #808000;"
              disable-transitions
            >{{scope.row.type}}</p>
            <span v-else></span>
          </template>
        </el-table-column>
        <el-table-column sortable align="center" label="原厂型号" width="185">
          <template slot-scope="scope">
            <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo2"></el-input>
            <el-input
              size="mini"
              v-else-if="scope.$index != 0&&inputId==scope.row.id&&show"
              placeholder
              v-model="scope.row.modelNumber"
            ></el-input>
            <span v-else>{{ scope.row.modelNumber }}</span>
          </template>
        </el-table-column>
        <el-table-column sortable align="center" label="品牌" width="75">
          <template slot-scope="scope">
            <el-select
              v-if="scope.$index == 0"
              size="mini"
              v-model="inputTwo3"
              clearable
              placeholder
            >
              <el-option
                v-for="item in brand"
                :key="item.name"
                size="mini"
                :label="item.name"
                :value="item.name"
              ></el-option>
            </el-select>
            <el-input
              size="mini"
              v-else-if="scope.$index != 0&&inputId==scope.row.id&&show"
              placeholder
              v-model="scope.row.brandName"
            ></el-input>
            <span v-else>{{ scope.row.brandName }}</span>
          </template>
        </el-table-column>
        <el-table-column sortable align="center" width="75" label="数量">
          <template slot-scope="scope">
            <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo4"></el-input>
            <el-input
              size="mini"
              v-else-if="scope.$index != 0&&inputId==scope.row.id&&show"
              placeholder
              v-model="scope.row.tempSpotNum"
            ></el-input>
            <span v-else>{{ scope.row.tempSpotNum }}</span>
          </template>
        </el-table-column>
        <el-table-column sortable align="center" width="75" label="批号">
          <template slot-scope="scope">
            <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo5"></el-input>
            <el-input
              size="mini"
              v-else-if="scope.$index != 0&&inputId==scope.row.id&&show"
              placeholder
              v-model="scope.row.batchNumber"
            ></el-input>
            <span v-else>{{ scope.row.batchNumber }}</span>
          </template>
        </el-table-column>
        <el-table-column align="center" width="75" label="货期">
          <template slot-scope="scope">
            <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo6"></el-input>
            <el-input
              size="mini"
              v-else-if="scope.$index != 0&&inputId==scope.row.id&&show"
              placeholder
              v-model="scope.row.receiveDelivery"
            ></el-input>
            <span v-else>{{ scope.row.receiveDelivery }}</span>
          </template>
        </el-table-column>
        <el-table-column sortable align="center" width="80" label="MOQ">
          <template slot-scope="scope">
            <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo7"></el-input>
            <el-input
              size="mini"
              v-else-if="scope.$index != 0&&inputId==scope.row.id&&show"
              placeholder
              v-model="scope.row.moq"
            ></el-input>
            <span v-else>{{ scope.row.moq }}</span>
          </template>
        </el-table-column>
        <el-table-column sortable align="center" width="80" label="SPQ">
          <template slot-scope="scope">
            <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo8"></el-input>
            <el-input
              size="mini"
              v-else-if="scope.$index != 0&&inputId==scope.row.id&&show"
              placeholder
              v-model="scope.row.spq"
            ></el-input>
            <span v-else>{{ scope.row.spq }}</span>
          </template>
        </el-table-column>
        <el-table-column sortable align="center" width="75" label="包装">
          <template slot-scope="scope">
            <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo9"></el-input>
            <el-input
              size="mini"
              v-else-if="scope.$index != 0&&inputId==scope.row.id&&show"
              placeholder
              v-model="scope.row.packName"
            ></el-input>
            <span v-else>{{ scope.row.packName }}</span>
          </template>
        </el-table-column>
        <el-table-column align="center" width="75" label="成本">
          <template slot-scope="scope">
            <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo10"></el-input>
            <el-input
              size="mini"
              v-else-if="scope.$index != 0&&inputId==scope.row.id&&show"
              placeholder
              v-model="scope.row.costPrice"
            ></el-input>
            <span v-else>{{ scope.row.costPrice }}</span>
          </template>
        </el-table-column>
        <el-table-column align="center" width="85" label="采购员">
          <template slot-scope="scope">
            <el-select
              v-if="scope.$index === 0"
              class="custom-input"
              v-model="inputTwo11"
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
            <!-- <el-input
              size="mini"
              v-else-if="scope.$index != 0&&inputId==scope.row.id&&show"
              placeholder
              v-model="scope.row.userName"
            ></el-input>-->
            <span v-else>{{ scope.row.userName }}</span>
          </template>
        </el-table-column>
        <el-table-column sortable align="center" width="105" label="供应商代码">
          <template slot-scope="scope">
            <el-select v-if="scope.$index == 0" size="mini" v-model="inputTwo12" placeholder=" ">
              <el-option
                v-for="item in vendorCodeDropDown"
                :key="item.value"
                :label="item.supplierCode"
                :value="item.supplierCode"
              ></el-option>
            </el-select>
            <el-input
              size="mini"
              v-else-if="scope.$index != 0&&inputId==scope.row.id&&show"
              placeholder
              v-model="scope.row.supCode"
            ></el-input>
            <span v-else>{{ scope.row.supCode }}</span>
          </template>
        </el-table-column>
        <el-table-column sortable align="center" width="160" label="供应商">
          <template slot-scope="scope">
            <el-select v-if="scope.$index == 0" size="mini" v-model="inputTwo13" placeholder=" ">
              <el-option
                v-for="item in vendorNameDropDown"
                :key="item.value"
                :label="item.supplierName"
                :value="item.supplierName"
              ></el-option>
            </el-select>
            <el-input
              size="mini"
              v-else-if="scope.$index != 0&&inputId==scope.row.id&&show"
              placeholder
              v-model="scope.row.supName"
            ></el-input>
            <span v-else>{{ scope.row.supName }}</span>
          </template>
        </el-table-column>
        <el-table-column sortable align="center" width="100" label="录入日期">
          <template slot-scope="scope">
            <el-date-picker
              size="mini"
              value-format="yyyy-MM-dd"
              v-if="scope.$index == 0"
              v-model="inputTwo14"
              type="date"
              placeholder="选择日期"
            ></el-date-picker>
            <span v-if="scope.$index != 0">{{ scope.row.createTime }}</span>
          </template>
        </el-table-column>
        <el-table-column align="center" width="100" label="更新天数">
          <template slot-scope="scope">
            <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo15"></el-input>
            <span v-if="scope.$index != 0">{{ scope.row.updateDays }}</span>
          </template>
        </el-table-column>
        <el-table-column align="center" label="备注">
          <template slot-scope="scope">
            <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo16"></el-input>
            <el-input
              size="mini"
              v-else-if="scope.$index != 0&&inputId==scope.row.id&&show"
              placeholder
              v-model="scope.row.remark"
            ></el-input>
            <span v-else>{{ scope.row.remark }}</span>
          </template>
        </el-table-column>
      </el-table>
      <!-- <Pagination :total="total"></Pagination> -->
    </div>

    <!-- <el-dialog width="1750px" title="查看全部" :visible.sync="specialAll">
      <specilModelAll></specilModelAll>
    </el-dialog>-->

    <el-dialog width="1100px" title="特价型号 - 新增" :visible.sync="specialAdd">
      <specilModelAdd></specilModelAdd>
    </el-dialog>
  </div>
</template>

<script>
import bus from "@/assets/Bus";
// import Pagination from "@/components/Pagination.vue";
import specilModelAll from "./specilModelAll.vue";
import specilModelAdd from "./specialModelAdd.vue";
import Pagination from "../../components/Pagination";
import {
  supplierSpectypeList,
  brand,
  vendorCodeDropDown,
  supplierType,
  vendorNameDropDown,
  selectData,
  deleteOrNot,
  modifySupplierSpectype,
  supplierSpectypeexport
} from "../../api/stock";
export default {
  name: "stockSpecialModel",
  components: {
    specilModelAll,
    specilModelAdd,
    Pagination
  },
  data() {
    return {
      brand: "",
      vendorCodeDropDown: "",
      supplierType: "",
      vendorNameDropDown: "",
      orderStatus: "",
      specialAll: false,
      specialAdd: false,
      layout: "prev, pager, next, total",
      next: ">>",
      prev: "<<",
      total: 1,
      pageSize: 10,
      inputTwo1: null,
      inputTwo2: null,
      inputTwo3: null,
      inputTwo4: null,
      inputTwo5: null,
      inputTwo6: null,
      inputTwo7: null,
      inputTwo8: null,
      inputTwo9: null,
      inputTwo10: null,
      inputTwo11: null,
      inputTwo12: null,
      inputTwo13: null,
      inputTwo14: "",
      inputTwo15: null,
      inputTwo16: null,
      value: "",
      supplierSpectypeList: [{}],
      options: [],
      inputId: "",
      show: false,
      num: 1,
      onOff: false,
      pageNum: 1,
      pages: 1
    };
  },
  mounted() {
    window.addEventListener("scroll", this.throttleFun, true);
  },
  methods: {
    // 导出历史报价
    exportHistory() {
      console.log(this.clientModelid, this.clientModel);
      this.importExls();
    },
    importExls() {
      // 设置当前日期
      let time = new Date();
      let year = time.getFullYear();
      let month = time.getMonth() + 1;
      let day = time.getDate();
      let name = year + "-" + month + "-" + day;

      supplierSpectypeexport({
        type: this.inputTwo1,
        modelNumber: this.inputTwo2,
        brandName: this.inputTwo3,
        tempSpotNum: this.inputTwo4,
        batchNumber: this.inputTwo5,
        receiveDelivery: this.inputTwo6,
        moq: this.inputTwo7,
        spq: this.inputTwo8,
        packName: this.inputTwo9,
        costPrice: this.inputTwo10,
        buyerId: this.inputTwo11,
        supCode: this.inputTwo12,
        supName: this.inputTwo13,
        standardDelivery: this.inputTwo14,
        updateDays: this.inputTwo15,
        remark: this.inputTwo16
      }).then(res => {
        let blob = new Blob([res], {
          type: "application/octet-stream"
        });
        let url = window.URL.createObjectURL(blob);
        let fileName = "特价" + name + ".xls";
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
    throttleFun(event) {
      this.throttle(this.handleScroll(event), 1000);
    },
    // 节流
    throttle(fn, wait) {
      let context, args;
      let previous = 0;
      return function() {
        let now = +new Date();
        context = this;
        args = arguments; // 取throttle执行作用域的this
        if (now - previous > wait) {
          fn.apply(context, args); // 用apply指向调用throttle的对象，相当于throttle.fn(args);
          console.log("执行节流");
          previous = now;
        }
      };
    },
    handleScroll(event) {
      const scrollDistance =
        // 正文全文高
        event.target.scrollHeight -
        // 被卷去的高
        event.target.scrollTop -
        // 可见区域的宽度
        event.target.clientHeight;
      if (scrollDistance <= 20 && this.specialAll) {
        // 滚动条距离底部小于等于0证明已经到底了，可以请求接口了
        if (this.onOff) return;
        this.onOff = true;
        let pageNum = this.pageNum;
        console.log(pageNum);
        if (pageNum < this.pages) {
          //当前页数小于总页数 就请求
          pageNum += 1;
          let data = { pageNum: pageNum, pageSize: 10 };
          let da = {};
          supplierSpectypeList(data).then(res => {
            this.onOff = false;
            this.pageNum = res.result.pageNum;
            console.log(this.pageNum);
            this.total = res.result.total;
            this.supplierSpectypeList = this.supplierSpectypeList.concat(
              res.result.list
            );
            console.log(this.supplierSpectypeList);
            console.log(res);
          });
        }
      }
    },
    // 分页加载
    currentChange(val) {
      this.num = val;
      this.supplierSpectypeListFun(val, 10);
    },
    search() {
      this.supplierSpectypeListFun(1, 10);
    },
    // 特价型号列表
    supplierSpectypeListFun(pageNum, pageSize) {
      let data = {
        pageNum: pageNum,
        pageSize: pageSize,
        type: this.inputTwo1,
        modelNumber: this.inputTwo2,
        brandName: this.inputTwo3,
        tempSpotNum: this.inputTwo4,
        batchNumber: this.inputTwo5,
        receiveDelivery: this.inputTwo6,
        moq: this.inputTwo7,
        spq: this.inputTwo8,
        packName: this.inputTwo9,
        costPrice: this.inputTwo10,
        buyerId: this.inputTwo11,
        supCode: this.inputTwo12,
        supName: this.inputTwo13,
        standardDelivery: this.inputTwo14,
        updateDays: this.inputTwo15,
        remark: this.inputTwo16
      };
      let da = {};
      supplierSpectypeList(data).then(res => {
        this.pages = res.result.pages;
        this.pageNum = res.result.pageNum;
        this.total = res.result.total;
        this.supplierSpectypeList = res.result.list;
        this.supplierSpectypeList.unshift(da);
        console.log(res);
      });
    },
    //斑马纹
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex % 2 === 0) {
        return "gray-row";
      }
      return "";
    },
    //查看全部
    openAll() {
      this.specialAll = true;
    },
    // 删除
    del(row) {
      let data = { id: row.id };
      deleteOrNot(data).then(res => {
        this.supplierSpectypeListFun(this.num, 10);
      });
    },
    // 修改
    setinput(row) {
      this.inputId = row.id;
      this.show = !this.show;
      let data = {
        id: row.id,
        supCode: row.supCode,
        supName: row.supName,
        price: row.costPrice,
        modelNumber: row.modelNumber,
        tempSpotNum: row.tempSpotNum,
        spq: row.spq,
        moq: row.moq,
        brandName: row.brandName,
        costPrice: row.costPrice,
        receiveDelivery: row.receiveDelivery,
        batchNumber: row.batchNumber,
        remark: row.remark
      };
      if (this.show != true) {
        modifySupplierSpectype(data).then(res => {
          console.log(res);
        });
      }
    }
  },
  created() {
    bus.$on("searchAdd", () => {
      this.specialAdd = true;
    });
    this.supplierSpectypeListFun(1, 10);
    //销售员
    selectData().then(res => {
      this.orderStatus = res.result;
    });
    brand().then(res => {
      this.brand = res.result;
    });
    //   供应商名称
    vendorNameDropDown().then(res => {
      this.vendorNameDropDown = res.result;
    });
    vendorCodeDropDown().then(res => {
      this.vendorCodeDropDown = res.result;
    });
    // 类型
    supplierType().then(res => {
      this.supplierType = res.result;
    });
  }
};
</script>

<style lang='scss'>
.special-model {
  .el-button--mini {
    color: #fff;
    font-weight: 700;
    border: none;
  }

  .el-link {
    margin-left: 10px;
  }

  .gray-back {
    .el-table tr {
      background-color: #d7d7d7;
      border-color: #d7d7d7;
      color: #666;
    }
    .el-table th.is-leaf {
      background-color: #d7d7d7;
      border-color: #d7d7d7;
      color: #666;
    }

    .el-table .sort-caret.ascending {
      border-bottom-color: #999;
    }
    .el-table .sort-caret.descending {
      border-top-color: #999;
    }

    p {
      padding: 0;
    }
  }

  .el-table {
    border: none;

    td {
      background: #fff;
      border-right: 1px solid #d7d7d7;
      border-bottom: 1px solid #d7d7d7;
    }
    .gray-row td {
      background: #eaeaea;
      //     border-right: 1px solid #fff;
      //     border-bottom: 1px solid #eaeaea;
    }
    // .gray-row td:nth-last-child(1) {
    //     border-right: 1px solid #eaeaea;
    // }
  }

  .el-dialog {
    background: #eaeaea;
  }
}
</style>