<template>
  <div>
    <div ref="ds" style="width:100%;height:260px;"></div>
  </div>
</template>

<script>
export default {
  name: "Home",
  props: ["source"],
  created() {},
  watch: {
    source() {
      this.source = this.source;
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
      let myChart = that.$echarts.init(that.$refs.ds);
      // 绘制图表
      var option = {
        legend: {},
        tooltip: {},
        title: {
          text: "各区域近期业绩柱形图",
          x: "10%",
          y: "10%",
          textStyle: {
            //文字颜色
            // color: "#ccc",
            //字体风格,'normal','italic','oblique'
            // fontStyle: "normal",
            //字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
            fontWeight: "800"
            //字体系列
            // fontFamily: "sans-serif",
            //字体大小
            // fontSize: 18
          }
        },
        dataset: {
          source: this.source
        },
        xAxis: { type: "category" },
        yAxis: {},
        color: ["rgb(153,204,0)", "rgb(153,204,255)", "rgb(237,104,24)"],
        // Declare several bar series, each will be mapped
        // to a column of dataset.source by default.
        series: [{ type: "bar" }, { type: "bar" }, { type: "bar" }]
      };
      myChart.setOption(option);
    }
  }
};
</script>
