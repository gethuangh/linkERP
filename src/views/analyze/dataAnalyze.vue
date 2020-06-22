<template>
  <div>
    <div class="data-box">
      <!-- 头部 -->
      <div class="data-title">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>数据分析结果</span>
          </div>
          <div class="text-flex flex">
            <div class="text-left flex">
              <div class="text-name">分析内容:</div>
              <span class="text-value">全部</span>
            </div>
            <div class="text-right flex">
              <div class="text-name">分析日期:</div>
              <span class="text-value">#</span>
            </div>
          </div>

          <div class="text-flex flex">
            <div class="text-left flex">
              <div class="text-name">时间段:</div>
              <span class="text-value">本年度</span>
            </div>
            <div class="text-right flex">
              <div class="text-name">分析人:</div>
              <span class="text-value">MICHAEL JIAO</span>
            </div>
          </div>

          <div class="text-flex flex">
            <div class="text-left flex">
              <div class="text-name">分析结果货币：</div>
              <span class="text-value">人民币</span>
            </div>
            <!-- <div class="text-right flex">
                   <div class="text-name">分析日期:</div>
                  <span class="text-value">全部</span>
            </div>-->
          </div>
        </el-card>
      </div>
      <!-- 分析内容 -->
      <div class="content-box">
        <div class="tree-title">分析内容</div>
        <div class="data-tree" style="width: 480px;">
          <tree
            :cls="kh.main"
            :name="kh.name"
            :titile="kh.titile"
            :data="kh.data"
            :color="kh.color"
            :num="kh.num"
          ></tree>
        </div>

        <div class="flex">
          <!-- 一个表 -->
          <div class="data-tree" style="width: 480px;">
            <tree
              :cls="kh1.main"
              :name="kh1.name"
              :titile="kh1.titile"
              :data="kh1.data"
              :color="kh1.color"
              :num="kh1.num"
            ></tree>
          </div>
          <!-- 一个表 -->
          <div class="data-tree" style="width: 480px;">
            <tree
              :cls="kh2.main"
              :name="kh2.name"
              :titile="kh2.titile"
              :data="kh2.data"
              :color="kh2.color"
              :num="kh2.num"
            ></tree>
          </div>
        </div>

        <div class="flex">
          <!-- 一个表 -->
          <div class="data-tree" style="width: 480px;">
            <tree
              :cls="kh3.main"
              :name="kh3.name"
              :titile="kh3.titile"
              :data="kh3.data"
              :color="kh3.color"
              :num="kh3.num"
            ></tree>
          </div>
          <!-- 一个表 -->
          <div class="data-tree" style="width: 480px;">
            <tree
              :cls="kh4.main"
              :name="kh4.name"
              :titile="kh4.titile"
              :data="kh4.data"
              :color="kh4.color"
              :num="kh4.num"
            ></tree>
          </div>
        </div>
      </div>

      <!-- 比例  采购报价/询价 -->
      <div class="content-box">
        <div class="tree-title">
          比例：采购报价/客户询价
          <span style="margin-left:350px;">比例：销售报价/销售订单</span>
        </div>
        <div class="flex">
          <pie :purc="purc"></pie>
          <pie :purc="purc1"></pie>
        </div>
      </div>

      <!-- 部门 -->
      <div class="content-box">
        <div class="tree-title">部门</div>
        <div class>
          <div class="section-box">
            <p>区域</p>
            <div class="section-text">
              <span>LINK APAC</span>
              <span>1000万</span>
              <span>比例 30%</span>
            </div>
            <div class="section-text">
              <span>LINK APAC</span>
              <span>1000万</span>
              <span>比例 30%</span>
            </div>
            <div class="section-text">
              <span>LINK APAC</span>
              <span>1000万</span>
              <span>比例 30%</span>
            </div>
          </div>
          <div class="ds-box">
            <ds :source="source"></ds>
          </div>
        </div>
      </div>

      <!-- LINK -->
      <div class="link-box">
        <div class="content-box">
          <div class="tree-title">LINK JAPAN</div>
          <div class="flex">
            <div class="purc-title">比例：采购报价 / 客户询价</div>
            <div class="purc-title2">比例：销售报价 / 销售订单</div>
            <pie :purc="purc2"></pie>
            <pie :purc="purc3"></pie>
          </div>
          <!-- 分割 -->
          <div class="link-title">LINK EUROPE</div>
          <div class="flex">
            <div class="purc-title3">比例：采购报价 / 客户询价</div>
            <div class="purc-title4">比例：销售报价 / 销售订单</div>
            <pie :purc="purc4"></pie>
            <pie :purc="purc5"></pie>
          </div>
        </div>
      </div>

      <!-- 甜甜圈 -->
      <div class="link-box">
        <div class="content-box">
          <!-- 销售部 -->
          <div class="link-titles">销售部</div>
          <!-- 第一部分 -->
          <div class="doughnut-box flex">
            <div class="doughnut-cont">
              <p class="cont-title">客户询价</p>
              <div class="cont-text">
                <p>国际贸易部： xxxx条</p>
                <p>终端业务部： xxxx条</p>
                <p>市场销售部： xxxx条</p>
              </div>
            </div>
            <doughnut :doughnut="doughnut"></doughnut>
            <div style="display:black;">
              <div class="flex">
                <span>国际贸易部：</span>
                <div class="doughnut-num">
                  <el-progress
                    status="success"
                    :text-inside="true"
                    :stroke-width="20"
                    :percentage="70"
                  ></el-progress>
                </div>
              </div>
              <div class="flex">
                <span>终端业务部：</span>
                <div class="doughnut-num">
                  <el-progress :text-inside="true" :stroke-width="20" :percentage="70"></el-progress>
                </div>
              </div>
              <div class="flex">
                <span>国内业务部：</span>
                <div class="doughnut-num">
                  <el-progress :color="hs" :text-inside="true" :stroke-width="20" :percentage="70"></el-progress>
                </div>
              </div>
            </div>
          </div>
          <!-- 第二部分 -->
          <div class="doughnut-box flex">
            <div class="doughnut-cont">
              <p class="cont-title">销售报价</p>
              <div class="cont-text">
                <p>国际贸易部： xxxx条</p>
                <p>终端业务部： xxxx条</p>
                <p>市场销售部： xxxx条</p>
              </div>
            </div>
            <doughnut :doughnut="doughnut"></doughnut>
            <div style="display:black;">
              <div class="flex">
                <span>国际贸易部：</span>
                <div class="doughnut-num">
                  <el-progress
                    status="success"
                    :text-inside="true"
                    :stroke-width="20"
                    :percentage="70"
                  ></el-progress>
                </div>
              </div>
              <div class="flex">
                <span>终端业务部：</span>
                <div class="doughnut-num">
                  <el-progress :text-inside="true" :stroke-width="20" :percentage="70"></el-progress>
                </div>
              </div>
              <div class="flex">
                <span>国内业务部：</span>
                <div class="doughnut-num">
                  <el-progress :color="hs" :text-inside="true" :stroke-width="20" :percentage="70"></el-progress>
                </div>
              </div>
            </div>

            <div class="doughnut-cont">
              <p class="cont-title">销售订单</p>
              <div class="cont-text">
                <p>国际贸易部： xxxx条</p>
                <p>终端业务部： xxxx条</p>
                <p>市场销售部： xxxx条</p>
              </div>
            </div>
            <doughnut :doughnut="doughnut"></doughnut>
            <div style="display:black;">
              <div class="flex">
                <span>国际贸易部：</span>
                <div class="doughnut-num">
                  <el-progress
                    status="success"
                    :text-inside="true"
                    :stroke-width="20"
                    :percentage="70"
                  ></el-progress>
                </div>
              </div>
              <div class="flex">
                <span>终端业务部：</span>
                <div class="doughnut-num">
                  <el-progress :text-inside="true" :stroke-width="20" :percentage="70"></el-progress>
                </div>
              </div>
              <div class="flex">
                <span>国内业务部：</span>
                <div class="doughnut-num">
                  <el-progress :color="hs" :text-inside="true" :stroke-width="20" :percentage="70"></el-progress>
                </div>
              </div>
            </div>
          </div>

          <!-- 采购部 -->
          <div class="link-titles">采购部</div>
          <!-- 第二部分 -->
          <div class="doughnut-box flex">
            <div class="doughnut-cont">
              <p class="cont-title">采购报价</p>
              <div class="cont-text">
                <p>国际贸易部： xxxx条</p>
                <p>终端业务部： xxxx条</p>
                <p>市场销售部： xxxx条</p>
              </div>
            </div>
            <doughnut :doughnut="doughnut"></doughnut>
            <div style="display:black;">
              <div class="flex">
                <span>国际贸易部：</span>
                <div class="doughnut-num">
                  <el-progress
                    status="success"
                    :text-inside="true"
                    :stroke-width="20"
                    :percentage="70"
                  ></el-progress>
                </div>
              </div>
              <div class="flex">
                <span>终端业务部：</span>
                <div class="doughnut-num">
                  <el-progress :text-inside="true" :stroke-width="20" :percentage="70"></el-progress>
                </div>
              </div>
              <div class="flex">
                <span>国内业务部：</span>
                <div class="doughnut-num">
                  <el-progress :color="hs" :text-inside="true" :stroke-width="20" :percentage="70"></el-progress>
                </div>
              </div>
            </div>

            <div class="doughnut-cont">
              <p class="cont-title">采购订单</p>
              <div class="cont-text">
                <p>国际贸易部： xxxx条</p>
                <p>终端业务部： xxxx条</p>
                <p>市场销售部： xxxx条</p>
              </div>
            </div>
            <doughnut :doughnut="doughnut"></doughnut>
            <div style="display:black;">
              <div class="flex">
                <span>国际贸易部：</span>
                <div class="doughnut-num">
                  <el-progress
                    status="success"
                    :text-inside="true"
                    :stroke-width="20"
                    :percentage="70"
                  ></el-progress>
                </div>
              </div>
              <div class="flex">
                <span>终端业务部：</span>
                <div class="doughnut-num">
                  <el-progress :text-inside="true" :stroke-width="20" :percentage="70"></el-progress>
                </div>
              </div>
              <div class="flex">
                <span>国内业务部：</span>
                <div class="doughnut-num">
                  <el-progress :color="hs" :text-inside="true" :stroke-width="20" :percentage="70"></el-progress>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 职员 -->
      <div class="link-box">
        <div class="content-box">
          <!-- 销售部 -->
          <div class="link-titles">职员</div>
          <!-- 第一部分 -->
          <div class="doughnut-box flex">
            <div class="doughnut-cont">
              <p class="cont-titles">销售部</p>
              <!-- <div class="cont-text">
                <p>国际贸易部： xxxx条</p>
                <p>国际贸易部： xxxx条</p>
                <p>国际贸易部： xxxx条</p>
              </div>-->
            </div>
            <doughnut :doughnut="doughnut"></doughnut>
            <div style="display:black;">
              <div class="flex">
                <span>国际贸易部：</span>
                <div class="doughnut-num">
                  <el-progress
                    status="success"
                    :text-inside="true"
                    :stroke-width="20"
                    :percentage="70"
                  ></el-progress>
                </div>
              </div>
              <div class="flex">
                <span>终端业务部：</span>
                <div class="doughnut-num">
                  <el-progress :text-inside="true" :stroke-width="20" :percentage="70"></el-progress>
                </div>
              </div>
              <div class="flex">
                <span>国内业务部：</span>
                <div class="doughnut-num">
                  <el-progress :color="hs" :text-inside="true" :stroke-width="20" :percentage="70"></el-progress>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import tree from "./component/tree";
