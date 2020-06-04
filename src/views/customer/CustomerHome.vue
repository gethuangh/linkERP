<template>
    <div class="customer-home">
        <div class="search-row">
            <div class="select-item">
                <div class="select-item-title">客户</div>
                <el-select size="medium" v-model="chineseId" clearable placeholder="请选择" @change="seach">
                    <el-option
                        v-for="item in thisall"
                        :key="item.id"
                        :label="item.chineseName"
                        :value="item.id"
                    ></el-option>
                </el-select>
            </div>
            <div class="select-item">
                <div class="select-item-title">客户联系人</div>
                <el-select size="medium" v-model="value" clearable placeholder="请选择">
                    <el-option
                        v-for="item in thisselectData"
                        :key="item.id"
                        :label="item.name"
                        :value="item.id"
                    ></el-option>
                </el-select>
            </div>
            <el-button type="success" class="search-btn">搜索</el-button>
        </div>
    </div>
</template>

<script>
import { all,selectData} from "../../api/customer";

export default {
    data() {
        return {
            thisall:[{}],
            thisselectData:[{}],
            chineseId: "",
            value: "",
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
        };
    },
    created() {
        //用于客户下拉
        all().then(res => {
        this.thisall = res.result;
      });
    },
    methods:{
         seach(){
             //用于联系人下拉
            let data = {clientId : this.chineseId};
                selectData(data).then(res => {
                console.log(res)
                this.thisselectData = res.result;
              });
         }
    }
};
</script>

<style lang='scss'>
.customer-home {
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
            height: 36px;
            line-height: 34px;
            background-color: $theme-color;
        }
    }
}
</style>
