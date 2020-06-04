<template>
  <div>
    <page-title title="订单查询结果>>>"></page-title>
    <order-category></order-category>
    <order-query></order-query>
    <h3>查询结果>>>>>></h3>
  </div>
</template>

<script>
import PageTitle from "./common/PageTitle.vue";
import OrderCategory from "./common/OrderCategory.vue";
import OrderQuery from "./common/OrderQuery.vue";
import SalesOrder from "./common/SalesOrder.vue";
import WarehouseReceipt from "./common/WarehouseReceipt.vue";
export default {
  data() {
    return {
      tableData: [
        {},
        {
          a: "2019-04-25",
          b: "Q2",
          c: "86300001",
          d: "115874",
          e: "PIC24FJ256DA210-I/PT",
          f: "MCP",
          g: 3280,
          h: "18+",
          i: 23.355,
          j: 76604.4,
          k: "13%",
          l: 3.4858,
          m: 11433.42,
          n: 1005,
          o: "10.35%",
          p: "AC02",
          q: "SZ ROBERT AUTO",
          r: "LINK APAC",
          s: "Michael",
          t: "2019-04-25",
          u: 0
        },
        {
          a: "2019-04-25",
          b: "Q2",
          c: "86300001",
          d: "115874",
          e: "PIC24FJ256DA210-I/PT",
          f: "MCP",
          g: 3280,
          h: "18+",
          i: 23.355,
          j: 76604.4,
          k: "13%",
          l: 3.4858,
          m: 11433.42,
          n: 1005,
          o: "10.35%",
          p: "AC02",
          q: "SZ ROBERT AUTO",
          r: "LINK APAC",
          s: "Michael",
          t: "2019-04-25",
          u: 0
        }
      ]
    };
  },
  components: {
    PageTitle,
    OrderCategory,
    OrderQuery,
    SalesOrder,
    WarehouseReceipt
  }
};
</script>

<style lang='scss' scoped>
h3 {
  margin-top: 60px;
  font-size: 12px;
  color: #ff0000;
  font-style: italic;
}
.spacing {
  margin-top: 40px;
}
</style>
