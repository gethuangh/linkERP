<template>
  <div>
    <div class="flex-wrap">
      <div class="top-label">
        <div class="label-left">
          <p>零件型号</p>
          <el-input size="mini" v-model="input" placeholder="请输入型号"></el-input>
        </div>
        <div class="label-left">
          <p>制造商</p>
          <el-select size="mini" v-model="value" placeholder="请选择">
            <el-option
              v-for="item in productbrandall"
              :key="item.id"
              :label="item.name"
              :value="item.id"
            ></el-option>
          </el-select>
        </div>
        <div class="label-left">
          <p>供应情况</p>
          <el-select size="mini" v-model="value1" placeholder="是否停产">
            <el-option label="在售" value="0"></el-option>
            <el-option label="停产" value="1"></el-option>
            <el-option label="即将停产" value="2"></el-option>
          </el-select>
        </div>
        <div class="label-left">
          <p></p>
          <el-button size="mini" type="success" @click="search">检索</el-button>
        </div>
        <div class="label-left">
          <p></p>
          <el-button size="mini" type="info" plain @click="empty">清空</el-button>
        </div>
      </div>

      <div class="fixed-width">
        <el-table size="mini" ref="filterTable" :data="productmodellist" border style="width: 100%">
          <el-table-column type="index" label="序号" width="50"></el-table-column>
          <el-table-column prop="modelName" label="零件型号"></el-table-column>
          <el-table-column
            prop="brandName"
            label="制造商"
            :filters="producters"
            :filter-method="filterHandler"
          ></el-table-column>
          <el-table-column
            prop="packTypeName"
            label="包装方式"
            :filters="packing"
            :filter-method="filterHandler"
          ></el-table-column>
          <el-table-column prop="minPackNum" label="最小包装数量"></el-table-column>
          <el-table-column
            prop="isSelling"
            label="是否停产"
            :filters="inStock"
            :filter-method="filterHandler"
          >
            <template slot-scope="scope">
              <span v-if="scope.row.isSelling==0">在售</span>
              <span v-if="scope.row.isSelling==1">停产</span>
              <span v-if="scope.row.isSelling==2">即将停产</span>
            </template>
          </el-table-column>
          <el-table-column prop="description" label="零件描述"></el-table-column>
          <el-table-column label="操作" width="145">
            <template slot-scope="scope">
              <el-button size="mini" type="success" plain @click="openEdit(scope)">修改</el-button>
              <!-- <el-popover placement="top" width="160" v-model="visibles">
                <p>这是一段内容这是一段内容确定删除吗？</p>
                <div style="text-align: right; margin: 0">
                  <el-button size="mini" type="text" @click="visibles = false">取消</el-button>
                  <el-button type="primary" size="mini" @click="visibles = false">确定</el-button>
              </div>-->
              <el-button size="mini" type="danger" plain slot="reference" @click="deletes(scope)">删除</el-button>
              <!-- </el-popover> -->
            </template>
          </el-table-column>
        </el-table>
      </div>

      <div class="fixed-width">
        <Pagination
          style="padding-top:10px;"
          @sizeChange="xzsizeChange"
          @currentChange="xzcurrentChange"
          :total="total"
          :pageSize="czfy"
        ></Pagination>
      </div>
    </div>

    <el-dialog width="1000px" title="品牌详情" :visible.sync="editFormVisible">
      <productTypeAdd @getList="getList" :id="id" :type="type" :openEdits="openEdits"></productTypeAdd>
    </el-dialog>

    <el-dialog width="1000px" title="新增品牌" :visible.sync="openssAdd">
      <productTypeAdd @getList="getList" :id="id" :type="types"></productTypeAdd>
    </el-dialog>
  </div>
</template>

<script>
import Pagination from "@/components/Pagination.vue";
import productTypeAdd from "./typeAdd.vue";
import bus from "@/assets/Bus";
import {
  productmodellist,
  modeldelete,
  productbrandall,
  productmodel
} from "@/api/product";
export default {
  name: "productTypeSearch",
  components: {
    Pagination,
    productTypeAdd
  },
  data() {
    return {
      openEdits: [],
      type: false,
      types: true,
      name2: "",
      visibles: false,
      openssAdd: false,
      editFormVisible: false,
      input: "",
      value: "",
      value1: "",
      total: 0,
      productbrandall: "",
      producters: [
        { text: "AAA", value: "AAA" },
        { text: "BBB", value: "2016-05-02" },
        { text: "CCC", value: "2016-05-03" },
        { text: "DDD", value: "2016-05-04" }
      ],

      packing: [
        { text: "AAA", value: "AAA" },
        { text: "BBB", value: "2016-05-02" },
        { text: "CCC", value: "2016-05-03" },
        { text: "DDD", value: "2016-05-04" }
      ],

      inStock: [
        { text: "在售", value: "在售" },
        { text: "已停产", value: "已停产" }
      ],

      optionsTwo: [
        { value: "选项1", label: "黄金糕" },
        { value: "选项2", label: "双皮奶" },
        { value: "选项3", label: "蚵仔煎" },
        { value: "选项4", label: "龙须面" },
        { value: "选项5", label: "北京烤鸭" }
      ],

      tableData: [],
      czfy: 10,
      productmodellist: [],
      id: ""
    };
  },
  methods: {
    filterTag(value, row) {
      return row.tag === value;
    },
    filterHandler(value, row, column) {
      const property = column["property"];
      return row[property] === value;
    },

    //打开品牌编辑框
    openEdit(res) {
      this.id = res.row.id;
      let data = { modelName: res.row.modelName };
      productmodel(data).then(res => {
        this.openEdits = res.result;
        this.editFormVisible = true;
      });
      this.openEdits = res.row;
    },
    productmodellistFun(num, page) {
      let data = {
        num: num,
        page: page,
        isSelling: this.value1,
        brandId: this.value,
        modelName: this.input
      };
      console.log(data);
      productmodellist(data).then(res => {
        console.log(res);
        this.total = res.result.total;
        this.productmodellist = res.result.list;
      });
    },
    search() {
      this.productmodellistFun(this.czfy, 1);
    },
    //分页
    xzsizeChange(res) {
      this.productmodellistFun(res, 1);
      this.czfy = res;
    },
    xzcurrentChange(res) {
      this.productmodellistFun(this.czfy, res);
    },
    search() {
      this.productmodellistFun(this.czfy, 1);
    },
    // 清空
    empty() {
      this.value = "";
      this.value1 = "";
      this.input = "";
    },
    deletes(res) {
      let data = { modelId: res.row.id };
      modeldelete(data).then(res => {
        this.productmodellistFun(this.czfy, 1);
      });
    },
    getList() {
      console.log("调用了列表接口");
      this.productmodellistFun(this.czfy, 1);
    }
  },
  created() {
    bus.$on("openssAdd", () => {
      this.openssAdd = true;
    });
    this.productmodellistFun(this.czfy, 1);
    productbrandall().then(res => {
      this.productbrandall = res.result;
    });
  }
};
</script>

<style lang="scss" scoped>
.fixed-width {
  width: 1280px;
}

.el-input {
  width: auto;
}

.top-label {
  margin-bottom: 20px;
  text-align: left;
  display: flex;
}

.label-left {
  padding-right: 10px;
}

.label-left p {
  font-size: 12px;
  padding: 0 4px;
  margin: 0;
  height: 25px;
  line-height: 25px;
}
</style>