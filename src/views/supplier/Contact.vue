<template>
    <div class="supplier-home">
        <div class="search-row">
            <div class="select-item">
                <div class="select-item-title">供应商名称</div>
                <el-select
                    v-model="supplierName"
                    filterable
                    clearable
                    placeholder="请选择"
                    size="medium"
                >
                    <el-option
                        v-for="item in thissuppliersName"
                        :key="item.id"
                        :label="item.supChineseName"
                        :value="item.id"
                    ></el-option>
                </el-select>
            </div>
            <div class="select-item">
                <div class="select-item-title">供应商类别</div>
                <el-select
                    v-model="supplierType"
                    clearable
                    placeholder="请选择"
                    size="medium"
                >
                    <el-option
                        v-for="item in thissupplierType"
                        :key="item.id"
                        :label="item.attrName"
                        :value="item.id"
                    ></el-option>
                </el-select>
            </div>
            <!-- <div class="select-item">
                <div class="select-item-title">品牌</div>
                <el-select
                    v-model="supplierBrand"
                    clearable
                    placeholder="请选择"
                    size="medium"
                >
                    <el-option
                        v-for="item in thisbrandListe"
                        :key="item.id"
                        :label="item.name"
                        :value="item.id"
                    ></el-option>
                </el-select>
            </div> -->
            <el-button type="success" class="search-btn" @click="seach">搜索</el-button>
        </div>
        <el-table :data="thissupLinkmans" size="small" border class="supplier-table" :header-cell-style="{fontSize: '11px',fontWeight: 'bold',color: '#000'}">
            <el-table-column prop="supLinkmanChineseName" label="供应商联系人" width="245"></el-table-column>
            <el-table-column prop="region" label="地区" width="120">
                <template slot-scope="scope">
                      <span>{{scope.row.stateName+ scope.row.cityName}}</span>
                </template>
            </el-table-column>
            <el-table-column prop="position" label="职位" width="120"></el-table-column>
            <el-table-column prop="supName" label="供应商名称" width="215"></el-table-column>
            <el-table-column prop="supType" label="供应商类别" width="120"></el-table-column>
            <el-table-column label="主营品牌">
                <template slot-scope="{row}">
                    <div class="brand-wrap">
                        <router-link class="brand-item" to="/" v-for="(item,index) of row.logoUrl" :key="index">
                            <el-avatar :src="item"></el-avatar>
                        </router-link>
                    </div>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>
<script>

import { supLinkmans,suppliersName,supplierType,brandList} from "../../api/suppliers";

export default {
    name: "SupplierHome",
    data() {
        return {
            thissupLinkmans:[{}],
            thissuppliersName:[{}],
            thissupplierType:[{}],
            thisbrandListe:[{}],
            supplierName: "",
            supplierType: "",
            supplierBrand: "",
            options: [
                {
                    value: "选项1",
                    label: "黄金糕"
                },
                {
                    value: "选项2",
                    label: "双皮奶"
                },
                {
                    value: "选项3",
                    label: "蚵仔煎"
                },
                {
                    value: "选项4",
                    label: "龙须面"
                },
                {
                    value: "选项5",
                    label: "北京烤鸭"
                }
            ],
            tableData: [
                {
                    person: "Annie Way",
                    sex: 0,
                    name: "AVNET ELECTRONICS HK LTD",
                    region: "深圳",
                    position: "销售经理",
                    category: "授权代理商",
                    brands: [
                        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
                    ]
                },
                {
                    person: "Ammy Zhang",
                    sex: 1,
                    name: "ARROW ELECTRONICS INC.",
                    region: "深圳",
                    position: "销售经理",
                    category: "授权代理商",
                    brands: [
                        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
                    ]
                },
                {
                    person: "Annie Way",
                    sex: 0,
                    name: "深圳高胜电子有限公司",
                    region: "深圳",
                    position: "销售经理",
                    category: "授权代理商",
                    brands: [
                        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
                    ]
                },
                {
                    person: "Ammy Zhang",
                    sex: 1,
                    name: "AVNET ELECTRONICS HK LTD",
                    region: "深圳",
                    position: "销售经理",
                    category: "授权代理商",
                    brands: [
                        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                    ]
                },
                {
                    person: "Ammy Zhang",
                    sex: 1,
                    name: "AVNET ELECTRONICS HK LTD",
                    region: "深圳",
                    position: "销售经理",
                    category: "授权代理商",
                    brands: [
                        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
                    ]
                },
            ]
        };
    },
    created(){
        //联系人列表
        let data = {pageNum : "0",
                pageSize : "0"};
        supLinkmans(data).then(res =>{
            this.thissupLinkmans = res.result.list;
        });

        //供应商名称
         suppliersName().then(res =>{
            this.thissuppliersName = res.result;
        });

         //供应商类别
         supplierType().then(res =>{
            this.thissupplierType = res.result;
        });

        //品牌
         brandList().then(res =>{
            this.thisbrandListe = res.result;
        });
    },
    methods:{
        seach(){
            //联系人列表
        let data = {pageNum : "0",
                    pageSize : "0",
                    supplierId : this.supplierName,
                    type : this.supplierType};
        supLinkmans(data).then(res =>{
            this.thissupLinkmans = res.result.list;
        });
        }
    }
};
</script>

<style lang='scss'>
.supplier-home {
    .search-row {
        display: flex;
        .select-item {
            margin-right: 15px;
        }
        .select-item-title {
            margin: 5px;
            font-size: 14px;
        }
        .search-btn {
            align-self: flex-end;
            padding: 0 15px;
            height: 40px;
            line-height: 38px;
        }
    }
    .supplier-table {
        margin-top: 30px;
        font-size: 10px;
        color: #000;
        .contacts-wrap {
            display: flex;
            .contacts-link-group {
                flex: 1;
                white-space: nowrap;
                overflow: hidden;
                .contacts-link {
                    color: $theme-color
                }
            }
            .more {
                flex-shrink: 0;
                margin: 0 50px;
                cursor: pointer;
                user-select: none;
            }
        }
        .brand-wrap {
            display: flex;
            .brand-item {
                display: block;
                .el-avatar {display: block;}
            }
            .brand-item + .brand-item {
                margin-left: 15px;
            }
        }
    }
}
</style>
