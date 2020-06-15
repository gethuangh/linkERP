<template>
  <div class="customer-view">
    <div class="title">
      公共客户
      <el-button type="text" @click="dialogFormVisible = true" size="mini" class="btn">Add</el-button>
    </div>
    <el-dialog width="80%" title="新增客户" :visible.sync="dialogFormVisible">
      <addCustomer @ok="ok" @quxiao="quxiao"></addCustomer>
    </el-dialog>
    <el-table :data="thisselectall" size="mini" border :header-cell-style="headerStyle">
      <el-table-column type="index" label="序号" class-name="italic" align="center" width="50"></el-table-column>
      <el-table-column
        prop="chineseName"
        label="客户名称"
        width="250"
        class-name="bg1"
        :formatter="formatter"
        sortable
      ></el-table-column>
      <el-table-column
        prop="classificationName"
        label="类别"
        align="center"
        width="90"
        class-name="bg2"
        :formatter="formatter"
        sortable
      ></el-table-column>
      <el-table-column
        prop="industryName"
        label="行业"
        align="center"
        width="110"
        class-name="bg2"
        :formatter="formatter"
        sortable
      ></el-table-column>
      <el-table-column
        prop="countryName"
        label="所属国家"
        align="center"
        width="100"
        :formatter="formatter"
        sortable
      ></el-table-column>
      <el-table-column
        prop="contactPerson"
        label="联系人"
        align="center"
        width="90"
        :formatter="formatter"
        sortable
      ></el-table-column>
      <el-table-column
        prop="position"
        label="职位"
        align="center"
        width="110"
        :formatter="formatter"
        sortable
      ></el-table-column>
      <el-table-column
        prop="phone"
        label="电话"
        align="center"
        width="155"
        :formatter="formatter"
        sortable
      ></el-table-column>
      <el-table-column prop="url" label="网址" align="center" width="200" sortable>
        <template slot-scope="{row}">
          <a :href="row.url" target="_blank" style="color: rgb(0, 0, 238)">{{ row.url }}</a>
        </template>
      </el-table-column>
      <el-table-column
        prop="createTime"
        label="创建日期"
        align="center"
        width="125"
        :formatter="formatter"
        sortable
      ></el-table-column>
      <el-table-column label="状态" align="center" width="125" class-name="bg2" sortable>
        <template slot-scope="{row}">
          <span v-if="row.status === 1" class="typeStyle">待开发</span>
          <span v-else-if="row.status === 0" class="typeStyle"></span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { selectall } from "../../api/customer";
import addCustomer from "./common/NewCustomer";
import { customerAdd } from "@/api/customer";
export default {
  name: "",
  data() {
    return {
      dialogFormVisible: false,
      thisselectall: [{}],
      headerStyle: {
        fontSize: "12px",
        fontWeight: "bold",
        color: "#000",
        backgroundColor: "#e5ffe5",
        borderTop: "2px solid #41c363"
      },
      tableData: []
    };
  },
  created() {
    //公共客户
    let type = { type: "30" };
    selectall(type).then(res => {
      this.thisselectall = res.result;
    });

    var result = [];
    for (var i = 0; i < 10; i++) {
      result.push({
        name: "鸿海精密仪器(中国)有限公司",
        category: "代工厂",
        industry: "",
        country: "中国",
        contact: "王先生",
        position: "采购",
        tel: "0755-88888888",
        website: "www.xxx.com",
        createDate: "2018-05-15",
        type: 0
      });
      result.push({
        name: "AAA ELECTRONICS",
        category: "贸易商",
        industry: "",
        country: "美国",
        contact: "",
        position: "",
        tel: "",
        website: "www.xxx.com",
        createDate: "2018-05-22",
        type: 0
      });
      result.push({
        name: "华为科技有限公司",
        category: "最终客户",
        industry: "通信",
        country: "中国",
        contact: "王先生",
        position: "采购",
        tel: "0755-88888888",
        website: "www.xxx.com",
        createDate: "2018-06-15",
        type: 0
      });
    }
    this.tableData = result;

    // function formatNum(str) {
    //     var result = ""
    //     var count = 0
    //     if (str.indexOf(".") === -1) {
    //         for (var i = str.length - 1; i >= 0; i--) {
    //             if (count % 3 === 0 && count !== 0) {
    //                 result = str.charAt(i) + "," + result
    //             } else {
    //                 result = str.charAt(i) + result
    //             }
    //             count++
    //         }
    //         result += ".00"
    //     } else {
    //         for (var i = str.indexOf(".") - 1; i >= 0; i--) {
    //             if (count % 3 === 0 && count !== 0) {
    //                 result = str.charAt(i) + "," + result
    //             } else {
    //                 result = str.charAt(i) + result
    //             }
    //             count++
    //         }
    //         result += (str + "00").substr((str + "00").indexOf("."), 3)
    //     }
    //     return result
    // }

    // console.log(formatNum("13213499468454.565"))
    // console.log(formatNum("1321.2"))
  },
  methods: {
    ok(data) {
      customerAdd(data).then(res => {
        this.dialogFormVisible = false;
      });
    },
    quxiao() {
      this.dialogFormVisible = false;
    },
    formatter(row, column, cellValue) {
      return cellValue || "-";
    }
  },
  components: { addCustomer }
};
</script>

<style lang='scss'>
@import "./common/tableView.scss";
</style>
