<template>
  <el-scrollbar>
    <el-menu
      :default-active="activeIndex"
      text-color="#333333"
      active-text-color="#00BE47"
      background-color="#FFFFFF"
    >
      <router-link class="el-menu-title" to="/index">
        <i class="el-icon-s-home"></i>
        <span>工作台</span>
      </router-link>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-s-help"></i>
          <span>计划</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/control/1">
            <router-link to="/control/404">- 新增</router-link>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-s-help"></i>
          <span>线索</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/control/2">
            <router-link to="/control/404">- 新增</router-link>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-scrollbar>
</template>

<script lang="ts">
export default {
  name: "controlMenu",
  data() {
    return {
      activeIndex: "/control/index"
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

<style lang="scss"></style>


