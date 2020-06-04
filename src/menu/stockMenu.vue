<template>
  <div>
    <el-scrollbar>
      <el-menu
        :default-active="activeIndex"
        text-color="#333333"
        active-text-color="#00BE47"
        background-color="#FFFFFF"
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-s-help"></i>
            <span>即时库存</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/stock/index">
              <router-link to="/stock/index">- 查询</router-link>
            </el-menu-item>
            <el-menu-item @click="openSearchAll">
              <router-link to="/stock/index">- 快速查询</router-link>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-s-help"></i>
            <span>特价</span>
          </template>
          <el-menu-item-group>
            <el-menu-item @click="openSearchAdd">
              <router-link to="/stock/specialModel">- 新增</router-link>
            </el-menu-item>
            <el-menu-item index="/stock/specialModel">
              <router-link to="/stock/specialModel">- 查询</router-link>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-s-help"></i>
            <span>虚拟库存</span>
          </template>
          <el-menu-item-group>
            <el-menu-item @click="openssAdd">
              <router-link to="/stock/virtualInventory">- 新增</router-link>
            </el-menu-item>
            <el-menu-item index="/stock/virtualInventory">
              <router-link to="/stock/virtualInventory">- 查询</router-link>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import Bus from "@/assets/Bus";
export default {
  name: "stockMenu",
  components: {},
  data() {
    return {
      activeIndex: "/stock/index"
    };
  },
  methods: {
    openSearchAll() {
      Bus.$emit("searchAll");
    },
    openSearchAdd() {
      Bus.$emit("searchAdd");
    },
    openssAdd() {
      Bus.$emit("openssAdd");
    },
    changeActive() {
      this.activeIndex = this.$route.path;
    }
  },
  watch: {
    $route: "changeActive"
  },
  created() {}
};
</script>
<style lang='scss' scoped>
</style>