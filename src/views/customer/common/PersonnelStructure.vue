<template>
    <div class="structure">
        <div class="row" :style="{marginTop: idx > 0 ? '-1px' : '0'}" v-for="(term, key, idx) in peopleList" :key="term.name">
            <div class="position">{{ term.name }}</div>
            <div class="people-list">
                <div class="list-item" :style="{borderTop: index > 8 ? 'none' : null}" v-for="(item, index) of term.list" :key="index">
                    <el-avatar :size="58" :src="item.img"></el-avatar>
                    <el-tooltip :content="item.name" placement="top" effect="light">
                        <span class="name">{{ item.name }}</span>
                    </el-tooltip>
                    <span class="post">{{ item.position }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        let female =  'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3974834430,2578081919&fm=26&gp=0.jpg'
        let male = 'http://img1.imgtn.bdimg.com/it/u=1897589137,2261370756&fm=26&gp=0.jpg'
        let other = 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
        return {
            peopleList: {
                chief: {
                    name: "总监",
                    list: [
                        {
                            img: female,
                            name: "Evens Petersonasdasd",
                            position: "亚洲采购总监"
                        },
                        {
                            img: male,
                            name: "Michael Harden",
                            position: "亚洲采购总监"
                        },
                        {
                            img: other,
                            name: "Rikinski Asturbrosiv",
                            position: "亚洲采购总监"
                        }
                    ]
                },
                manager: {
                    name: "经理",
                    list: [
                        {
                            img: male,
                            name: "Michael Harden",
                            position: "亚洲采购总监"
                        },
                        {
                            img: female,
                            name: "Evens Peterson",
                            position: "亚洲采购总监"
                        }
                    ]
                },
                seniorPurchase: {
                    name: "高级采购",
                    list: [
                        {
                            img: male,
                            name: "Michael Harden",
                            position: "亚洲采购总监"
                        },
                        {
                            img: female,
                            name: "Evens Peterson",
                            position: "亚洲采购总监"
                        },
                        {
                            img: other,
                            name: "Rikinski Asturbrosiv",
                            position: "亚洲采购总监"
                        },
                        {
                            img: male,
                            name: "Michael Harden",
                            position: "亚洲采购总监"
                        },
                        {
                            img: male,
                            name: "Michael Harden",
                            position: "亚洲采购总监"
                        }
                    ]
                },
                purchase: {
                    name: "采购员",
                    list: [
                        {
                            img: female,
                            name: "Evens Peterson",
                            position: "亚洲采购总监"
                        },
                        {
                            img: male,
                            name: "Michael Harden",
                            position: "亚洲采购总监"
                        },
                        {
                            img: other,
                            name: "Rikinski Asturbrosiv",
                            position: "亚洲采购总监"
                        },
                        {
                            img: male,
                            name: "Michael Harden",
                            position: "亚洲采购总监"
                        },
                        {
                            img: male,
                            name: "Michael Harden",
                            position: "亚洲采购总监"
                        },
                        {
                            img: male,
                            name: "Michael Harden",
                            position: "亚洲采购总监"
                        },
                        {
                            img: female,
                            name: "Evens Peterson",
                            position: "亚洲采购总监"
                        },
                        {
                            img: female,
                            name: "Evens Peterson",
                            position: "亚洲采购总监"
                        },
                        {
                            img: female,
                            name: "Evens Peterson",
                            position: "亚洲采购总监"
                        },
                        {
                            img: male,
                            name: "Michael Harden",
                            position: "亚洲采购总监"
                        },
                        {
                            img: other,
                            name: "Rikinski Asturbrosiv",
                            position: "亚洲采购总监"
                        },
                        {
                            img: male,
                            name: "Michael Harden",
                            position: "亚洲采购总监"
                        },
                        {
                            img: male,
                            name: "Michael Harden",
                            position: "亚洲采购总监"
                        },
                        {
                            img: male,
                            name: "Michael Harden",
                            position: "亚洲采购总监"
                        }
                    ]
                },
                finance: {
                    name: "财务",
                    list: [
                        {
                            img: male,
                            name: "Michael Harden",
                            position: "亚洲采购总监"
                        },
                        {
                            img: female,
                            name: "Evens Peterson",
                            position: "亚洲采购总监"
                        },
                        {
                            img: other,
                            name: "Rikinski Asturbrosiv",
                            position: "亚洲采购总监"
                        }
                    ]
                },
                test: {
                    name: "质检员",
                    list: [
                        {
                            img: female,
                            name: "Evens Peterson",
                            position: "亚洲采购总监"
                        },
                        {
                            img: female,
                            name: "Michael Harden",
                            position: "亚洲采购总监"
                        }
                    ]
                }
            }
        };
    }
};
</script>

<style lang='scss' scoped>
.structure {
    .row {
        display: flex;
        .position {
            flex-shrink: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 105px;
            font-size: 12px;
            color: $theme-color;
            font-weight: bold;
            border: 1px solid #777;
            box-sizing: border-box;
        }
        .people-list {
            display: flex;
            flex-wrap: wrap;
            .list-item {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-between;
                padding: 3px;
                width: 112px;
                height: 100px;
                border: 1px solid #777;
                border-left: none;
                box-sizing: border-box;
                overflow: hidden;
                .name {
                    display: block;
                    width: 100%;
                    text-align: center;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
                .post {
                    color: $theme-color;
                    font-weight: bold;
                }
            }
        }
    }
}
</style>
