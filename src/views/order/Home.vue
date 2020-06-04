<template>
  <div>
    <page-title title="订单主页>>>"></page-title>
    <order-category :category="category"></order-category>
    <order-query></order-query>

    <el-row style="margin-top: 40px">
      <el-button type="primary" @click="salesVisible = true">销售订单-新增</el-button>
      <el-button type="success" @click="purchaseVisible = true">采购订单-新增</el-button>
      <el-button type="warning" @click="warehouseVisbile = true">入库单-新增</el-button>
    </el-row>

    <el-dialog width="1600px" top="5vh" :visible.sync="salesVisible" title="销售订单-新增">
      <add-sales-order></add-sales-order>
    </el-dialog>
    <el-dialog width="1490px" top="5vh" :visible.sync="purchaseVisible" title="采购订单-新增">
      <add-purchase-order></add-purchase-order>
    </el-dialog>
    <el-dialog width="1260px" top="5vh" :visible.sync="warehouseVisbile" title="入库单-新增">
      <add-warehouse-order></add-warehouse-order>
    </el-dialog>
  </div>
</template>

<script>
import PageTitle from "./common/PageTitle.vue";
import OrderCategory from "./common/OrderCategory.vue";
import OrderQuery from "./common/OrderQuery.vue";
import AddSalesOrder from "./common/AddSalesOrder.vue";
import AddPurchaseOrder from "./common/AddPurchaseOrder.vue";
import AddWarehouseOrder from "./common/AddWarehouseOrder.vue";
import {
  countBuyerApplyStatus,
  countSalesStatus,
  countBuyerStatus,
  countGodownEntryStatus,
  countStockOutStatus,
  countInvoiceStatus,
  countShippingStatus
} from "../../api/order";
export default {
  data() {
    return {
      salesVisible: false,
      purchaseVisible: false,
      warehouseVisbile: false,
      category: [
        {
          title: "采购申请单",
          width: 150,
          bgcolor: "#333399",
          items: [
            {
              name: "未完成的",
              num: 0
            },
            {
              name: "未审核的",
              num: 0
            },
            {
              name: "未下单的",
              num: 0
            }
          ]
        },
        {
          title: "销售订单",
          width: 145,
          bgcolor: "#41C363",
          items: [
            {
              name: "未审核的",
              num: 0
            },
            {
              name: "未入库的",
              num: 0
            },
            {
              name: "未出库的",
              num: 0
            },
            {
              name: "未收款的",
              num: 0
            }
          ]
        },
        {
          title: "采购订单",
          width: 175,
          bgcolor: "#FF99CC",
          items: [
            {
              name: "未审核的",
              num: 0
            },
            {
              name: "未入库的",
              num: 0
            },
            {
              name: "未付款的",
              num: 0
            }
          ]
        },
        {
          title: "入库单",
          width: 180,
          bgcolor: "#3366FF",
          items: [
            {
              name: "未审核的",
              num: 0
            },
            {
              name: "未上传照片的",
              num: 0
            }
          ]
        },
        {
          title: "出库单",
          bgcolor: "#008080",
          width: 195,
          items: [
            {
              name: "未审核的",
              num: 0
            },
            // {
            //   name: "未发运的",
            //   num: 0
            // },
            {
              name: "未上传资料的",
              num: 0
            }
          ]
        },
        {
          title: "调拨单",
          bgcolor: "#777777",
          width: 135,
          items: [
            {
              name: "未审核的",
              num: 0
            },
            // {
            //   name: "未发运的",
            //   num: 0
            // }
            {
              name: "未入库的",
              num: 0
            }
          ]
        },
        {
          title: "发运单",
          bgcolor: "#99CC00",
          width: 165,
          items: [
            {
              name: "未审核的",
              num: 0
            },
            {
              name: "未发货的",
              num: 0
            }
          ]
        }
      ]
    };
  },
  components: {
    PageTitle,
    OrderCategory,
    OrderQuery,
    AddSalesOrder,
    AddPurchaseOrder,
    AddWarehouseOrder
  },
  created() {
    //   采购申请单
    countBuyerApplyStatus().then(res => {
      this.category[0].items[0].num = res.result.unfinished;
      this.category[0].items[1].num = res.result.unCheck;
      this.category[0].items[2].num = res.result.unPlaceOrder;
    });
    //   统计销售订单状态
    countSalesStatus().then(res => {
      this.category[1].items[0].num = res.result.unCheck;
      this.category[1].items[1].num = res.result.unPutIn;
      this.category[1].items[2].num = res.result.unStockOut;
      this.category[1].items[3].num = res.result.unReceipt;
    });
    //  采购订单
    countBuyerStatus().then(res => {
      this.category[2].items[0].num = res.result.unCheck;
      this.category[2].items[1].num = res.result.unPutIn;
      this.category[2].items[2].num = res.result.unPayment;
    });
    //  入库单
    countGodownEntryStatus().then(res => {
      this.category[3].items[0].num = res.result.unCheck;
      this.category[3].items[1].num = res.result.unUploadImg;
    });
    //  出库单
    countStockOutStatus().then(res => {
      this.category[4].items[0].num = res.result.unCheck;
      this.category[4].items[1].num = res.result.unUploadFile;
    });
    // 调拨单
    countInvoiceStatus().then(res => {
      this.category[5].items[0].num = res.result.unCheck;
      this.category[5].items[1].num = res.result.unPutIn;
    });
    // 发运单
    countShippingStatus().then(res => {
      this.category[6].items[0].num = res.result.unCheck;
      this.category[6].items[1].num = res.result.unSent;
    });
  }
};
</script>

<style lang='scss' scoped>
</style>
