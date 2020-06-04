<template>
    <div class="topbar-right">
        <el-dropdown>
            <span>
            Admin<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
            <router-link to="/">
                <el-dropdown-item>修改密码</el-dropdown-item>
            </router-link>
            <el-dropdown-item divided>
                <span style="display:block;">退出</span>
            </el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name:'TopBarInfo'
})
</script>

<style lang="less">
.topbar-right{
  float: right;
  
  span{
    display: inline-block;
    color: #FFFFFF;
  }

  .el-dropdown-item{
    text-decoration: none;
  }
}
</style>

