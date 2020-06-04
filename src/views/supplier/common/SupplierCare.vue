<template>
    <div class="supplier-care">
        <div class="header">
            供应商关怀
            <el-button size="mini" class="btn" @click="addVisible = true">新增</el-button>
        </div>
        <el-table class="table" size="mini" :data="tableData" style="width: 100%" :header-cell-style="thStyle">
            <el-table-column prop="date" label="日期" width="120"></el-table-column>
            <el-table-column prop="mode" label="关怀方式" width="95"></el-table-column>
            <el-table-column prop="spend" label="花费" width="95" :formatter="formatPrice"></el-table-column>
            <el-table-column prop="content" label="明细"></el-table-column>
        </el-table>
        <el-dialog
            title="新增供应商关怀"
            width="600px"
            :visible.sync="addVisible"
            :close-on-click-modal="false"
        >
            <el-form label-width="130px">
                <el-row>
                    <el-col :span="12">
                        <el-form-item label="日期">
                            <el-input v-model="name" placeholder="请输入日期" clearable></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="关怀方式">
                            <el-input v-model="name" placeholder="请输入关怀方式" clearable></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="12">
                        <el-form-item label="花费">
                            <el-input v-model="name" placeholder="请输入花费" clearable></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col>
                        <el-form-item label="明细">
                            <el-input type="textarea" v-model="name" placeholder="请输入明细" clearable></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
            <div slot="footer">
                <el-button @click="addVisible = false">取 消</el-button>
                <el-button type="primary" @click="addVisible = false">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
export default {
    data() {
        return {
            addVisible: false,
            thStyle: {
                fontSize: "12px",
                fontWeight: "bold",
                color: "#000"
            },
            tableData: [
                {
                    date: "2019-01-14",
                    mode: "礼物",
                    spend: 230,
                    content: "芙蓉王香烟一条"
                },
                {
                    date: "2019-01-14",
                    mode: "礼金",
                    spend: 1000,
                    content: "新年红包1000元"
                },
                {
                    date: "2019-01-14",
                    mode: "餐饮",
                    spend: 800,
                    content: "于XXX餐厅吃晚饭，消费800元"
                }
            ],
            name: ''
        };
    },
    methods: {
        formatPrice(row, column, cellValue) {
            return '￥' + cellValue.toFixed(2)
        }
    }
};
</script>

<style lang='scss'>
@import "./common.scss";
.supplier-care {
    .header {
        @include tableHeader;
    }
    .btn {
        @include tableBtn;
    }
    .table {
        @include table;
    }
}
</style>
