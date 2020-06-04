<template>
  <el-scrollbar>
    <el-menu
      :default-active="activeIndex"
      text-color="#333333"
      active-text-color="#00BE47"
      background-color="#FFFFFF"
    >
      <router-link class="el-menu-title" to="/order/index">
        <i class="el-icon-s-home"></i>
        <span>首页</span>
      </router-link>
      <router-link class="el-menu-title" to="/order/result">
        <i class="el-icon-s-home"></i>
        <span>查询结果</span>
      </router-link>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-s-help"></i>
          <span>销售订单</span>
        </template>
        <el-menu-item-group>
          <el-menu-item @click="salesVisibleFun">
            <router-link to="/order/sale">- 新增</router-link>
          </el-menu-item>
          <el-menu-item index="/order/sale">
            <router-link to="/order/sale">- 查看</router-link>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-s-help"></i>
          <span>采购订单</span>
        </template>
        <el-menu-item-group>
          <el-menu-item @click="purchase">
            <router-link to="/order/purchase">- 新增</router-link>
          </el-menu-item>
          <el-menu-item index="/order/purchase">
            <router-link to="/order/purchase">- 查看</router-link>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-s-help"></i>
          <span>入库单</span>
        </template>
        <el-menu-item-group>
          <el-menu-item @click="receipt">
            <router-link to="/order/receipt">- 新增</router-link>
          </el-menu-item>
          <el-menu-item index="/order/receipt">
            <router-link to="/order/receipt">- 查看</router-link>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-scrollbar>
</template>

<script lang="ts">
import Bus from "../assets/Bus";
export default {
  name: "orderMenu",
  data() {
    return {
      activeIndex: "/order/index"
    };
  },
  methods: {
    changeActive() {
      this.activeIndex = this.$route.path;
    },
    salesVisibleFun() {
      Bus.$emit("salesVisibleFun");
    },
    purchase() {
      Bus.$emit("purchase");
    },
    receipt() {
      Bus.$emit("receipt");
    }
  },
  watch: {
    $route: "changeActive"
  }
};
</script>

<style lang="scss">
</style>


