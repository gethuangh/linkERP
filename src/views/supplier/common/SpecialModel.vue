<template>
    <div class="special-model">
        <div class="header">
            特价型号
            <span class="number">(125)</span>
            <el-button size="mini" class="btn" @click="addVisible = true">新增</el-button>
        </div>
        <el-table
            class="table"
            size="mini"
            :data="tableData"
            style="width: 100%"
            :header-cell-style="thStyle"
        >
            <el-table-column label="序号" type="index" width="50"></el-table-column>
            <el-table-column prop="model" label="型号" width="140"></el-table-column>
            <el-table-column prop="temporar" label="临时现货数量" width="100"></el-table-column>
            <el-table-column prop="minMPQ" label="最小包装量MPQ" width="120"></el-table-column>
            <el-table-column prop="minMOQ" label="最小起订量MOQ" width="120"></el-table-column>
            <el-table-column prop="delivery" label="标准交期" width="135"></el-table-column>
            <el-table-column prop="supplier" label="供应商" width="165"></el-table-column>
            <el-table-column prop="buyer" label="采购员" width="90"></el-table-column>
            <el-table-column prop="inputDate" label="录入日期"></el-table-column>
        </el-table>
        <el-button size="mini" class="btn" style="float: right">MORE</el-button>

        <el-dialog
            title="新增特价型号"
            width="1010px"
            :visible.sync="addVisible"
            :close-on-click-modal="false"
        >
            <el-form label-width="130px">
                <el-row>
                    <el-col :span="8">
                        <el-form-item label="型号">
                            <el-input v-model="name" placeholder="请输入型号" clearable></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="临时现货数量">
                            <el-input v-model="name" placeholder="请输入临时现货数量" clearable></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="最小包装量MPQ">
                            <el-input v-model="name" placeholder="请输入最小包装量MPQ" clearable></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8">
                        <el-form-item label="最小起订量MOQ">
                            <el-input v-model="name" placeholder="请输入最小起订量MOQ" clearable></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="标准交期">
                            <el-input v-model="name" placeholder="请输入标准交期" clearable></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="供应商">
                            <el-input v-model="name" placeholder="请输入供应商" clearable></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8">
                        <el-form-item label="供应商">
                            <el-input v-model="name" placeholder="请输入供应商" clearable></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="采购员">
                            <el-input v-model="name" placeholder="请输入采购员" clearable></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="录入日期">
                            <el-input v-model="name" placeholder="请输入录入日期" clearable></el-input>
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
            name: '',
            tableData: [
                {
                    model: "TPS65217CRSLR",
                    temporar: 0,
                    minMPQ: 2500,
                    minMOQ: 2500,
                    delivery: "6-8 weeks",
                    supplier: "安富利电子",
                    buyer: "柳振",
                    inputDate: "2019-01-14"
                },
                {
                    model: "TPS65217CRSLR",
                    temporar: 0,
                    minMPQ: 2500,
                    minMOQ: 2500,
                    delivery: "6-8 weeks",
                    supplier: "安富利电子",
                    buyer: "柳振",
                    inputDate: "2019-01-14"
                },
                {
                    model: "TPS65217CRSLR",
                    temporar: 0,
                    minMPQ: 2500,
                    minMOQ: 2500,
                    delivery: "6-8 weeks",
                    supplier: "安富利电子",
                    buyer: "柳振",
                    inputDate: "2019-01-14"
                }
            ]
        };
    }
};
</script>

<style lang='scss'>
@import "./common.scss";
.special-model {
    overflow: hidden;
    .header {
        @include tableHeader;
        .number {
            color: $theme-color;
        }
    }
    .btn {
        @include tableBtn;
    }
    .table {
        @include table;
    }
}
</style>
