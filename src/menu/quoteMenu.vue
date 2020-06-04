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
          <span>报价</span>
        </template>
        <el-menu-item-group>
          <el-menu-item @click="openssAdd">
            <router-link to="/quote/Allquote">- 新增询价单</router-link>
          </el-menu-item>
          <el-menu-item index="/quote/index">
            <router-link to="/quote/index">
              - 询价中
              <em style="color: green;font-size: 12px;">(12)</em>
            </router-link>
          </el-menu-item>
          <el-menu-item index="/quote/indexs">
            <router-link to="/quote/indexs">
              - 待报价
              <em style="color: green;font-size: 12px;">(2)</em>
            </router-link>
          </el-menu-item>
          <el-menu-item index="/quote/Hasquote">
            <router-link to="/quote/Hasquote">- 已报价</router-link>
          </el-menu-item>
          <el-menu-item index="/quote/Allquote">
            <router-link to="/quote/Allquote">- 全部报价</router-link>
          </el-menu-item>
          <el-menu-item index="/quote/2">
            <router-link to="/quote/404">- 数据模型分析</router-link>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-scrollbar>
</template>

<script lang="ts">
import Bus from "../assets/Bus";
export default {
  name: "quoteMenu",
  data() {
    return {
      activeIndex: "/quote/index"
    };
  },
  methods: {
    changeActive() {
      this.activeIndex = this.$route.path;
    },
    openssAdd() {
      Bus.$emit("openssAdd");
    }
  },
  watch: {
    $route: "changeActive"
  }
};
</script>

<style lang="scss">
</style>


