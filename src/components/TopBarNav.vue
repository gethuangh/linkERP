<template>
  <div class="topbar-left">
    <div class="topbar-nav">
      <el-menu :default-active="activeIndex" mode="horizontal" text-color="#FFF" router>
        <template v-for="(item, index) in $router.options.routes">
          <el-menu-item v-if="index > 0 && !item.hidden" v-bind:key="index" :index="item.path">
            <i :class="'iconfont ' + item.icon"></i>
            {{item.name}}
          </el-menu-item>
        </template>
      </el-menu>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "TopBarNav",
  data() {
    return {
      activeIndex: ""
    };
  },
  created() {
    this.activeIndex = "/" + this.$route.path.split("/")[1];
    console.log(this.$router);
  },
  methods: {
    changeActive() {
      console.log(this.$route.path.split("/")[1]);
      this.activeIndex = "/" + this.$route.path.split("/")[1];
    }
  },
  watch: {
    $route: "changeActive"
  }
});
</script>

<style scoped lang="less">
.topbar-left {
  float: left;
  text-align: left;

  .topbar-nav {
    font-size: 18px;
  }

  .topbar-nav ul {
    background: transparent !important;
    border-bottom-color: transparent !important;
  }
  .topbar-nav ul li {
    height: 44px;
    line-height: 44px;
    background: transparent !important;
    border-bottom-color: transparent !important;

    .iconfont {
      color: #fff;
    }
  }
  .topbar-nav ul li:hover,
  .topbar-nav ul li.is-active {
    background-color: transparent !important;
    border-bottom-color: transparent !important;
    color: #fff !important;
    font-weight: bolder !important;

    .iconfont {
      color: #fff !important;
      background-color: transparent !important;
    }
  }
}
</style>