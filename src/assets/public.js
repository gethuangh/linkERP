export default {
  install(Vue, options) {

    // 全局选择器
    Vue.prototype.setSelest = function (arr, selVal, tax) {
        arr.map((item, index) => {
          if (item["offerBuyerModels"]) {
            item["offerBuyerModels"].map((it, ind) => {
              it.grossMargin = selVal
              it.offerPrice = ((it.grossMargin / 100 * 10000 * it.price * 10000) / 10000 + it.price * 10000) / 10000 + ((it.grossMargin / 100 * 10000 * it.price * 10000) / 10000 + it.price * 10000) / 10000 * (tax / 100);
              it.offerPrice = it.offerPrice.toFixed(2)
            })
          }
        })
      },
      // 复制
      Vue.prototype.copy = function (value) {
        this.$copyText(
          `${value}`
        ).then(res => {
            this.$message({
              message: "复制成功",
              type: "success"
            });
          },
          err => {
            this.$message.error("复制失败");
          }
        );
      },
      // 清空
      Vue.prototype.delete = function (arrs) {
        arrs.forEach((item, index) => {
          this[item] = ''
        })
      }

    // 成功提示
    Vue.prototype.res = function (value) {
      this.$message({
        message: value,
        type: 'success'
      });
    }
    Vue.prototype.err = function (value) {
      this.$message.error(value);
    }
  }
}