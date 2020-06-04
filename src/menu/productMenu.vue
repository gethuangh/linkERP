<template>
  <el-scrollbar>
    <el-menu
      :default-active="activeIndex"
      text-color="#333333"
      active-text-color="#00BE47"
      background-color="#FFFFFF"
    >
      <router-link class="el-menu-title" to="/product/index">
        <i class="el-icon-s-home"></i>
        <span>首页</span>
      </router-link>
      <router-link class="el-menu-title" to="/product/search">
        <i class="el-icon-s-flag"></i>
        <span>检索</span>
      </router-link>
      <el-submenu index="/type">
        <template slot="title">
          <i class="el-icon-s-help"></i>
          <span>型号</span>
        </template>
        <el-menu-item-group>
          <el-menu-item @click="openssAdd">
            <router-link to="/product/typeSearch">- 新增</router-link>
          </el-menu-item>
          <el-menu-item index="/product/typeSearch">
            <router-link to="/product/typeSearch">- 查看/编辑</router-link>
          </el-menu-item>
          <el-menu-item index="/product/importExport">
            <router-link to="/product/importExport">- 导入导出</router-link>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="/brand">
        <template slot="title">
          <i class="el-icon-s-help"></i>
          <span>品牌</span>
        </template>
        <el-menu-item-group>
          <el-menu-item @click="openssAdds">
            <router-link to="/product/brandSearch">- 新增</router-link>
          </el-menu-item>
          <el-menu-item index="/product/brandSearch">
            <router-link to="/product/brandSearch">- 查看/编辑</router-link>
          </el-menu-item>
          <el-menu-item index="/product/1">
            <router-link to="/product/404">- 导入导出</router-link>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-scrollbar>
</template>

<script lang="ts">
import Bus from "../assets/Bus";
export default {
  name: "productMenu",
  data() {
    return {
      activeIndex: "/product/index"
    };
  },
  methods: {
    openssAdd() {
      Bus.$emit("openssAdd");
    },
    openssAdds() {
      Bus.$emit("openssAdds");
    },
    changeActive() {
      this.activeIndex = this.$route.path;
    }
  },

  watch: {
    $route: "changeActive"
  }
};
</script>

<style lang="scss">
</style>


