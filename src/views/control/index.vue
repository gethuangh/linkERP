<template>
  <div class="control">
    <div class="time-now">
      2019年10月23日
      <span>星期三</span>
    </div>

    <div style="display:flex">
      <div class="left">
        <!-- 待处理事项 -->
        <div>
          <div class="title">
            <span>待处理事项</span>
          </div>
          <div class="content">
            <div class="backg">
              <div class="to-do-num">
                <div>
                  <p>报价</p>
                  <b>3</b>
                  <el-button type="success" size="mini" style="color:#fff">
                    <router-link to="/quote/index">去处理</router-link>
                  </el-button>
                </div>
                <div>
                  <p>待发货</p>
                  <b>1</b>
                  <el-button type="success" size="mini">
                    <router-link to="/logistic/index">去处理</router-link>
                  </el-button>
                </div>
                <div>
                  <p>待审订单</p>
                  <b>12</b>
                  <el-button type="success" size="mini">
                    <router-link to="/order/index">去处理</router-link>
                  </el-button>
                </div>
                <div>
                  <p>待收款</p>
                  <b>5</b>
                  <el-button type="success" size="mini">
                    <router-link to="/finance/receivables">去处理</router-link>
                  </el-button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 周计划 -->
        <div>
          <div class="title">
            <span>周计划</span>
          </div>
          <div class="content">
            <div class="week">
              <div>
                <p>周一</p>
                <span>10</span>
              </div>
              <div>
                <p>周二</p>
                <span>7</span>
              </div>
              <div class="today">
                <p>周三</p>
                <span>11</span>
              </div>
              <div class="today-plus">
                <p>周四</p>
                <span>12</span>
              </div>
              <div class="today-plus">
                <p>周五</p>
                <span>9</span>
              </div>
              <div class="today-plus">
                <p>周六</p>
                <span>1</span>
              </div>
              <div>
                <p>周日</p>
                <span>0</span>
              </div>
            </div>

            <div class="to-do-plan backg">
              <div class="plan-title">
                计划： 2019年10月23日
                <span>周三</span>
              </div>
              <div class="plan-list">
                <!-- title -->
                <div class="plan-list-item">
                  <div class="time">时间</div>
                  <div class="type">事项</div>
                  <div class="detail">明细</div>
                  <div class="contact">联系人</div>
                  <div class="result">结果</div>
                  <div class="plus"></div>
                </div>
                <!-- cont -->
                <div class="plan-list-item">
                  <div class="time">上午 9:00 - 10:00</div>
                  <div class="this-time">
                    <div class="type">电话营销</div>
                    <div class="detail link-to">深圳鸿海电子有限公司珠海分公司</div>
                    <div class="contact link-to">张先生</div>
                    <div class="result">查看/收起</div>
                    <div class="plus">
                      <i class="el-icon-plus"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="right">
        <!-- 本月目标完成度 -->
        <div>
          <div class="title">
            <span>本月目标完成度</span>
          </div>
          <div class="content"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import bus from "@/assets/Bus";
export default {
  name: "",
  components: {},
  data() {
    return {};
  },
  methods: {},
  created() {
    //bus.on('xxx',() => { })
  }
};
</script>

<style lang='scss' sclope>
.control {
  min-width: 1650px;

  .time-now {
    width: 100%;
    text-align: right;
    color: $theme-color;
    font-size: 16px;
    height: 30px;
    line-height: 30px;

    span {
      padding: 0 50px 0 20px;
    }
  }

  .left {
    width: 680px;
    padding-right: 50px;

    .to-do-num {
      display: flex;
      flex-wrap: wrap;
      padding-top: 15px;

      > div {
        width: 50%;
        display: flex;
        align-items: center;
        height: 40px;
        line-height: 50px;

        p {
          width: 85px;
          padding-left: 5px;
          font-size: 14px;
        }

        b {
          display: block;
          width: 55px;
          color: $theme-color;
        }

        .el-button--mini {
          font-weight: 700;
          padding: 5px 8px;
          background: #99cc00;
          border-color: #99cc00;
        }
      }
    }

    .week {
      display: flex;
      justify-content: space-between;
      padding-top: 20px;

      > div {
        width: 75px;
        height: 70px;
        background: #d7d7d7;
        color: #fff;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        p {
          padding-bottom: 20px;
        }
      }

      .today {
        background: #99cc00;
        color: #000;
      }

      .today-plus {
        background: #41c363;
      }
    }

    .to-do-plan {
      width: 100%;
      box-sizing: border-box;
      padding: 10px;
      margin-top: 20px;

      .plan-title {
        font-weight: 700;
        font-size: 14px;
        padding-bottom: 20px;

        span {
          padding-left: 30px;
        }
      }

      .plan-list-item {
        display: flex;
        font-size: 13px;
        height: 25px;
        line-height: 25px;

        .link-to {
          color: $theme-color;
          text-decoration: underline;
        }
        .link-to:hover {
          cursor: pointer;
        }

        .el-icon-plus {
          font-weight: 700;
          color: $theme-color;
        }

        .time {
          width: 135px;
        }
        .this-time {
          width: calc(100% - 135px);
          display: flex;
        }
        .type {
          width: 100px;
        }
        .detail {
          width: 215px;
        }
        .contact {
          width: 70px;
        }
        .result {
          width: 75px;
        }
      }
    }
  }

  .right {
    width: 650px;
  }

  .title {
    font-size: 15px;
    font-weight: 700;
    border-bottom: 1px solid $theme-color;

    span {
      padding: 0 5px;
    }
  }

  .content {
    margin-bottom: 25px;

    .backg {
      background: #f5f5f5;
    }
  }
}
.to-do-num /deep/ .el-button span a {
  color: #fff;
}
</style>