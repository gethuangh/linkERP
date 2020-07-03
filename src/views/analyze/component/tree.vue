<template>
  <div>
    <div :ref="cls" style="width:100%;height:220px;"></div>
  </div>
</template>

<script>
export default {
  name: "Home",
  props: ["cls", "name", "titile", "data", "color", "num"],
  created() {
    // this.cls = this.cls;
    // this.name = this.name;
    // this.titile = this.titile;
    // this.data = this.data;
    // this.color = this.color;
    // this.num = this.num;
  },
  watch: {
    cls() {
      this.cls = this.cls;
    },
    name() {
      this.name = this.name;
    },
    titile() {
      this.titile = this.titile;
    },
    data() {
      this.data = this.data;
    },
    color() {
      this.color = this.color;
    },
    num() {
      this.num = this.num;
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
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(this.$refs.main);
      // 绘制图表
      var option = {
        xAxis: {
          type: "category",
          data: this.name,

          splitLine: {
            show: false
          }
        },
        title: {
          text: this.titile + this.num + "条",
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
        yAxis: {
          type: "value",

          splitLine: {
            show: false
          }
        },
        color: ["red", "orange"],
        series: [
          {
            name: "直接访问",
            type: "bar",
            barWidth: "60%",
            data: this.data,
            color: this.color,
            itemStyle: {
              normal: {
                label: {
                  show: true, //开启显示
                  position: "top", //在上方显示
                  textStyle: {
                    //数值样式
                    color: "black",
                    fontSize: 14
                  }
                }
              }
            }
          }
        ]
      };
      myChart.setOption(option);
    }
  }
};
</script>
