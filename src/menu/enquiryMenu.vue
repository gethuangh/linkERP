<template>
    <el-scrollbar>
        <el-menu :default-active="activeIndex" text-color="#333333" active-text-color="#00BE47" background-color="#FFFFFF">
            <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-s-help"></i>
                    <span>询价</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="/enquiry/unfinished">
                        <router-link to="/enquiry/unfinished">- 待处理<em style="color: green;font-size: 12px;">(12)</em></router-link>
                    </el-menu-item>
                    <el-menu-item index="/enquiry/dfinished">
                        <router-link to="/enquiry/dfinished">- 待回复</router-link>
                    </el-menu-item>
                    <el-menu-item index="/enquiry/finished">
                        <router-link to="/enquiry/finished">- 已完成</router-link>
                    </el-menu-item>
                    <el-menu-item index="/enquiry/index">
                        <router-link to="/enquiry/index">- 全部查看</router-link>
                    </el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
                <template slot="title">
                    <i class="el-icon-s-help"></i>
                    <span>采购申请</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="/enquiry/1">
                        <router-link to="/enquiry/404">- 待处理<em style="color: green;font-size: 12px;">(12)</em></router-link>
                    </el-menu-item>
                    <el-menu-item index="/enquiry/2">
                        <router-link to="/enquiry/404">- 已完成</router-link>
                    </el-menu-item>
                    <el-menu-item index="/enquiry/3">
                        <router-link to="/enquiry/404">- 全部查看</router-link>
                    </el-menu-item>
                </el-menu-item-group>
            </el-submenu>
        </el-menu>
    </el-scrollbar>
</template>

<script lang="ts">
export default ({
    name:'enquiryMenu',
    data() {
        return {
            activeIndex: '/enquiry/unfinished',
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


