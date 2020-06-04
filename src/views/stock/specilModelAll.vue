<template>
    <div class="specil-model-all">
        <div style="display: flex;justify-content: space-between">
            <div style="display: flex;align-items: flex-end;">
                <p class="el-button--mini" style="background: #99CC00;margin-right: 10px;">* 特价型号<span>(15350)</span></p>
                <el-button size="mini" style="background: #41C363">导出</el-button>
                <el-button size="mini" style="background: #FF99CC">导入</el-button>
                <!-- <el-link :underline="false" style="color: #0000ff" @click="openAll">查看全部</el-link>
                <el-link :underline="false" style="color: #993300">导出全部</el-link> -->
            </div>
            <Pagination :total="total"></Pagination>
        </div>

        <div class="gray-back" style="width: 1700px;padding-top:10px;">
            <el-table
                :row-class-name="tableRowClassName"
                border size="mini"
                :data="tableDataTwo"
                style="width: 100%;">
                <el-table-column
                    label=" "
                    width="90">
                    <template slot-scope="scope">
                        <el-button v-if="scope.$index == 0" size="mini" style="background: #6B97B9;">search</el-button>
                        <span v-if="scope.$index != 0" style="display: flex;justify-content: space-around;color: #999;">
                            <i class="iconfont">&#xe6dd;</i>
                            <i class="iconfont">&#xe63c;</i>
                            <i class="iconfont">&#xe609;</i>
                        </span>
                    </template>
                </el-table-column>
                <el-table-column
                    sortable
                    align="center"
                    label="类别"
                    width="80">
                    <template slot-scope="scope">
                        <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo"></el-input>
                        <p
                            class="el-button--mini"
                            v-if="scope.$index != 0 && scope.row.type == '代理商'"
                            style="background: #99CC00;"
                            disable-transitions>
                            {{scope.row.type}}
                        </p>
                        <p
                            class="el-button--mini"
                            v-else-if="scope.$index != 0 && scope.row.type == '贸易商'"
                            style="background: #FF99CC;"
                            disable-transitions>
                            {{scope.row.type}}
                        </p>
                        <p
                            class="el-button--mini"
                            v-else-if="scope.$index != 0 && scope.row.type == '代工厂'"
                            style="background: #3366FF;"
                            disable-transitions>
                            {{scope.row.type}}
                        </p>
                        <p                            
                            class="el-button--mini"  
                            v-else-if="scope.$index != 0 && scope.row.type == '原厂'"
                            style="background: #808000;"
                            disable-transitions>
                            {{scope.row.type}}
                        </p>
                        <span v-else></span>
                    </template>
                </el-table-column>
                <el-table-column
                    sortable
                    align="center"
                    label="原厂型号"
                    width="185">
                    <template slot-scope="scope">
                        <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo"></el-input>
                        <span v-if="scope.$index != 0">{{ scope.row.text }}</span>
                    </template>
                </el-table-column>
                <el-table-column
                    sortable
                    align="center"
                    label="品牌"
                    width="75">
                    <template slot-scope="scope">
                        <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo"></el-input>
                        <span v-if="scope.$index != 0">{{ scope.row.letter }}</span>
                    </template>
                </el-table-column>
                <el-table-column
                    sortable
                    align="center"
                    width="75"
                    label="数量">
                    <template slot-scope="scope">
                        <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo"></el-input>
                        <span v-if="scope.$index != 0">{{ scope.row.num }}</span>
                    </template>
                </el-table-column>
                <el-table-column
                    sortable
                    align="center"
                    width="75"
                    label="批号">
                    <template slot-scope="scope">
                        <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo"></el-input>
                        <span v-if="scope.$index != 0">{{ scope.row.num }}</span>
                    </template>
                </el-table-column>
                <el-table-column
                    align="center"
                    width="75"
                    label="货期">
                    <template slot-scope="scope">
                        <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo"></el-input>
                        <span v-if="scope.$index != 0">{{ scope.row.num }}</span>
                    </template>
                </el-table-column>
                <el-table-column
                    sortable
                    align="center"
                    width="80"
                    label="MOQ">
                    <template slot-scope="scope">
                        <el-select v-if="scope.$index == 0" size="mini" v-model="value" placeholder=" ">
                            <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                        <span v-if="scope.$index != 0">{{ scope.row.letter }}</span>
                    </template>
                </el-table-column>
                <el-table-column
                    sortable
                    align="center"
                    width="80"
                    label="SPQ">
                    <template slot-scope="scope">
                        <el-select v-if="scope.$index == 0" size="mini" v-model="value" placeholder=" ">
                            <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                        <span v-if="scope.$index != 0">{{ scope.row.letter }}</span>
                    </template>
                </el-table-column>
                <el-table-column
                    sortable
                    align="center"
                    width="75"
                    label="包装">
                    <template slot-scope="scope">
                        <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo"></el-input>
                        <span v-if="scope.$index != 0">{{ scope.row.num }}</span>
                    </template>
                </el-table-column>
                <el-table-column
                    align="center"
                    width="75"
                    label="成本">
                    <template slot-scope="scope">
                        <el-select v-if="scope.$index == 0" size="mini" v-model="value" placeholder=" ">
                            <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                        <span v-if="scope.$index != 0">{{ scope.row.num }}</span>
                    </template>
                </el-table-column>
                <el-table-column
                    align="center"
                    width="85"
                    label="采购员">
                    <template slot-scope="scope">
                        <el-select v-if="scope.$index == 0" size="mini" v-model="value" placeholder=" ">
                            <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                        <span v-if="scope.$index != 0">{{ scope.row.num }}</span>
                    </template>
                </el-table-column>
                <el-table-column
                    sortable
                    align="center"
                    width="105"
                    label="供应商代码">
                    <template slot-scope="scope">
                        <el-input v-if="scope.$index == 0" size="mini" v-model="inputTwo"></el-input>
                        <span v-if="scope.$index != 0">{{ scope.row.num }}</span>
                    </template>
                </el-table-column>
                <el-table-column
                    sortable
                    align="center"
                    width="160"
                    label="供应商">
                    <template slot-scope="scope">
                        <el-select v-if="scope.$index == 0" size="mini" v-model="value" placeholder=" ">
                            <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                        <span v-if="scope.$index != 0">{{ scope.row.num }}</span>
                    </template>
                </el-table-column>
                <el-table-column
                    sortable
                    align="center"
                    width="100"
                    label="录入日期">
                    <template slot-scope="scope">
                        <el-select v-if="scope.$index == 0" size="mini" v-model="value" placeholder=" ">
                            <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                        <span v-if="scope.$index != 0">{{ scope.row.data }}</span>
                    </template>
                </el-table-column>
                <el-table-column
                    align="center"
                    width="100"
                    label="更新天数">
                    <template slot-scope="scope">
                        <el-select v-if="scope.$index == 0" size="mini" v-model="value" placeholder=" ">
                            <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                        <span v-if="scope.$index != 0">{{ scope.row.num }}</span>
                    </template>
                </el-table-column>
                <el-table-column
                    align="center"
                    label="备注">
                    <template slot-scope="scope">
                        <el-select v-if="scope.$index == 0" size="mini" v-model="value" placeholder=" ">
                            <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                        <span v-if="scope.$index != 0">{{ scope.row.none }}</span>
                    </template>
                </el-table-column>
            </el-table>            
        </div>

    </div>
