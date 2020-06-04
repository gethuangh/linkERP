<template>
  <div>
    <div ref="stack" style="width:600px;height:220px;"></div>
  </div>
</template>

<script>
export default {
  name: "Home",
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
      var option = {
        xAxis: {
          type: "category",
          data: this.data.date
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: this.data.dealTotal,
            type: "line"
          }
        ]
      };

      myChart.setOption(option);
    }
  }
};
</script>
