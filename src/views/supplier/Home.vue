<template>
    <div class="supplier-home">
        <div class="search-row">
            <div class="select-item">
                <div class="select-item-title">供应商名称</div>
                <el-select size="medium" v-model="supplierName" filterable clearable placeholder="请选择">
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
                <el-select size="medium" v-model="supplierType" clearable placeholder="请选择">
                    <el-option
                        v-for="item in thissupplierType"
                        :key="item.id"
                        :label="item.attrName"
                        :value="item.id"
                    ></el-option>
                </el-select>
            </div>
            <div class="select-item">
                <div class="select-item-title">品牌</div>
                <el-select size="medium" v-model="supplierBrand" clearable placeholder="请选择">
                    <el-option
                        v-for="item in thisbrandList"
                        :key="item.id"
                        :label="item.name"
                        :value="item.id"
                    ></el-option>
                </el-select>
            </div>
            <el-button type="success" class="search-btn" @click="seach">搜索</el-button>
        </div>
        <el-table :data="thissuppliersList" border size="small" class="supplier-table" :header-cell-style="thStyle">
            <el-table-column prop="supChineseName" label="供应商名称" width="245"></el-table-column>
            <el-table-column prop="stateName" label="地区" width="120">
                <template slot-scope="scope">
                      <span>{{scope.row.stateName + scope.row.provinceName}}</span>
                </template>
            </el-table-column>
            <el-table-column prop="typeValue" label="供应商类别" width="145"></el-table-column>
            <!-- <el-table-column label="联系人" width="310">
                <template slot-scope="{row}">
                    <div class="contacts-wrap">
                        <div
                            class="contacts-link-group"
                            :style="{whiteSpace: row.open ? 'normal' : 'nowrap'}"
                        >
                            <template v-for="(item,index) of row.contacts">
                                <router-link
                                    to="/"
                                    :key="index"
                                    class="contacts-link"
                                    v-show="!row.open ? index < 3 : true"
                                >{{ item }}</router-link>
                                <span
                                    :key="index+item"
                                    v-show="!row.open ? index < 2 : index !== row.contacts.length-1"
                                >；&nbsp;&nbsp;</span>
                            </template>
                        </div>
                        <div
                            class="more"
                            v-if="row.contacts.length > 3"
                            @click="row.open=!row.open"
                        >{{row.open ? "收起" : "展开"}}</div>
                    </div>
                </template>
            </el-table-column> -->
            <el-table-column label="主营品牌">
                <template slot-scope="{row}">
                    <div class="brand-wrap">
                        <router-link
                            class="brand-item"
                            to="/"
                            v-for="(item,index) of row.logoUrl"
                            :key="index"
                        >
                            <el-avatar :src="item"></el-avatar>
                        </router-link>
                    </div>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
import { suppliersList,suppliersName,supplierType,brandList} from "../../api/suppliers";

export default {
    name: "SupplierHome",
    data() {
        return {
            supplierName: "",
            supplierType: "",
            supplierBrand: "",
            thissuppliersList:[{}],
            thissuppliersName:[{}],
            thissupplierType:[{}],
            thisbrandList:[{}],
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
            thStyle: {
                fontSize: "11px",
                fontWeight: "bold",
                color: "#000"
            },
            tableData: [
                {
                    name: "AVNET ELECTRONICS HK LTD",
                    region: "深圳",
                    category: "授权代理商",
                    contacts: ["王君", "张十诚", "王君", "张十诚"],
                    open: false,
                    brands: [
                        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
                    ]
                },
                {
                    name: "ARROW ELECTRONICS INC.",
                    region: "深圳",
                    open: false,
                    category: "授权代理商",
                    contacts: [
                        "王君",
                        "张十诚",
                        "王君",
                        "张十诚",
                        "王君",
                        "张十诚"
                    ],
                    brands: [
                        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
                    ]
                },
                {
                    name: "深圳高胜电子有限公司",
                    region: "深圳",
                    open: false,
                    category: "授权代理商",
                    contacts: [
                        "王君",
                        "张十诚",
                        "王君",
                        "张十诚",
                        "王君",
                        "张十诚",
                        "王君",
                        "张十诚",
                        "王君",
                        "张十诚",
                        "王君",
                        "张十诚"
                    ],
                    brands: [
                        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
                    ]
                },
                {
                    name: "AVNET ELECTRONICS HK LTD",
                    region: "深圳",
                    open: false,
                    category: "授权代理商",
                    contacts: [
                        "王君",
                        "张十诚",
                        "王君",
                        "张十诚",
                        "王君",
                        "张十诚"
                    ],
                    brands: [
                        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
                    ]
                },
                {
                    name: "AVNET ELECTRONICS HK LTD",
                    region: "深圳",
                    open: false,
                    category: "授权代理商",
                    contacts: ["王君", "张十诚", "王君"],
                    brands: [
                        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
                    ]
                }
            ]
        };
    },
    created() {
    //供应商列表
    let data = {pageNum : "0",
                pageSize : "0"};
    suppliersList(data).then(res => {
       console.log(res)
        this.thissuppliersList = res.result.list;
      });

    suppliersName().then(res => {
       console.log(res)
        this.thissuppliersName = res.result;
      });

    supplierType().then(res => {
       console.log(res)
        this.thissupplierType = res.result;
      });

    brandList().then(res => {
       console.log(res)
        this.thisbrandList = res.result;
      });
    },
    methods:{
        seach(){
            let data = {supplierType : this.supplierType,
                        supplierId :this.supplierName,
                        brandId : this.supplierBrand,
                        pageNum : "0",
                        pageSize : "0"};
            suppliersList(data).then(res => {
               console.log(res)
                this.thissuppliersList = res.result.list;
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
        // .el-input__inner {
        //     border-radius: 0;
        //     border-color: #000!important;
        // }
        // .select-item + .select-item {
        //     margin-left: -1px;
        // }
        .search-btn {
            align-self: flex-end;
            padding: 0 15px;
            // width: 75px;
            height: 36px;
            line-height: 34px;
            // border-radius: 0;
            background-color: $theme-color;
            // border: none;
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
                    color: $theme-color;
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
                .el-avatar {
                    display: block;
                }
            }
            .brand-item + .brand-item {
                margin-left: 15px;
            }
        }
    }
    // .el-table--border {
    //     border: none;
    // }
    // .el-table--border th {
    //     border: none;
    // }
    // .el-table td.el-table_1_column_1 {
    //     border-left: 1px solid #000;
    // }
    // .el-table td, .el-table th {
    //     padding: 8px 0;
    // }
    // .el-table--border, .el-table--group, .el-table td, .el-table th.is-leaf {
    //     border-color: #000;
    // }
    // .el-table--border::after, .el-table--group::after, .el-table::before {
    //     background-color: #000;
    // }
    // .el-table--border::after, .el-table::before {
    //     display: none;
    // }
}
</style>