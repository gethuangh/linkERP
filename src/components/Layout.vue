<template>
  <el-container>
    <el-header>
      <TopBarLogo />
      <TopBarNav />
      <TopBarInfo />
    </el-header>

    <el-container>
      <el-aside>
        <router-view name="nav" />
        <!-- <NavBarMenu /> -->
      </el-aside>

      <el-main>
        <!-- 面包屑 -->
        <div class="path-now">
          <span>{{ this.pathNow[0] }}</span>
          <i v-if="this.pathNow[1] != 'no'" class="el-icon-arrow-right"></i>
          <span v-if="this.pathNow[1] != 'no'">{{ this.pathNow[1] }}</span>
          <i v-if="this.pathNow[2]" class="el-icon-arrow-right"></i>
          <span v-if="this.pathNow[2]">{{ this.pathNow[2] }}</span>
        </div>
        <!-- 检索 -->
        <div class="search-input">
          <span>检索：</span>
          <el-input v-model="searchInput" placeholder="请输入内容"></el-input>
          <i class="el-icon-search"></i>
        </div>
        <!-- tabs -->
        <el-tabs
          class="home-tab"
          v-model="activeIndex"
          type="card"
          closable
          v-if="openTab.length"
          @tab-click="tabClick"
          @tab-remove="tabRemove"
        >
          <el-tab-pane
            :key="item.name"
            v-for="item in openTab"
            :label="item.name"
            :name="item.route"
          ></el-tab-pane>
        </el-tabs>
        <div class="cont-wrap">
          <keep-alive :include="includedComponents">
            <router-view></router-view>
          </keep-alive>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import Vue from "vue";
import TopBarLogo from "./TopBarLogo.vue";
import TopBarNav from "./TopBarNav.vue";
import TopBarInfo from "./TopBarInfo.vue";
// import NavBarMenu from './NavBarMenu.vue'

export default Vue.extend({
  name: "Layout",
  components: {
    TopBarLogo,
    TopBarNav,
    TopBarInfo
    // NavBarMenu
  },
  data() {
    return {
      pathNow: [],
      searchInput: "",
      includedComponents: "产品-品牌-品牌详情"
    };
  },
  created() {
    this.changePath();
    // console.log(this.$router.options.routes);
  },
  methods: {
    tabClick(tab) {
      // console.log("tab", tab);
      // console.log("active", this.activeIndex);
      this.$router.push({ path: this.activeIndex });
    },
    //移除tab标签
    tabRemove(targetName) {
      // console.log("tabRemove", targetName);
      //首页不删
      if (targetName == "/") {
        return;
      }
      this.$store.commit("delete_tabs", targetName);
      if (this.activeIndex === targetName) {
        // 设置当前激活的路由
        if (this.openTab && this.openTab.length >= 1) {
          // console.log(
          //     "=============",
          //     this.openTab[this.openTab.length - 1].route
          // );

          this.$store.commit(
            "set_active_index",
            this.openTab[this.openTab.length - 1].route
          );
          this.$router.push({ path: this.activeIndex });
        } else {
          this.$router.push({ path: "/" });
        }
      }
    },
    //面包屑
    changePath() {
      this.pathNow = [];

      this.pathNow.push(this.$route.matched[0].name);
      this.pathNow.push(this.$route.meta);
      this.pathNow.push(this.$route.matched[1].name);
    }
  },
  computed: {
    openTab() {
      return this.$store.state.openTab;
    },
    activeIndex: {
      get() {
        return this.$store.state.activeIndex;
      },
      set(val) {
        this.$store.commit("set_active_index", val);
      }
    }
  },
  watch: {
    $route(to, from) {
      this.changePath();
      //判断路由是否已经打开
      //已经打开的 ，将其置为active
      //未打开的，将其放入队列里
      let flag = false;
      for (let item of this.openTab) {
        // console.log("item.name", item.name);
        // console.log("t0.name", to.name);

        if (item.name === to.name) {
          // console.log("to.path", to.path);
          this.$store.commit("set_active_index", to.path);
          flag = true;
          break;
        }
      }

      if (!flag) {
        // console.log("to.path", to.path);
        this.$store.commit("add_tabs", {
          route: to.path,
          name: to.name
        });
        this.$store.commit("set_active_index", to.path);
      }
    }
  },
  mounted() {
    // 刷新时以当前路由做为tab加入tabs
    // 当前路由不是首页时，添加首页以及另一页到store里，并设置激活状态
    // 当当前路由是首页时，添加首页到store，并设置激活状态
    if (this.$route.path !== "/" && this.$route.path !== "/control/index") {
      // console.log("1");
      this.$store.commit("add_tabs", {
        route: "/control/index",
        name: "工作台"
      });
      this.$store.commit("add_tabs", {
        route: this.$route.path,
        name: this.$route.name
      });
      this.$store.commit("set_active_index", this.$route.path);
    } else {
      // console.log("2");
      this.$store.commit("add_tabs", {
        route: "/control/index",
        name: "工作台"
      });
      this.$store.commit("set_active_index", "/control/index");
      this.$router.push("/");
    }
  }
});
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  border: 0;
}

a {
  text-decoration: none;
}

.el-header {
  background-color: $theme-color;
  height: 48px !important;
  line-height: 48px;
  padding: 0 10px !important;
}

.el-aside {
  width: 148px !important;
  background-color: #ffffff;
  height: calc(100vh - 48px);
  overflow: hidden !important;
  border-right: 2px solid $theme-color;
}

.el-main {
  background-color: #ffffff;
  height: calc(100vh - 48px);
  // overflow: hidden !important;

  .el-input__inner:focus {
    border-color: $theme-color;
  }
}

.home-tab {
  margin-left: 330px;
  margin-top: -40px;

  .el-tabs__nav-scroll {
    // text-align: right;
    display: flex;
    flex-direction: row-reverse;
  }
}

.el-select .el-input.is-focus .el-input__inner {
  border-color: $theme-color;
}

.el-tabs__item:hover {
  color: $theme-color;
}
.el-tabs__item.is-active {
  color: $theme-color;
}

.el-icon-search {
  font-size: 18px;
  font-weight: 700;
  padding-top: 3px;
  color: #aaa;
}

.path-now {
  width: 100%;
  height: 20px;
  line-height: 20px;
  font-size: 13px;
  color: $theme-color;
}

.search-input {
  display: flex;
  // flex-direction: row-reverse;
  align-items: center;
  // margin-bottom: 20px;

  .el-input {
    width: 250px;
  }

  .el-input__inner {
    border-width: 0 0 1px 0;
    border-radius: 0;
  }
}
</style>
