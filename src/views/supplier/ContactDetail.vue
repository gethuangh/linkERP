<template>
    <div class="contact-detail">
        <div class="personal-info">
            <div class="name">David Makenskin</div>
            <div class="info-body">
                <el-image :src="img" fit="cover" class="photo"></el-image>
                <div class="detail">
                    <div class="detail-column">
                        <div class="item">
                            <span class="key">姓名</span>
                            <span>David Makenskin</span>
                        </div>
                        <div class="item">
                            <span class="key">别名</span>
                            <span>大卫.马克思</span>
                        </div>
                        <div class="item">
                            <span class="key">所在国家</span>
                            <span>中国</span>
                        </div>
                        <div class="item">
                            <span class="key">所在地区</span>
                            <span>深圳</span>
                        </div>
                        <div class="item" style="margin-top: 15px">
                            <span class="key">所属公司</span>
                            <span>AVNET ELECTRONICS</span>
                        </div>
                        <div class="item">
                            <span class="key">目前职业</span>
                            <span>销售</span>
                        </div>
                        <div class="item">
                            <span class="key">目前职位</span>
                            <span>销售员</span>
                        </div>
                    </div>
                    <div class="detail-column">
                        <div class="item">
                            <span class="key">生日</span>
                            <span>1978-02-03</span>
                        </div>
                        <div class="item">
                            <span class="key">日历</span>
                            <span>公历</span>
                        </div>
                        <div class="item">
                            <span class="key">年龄</span>
                            <span>41</span>
                        </div>
                        <div class="item">
                            <span class="key">婚姻</span>
                            <span>已婚</span>
                        </div>
                        <div class="item" style="margin-top: 15px">
                            <span class="key">子/女</span>
                            <span>有</span>
                        </div>
                        <div class="item">
                            <span class="key">是否抽烟</span>
                            <span>抽烟</span>
                        </div>
                        <div class="item">
                            <span class="key">是否喝酒</span>
                            <span>不喝酒</span>
                        </div>
                    </div>
                    <div class="detail-column">
                        <div class="item">
                            <span class="key">座机</span>
                            <span>0258888888</span>
                        </div>
                        <div class="item">
                            <span class="key">传真</span>
                            <span>99999</span>
                        </div>
                        <div class="item">
                            <span class="key">手机</span>
                            <span>13800138000</span>
                        </div>
                        <div class="item">
                            <span class="key">EMAIL</span>
                            <span>99999@qq.com</span>
                        </div>
                        <div class="item">
                            <span class="key">SKYPE</span>
                            <span>9999999999</span>
                        </div>
                        <div class="item">
                            <span class="key">QQ</span>
                            <span>106666959</span>
                        </div>
                        <div class="item">
                            <span class="key">微信</span>
                            <span>13800138000</span>
                        </div>
                        <div class="item">
                            <span class="key">WhatsAPP</span>
                            <span>13800138000</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="disposition">
            <div class="title">
                喜好与性格
                <el-button
                    size="mini"
                    class="btn"
                    @click="dispositionEdit=!dispositionEdit"
                >{{dispositionEdit ? '保存' : '编辑'}}</el-button>
            </div>
            <div class="content">
                <span v-show="!dispositionEdit">{{ disposition }}</span>
                <el-input
                    v-show="dispositionEdit"
                    :autosize="{minRows: 2}"
                    :autofocus="dispositionEdit"
                    type="textarea"
                    placeholder="请输入内容"
                    v-model="disposition"
                ></el-input>
            </div>
        </div>
        <div class="main-title">
            <div class="title">主营品牌</div>
            <div class="brand-wrap">
                <div class="brand-item" v-for="item in 7" :key="item">
                    <el-image :src="img" fit="cover" class="brand-img"></el-image>
                    <span>品牌</span>
                </div>
                <el-button size="mini" class="btn" @click="addBrand = true">新增</el-button>
            </div>
            <div class="remarks">
                <div class="remarks-title">主营产品备注：</div>
                <div class="remarks-content">
                    <el-input
                        :autosize="{minRows: 2}"
                        type="textarea"
                        placeholder="请输入内容"
                        class="textarea"
                        v-model="disposition"
                    ></el-input>
                    <el-button size="mini" class="btn">编辑</el-button>
                </div>
            </div>
        </div>
        <lately-deal class="interval"></lately-deal>
        <special-model class="interval"></special-model>
        <deal-statistics class="interval"></deal-statistics>
        <follow-up class="interval"></follow-up>
        <supplier-care class="interval"></supplier-care>

        <el-dialog
            title="新增品牌"
            :visible.sync="addBrand"
            width="500px"
            :close-on-click-modal="false"
        >
            <el-form label-width="130px">
                <el-form-item label="品牌LOGO">
                    <el-upload
                        class="avatar-uploader"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :show-file-list="false"
                    >
                        <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                </el-form-item>
                <el-form-item label="品牌名称">
                    <el-input v-model="imageUrl" placeholder="请输入品牌名称" clearable></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer">
                <el-button @click="addBrand = false">取 消</el-button>
                <el-button type="primary" @click="addBrand = false">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
