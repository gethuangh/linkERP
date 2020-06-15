<template>
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
          <span>供应商</span>
        </template>
        <el-menu-item-group>
          <el-menu-item>
            <router-link to="/supplier/SupplierAdd">- 新增</router-link>
          </el-menu-item>
          <el-menu-item index="/supplier/index">
            <router-link to="/supplier/index">- 查看/编辑</router-link>
          </el-menu-item>
          <el-menu-item index="/supplier/1">
            <router-link to="/supplier/404">- 导入/导出</router-link>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-s-help"></i>
          <span>联系人</span>
        </template>
        <el-menu-item-group>
          <el-menu-item>
            <router-link to="/supplier/ContactAdd">- 新增</router-link>
          </el-menu-item>
          <el-menu-item index="/supplier/contact">
            <router-link to="/supplier/contact">- 查看/编辑</router-link>
          </el-menu-item>
          <el-menu-item index="/supplier/1">
            <router-link to="/supplier/404">- 导入/导出</router-link>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-scrollbar>
</template>

<script lang="ts">
export default {
  name: "supplierMenu",
  data() {
    return {
      activeIndex: "/supplier/index"
    };
  },
  methods: {
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


