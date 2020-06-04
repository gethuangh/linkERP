<template>
  <div class="virtual-inventory">
    <div>
      <div style="display: flex;align-items: flex-end;height: 32px;">
        <el-button size="mini" style="background: #99CC00" @click="openssAdd=true">新增</el-button>
        <el-button size="mini" style="background: #99CC00">批量导入...</el-button>
        <el-link :underline="false" style="color: #0000ff">
          (今日新增
          <span style="color: #f00">{{addedToday}}</span>条)
        </el-link>
        <Pagination
          :total="thistotal"
          @currentChange="thiscurrentChange"
          @sizeChange="thissizeChange"
          :pageSize="thispageSize"
          :layout="layout"
          :next="next"
          :prev="prev"
        ></Pagination>
        <el-link :underline="false" style="color: #0000ff" @click="openAll">(查看全部)</el-link>
        <el-link :underline="false" style="color: #993300" @click="exportHistory">(导出全部)</el-link>
      </div>

      <div class="gray-back" style="width: 650px;padding-top:10px;">
        <el-table
          :row-class-name="tableRowClassName"
          border
          size="mini"
          :data="thisvirtualAll"
          style="width: 100%;"
        >
          <el-table-column label=" " width="90">
            <template slot-scope="scope">
              <el-button
                v-if="scope.$index == 0"
                size="mini"
                @click="search2"
                style="background: #6B97B9;"
              >search</el-button>
              <span
                v-if="scope.$index != 0"
                style="display: flex;justify-content: space-around;color: #999;"
              >
                <i class="iconfont" @click="thissetinput(scope.row)">&#xe63c;</i>
                <i class="iconfont" @click="thisdel(scope.row)">&#xe609;</i>
              </span>
            </template>
          </el-table-column>
          <el-table-column sortable label="原厂型号" width="185">
            <template slot-scope="scope">
              <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo2s"></el-input>
              <el-input
                size="mini"
                v-else-if="scope.$index != 0&&thisinputId==scope.row.id&&thisshow"
                placeholder
                v-model="scope.row.originalModel"
              ></el-input>
              <span v-else>{{ scope.row.originalModel }}</span>
            </template>
          </el-table-column>
          <el-table-column sortable align="center" label="品牌" width="70">
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
                v-else-if="scope.$index != 0&&thisinputId==scope.row.id&&thisshow"
                placeholder
                v-model="scope.row.brand"
              ></el-input>
              <span v-else>{{ scope.row.brand }}</span>
            </template>
          </el-table-column>
          <el-table-column sortable align="center" width="70" label="数量">
            <template slot-scope="scope">
              <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo4s"></el-input>
              <el-input
                size="mini"
                v-else-if="scope.$index != 0&&thisinputId==scope.row.id&&thisshow"
                placeholder
                v-model="scope.row.quantity"
              ></el-input>
              <span v-else>{{ scope.row.quantity }}</span>
            </template>
          </el-table-column>
          <el-table-column sortable align="center" width="70" label="批号">
            <template slot-scope="scope">
              <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo5s"></el-input>
              <el-input
                size="mini"
                v-else-if="scope.$index != 0&&thisinputId==scope.row.id&&thisshow"
                placeholder
                v-model="scope.row.lotNumber"
              ></el-input>
              <span v-else>{{ scope.row.lotNumber }}</span>
            </template>
          </el-table-column>
          <el-table-column sortable align="center" width="70" label="货期">
            <template slot-scope="scope">
              <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo6s"></el-input>
              <el-input
                size="mini"
                v-else-if="scope.$index != 0&&thisinputId==scope.row.id&&thisshow"
                placeholder
                v-model="scope.row.delivery"
              ></el-input>
              <span v-else>{{ scope.row.delivery }}</span>
            </template>
          </el-table-column>
          <el-table-column sortable width="95" align="center" label="录入人">
            <template slot-scope="scope">
              <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo7s"></el-input>
              <el-input
                size="mini"
                v-else-if="scope.$index != 0&&thisinputId==scope.row.id&&thisshow"
                placeholder
                v-model="scope.row.inputPerson"
              ></el-input>
              <span v-else>{{ scope.row.inputPerson }}</span>
            </template>
          </el-table-column>
        </el-table>
        <!-- <Pagination :total="total"></Pagination> -->
      </div>
    </div>

    <div style="padding-left: 50px;">
      <div style="display: flex;">
        <div style="display: flex;align-items: flex-end;">
          <el-button size="mini" style="background: #41C363">导入</el-button>
          <el-button size="mini" style="background: #FF99CC">导出</el-button>
        </div>
        <Pagination
          :total="total"
          @currentChange="currentChange"
          @sizeChange="sizeChange"
          :pageSize="pageSize"
        ></Pagination>
        <el-link :underline="false" style="color: #0000ff" @click="all">(查看全部)</el-link>
        <el-link :underline="false" style="color: #0000ff" @click="exportHistorys">(导出全部)</el-link>
      </div>

      <div class="gray-back" style="width: 1000px;padding-top:10px;">
        <el-table
          :row-class-name="tableRowClassName"
          border
          size="mini"
          :data="virtualAll"
          style="width: 100%;"
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
                <i class="iconfont" @click="setinput(scope.row)">&#xe63c;</i>
                <i class="iconfont" @click="del(scope.row)">&#xe609;</i>
              </span>
            </template>
          </el-table-column>
          <el-table-column sortable align="center" label="日期" width="95">
            <template slot-scope="scope">
              <el-date-picker
                size="mini"
                value-format="yyyy-MM-dd"
                v-if="scope.$index == 0"
                v-model="inputTwo1"
                type="date"
                placeholder="选择日期"
              ></el-date-picker>
              <el-input
                size="mini"
                v-else-if="scope.$index != 0&&inputId==scope.row.id&&show"
                placeholder
                v-model="scope.row.updateTime"
              ></el-input>
              <span v-else>{{ scope.row.updateTime }}</span>
            </template>
          </el-table-column>
          <el-table-column sortable label="原厂型号" width="185">
            <template slot-scope="scope">
              <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo2"></el-input>
              <el-input
                size="mini"
                v-else-if="scope.$index != 0&&inputId==scope.row.id&&show"
                placeholder
                v-model="scope.row.originalModel"
              ></el-input>
              <span v-else>{{ scope.row.originalModel }}</span>
            </template>
          </el-table-column>
          <el-table-column sortable align="center" label="品牌" width="70">
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
                v-model="scope.row.brand"
              ></el-input>
              <span v-else>{{ scope.row.brand }}</span>
            </template>
          </el-table-column>
          <el-table-column sortable align="center" width="70" label="数量">
            <template slot-scope="scope">
              <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo4"></el-input>
              <el-input
                size="mini"
                v-else-if="scope.$index != 0&&inputId==scope.row.id&&show"
                placeholder
                v-model="scope.row.quantity"
              ></el-input>
              <span v-else>{{ scope.row.quantity }}</span>
            </template>
          </el-table-column>
          <el-table-column sortable align="center" width="70" label="批号">
            <template slot-scope="scope">
              <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo5"></el-input>
              <el-input
                size="mini"
                v-else-if="scope.$index != 0&&inputId==scope.row.id&&show"
                placeholder
                v-model="scope.row.lotNumber"
              ></el-input>
              <span v-else>{{ scope.row.lotNumber }}</span>
            </template>
          </el-table-column>
          <el-table-column sortable align="center" width="70" label="货期">
            <template slot-scope="scope">
              <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo6"></el-input>
              <el-input
                size="mini"
                v-else-if="scope.$index != 0&&inputId==scope.row.id&&show"
                placeholder
                v-model="scope.row.delivery"
              ></el-input>
              <span v-else>{{ scope.row.delivery }}</span>
            </template>
          </el-table-column>
          <el-table-column sortable width="95" align="center" label="录入人">
            <template slot-scope="scope">
              <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo7"></el-input>
              <el-input
                size="mini"
                v-else-if="scope.$index != 0&&inputId==scope.row.id&&show"
                placeholder
                v-model="scope.row.inputPerson"
              ></el-input>
              <span v-else>{{ scope.row.inputPerson }}</span>
            </template>
          </el-table-column>
          <el-table-column sortable width="95" align="center" label="更新天数">
            <template slot-scope="scope">
              <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo8"></el-input>
              <el-input
                size="mini"
                v-else-if="scope.$index != 0&&inputId==scope.row.id&&show"
                placeholder
                v-model="scope.row.updateDays"
              ></el-input>
              <span v-else>
                <span
                  v-if="scope.row.updateDays >= 30"
                  style="color: red"
                >{{ scope.row.updateDays }}</span>
                <span v-else>{{ scope.row.updateDays }}</span>
              </span>
            </template>
          </el-table-column>
          <el-table-column sortable label="备注">
            <template slot-scope="scope">
              <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo9"></el-input>
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
      </div>
    </div>
    <el-dialog width="1100px" title="虚拟库存 - 新增" :visible.sync="openssAdd">
      <virtuallnventoyAdd></virtuallnventoyAdd>
    </el-dialog>
  </div>
