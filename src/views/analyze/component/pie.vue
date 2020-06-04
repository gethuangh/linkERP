<template>
  <div>
    <div ref="pie" style="width:460px;height:220px;"></div>
  </div>
</template>

<script>
export default {
  name: "Home",
  props: ["purc"],
  created() {},
  watch: {
    purc() {
      this.purc = this.purc;
    }
  },
  mounted() {
    let that = this;
    that.$nextTick(() => {
      that.SetEchart();
    });
  },
  data() {
    return {};
  },
  methods: {
    SetEchart() {
      let that = this;
      // 基于准备好的dom，初始化echarts实例
      let myChart = that.$echarts.init(that.$refs.pie);
      // 绘制图表
      var option = {
        //提示框组件,鼠标移动上去显示的提示内容
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)" //模板变量有 {a}、{b}、{c}、{d}，分别表示系列名，数据名，数据值，百分比。
        },
        //图例
        legend: {
          //图例垂直排列
          orient: "vertical",
          left: "72%",
          top: "40%",
          //data中的名字要与series-data中的列名对应，方可点击操控
          data: that.purc.data,
          formatter(name) {
            var data = that.purc.datas;
            for (var i = 0; i < data.length; i++) {
              if (data[i].name == name) {
                return name + data[i].value + "条";
              }
            }
          }
        },
        title: {
          text: that.purc.title,
          x: "center",
          y: "90%",
          textStyle: {
            //文字颜色
            // color: "#ccc",
            //字体风格,'normal','italic','oblique'
            // fontStyle: "normal",
            //字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
            fontWeight: "400",
            //字体系列
            // fontFamily: "sans-serif",
            //字体大小
            fontSize: 16
          }
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            //饼状图
            // radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            //标签
            label: {
              normal: {
                show: true,
                position: "inside",
                formatter: "{d}%", //模板变量有 {a}、{b}、{c}、{d}，分别表示系列名，数据名，数据值，百分比。{d}数据会根据value值计算百分比
                left: "80%",

                textStyle: {
                  align: "center",
                  baseline: "middle",
                  fontFamily: "微软雅黑",
                  fontSize: 15,
                  fontWeight: "bolder"
                }
              }
            },
            itemStyle: {
              normal: {
                color: function(params) {
                  //自定义颜色
                  var colorList = [
                    "rgb(65,195,99)",
                    "rgb(215,215,215)"
                    // "#FFFF00",
                    // "#FF8C00",
                    // "#FF0000",
                    // "#FE8463"
                  ];
                  return colorList[params.dataIndex];
                }
              }
            },
            data: that.purc.datas
          }
        ]
      };
      myChart.setOption(option);
    }
  }
};
</script>
