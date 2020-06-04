<template>
    <el-scrollbar>
        <el-menu :default-active="activeIndex" text-color="#333333" active-text-color="#00BE47" background-color="#FFFFFF">
            <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-s-help"></i>
                    <span>模型分析</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="/analyze/index">
                        <router-link to="/analyze/index">- 新增模型</router-link>
                    </el-menu-item>
                </el-menu-item-group>
            </el-submenu>
        </el-menu>
    </el-scrollbar>
</template>

<script lang="ts">
export default ({
    name:'analyzeMenu',
    data() {
        return {
            activeIndex: '/analyze/index',
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