import LatelyDeal from "./common/LatelyDeal";
import SpecialModel from "./common/SpecialModel";
import DealStatistics from "./common/DealStatistics";
import FollowUp from "./common/FollowUp";
import SupplierCare from "./common/SupplierCare";
export default {
    data() {
        return {
            disposition: "篮球、乒乓球、羽毛球、跑步、游泳等",
            dispositionEdit: false,
            img:
                "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
            addBrand: false,
            imageUrl: ''
        };
    },
    components: {
        LatelyDeal,
        DealStatistics,
        SpecialModel,
        FollowUp,
        SupplierCare
    }
};
</script>

<style lang='scss'>
@mixin btnStyle {
    height: 26px;
    border-radius: 0;
    background-color: $theme-color;
    border: none;
    color: #fff;
}
@mixin moduleTitle {
    font-size: 12px;
    font-weight: bold;
    line-height: 26px;
    border-bottom: 1px solid $theme-color;
}
.contact-detail {
    width: 1340px;
    .interval {
        margin-top: 25px;
    }
    .personal-info {
        .name {
            font-size: 13px;
            line-height: 40px;
            text-indent: 15px;
            font-weight: bold;
        }
        .info-body {
            display: flex;
            .photo {
                width: 190px;
                height: 160px;
                margin-right: 50px;
            }
            .detail {
                flex: 1;
                display: flex;
                .detail-column + .detail-column {
                    margin-left: 70px;
                }
                .detail-column {
                    .item {
                        line-height: 25px;
                    }
                    .key {
                        display: inline-block;
                        width: 60px;
                        font-weight: bold;
                        margin-right: 15px;
                    }
                }
            }
        }
    }
    .disposition {
        .title {
            @include moduleTitle;
            .btn {
                @include btnStyle;
                margin-left: 20px;
            }
        }
        .content {
            min-height: 50px;
            padding: 10px 0;
            line-height: 20px;
        }
    }
    .main-title {
        .title {
            @include moduleTitle;
        }
        .brand-wrap {
            display: flex;
            flex-wrap: wrap;
            padding: 10px 0;
            .brand-item {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                line-height: 20px;
                margin-right: 25px;
                .brand-img {
                    width: 95px;
                    height: 40px;
                }
            }
            .btn {
                @include btnStyle;
            }
        }
        .remarks-title {
            color: $theme-color;
            font-weight: bold;
            line-height: 20px;
        }
        .remarks-content {
            display: flex;
            .textarea {
                width: 1120px;
            }
            .btn {
                @include btnStyle;
                margin-left: 20px;
            }
        }
    }

    .avatar-uploader .el-upload {
            border: 1px dashed #d9d9d9;
            border-radius: 6px;
            cursor: pointer;
            position: relative;
            overflow: hidden;
        }

        .avatar-uploader .el-upload:hover {
            border-color: #409eff;
        }

        .avatar-uploader-icon {
            font-size: 28px;
            color: #8c939d;
            width: 150px;
            height: 150px;
            line-height: 150px;
            text-align: center;
        }

        .avatar {
            width: 150px;
            height: 150px;
            display: block;
        }
}
</style>
