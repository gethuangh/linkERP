<template>
  <div>
    <div ref="stack" style="width:600px;height:220px;"></div>
  </div>
</template>

<script>
export default {
  name: "Home",
  //   props: ["stack"],
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
  props: ["data"],
  methods: {
    SetEchart() {
      console.log(this.data);
      let that = this;
      // 基于准备好的dom，初始化echarts实例
      let myChart = that.$echarts.init(that.$refs.stack);
      // 绘制图表
      var option = (option = {
        title: {
          text: ""
        },
        tooltip: {
          trigger: "axis"
        },

        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: this.data.date
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            name: this.data.name1,
            type: "line",
            stack: "总量",
            data: this.data.enquiryItemNum
          },
          {
            name: this.data.name2,
            type: "line",
            stack: "总量",
            data: this.data.offerBuyerItemNum
          }
        ]
      });
      myChart.setOption(option);
    }
  }
};
</script>