</template>

<script>
import bus from "@/assets/Bus";
import Pagination from "@/components/Pagination.vue";
import virtuallnventoyAdd from "./virtuallnventoyAdd";
import {
  virtualAll,
  brand,
  virtualdeleteOrNot,
  modifyVirtual,
  addedToday,
  exportExcel,
  exportAddedToday
} from "../../api/stock";
export default {
  name: "virtualInventory",
  components: {
    Pagination,
    virtuallnventoyAdd
  },
  data() {
    return {
      layout: "prev, pager, next, total",
      next: ">>",
      prev: "<<",
      total: 0,
      thistotal: 0,
      pageSize: 10,
      thispageSize: 10,
      tableDataTwo: [],
      virtualAll: [{}],
      thisvirtualAll: [{}],
      brand: [],
      inputTwo: "",
      inputTwo1: "",
      inputTwo2: "",
      inputTwo2s: "",
      inputTwo3: "",
      inputTwo4: "",
      inputTwo4s: "",
      inputTwo5: "",
      inputTwo5s: "",
      inputTwo6: "",
      inputTwo6s: "",
      inputTwo7: "",
      inputTwo7s: "",
      inputTwo8: "",
      inputTwo9: "",
      size: 10,
      inputId: null,
      thisinputId: null,
      show: false,
      thisshow: false,
      addedToday: 0,
      openssAdd: false
    };
  },
  methods: {
    // 导出历史报价
    exportHistory() {
      this.importExls();
    },
    importExls() {
      // 设置当前日期
      let time = new Date();
      let year = time.getFullYear();
      let month = time.getMonth() + 1;
      let day = time.getDate();
      let name = year + "-" + month + "-" + day;

      exportAddedToday({
        updateTime: name,
        originalModel: this.inputTwo2s,
        quantity: this.inputTwo4s,
        lotNumber: this.inputTwo5s,
        delivery: this.inputTwo6s,
        inputPerson: this.inputTwo7s
      }).then(res => {
        let blob = new Blob([res], {
          type: "application/octet-stream"
        });
        let url = window.URL.createObjectURL(blob);
        let fileName = "今日" + name + ".xls";
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
    exportHistorys() {
      this.importExlss();
    },
    importExlss() {
      // 设置当前日期
      let time = new Date();
      let year = time.getFullYear();
      let month = time.getMonth() + 1;
      let day = time.getDate();
      let name = year + "-" + month + "-" + day;

      exportExcel({
        updateTime: this.inputTwo1,
        originalModel: this.inputTwo2,
        brand: this.inputTwo3,
        quantity: this.inputTwo4,
        lotNumber: this.inputTwo5,
        delivery: this.inputTwo6,
        inputPerson: this.inputTwo7,
        updateDays: this.inputTwo8
      }).then(res => {
        let blob = new Blob([res], {
          type: "application/octet-stream"
        });
        let url = window.URL.createObjectURL(blob);
        let fileName = "全部虚拟库存" + name + ".xls";
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
    //斑马纹
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex % 2 === 0) {
        return "gray-row";
      }
      return "";
    },
    //查看全部
    openAll() {
      let time = new Date();
      let Month = time.getMonth() + 1;
      let thisTime = time.getFullYear() + "-" + Month + "-" + time.getDate();
      let data = {
        pageNum: 1,
        pageSize: 100,
        updateTime: thisTime
      };
      let da = {};
      virtualAll(data).then(res => {
        this.thisvirtualAll = res.result.list;
        this.thisvirtualAll.unshift(da);
        this.thistotal = res.result.total;
      });
    },
    all() {
      let data = {
        pageNum: 1,
        pageSize: 100
      };
      let da = {};
      virtualAll(data).then(res => {
        this.virtualAll = res.result.list;
        this.virtualAll.unshift(da);
        this.total = res.result.total;
      });
    },
    // 虚拟库存列表
    virtualAllFun(pageNum, pageSize) {
      let data = {
        pageNum: pageNum,
        pageSize: pageSize,
        updateTime: this.inputTwo1,
        originalModel: this.inputTwo2,
        brand: this.inputTwo3,
        quantity: this.inputTwo4,
        lotNumber: this.inputTwo5,
        delivery: this.inputTwo6,
        inputPerson: this.inputTwo7,
        updateDays: this.inputTwo8
      };
      let da = {};
      virtualAll(data).then(res => {
        this.virtualAll = res.result.list;
        this.virtualAll.unshift(da);
        this.total = res.result.total;
      });
    },
    // 个数
    sizeChange(val) {
      this.pageSize = val;
      this.virtualAllFun(1, val);
    },
    // 页码
    currentChange(val) {
      this.virtualAllFun(val, this.pageSize);
    },
    // 删除
    del(row) {
      let data = { id: row.id };
      virtualdeleteOrNot(data).then(res => {
        this.virtualAllFun(1, this.pageSize);
      });
    },
    // 修改
    setinput(row) {
      this.inputId = row.id;
      this.show = !this.show;
      let data = {
        id: row.id,
        originalModel: row.originalModel || "",
        brand: row.brand || "",
        quantity: row.quantity || "",
        lotNumber: row.lotNumber || "",
        delivery: row.delivery || "",
        inputPerson: row.inputPerson || "",
        remark: row.remark || "",
        updateDays: row.updateDays || "",
        updateTime: row.updateTime || ""
        // receiveDelivery: row.receiveDelivery,
        // batchNumber: row.batchNumber,
        // remark: row.remark
      };
      if (this.show != true) {
        modifyVirtual(data).then(res => {
          this.virtualAllFun(1, this.pageSize);
        });
      }
    },
    // 搜索
    search() {
      this.virtualAllFun(1, 10);
    },
    // 今日部分
    // 虚拟库存列表
    thisvirtualAllFun(pageNum, pageSize) {
      let time = new Date();
      let Month = time.getMonth() + 1;
      let thisTime = time.getFullYear() + "-" + Month + "-" + time.getDate();
      let data = {
        pageNum: pageNum,
        pageSize: pageSize,
        updateTime: thisTime,
        originalModel: this.inputTwo2s,
        quantity: this.inputTwo4s,
        lotNumber: this.inputTwo5s,
        delivery: this.inputTwo6s,
        inputPerson: this.inputTwo7s
      };
      let da = {};
      virtualAll(data).then(res => {
        this.thisvirtualAll = res.result.list;
        this.thisvirtualAll.unshift(da);
        this.thistotal = res.result.total;
      });
    },
    // 个数
    thissizeChange(val) {
      this.thispageSize = val;
      this.thisvirtualAllFun(1, val);
    },
    // 页码
    thiscurrentChange(val) {
      this.thisvirtualAllFun(val, this.thispageSize);
    },
    // 删除
    thisdel(row) {
      let data = { id: row.id };
      virtualdeleteOrNot(data).then(res => {
        this.thisvirtualAllFun(1, this.thispageSize);
      });
    },
    // 修改
    thissetinput(row) {
      this.thisinputId = row.id;
      this.thisshow = !this.thisshow;
      let data = {
        id: row.id,
        originalModel: row.originalModel || "",
        brand: row.brand || "",
        quantity: row.quantity || "",
        lotNumber: row.lotNumber || "",
        delivery: row.delivery || "",
        inputPerson: row.inputPerson || "",
        remark: row.remark || "",
        updateDays: row.updateDays || "",
        updateTime: row.updateTime || ""
        // receiveDelivery: row.receiveDelivery,
        // batchNumber: row.batchNumber,
        // remark: row.remark
      };
      if (this.thisshow != true) {
        modifyVirtual(data).then(res => {
          this.thisvirtualAllFun(1, this.thispageSize);
        });
      }
    },
    // 搜索
    search2() {
      this.thisvirtualAllFun(1, 10);
    }
  },
  created() {
    bus.$on("openssAdd", () => {
      this.openssAdd = true;
    });
    //bus.on('xxx',() => { })
    this.virtualAllFun(1, 10);
    this.thisvirtualAllFun(1, 10);
    addedToday().then(res => {
      this.addedToday = res.result;
    });
    brand().then(res => {
      this.brand = res.result;
    });
  }
};
</script>
<style lang='scss'>
.virtual-inventory {
  display: flex;
  // justify-content: space-between;

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
    }
  }
}
</style>