import pie from "./component/pie";
import ds from "./component/ds";
import doughnut from "./component/doughnut";
export default {
  data() {
    return {
      hs: "#909399",
      kh: {
        main: "main",
        name: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        titile: "客户询价    ",
        num: "12000条",
        data: [10, 52, 200, 334, 390, 330, 220],
        color: ["rgb(153,204,0)"]
      },
      kh1: {
        main: "main",
        name: ["snb", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        titile: "采购报价    ",
        num: "1560010条",
        data: [10, 52, 200, 334, 390, 330, 220],
        color: ["rgb(153,204,0)"]
      },
      kh2: {
        main: "main",
        name: ["snb", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        titile: "采购订单    ",
        num: "1560010条",
        data: [10, 52, 200, 334, 390, 330, 220],
        color: ["rgb(153,204,0)"]
      },
      kh3: {
        main: "main",
        name: ["snb", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        titile: "销售报价    ",
        num: "1560010条",
        data: [10, 52, 200, 334, 390, 330, 220],
        color: ["rgb(153,204,0)"]
      },
      kh4: {
        main: "main",
        name: ["snb", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        titile: "销售订单    ",
        num: "1560010条",
        data: [10, 52, 200, 334, 390, 330, 220],
        color: ["rgb(153,204,0)"]
      },
      // 采购数据
      purc: {
        data: ["视频广告", "搜索引擎"],
        title: "采购询价比(条目数)",
        datas: [
          { value: 335, name: "视频广告" },
          { value: 1548, name: "搜索引擎" }
        ]
      },
      // 采购数据
      purc1: {
        data: ["视频广告", "搜索引擎"],
        title: "销售订单(报价比)",
        datas: [
          { value: 335, name: "视频广告" },
          { value: 1548, name: "搜索引擎" }
        ]
      },
      purc2: {
        data: ["视频广告", "搜索引擎"],
        title: "销售订单(报价比)",
        datas: [
          { value: 335, name: "视频广告" },
          { value: 1548, name: "搜索引擎" }
        ]
      },
      purc3: {
        data: ["视频广告", "搜索引擎"],
        title: "销售订单/报价比（条目数）",
        datas: [
          { value: 335, name: "视频广告" },
          { value: 1548, name: "搜索引擎" }
        ]
      },
      purc4: {
        data: ["视频广告", "搜索引擎"],
        title: "采购询报比（条目数）",
        datas: [
          { value: 335, name: "视频广告" },
          { value: 1548, name: "搜索引擎" }
        ]
      },
      purc5: {
        data: ["视频广告", "搜索引擎"],
        title: "销售订单/报价比（条目数）",
        datas: [
          { value: 335, name: "视频广告" },
          { value: 1548, name: "搜索引擎" }
        ]
      },
      // 部门
      source: [
        ["product", "技术", "销售", "研发"],
        ["一月", 4113.3, 8115.8, 9311.7],
        ["二月", 8113.1, 7113.4, 5115.1],
        ["三月", 8116.4, 6115.2, 8112.5],
        ["四月", 7112.4, 5113.9, 3911.1]
      ],
      // 甜甜圈
      doughnut: {
        text: "客户询价比例",
        data: [
          { value: 335, name: "直接访问" },
          { value: 310, name: "邮件营销" },
          { value: 234, name: "联盟广告" },
          { value: 135, name: "视频广告" },
          { value: 1548, name: "搜索引擎" }
        ]
      },
      data: ""
    };
  },
  components: {
    tree,
    pie,
    ds,
    doughnut
  },
  created() {
    // 获取浏览器数据
    this.data = JSON.parse(sessionStorage.getItem("data"));
    console.log(this.data);
  },
  mounted() {}
};
</script>

<style scoped src="./dataAnalyze.css"></style>