<template>
    <div class="topbar-left">
        <div class="topbar-logo">
            <router-link to="/">LINK ERP</router-link>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name:'TopBarLogo'
})
</script>

<style scoped lang="less">
.topbar-left{
  float: left;
  text-align: left;
  width: 146px;
  margin-left: -10px;
  background-color: #fff;

  .topbar-logo{
    font-size: 18px;
    text-align: center;
  }

  .topbar-logo a{
    color: #00be47;
    display: inline-block;
  }

}
</style>


