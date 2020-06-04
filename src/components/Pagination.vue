<template>
  <el-pagination
    class="custom-pagination"
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
    :current-page="currentPage"
    :page-sizes="pageSizes"
    :page-size="pageSize"
    :layout="layout"
    :total="total"
    :next-text="next"
    :prev-text="prev"
    v-if="total"
    popper-class="custom-pagination"
  ></el-pagination>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    currentPage: {
      type: Number,
      default: 1
    },
    pageSizes: {
      type: Array,
      default: () => [5, 10, 15, 20, 30]
    },
    pageSize: {
      type: Number,
      default: 1
    },
    total: {
      type: Number,
      required: true
    },
    layout: {
      type: String,
      default: "total, sizes, prev, pager, next, jumper"
    },
    prev: {
      type: String,
      default: "上一页"
    },
    next: {
      type: String,
      default: "下一页"
    }
  },
  data() {
    return {
      val: 1
    };
  },
  methods: {
    handleSizeChange(size) {
      this.$emit("sizeChange", size);
    },
    handleCurrentChange(current) {
      this.$emit("currentChange", current);
      this.val = current;
      console.log(this.val);
    }
  }
};
</script>

<style lang='scss'>
.custom-pagination {
  text-align: right;

  .el-pager li:hover,
  .el-pager li.active,
  button:hover,
  .el-select-dropdown__item.selected {
    color: $theme-color;
  }
  .el-input.is-active .el-input__inner,
  .el-input__inner:focus,
  .el-pagination__sizes .el-input .el-input__inner:hover,
  .el-select .el-input.is-focus .el-input__inner {
    border-color: $theme-color;
  }
}
</style>
