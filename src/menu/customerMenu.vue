<template>
  <el-scrollbar>
    <el-menu
      :default-active="activeIndex"
      text-color="#333333"
      active-text-color="#00BE47"
      background-color="#FFFFFF"
    >
      <router-link class="el-menu-title" to="/customer/index">
        <i class="el-icon-s-home"></i>
        <span>首页</span>
      </router-link>
      <router-link class="el-menu-title" to="/customer/view">
        <i class="el-icon-s-flag"></i>
        <span>所有客户</span>
      </router-link>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-s-help"></i>
          <span>客户</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/customer/1">
            <!-- <router-link to="/customer/404">新建</router-link> -->
          </el-menu-item>
          <el-menu-item index="/customer/potential">
            <router-link to="/customer/potential">潜在客户</router-link>
          </el-menu-item>
          <el-menu-item index="/customer/public">
            <router-link to="/customer/public">公共客户</router-link>
          </el-menu-item>
          <el-menu-item index="/customer/cooperation">
            <router-link to="/customer/cooperation">合作客户</router-link>
          </el-menu-item>
          <el-menu-item index="/customer/2">
            <router-link to="/customer/404">联系人</router-link>
          </el-menu-item>
          <el-menu-item index="/customer/3">
            <router-link to="/customer/404">客户关怀</router-link>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-s-help"></i>
          <span>联系人</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/customer/4">
            <router-link to="/customer/404">- 新增</router-link>
          </el-menu-item>
          <el-menu-item index="/customer/5">
            <router-link to="/customer/404">- 查看/编辑</router-link>
          </el-menu-item>
          <el-menu-item index="/customer/6">
            <router-link to="/customer/404">- 客户关怀</router-link>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-scrollbar>
</template>

<script lang="ts">
export default {
  name: "customerMenu",
  data() {
    return {
      activeIndex: "/customer/index"
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