</template>

<script>
import bus from "@/assets/Bus";
import Pagination from '@/components/Pagination.vue'
export default {
    name: "specilModelAll",
    components: {
        Pagination
    },
    data() {
        return {
            total: 30,
            tableDataTwo: [
                {},
                {
                    type: '代理商',
                    text: 'MT48LC32M16A2P-75:C TR',
                    letter: 'MCN',
                    num: 1000,
                    price: '￥15.00',
                    des: 'IC DRAM 512M PARALLEL 54TSOP',
                    none: '',
                    place: '深圳公司库',
                    data: '2019-02-28'
                },{
                    type: '贸易商',
                    text: 'MT48LC32M16A2P-75:C TR',
                    letter: 'MCN',
                    num: 1000,
                    price: '￥15.00',
                    des: 'IC DRAM 512M PARALLEL 54TSOP',
                    none: '',
                    place: '深圳公司库',
                    data: '2019-02-28'
                },{
                    type: '代工厂',
                    text: 'MT48LC32M16A2P-75:C TR',
                    letter: 'MCN',
                    num: 1000,
                    price: '￥15.00',
                    des: 'IC DRAM 512M PARALLEL 54TSOP',
                    none: '',
                    place: '深圳公司库',
                    data: '2019-02-28'
                },{
                    type: '原厂',
                    text: 'MT48LC32M16A2P-75:C TR',
                    letter: 'MCN',
                    num: 1000,
                    price: '￥15.00',
                    des: 'IC DRAM 512M PARALLEL 54TSOP',
                    none: '',
                    place: '深圳公司库',
                    data: '2019-02-28'
                },{
                    type: '代理商',
                    text: 'MT48LC32M16A2P-75:C TR',
                    letter: 'MCN',
                    num: 1000,
                    price: '￥15.00',
                    des: 'IC DRAM 512M PARALLEL 54TSOP',
                    none: '',
                    place: '深圳公司库',
                    data: '2019-02-28'
                },{
                    type: '贸易商',
                    text: 'MT48LC32M16A2P-75:C TR',
                    letter: 'MCN',
                    num: 1000,
                    price: '￥15.00',
                    des: 'IC DRAM 512M PARALLEL 54TSOP',
                    none: '',
                    place: '深圳公司库',
                    data: '2019-02-28'
                },{
                    type: '代工厂',
                    text: 'MT48LC32M16A2P-75:C TR',
                    letter: 'MCN',
                    num: 1000,
                    price: '￥15.00',
                    des: 'IC DRAM 512M PARALLEL 54TSOP',
                    none: '',
                    place: '深圳公司库',
                    data: '2019-02-28'
                },{
                    type: '原厂',
                    text: 'MT48LC32M16A2P-75:C TR',
                    letter: 'MCN',
                    num: 1000,
                    price: '￥15.00',
                    des: 'IC DRAM 512M PARALLEL 54TSOP',
                    none: '',
                    place: '深圳公司库',
                    data: '2019-02-28'
                },{
                    type: '代理商',
                    text: 'MT48LC32M16A2P-75:C TR',
                    letter: 'MCN',
                    num: 1000,
                    price: '￥15.00',
                    des: 'IC DRAM 512M PARALLEL 54TSOP',
                    none: '',
                    place: '深圳公司库',
                    data: '2019-02-28'
                },{
                    type: '贸易商',
                    text: 'MT48LC32M16A2P-75:C TR',
                    letter: 'MCN',
                    num: 1000,
                    price: '￥15.00',
                    des: 'IC DRAM 512M PARALLEL 54TSOP',
                    none: '',
                    place: '深圳公司库',
                    data: '2019-02-28'
                },{
                    type: '代工厂',
                    text: 'MT48LC32M16A2P-75:C TR',
                    letter: 'MCN',
                    num: 1000,
                    price: '￥15.00',
                    des: 'IC DRAM 512M PARALLEL 54TSOP',
                    none: '',
                    place: '深圳公司库',
                    data: '2019-02-28'
                },{
                    type: '原厂',
                    text: 'MT48LC32M16A2P-75:C TR',
                    letter: 'MCN',
                    num: 1000,
                    price: '￥15.00',
                    des: 'IC DRAM 512M PARALLEL 54TSOP',
                    none: '',
                    place: '深圳公司库',
                    data: '2019-02-28'
                }
            ]
        };
    },
    methods: {
        //斑马纹
        tableRowClassName({row, rowIndex}) {
            if (rowIndex%2 === 0) {
                return 'gray-row';
            }
            return '';
        },
    },
    created() {
        //bus.on('xxx',() => { })
    }
};
</script>

<style lang='scss'>

    .specil-model-all {

        .el-table {
            border: 1px solid #d7d7d7;
            border-width: 1px 1px 0 1px;

            .el-table--border th {
                border-right: 1px solid #d7d7d7;
            }
        }

        .el-pagination .btn-next, 
        .el-pagination .btn-prev,
        .el-pagination button:disabled,
        .el-pager li {
            background-color: transparent;
        }
        

    }

</style>