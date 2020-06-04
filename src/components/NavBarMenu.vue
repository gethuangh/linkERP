<template>
  <el-scrollbar>
    <el-menu
      :default-active="activeIndex"
      text-color="#333333"
      active-text-color="#00BE47"
      background-color="#FFFFFF"
      router
    >
      <template v-for="(item, index) in menus">
        <li class="el-menu-item" v-if="item.flag" :key="item.name" @click="fn">{{item.name}}</li>
        <template v-else>
          <el-menu-item v-if="!item.hidden" v-bind:key="index" :index="item.path">{{item.name}}</el-menu-item>
        </template>
      </template>
    </el-menu>
  </el-scrollbar>
</template>

<script lang="ts">
import Vue from "vue";
import bus from "../assets/Bus";
export default Vue.extend({
  name: "NavBarMenu",
  data() {
    return {
      activeIndex: "",
      menus: []
    };
  },
  created() {
    // this.defaultActive = '/' + this.$route.path.split('/')[1]
    this.activeIndex = "/" + this.$route.path.split("/")[1];
    this.changeTopBarNav();
  },
  methods: {
    changeTopBarNav() {
      this.menus = this.getChildren();
      console.log(this.menus);
    },
    getChildren() {
      var routes = this.$router.options.routes;
      var children = [];

      console.log(routes);

      for (var i = 0; i < routes.length; i++) {
        if ("/" + this.$route.path.split("/")[1] == routes[i].path) {
          for (let j = 0; j < routes[i].children.length; j++) {
            children.push(routes[i].children[j]);
          }

          break;
        }
      }
      console.log(children);

      return children;
    },
    fn() {
      bus.$emit("xxx");
    }
  },
  watch: {
    $route: "changeTopBarNav"
  }
});
</script>

<style lang="less">
.el-scrollbar {
  height: 100%;

  .el-scrollbar__wrap {
    overflow-x: hidden;
  }
}

.el-menu {
  border-right: none;

  .el-menu-item {
    padding: 0 20px !important;
  }

  .el-menu-item i,
  .el-menu-item span {
    font-size: 18px;
  }

  .el-menu-item:hover,
  .el-menu-item:hover *,
  .el-menu-item.is-active {
    color: #00be47 !important;
    background: #ffffff !important;
  }
}
</style>


