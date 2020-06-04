<template>
    <div class="logistic-home">
        
        <div class="btn-group">
            <el-button style="background-color: #99CC00;" size="medium">*待处理发货单</el-button>
            <el-button style="background-color: #41C363;" class="btn2" size="medium">打印</el-button>
            <el-button style="background-color: #FF99CC;" class="btn3" size="medium">生成调拨单</el-button>
            <el-button style="background-color: #3366FF;" class="btn4" size="medium">生成出库单</el-button>
            <el-button type="primary" size="medium" @click="addVisible = true">发运单新增</el-button>
        </div>

        <!-- 
        <logistic-table bgcolor="#FFFFCC" title="深圳直发客户"></logistic-table>
        <logistic-table bgcolor="#CCFFFF" title="香港发客户"></logistic-table> -->

        <div v-for="item of thislistWithOrderType" :key="item">
            <logistic-table :title="item.startEndSign" :list='item.shippingOrderList'></logistic-table>
        </div>

        <el-dialog width="260px" :visible.sync="addVisible">
            <el-radio-group v-model="radio" class="add-radio-group">
                <el-radio :label="item.label" v-for="item of radioList" :key="item.label">{{ item.name }}</el-radio>
            </el-radio-group>
            <span slot="title" style="font-size: 14px">发货单 - 新增</span>
            <div slot="footer" class="dialog-footer">
                <el-button size="mini" type="primary" @click="createVisible = true">确 定</el-button>
            </div>
            <el-dialog width="1700px" top="2vh" append-to-body :visible.sync="createVisible">
                <create-logistic></create-logistic>
            </el-dialog>
        </el-dialog>
    </div>
</template>

<script>
import {listWithOrderType} from "../../api/logistic";

import LogisticTable from "./common/LogisticTable.vue";
import CreateLogistic from "./common/CreateLogistic.vue"
export default {
    data() {
        return {
            thislistWithOrderType:[{}],
            addVisible: false,
            createVisible: false,
            radio: 0,
            radioList: [
                {
                    label: 0,
                    name: '深圳 - 香港（大盛）'
                },
                {
                    label: 1,
                    name: '深圳 - 客户'
                },
                {
                    label: 2,
                    name: '香港 - 客户'
                }
            ]
        };
    },
    //首页列表
    created(){
        let data = {isSent : "0"};
        listWithOrderType(data).then(res => {
            this.thislistWithOrderType = res.result;
            console.log(this.thislistWithOrderType)
         });
    },
    components: {
        LogisticTable,
        CreateLogistic
    }
};
</script>

<style lang='scss'>
.logistic-home {
    .btn-group {
        margin-bottom: 20px;
        .el-button {
            color: #fff;
            border: none;
        }
    }
    .add-radio-group {
        width: 100%;
        .el-radio {
            display: block;
            line-height: 40px;
            margin-right: 0;
            border-bottom: 1px solid #EBEEF5;
            .el-radio__label {
                font-size: 12px;
                font-weight: bold;
            }
        }
    }
}
</style>
