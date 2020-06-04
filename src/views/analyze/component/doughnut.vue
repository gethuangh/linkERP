<template>
  <div>
    <div ref="doughnut" style="width:200px;height:220px;"></div>
  </div>
</template>

<script>
export default {
  name: "Home",
  props: ["doughnut"],
  created() {},
  // watch: {
  //   doughnut: function(val, index) {
  //     this.doughnut = val;
  //     that.SetEchart();
  //   },
  //   deep: true
  // },
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
      let myChart = that.$echarts.init(that.$refs.doughnut);
      // 绘制图表
      var option = {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        graphic: [
          {
            //环形图中间添加文字
            type: "text", //通过不同top值可以设置上下显示
            left: "center",
            top: "45%",
            style: {
              text: this.doughnut.text,
              textAlign: "center",
              fill: "blue", //文字的颜色
              width: 160,
              height: 160,
              fontSize: 16,
              fontFamily: "Microsoft YaHei"
            }
          }
        ],
        series: [
          {
            name: "",
            type: "pie",
            radius: ["50%", "70%"],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: "center"
              },
              emphasis: {
                show: false,
                textStyle: {
                  fontSize: "30",
                  fontWeight: "bold"
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: this.doughnut.data
          }
        ],
        color: [
          "rgb(65,195,99)",
          "rgb(44,171,227)",
          "rgb(76,86,103)",
          "rgb(255,118,118)",
          "rgb(255,195,109)",
          "rgb(219,219,219)"
        ]
      };
      myChart.setOption(option);
    }
  }
};
</script>
