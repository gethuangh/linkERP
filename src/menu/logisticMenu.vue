<template>
    <el-scrollbar>
        <el-menu :default-active="activeIndex" text-color="#333333" active-text-color="#00BE47" background-color="#FFFFFF">
            <router-link class="el-menu-title" to="/logistic/index">
                <i class="el-icon-s-home"></i>
                <span>首页</span>
            </router-link>
            <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-s-help"></i>
                    <span>发运单</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="/logistic/1">
                        <router-link to="/logistic/404">- 新建</router-link>
                    </el-menu-item>
                    <el-menu-item index="/logistic/2">
                        <router-link to="/logistic/404">- 待发运</router-link>
                    </el-menu-item>
                    <el-menu-item index="/logistic/3">
                        <router-link to="/logistic/404">- 已发运</router-link>
                    </el-menu-item>
                    <el-menu-item index="/logistic/4">
                        <router-link to="/logistic/404">- 物流进度</router-link>
                    </el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
                <template slot="title">
                    <i class="el-icon-s-help"></i>
                    <span>进口报关</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="/logistic/6">
                        <router-link to="/logistic/404">- 新增</router-link>
                    </el-menu-item>
                    <el-menu-item index="/logistic/5">
                        <router-link to="/logistic/404">- 发运明细</router-link>
                    </el-menu-item>
                </el-menu-item-group>
            </el-submenu>
        </el-menu>
    </el-scrollbar>
</template>

<script lang="ts">
export default ({
    name:'logisticMenu',
    data() {
        return {
            activeIndex: '/logistic/index',
        }
    },
    methods: {
        changeActive() {
            this.activeIndex = this.$route.path
        }
    },
    watch: {
      '$route': 'changeActive'
    }
})
</script>

<style lang="scss">
</style>


