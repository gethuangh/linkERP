<template>
  <div class="operation-group">
    <div class="operation-group-item" @click="iconwenjian">
      <i class="iconfont iconwenjian"></i>
      <span>新增</span>
    </div>
    <div class="operation-group-item">
      <i class="iconfont iconcopyfile"></i>
      <span>复制</span>
    </div>
    <div class="operation-group-item">
      <i class="iconfont iconbaocun1"></i>
      <span>保存</span>
    </div>
    <div class="operation-group-item">
      <i class="iconfont iconxiugaimima"></i>
      <span>修改</span>
    </div>
    <div class="operation-group-item">
      <i class="iconfont"></i>
      <span>审核</span>
    </div>
    <div class="operation-group-item">
      <i class="iconfont"></i>
      <span>反审</span>
    </div>
    <div class="operation-group-item">
      <i class="iconfont iconcha"></i>
      <span>删除</span>
    </div>
    <div class="operation-group-item">
      <i class="iconfont"></i>
      <span>导出</span>
    </div>
    <div class="operation-group-item">
      <i class="iconfont icondayin"></i>
      <span>打印</span>
    </div>
    <div class="operation-group-item">
      <i class="iconfont"></i>
      <span>预览</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    iconwenjian() {
      this.$emit("iconwenjian");
    }
  }
};
</script>

<style lang='scss' scoped>
.operation-group {
  display: flex;
  color: #000;
  &-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 30px;
    cursor: pointer;
    user-select: none;
    .iconfont {
      width: 35px;
      height: 35px;
      line-height: 35px;
      text-align: center;
      font-size: 24px;
    }
    .iconcopyfile {
      font-size: 26px;
    }
    .iconcha {
      font-size: 18px;
    }
    .icondayin {
      font-size: 20px;
    }
  }
}
</style>
