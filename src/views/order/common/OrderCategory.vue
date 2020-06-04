<template>
  <div class="order-category">
    <div class="order-category-item" v-for="item of category" :key="item.bgcolor">
      <div
        class="order-category-item-title"
        :style="{backgroundColor: item.bgcolor,width: item.width + 'px'}"
      >{{ item.title }}</div>
      <div class="order-category-item-content">
        <div class="content-item" v-for="items in item.items" :key="items.name">
          <div class="content-item-key">{{ items.name + item.title }}：</div>
          <a class="content-item-value">{{ items.num }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["category"]
};
</script>

<style lang='scss' scoped>
.order-category {
  position: relative;
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  &-item {
    &-title {
      height: 20px;
      line-height: 20px;
      padding: 0 5px;
      font-weight: bold;
      color: #fff;
    }
    &-content {
      padding: 5px 3px;
      background-color: #eaeaea;
      .content-item {
        display: flex;
        justify-content: space-between;
        line-height: 22px;
        &-value {
          text-align: right;
          color: #0000ff;
          cursor: pointer;
          text-decoration: underline;
        }
      }
    }
  }
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    z-index: -1;
    width: 100%;
    height: calc(100% - 20px);
    background-color: #eaeaea;
  }
}
</style>
