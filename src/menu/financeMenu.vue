<template>
    <el-scrollbar>
        <el-menu :default-active="activeIndex" text-color="#333333" active-text-color="#00BE47" background-color="#FFFFFF">
            <router-link class="el-menu-title" to="/finance/index">
                <i class="el-icon-s-home"></i>
                <span>主页</span>
            </router-link>
            <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-s-help"></i>
                    <span>到账单</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item @click="openArriveNew" index="/finance/associate/new">
                        <router-link to="/finance/associate">- 新增</router-link>
                    </el-menu-item>
                    <el-menu-item index="/finance/associate">
                        <router-link to="/finance/associate">- 待关联</router-link>
                    </el-menu-item>
                    <el-menu-item index="/finance/writeoff">
                        <router-link to="/finance/writeoff">- 待销账</router-link>
                    </el-menu-item>
                    <el-menu-item index="/finance/arriveall">
                        <router-link to="/finance/arriveall">- 全部</router-link>
                    </el-menu-item>
                    <el-menu-item index="/finance/writeoffdetail">
                        <router-link to="/finance/writeoffdetail">- 销账明细</router-link>
                    </el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
                <template slot="title">
                    <i class="el-icon-s-help"></i>
                    <span>付款单</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item @click="openReceipt" index="/finance/offset/new">
                        <router-link to="/finance/offset">- 新增</router-link>
                    </el-menu-item>
                    <el-menu-item index="/finance/offset">
                        <router-link to="/finance/offset">- 待冲账</router-link>
                    </el-menu-item>
                    <el-menu-item index="/finance/receiptall">
                        <router-link to="/finance/receiptall">- 全部</router-link>
                    </el-menu-item>
                    <el-menu-item index="/finance/offsetdetail">
                        <router-link to="/finance/offsetdetail">- 冲账明细</router-link>
                    </el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="3">
                <template slot="title">
                    <i class="el-icon-s-help"></i>
                    <span>费用单</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item @click="openListNew" index="/finance/expenselist/new">
                        <router-link to="/finance/expenselist">- 新增</router-link>
                    </el-menu-item>
                    <el-menu-item index="/finance/expenselist">
                        <router-link to="/finance/expenselist">- 全部</router-link>
                    </el-menu-item>
                    <el-menu-item index="">
                        <router-link to="">- 费用明细</router-link>
                    </el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="4">
                <template slot="title">
                    <i class="el-icon-s-help"></i>
                    <span>应收款</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="/finance/receivables">
                        <router-link to="/finance/receivables">- 应收款</router-link>
                    </el-menu-item>
                    <el-menu-item index="/finance/receivedlist">
                        <router-link to="/finance/receivedlist">- 已收款</router-link>
                    </el-menu-item>
                    <el-menu-item index="/finance/receiptcollection">
                        <router-link to="/finance/receiptcollection">- 收款汇总</router-link>
                    </el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="5">
                <template slot="title">
                    <i class="el-icon-s-help"></i>
                    <span>应付款</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="/finance/payable">
                        <router-link to="/finance/payable">- 应付款</router-link>
                    </el-menu-item>
                    <el-menu-item index="/finance/paidlist">
                        <router-link to="/finance/paidlist">- 已付款</router-link>
                    </el-menu-item>
                    <el-menu-item index="/finance/paymentcollection">
                        <router-link to="/finance/paymentcollection">- 付款汇总</router-link>
                    </el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="6">
                <template slot="title">
                    <i class="el-icon-s-help"></i>
                    <span>发票管理</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="/finance/invoice">
                        <router-link to="/finance/invoice">- 发票管理</router-link>
                    </el-menu-item>
                    <el-menu-item index="/finance/invoicing">
                        <router-link to="/finance/invoicing">- 开票申请</router-link>
                    </el-menu-item>
                    <el-menu-item index="/finance/salesinvoice">
                        <router-link to="/finance/salesinvoice">- 销售发票</router-link>
                    </el-menu-item>
                    <el-menu-item index="/finance/purchaseinvoice">
                        <router-link to="/finance/purchaseinvoice">- 采购发票</router-link>
                    </el-menu-item>
                </el-menu-item-group>
            </el-submenu>
        </el-menu>
    </el-scrollbar>
</template>

<script>

import bus from "@/assets/Bus";

export default ({
    name:'financeMenu',
    data() {
        return {
            activeIndex: '/finance/index',
        }
    },
    methods: {
        changeActive() {
            this.activeIndex = this.$route.path
        },
        //到账单-新增
        openArriveNew() {
            bus.$emit('arriveNew',() => { })
        },
        //付款单-新增
        openReceipt() {
            bus.$emit('receiptNew',() => { })
        },
        //费用单-新增
        openListNew() {
            bus.$emit('expenseListNew',() => { })
        }
    },
    watch: {
      '$route': 'changeActive'
    }
})
</script>

<style lang="scss"></style>


