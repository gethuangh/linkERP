<template>
    <div class="create-logistic">
        <div class="left-content">
            <el-table
                size="mini"
                :data="tableData2"
                border
                stripe
                header-row-class-name="table-header"
                @selection-change="selectionChange"
            >
                <el-table-column type="selection" :selectable="selectable" width="40"></el-table-column>
                <el-table-column width="30" class-name="icon-column">
                    <i class="iconfont iconlikai"></i>
                </el-table-column>
                <el-table-column prop="customerNumber" width="85" label="客户单号" align="center">
                    <template slot-scope="scope">
                        <el-input
                            size="mini"
                            clearable
                            class="custom-input"
                            v-model="customerNumber"
                            v-if="scope.$index === 0"
                        ></el-input>
                        <span v-else>{{ scope.row.customerNumber }}</span>
                    </template>
                </el-table-column>
                <el-table-column prop="customerName" width="150" label="客户名称" align="center">
                    <template slot-scope="scope">
                        <el-select
                            size="mini"
                            clearable
                            class="custom-input"
                            v-model="customerName"
                            v-if="scope.$index === 0"
                        >
                            <el-option label="42586680" value="0"></el-option>
                            <el-option label="42586681" value="1"></el-option>
                            <el-option label="42586682" value="2"></el-option>
                        </el-select>
                        <span v-else>{{ scope.row.customerName }}</span>
                    </template>
                </el-table-column>
                <el-table-column prop="model" width="190" label="型号" align="center">
                    <template slot-scope="scope">
                        <el-input
                            size="mini"
                            clearable
                            class="custom-input"
                            v-model="model"
                            v-if="scope.$index === 0"
                        ></el-input>
                        <span v-else>{{ scope.row.model }}</span>
                    </template>
                </el-table-column>
                <el-table-column prop="number" width="60" label="数量" align="center">
                    <template slot-scope="scope">
                        <el-input
                            size="mini"
                            clearable
                            class="custom-input"
                            v-model="number"
                            v-if="scope.$index === 0"
                        ></el-input>
                        <span v-else>{{ scope.row.number }}</span>
                    </template>
                </el-table-column>
                <el-table-column prop="date" width="110" label="发货日期" align="center">
                    <template slot-scope="scope">
                        <el-select
                            size="mini"
                            clearable
                            class="custom-input"
                            v-model="date"
                            v-if="scope.$index === 0"
                        >
                            <el-option
                                :label="item.date"
                                :value="item.date"
                                v-for="item of tableData"
                                :key="item.date"
                            ></el-option>
                        </el-select>
                        <span v-else>{{ scope.row.date }}</span>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <div class="btn-group">
            <el-button type="success" class="el-icon-right btn"></el-button>
            <br />
            <el-button type="success" class="el-icon-back btn"></el-button>
        </div>
        <div class="right-content">
            <div class="operation">
                <div class="item">
                    <i class="iconfont iconwenjian"></i>
                    新建
                </div>
                <div class="item">
                    <i class="iconfont iconcopyfile"></i>
                    复制
                </div>
                <div class="item">
                    <i class="iconfont iconbaocun1"></i>
                    保存
                </div>
                <div class="item">
                    <i class="iconfont iconxiugaimima"></i>
                    修改
                </div>
                <div class="item">
                    <i class="iconfont icondayin"></i>
                    打印
                </div>
            </div>
            <div class="content">
                <div class="form-item">
                    <div class="form-item-label">物流起终：</div>
                    <div class="form-item-content">
                        <el-select style="width: 200px" size="small" clearable v-model="logistic">
                            <el-option label="深圳 - 香港（大盛）" value="0"></el-option>
                            <el-option label="深圳 - 客户" value="1"></el-option>
                            <el-option label="香港 - 客户" value="2"></el-option>
                        </el-select>
                    </div>
                </div>
                <div v-show="logistic === '0'">
                    <div class="form-item">
                        <div class="form-item-label">收货公司：</div>
                        <div class="form-item-content">
                            <el-select
                                style="width: 200px;flex-shrink: 0"
                                size="small"
                                clearable
                                v-model="customerName"
                            >
                                <el-option label="AAA ELECTRONICS" value="0"></el-option>
                                <el-option label="BBB ELECTRONICS" value="1"></el-option>
                                <el-option label="CCC ELECTRONICS" value="2"></el-option>
                            </el-select>
                            <div class="form-item">
                                <div class="form-item-label">联系人：</div>
                                <div class="form-item-content">
                                    <el-input style="width: 110px" size="small"></el-input>
                                </div>
                            </div>
                            <div class="form-item">
                                <div class="form-item-label">电话：</div>
                                <div class="form-item-content">
                                    <el-input size="small"></el-input>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="form-item">
                        <div class="form-item-label">收货地址：</div>
                        <div class="form-item-content">
                            <el-input size="small"></el-input>
                        </div>
                    </div>
                    <div class="form-item">
                        <div class="form-item-label">快递名称：</div>
                        <div class="form-item-content">
                            <el-select size="small" clearable v-model="customerName">
                                <el-option size="small" clearable v-model="customerName">
                                    <el-option label="顺丰快递" value="0"></el-option>
                                    <el-option label="圆通快递" value="1"></el-option>
                                    <el-option label="韵达快递" value="2"></el-option>
                                </el-option>
                            </el-select>
                            <div class="form-item">
                                <div class="form-item-label">快递账号：</div>
                                <div class="form-item-content">
                                    <el-select size="small" clearable v-model="customerName">
                                        <el-option label="顺丰快递" value="0"></el-option>
                                        <el-option label="圆通快递" value="1"></el-option>
                                        <el-option label="韵达快递" value="2"></el-option>
                                    </el-select>
                                </div>
                            </div>
                            <div class="form-item">
                                <div class="form-item-label">运费支付：</div>
                                <div class="form-item-content">
                                    <el-select size="small" clearable v-model="customerName">
                                        <el-option label="顺丰快递" value="0"></el-option>
                                        <el-option label="圆通快递" value="1"></el-option>
                                        <el-option label="韵达快递" value="2"></el-option>
                                    </el-select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <el-table
                    :data="logisticArr"
                    border
                    size="mini"
                    style="margin-top: 20px"
                    header-row-class-name="table-header"
                >
                    <el-table-column type="selection" width="40"></el-table-column>
                    <el-table-column width="30" class-name="icon-column">
                        <i class="iconfont iconlikai"></i>
                    </el-table-column>
                    <el-table-column label="客户单号" align="center" width="85" prop="customerNumber"></el-table-column>
                    <el-table-column label="客户名称" align="center" width="165" prop="customerName"></el-table-column>
                    <el-table-column label="型号" align="center" width="190" prop="model"></el-table-column>
                    <el-table-column label="数量" align="center" width="60" prop="number"></el-table-column>
                    <el-table-column label="订单单价" align="center" width="85" prop="price"></el-table-column>
                    <el-table-column label="订单总价" align="center" width="85" prop="totalPrice"></el-table-column>
                    <el-table-column label="订单状态" align="center" prop="status">
                        <template slot-scope="{row}">
                            <span
                                style="color: #FF00FF;font-weight: bold"
                                v-if="row.status === 0"
                            >已采购待入库</span>
                            <span
                                style="color: #41C363;font-weight: bold"
                                v-else-if="row.status === 1"
                            >已入库待发货</span>
                        </template>
                    </el-table-column>
                </el-table>
                <div class="totalPrice" v-show="this.logisticArr.length">
                    总计金额： {{totalPrice}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>


export default {
    data() {
        return {
            tableData: [],
            customerNumber: "",
            customerName: "",
            model: "",
            number: "",
            date: "",
            logistic: "0",
            logisticArr: []
        };
    },
    created() {
        var count = 1;
        while (count < 10) {
            this.tableData.push({
                customerNumber: Math.floor(Math.random() * 99999999),
                customerName: "AAA ELECTRONICS",
                model: "EP3C16Q240C8N" + count,
                number: 326 + count,
                date: "2019-05-0" + count,
                price: count,
                totalPrice: count * (326 + count),
                status: count < 6 ? 0 : 1
            });
            count++;
        }

    },
    computed: {
        tableData2() {
            let result = null;
            result = this.tableData.filter(item => {
                return (
                    item.customerNumber
                        .toString()
                        .includes(this.customerNumber) &&
                    item.customerName.includes(this.customerName) &&
                    item.model.includes(this.model.toUpperCase()) &&
                    item.number.toString().includes(this.number) &&
                    item.date.includes(this.date)
                );
            });
            result.unshift([1]);
            return result;
        },
        totalPrice() {
            return this.logisticArr.reduce((prev, curr) => {
                return prev + curr.totalPrice
            }, 0)
        }
    },
    methods: {
        selectable(row, index) {
            return index === 0 ? false : true;
        },
        selectionChange(arr) {
            this.logisticArr = arr;
        },
    }
};
</script>

<style lang='scss'>
.create-logistic {
    display: flex;
    // width: 1580px;
    .el-table {
        color: #000;
    }
    .table-header {
        th {
            color: #000;
            font-weight: normal;
        }
    }
    .btn-group {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0 15px;
        .btn {
            border: none;
            margin: 0;
            background-color: $theme-color;
        }
    }
    .left-content {
        width: 666px;
        .custom-input input {
            padding: 0 5px;
        }
    }
    .icon-column {
        .cell {
            padding: 0;
            text-align: center;
        }
        .iconlikai {
            cursor: pointer;
            color: #85ff85;
        }
    }
    .right-content {
        width: 910px;
        .operation {
            display: flex;
            .item {
                display: flex;
                flex-direction: column;
                align-items: center;
                margin-right: 20px;
                cursor: pointer;
                font-size: 12px;
                color: #000;
                .iconfont {
                    font-size: 26px;
                }
            }
        }
        .content {
            padding: 25px;
            .form-item {
                display: flex;
                align-items: center;
                margin-top: 10px;
                color: #000;
                font-size: 12px;
                &-label {
                    width: 80px;
                    padding-right: 20px;
                    box-sizing: border-box;
                    text-align: right;
                }
                &-content {
                    flex: 1;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    .form-item {
                        margin-top: 0;
                        margin-left: 30px;
                    }
                }
            }
            .totalPrice {
                height: 36px;
                line-height: 36px;
                padding: 0 20px;
                text-align: right;
                border: 1px solid #EBEEF5;
                border-top: none;
                color: #008000;
                font-weight: bold;
            }
        }
    }
}
</style>
