<template>
  <div>
    <!-- 中间表格 -->
    <div class="cont-table">
      <el-table
        @row-click="xiala"
        border
        show-header
        :highlight-current-row="bc"
        ref="filterTable"
        :data="tableData"
        size="mini"
        style="width: 100%"
      >
        <el-table-column type="index" label="Ln." :resizable="false" width="35"></el-table-column>
        <el-table-column
          prop="date"
          align="center"
          label="进程"
          sortable
          width="70"
          :resizable="false"
        ></el-table-column>
        <el-table-column
          prop="date"
          align="center"
          label="结果"
          sortable
          :resizable="false"
          width="55"
        >
          <template scope="scope">
            <span style="color:red;text-align:center;">{{ scope.row.tag }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="date" label="询价单号" :resizable="false" sortable width="100">
          <template scope="scope">
            <span style="color:blue;">{{ scope.row.date }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="date" :resizable="false" label="优先级" sortable width="80">
          <template scope="scope">
            <span style="color:red; text-align:center;">{{ scope.row.tag }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="date" :resizable="false" label="品牌" sortable width="70">
          <template scope="scope">
            <span style="color:blue;">{{ scope.row.date }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="date" :resizable="false" label="客户型号" sortable width="235">
          <template slot-scope="scope">
            <div class="dan-flex">
              <span style="color:rgb(65,195,99);">{{ scope.row.date }}</span>
              <div>
                <i>
                  <el-tooltip class="item" effect="dark" content="复制" placement="bottom">
                    <!-- <svg class="icon copy" aria-hidden="true" title="复制" @click.stop="copyCode(scope)">
                      <use xlink:href="#iconcopyfile" />
                    </svg>-->
                    <i class="icon copy iconfont" @click.stop="copyCode(scope)">&#xe603;</i>
                  </el-tooltip>
                </i>
                <i>
                  <el-tooltip class="item" effect="dark" content="渠道" placement="bottom">
                    <!-- <svg
                      class="icon leave"
                      aria-hidden="true"
                      @click.stop="dialogTableVisible = true"
                    >
                      <use xlink:href="#iconlikai" />
                    </svg>-->
                    <i class="icon leave iconfont" @click.stop="dialogTableVisible = true">&#xe6dd;</i>
                  </el-tooltip>
                </i>
              </div>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="tag" :resizable="false" label="询价数量" sortable width="80">
          <template scope="scope">
            <span style="text-align:right;">{{ scope.row.date }}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="tag"
          header-align="center"
          align="right"
          :resizable="false"
          label="货期要求"
          sortable
          width="80"
        ></el-table-column>
        <el-table-column
          prop="tag"
          :resizable="false"
          label="批号要求"
          sortable
          width="80"
          header-align="center"
          align="right"
        ></el-table-column>
        <el-table-column sortable label="客户接受价" width="140" header-align="center">
          <template slot-scope="scope">
            <div class="scope-flex">
              <i style="text-align:right">{{scope.row.name}}</i>
              <i style="font-style:italic">{{scope.row.name}}</i>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="date" label="税率" :resizable="false" sortable width="60">
          <template slot-scope="scope">
            <i style="font-style:italic;text-align:right">{{scope.row.name}}</i>
          </template>
        </el-table-column>
        <el-table-column prop="date" :resizable="false" label="销售备注" sortable width="205">
          <template scope="scope">
            <span style="color:red;">{{ scope.row.date }}</span>
          </template>
        </el-table-column>
      </el-table>
      <!-- 弹窗表格 -->
      <div class="cont-tc">
        <div class="tc-teb">
          <el-dialog title="增值渠道" :visible.sync="dialogTableVisible">
            <tan :tableData="tableData"></tan>
          </el-dialog>
        </div>
      </div>
      <!-- 下拉弹窗 -->
      <el-drawer title :visible.sync="table" direction="btt" class="pull">
        <xiala
          :tableData="tableData"
          :tableData1="tableData1"
          :show="show"
          @fnc="getDate1"
          @all="all"
        ></xiala>
      </el-drawer>
    </div>
  </div>
</template>
<script>
import xiala from "../../../enquiry/component/pull/index";
import tan from "../../../enquiry/component/pop/index";
export default {
  data() {
    return {
      detail: {
        address: "地址",
        name: "名字",
        phone: "1234567"
      },
      tableData2: [],
      tableData1: [
        {
          date: "",
          name: "",
          address: "",
          tag: ""
        }
      ],
      bc: true,
      dialogTableVisible: false,
      dialogFormVisible: false,
      table: false
    };
  },
  props: ["tableData", "show"],
  components: {
    tan,
    xiala
  },
  methods: {
    all() {
      this.$emit("all");
    },
    // 复制
    copyCode(scope) {
      this.copy(scope.row.date);
    },

    getDate1(data) {
      this.tableData1 = data;
    },

    change(e) {
      console.log(e);
    },
    // 下拉
    xiala(row, event, column) {
      this.table = true;
      console.log(this.table);
    }
  },
  created() {
    this.tableData = this.tableData;
    this.show = this.show;
  }
};
</script>
<style scoped src="../../../enquiry/unfinished/index.css"></style>
