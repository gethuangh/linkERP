<template>
  <div>
    <div class="flex-wrap">
      <div class="top-label">
        <div class="label-left">
          <p>品牌名称</p>
          <el-autocomplete
            size="mini"
            v-model="brandName"
            :fetch-suggestions="querySearch"
            placeholder="请输入内容"
            :trigger-on-focus="false"
            @select="handleSelect"
          ></el-autocomplete>
        </div>
        <div class="label-left">
          <p>授权代理商</p>
          <el-autocomplete
            size="mini"
            v-model="agent"
            :fetch-suggestions="querySearch"
            placeholder="请输入内容"
            :trigger-on-focus="false"
            @select="handleSelect"
          ></el-autocomplete>
        </div>
        <div class="label-left">
          <p>优质贸易商</p>
          <el-autocomplete
            size="mini"
            v-model="trader"
            :fetch-suggestions="querySearch"
            placeholder="请输入内容"
            :trigger-on-focus="false"
            @select="handleSelect"
          ></el-autocomplete>
        </div>
        <div class="label-left">
          <p></p>
          <el-button size="mini" type="success" @click="search">检索</el-button>
        </div>
        <div class="label-left">
          <p></p>
          <el-button size="mini" type="info" plain @click="clear">清空</el-button>
        </div>
      </div>

      <div class="fixed-width">
        <el-table :data="brandlist" border size="mini" style="width: 100%">
          <el-table-column type="index" label="序号" width="50"></el-table-column>
          <el-table-column label="品牌logo" width="125">
            <template slot-scope="scope">
              <el-image style="width: 100px; height: 40px" :src="scope.row.logoUrl" fit="fill"></el-image>
            </template>
          </el-table-column>
          <el-table-column prop="name" label="品牌名称"></el-table-column>
          <el-table-column prop="alias" label="品牌简称"></el-table-column>
          <el-table-column prop="parentBrandName" label="母品牌"></el-table-column>
          <el-table-column prop="subBrandNames" label="子品牌"></el-table-column>
          <el-table-column prop="countryName" label="所属国家"></el-table-column>
          <el-table-column prop="agents" label="授权代理商"></el-table-column>
          <el-table-column prop="trade" label="优质贸易商"></el-table-column>
          <el-table-column label="操作" width="235">
            <template slot-scope="scope">
              <el-button class="blue-btn" size="mini" type="primary" plain>
                <router-link :to="{path:'/product/brandDetail/',query:{id:scope.row.id}}">品牌详情</router-link>
              </el-button>
              <el-button size="mini" type="success" plain @click="openAdd(scope.row.id)">修改</el-button>
              <el-button size="mini" type="danger" @click="deletes(scope)" plain>删除</el-button>
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
        ></Pagination>
      </div>
    </div>

    <el-dialog width="1000px" title="新增品牌" :visible.sync="openssAdds">
      <productBrandAdd></productBrandAdd>
    </el-dialog>
  </div>
</template>

<script>
import Pagination from "@/components/Pagination.vue";
import productBrandAdd from "./brandAdd.vue";
import bus from "@/assets/Bus";
import { brandlist, productbranddelete } from "../../api/product";
export default {
  name: "productBrandSearch",
  components: {
    Pagination,
    productBrandAdd
  },
  data() {
    return {
      openssAdds: false,

      brandName: "",
      agent: "",
      trader: "",
      restaurants: [],

      selectedItem: [],

      total: 20,

      optionsTwo: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],

      brandlist: []
    };
  },
  methods: {
    querySearch(queryString, callback) {
      var restaurants = this.restaurants;
      var results = queryString
        ? restaurants.filter(this.createFilter(queryString))
        : restaurants;
      // 调用 callback 返回建议列表的数据
      callback(results);
    },
    createFilter(queryString) {
      return restaurant => {
        return (
          restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) ===
          0
        );
      };
    },
    loadAll() {
      return this.selectedItem;
    },
    handleSelect(item) {
      console.log(item);
    },
    brandlistFun(num, page) {
      let data = {
        num: num,
        page: page,
        brandName: this.brandName,
        agentName: this.agent,
        tradeName: this.trader
      };
      console.log(data);
      brandlist(data).then(res => {
        console.log(res);
        this.total = res.result.total;
        this.brandlist = res.result.list;
      });
    },
    search() {
      this.brandlistFun(this.czfy, 1);
    },
    //分页
    xzsizeChange(res) {
      this.brandlistFun(res, 1);
      this.czfy = res;
    },
    xzcurrentChange(res) {
      this.brandlistFun(this.czfy, res);
    },
    search() {
      this.brandlistFun(this.czfy, 1);
    },
    //清空
    clear() {
      this.brandName = "";
      this.agent = "";
      this.trader = "";
    },
    //打开品牌编辑框
    openAdd(id) {
      this.editFormVisible = true;
    },
    // 删除
    deletes(res) {
      let data = { brandId: res.row.id };
      productbranddelete(data).then(res => {
        this.brandlistFun(this.czfy, 1);
      });
    }
  },
  mounted() {
    this.restaurants = this.loadAll();
  },
  created() {
    bus.$on("openssAdds", () => {
      this.openssAdds = true;
    });
    this.brandlistFun(this.czfy, 1);
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
  padding: 0 4px;
  margin: 0;
  height: 25px;
  line-height: 25px;
}

.blue-btn {
  a {
    color: #409eff;
  }
}
.blue-btn:hover {
  a {
    color: #fff;
  }
}
</style>