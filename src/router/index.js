import Vue from 'vue'
import VueRouter from 'vue-router'

import Layout from '@/components/Layout.vue'

import fault from '@/components/404.vue'

import controlMenu from '@/menu/controlMenu'
import productMenu from '@/menu/productMenu'
import stockMenu from '@/menu/stockMenu'
import customerMenu from '@/menu/customerMenu'
import logisticMenu from '@/menu/logisticMenu'
import orderMenu from '@/menu/orderMenu'
import supplierMenu from '@/menu/supplierMenu'
import enquiryMenu from '@/menu/enquiryMenu'
import quoteMenu from '@/menu/quoteMenu'
import analyzeMenu from '@/menu/analyzeMenu'
import financeMenu from '@/menu/financeMenu'
import login from '../views/login/login.vue'
Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'login',
    hidden: false,
    component: login,
    // component: Layout
  },
  // {
  //   name: "index",
  //   path: "/control/index",
  //   hidden: false,
  //   components: {
  //     default: () => import('@/views/control/index.vue'),
  //   }
  // },
  //工作台
  {
    path: '/index',
    redirect: '/index',
    name: '工作台',
    icon: 'icongongzuotai',
    hidden: false,
    component: Layout,
    children: [{
        path: '/index',
        name: 'index',
        meta: 'no',
        hidden: false,
        components: {
          default: () => import('@/views/control/index.vue'),
          nav: controlMenu
        }
      },
      {
        path: '/control/404',
        name: 'control404',
        meta: 'no',
        hidden: false,
        components: {
          default: fault,
          nav: controlMenu
        }
      }
    ]
  },
  //产品
  {
    path: '/product',
    redirect: '/product/index',
    name: '产品',
    icon: 'iconchanpin',
    hidden: false,
    component: Layout,
    children: [{
        path: '/product/index',
        name: '产品-主页',
        meta: 'no',
        hidden: false,
        components: {
          default: () => import('@/views/product/index.vue'),
          nav: productMenu
        }
      }, {
        path: '/product/search',
        name: '检索',
        meta: 'no',
        hidden: false,
        components: {
          default: () => import('@/views/product/search.vue'),
          nav: productMenu
        }
      }, {
        path: '/product/typeSearch',
        name: '型号-查看/编辑',
        meta: '型号',
        hidden: false,
        components: {
          default: () => import('@/views/product/typeSearch.vue'),
          nav: productMenu
        }
      }, {
        path: '/product/importExport',
        name: '型号-导入/导出',
        meta: '型号',
        hidden: false,
        components: {
          default: () => import('@/views/product/importExport.vue'),
          nav: productMenu
        }
      }, {
        path: '/product/brandSearch',
        name: '品牌-查看/编辑',
        meta: '品牌',
        hidden: false,
        components: {
          default: () => import('@/views/product/brandSearch.vue'),
          nav: productMenu
        }
      }, {
        path: '/product/brandDetail',
        name: '品牌详情',
        meta: '品牌',
        hidden: false,
        components: {
          default: () => import('@/views/product/brandDetail.vue'),
          nav: productMenu
        },
        // mate: { keepAlive: true }
      },
      {
        path: '/product/404',
        name: 'product404',
        meta: 'no',
        hidden: false,
        components: {
          default: fault,
          nav: productMenu
        }
      }
    ]
  },
  //供应商
  {
    path: '/supplier',
    redirect: '/supplier/index',
    name: '供应商',
    icon: 'icongongyingshang',
    hidden: false,
    component: Layout,
    children: [{
        path: '/supplier/ContactAdd',
        name: '供应商-新增',
        meta: 'no',
        hidden: false,
        components: {
          default: () => import('@/views/supplier/common/ContactAdd.vue'),
          nav: supplierMenu
        }
      }, {
        path: '/supplier/index',
        name: '供应商-查看/编辑',
        meta: 'no',
        hidden: false,
        components: {
          default: () => import('@/views/supplier/Home.vue'),
          nav: supplierMenu
        }
      }, {
        path: '/supplier/SupplierAdd',
        name: '联系人-新增',
        meta: '联系人',
        hidden: false,
        components: {
          default: () => import('@/views/supplier/common/SupplierAdd.vue'),
          nav: supplierMenu
        }
      }, {
        path: '/supplier/contact',
        name: '联系人-查看/编辑',
        meta: '联系人',
        hidden: false,
        components: {
          default: () => import('@/views/supplier/Contact.vue'),
          nav: supplierMenu
        }
      },
      {
        path: '/supplier/404',
        name: 'supplier404',
        meta: 'no',
        hidden: false,
        components: {
          default: fault,
          nav: supplierMenu
        }
      }
    ]
  },
  //客户
  {
    path: '/customer',
    redirect: '/customer/index',
    name: '客户',
    icon: 'iconkehu',
    hidden: false,
    component: Layout,
    children: [{
        path: '/customer/index',
        name: '客户-主页',
        meta: 'no',
        hidden: false,
        components: {
          default: () => import('@/views/customer/CustomerHome.vue'),
          nav: customerMenu
        }
      }, {
        path: '/customer/view',
        name: '所有客户',
        meta: 'no',
        hidden: false,
        components: {
          default: () => import('@/views/customer/CustomerView.vue'),
          nav: customerMenu
        }
      }, {
        path: '/customer/public',
        name: '公共客户',
        meta: 'no',
        hidden: false,
        components: {
          default: () => import('@/views/customer/CustomerPublic.vue'),
          nav: customerMenu
        }
      }, {
        path: '/customer/potential',
        name: '潜在客户',
        meta: 'no',
        hidden: false,
        components: {
          default: () => import('@/views/customer/CustomerPotential.vue'),
          nav: customerMenu
        }
      }, {
        path: '/customer/cooperation',
        name: '合作客户',
        meta: 'no',
        hidden: false,
        components: {
          default: () => import('@/views/customer/CustomerCooperation.vue'),
          nav: customerMenu
        }
      }, {
        path: '/customer/detail/:id',
        name: '明细资料',
        meta: 'no',
        hidden: false,
        components: {
          default: () => import('@/views/customer/CustomerDetail.vue'),
          nav: customerMenu
        }
      }, {
        path: '/customer/contact/:id',
        name: '客户-联系人明细',
        meta: 'no',
        hidden: false,
        components: {
          default: () => import('@/views/customer/CustomerContact.vue'),
          nav: customerMenu
        }
      },
      {
        path: '/customer/404',
        name: 'customer404',
        meta: 'no',
        hidden: false,
        components: {
          default: fault,
          nav: customerMenu
        }
      }
    ]
  },
  //询价
  {
    path: '/enquiry',
    redirect: '/enquiry/unfinished',
    name: '询价',
    icon: 'iconxunjia1',
    hidden: false,
    component: Layout,
    children: [{
        path: '/enquiry/unfinished',
        name: '待处理',
        meta: 'no',
        hidden: false,
        components: {
          default: () => import('@/views/enquiry/unfinished/index.vue'),
          nav: enquiryMenu
        }
      }, {
        path: '/enquiry/dfinished',
        name: '待回复',
        meta: 'no',
        hidden: false,
        components: {
          default: () => import('@/views/enquiry/unfinished/index.vue'),
          nav: enquiryMenu
        }
      }, {
        path: '/enquiry/finished',
        name: '已完成',
        meta: 'no',
        hidden: false,
        components: {
          default: () => import('@/views/enquiry/finished/index.vue'),
          nav: enquiryMenu
        }
      }, {
        path: '/enquiry/index',
        name: '查看全部',
        meta: 'no',
        hidden: false,
        components: {
          default: () => import('@/views/enquiry/all/index.vue'),
          nav: enquiryMenu
        }
      },
      {
        path: '/enquiry/404',
        name: 'enquiry404',
        meta: 'no',
        hidden: false,
        components: {
          default: fault,
          nav: enquiryMenu
        }
      }
    ]
  },
  //报价
  {
    path: '/quote',
    redirect: '/quote/index',
    name: '报价',
    icon: 'iconxunjia3',
    hidden: false,
    component: Layout,
    children: [{
        path: '/quote/index',
        name: '询价中',
        meta: 'no',
        hidden: false,
        components: {
          default: () => import('@/views/quote/inquery/inquery.vue'),
          nav: quoteMenu
        }
      }, {
        path: '/quote/indexs',
        name: '待报价',
        meta: 'no',
        hidden: false,
        components: {
          default: () => import('@/views/quote/inquery/inquery.vue'),
          nav: quoteMenu
        }
      }, {
        path: '/quote/Hasquote',
        name: '已报价',
        meta: 'no',
        hidden: false,
        components: {
          default: () => import('@/views/quote/Hasquote/Hasquote.vue'),
          nav: quoteMenu
        }
      }, {
        path: '/quote/Allquote',
        name: '全部报价',
        meta: 'no',
        hidden: false,
        components: {
          default: () => import('@/views/quote/Allquote/Allquote.vue'),
          nav: quoteMenu
        }
      },
      {
        path: '/quote/404',
        name: 'quote404',
        meta: 'no',
        hidden: false,
        components: {
          default: fault,
          nav: quoteMenu
        }
      }
    ]
  },
  //订单
  {
    path: '/order',
    redirect: '/order/index',
    name: '订单',
    icon: 'iconicon_order',
    hidden: false,
    component: Layout,
    children: [{
        path: '/order/index',
        name: '订单-主页',
        meta: 'no',
        hidden: false,
        components: {
          default: () => import('@/views/order/Home.vue'),
          nav: orderMenu
        }
      }, {
        path: '/order/result',
        name: '查询结果',
        meta: 'no',
        hidden: false,
        components: {
          default: () => import('@/views/order/SearchResult.vue'),
          nav: orderMenu
        }
      }, {
        path: '/order/sale',
        name: '销售订单',
        meta: 'no',
        hidden: false,
        components: {
          default: () => import('@/views/order/SalesOrderView.vue'),
          nav: orderMenu
        }
      }, {
        path: '/order/purchase',
        name: '采购订单',
        meta: 'no',
        hidden: false,
        components: {
          default: () => import('@/views/order/PurchaseOrderView.vue'),
          nav: orderMenu
        }
      }, {
        path: '/order/receipt',
        name: '入库单',
        meta: 'no',
        hidden: false,
        components: {
          default: () => import('@/views/order/WarehouseReceiptView.vue'),
          nav: orderMenu
        }
      },
      {
        path: '/order/404',
        name: 'order404',
        meta: 'no',
        hidden: false,
        components: {
          default: fault,
          nav: orderMenu
        }
      }
    ]
  },
  //库存
  {
    path: '/stock',
    redirect: '/stock/index',
    name: '库存',
    icon: 'iconnavicon-kcgl',
    hidden: false,
    component: Layout,
    children: [{
        path: '/stock/index',
        name: '即时库存-查询',
        meta: '即时库存',
        hidden: false,
        components: {
          default: () => import('@/views/stock/index.vue'),
          nav: stockMenu
        }
      }, {
        path: '/stock/specialModel',
        name: '特价型号-查询',
        meta: '特价型号',
        hidden: false,
        components: {
          default: () => import('@/views/stock/specialModel.vue'),
          nav: stockMenu
        }
      }, {
        path: '/stock/virtualInventory',
        name: '虚拟库存-查询',
        meta: '虚拟库存',
        hidden: false,
        components: {
          default: () => import('@/views/stock/virtualInventory.vue'),
          nav: stockMenu
        }
      },
      {
        path: '/stock/404',
        name: 'stock404',
        meta: 'no',
        hidden: false,
        components: {
          default: fault,
          nav: stockMenu
        }
      }
    ]
  },
  //物流
  {
    path: '/logistic',
    redirect: '/logistic/index',
    name: '物流',
    icon: 'iconkache',
    hidden: false,
    component: Layout,
    children: [{
        path: '/logistic/index',
        name: '物流-主页',
        meta: 'no',
        hidden: false,
        components: {
          default: () => import('@/views/logistic/Home.vue'),
          nav: logisticMenu
        }
      },
      {
        path: '/logistic/404',
        name: 'logistic404',
        meta: 'no',
        hidden: false,
        components: {
          default: fault,
          nav: logisticMenu
        }
      }
    ]
  },
  //数据分析
  {
    path: '/analyze',
    redirect: '/analyze/index',
    name: '数据分析',
    icon: 'iconshujufenxi',
    hidden: false,
    component: Layout,
    children: [{
        path: '/analyze/index',
        name: '新增模型',
        meta: '模型分析',
        hidden: false,
        components: {
          default: () => import('@/views/analyze/newModel.vue'),
          nav: analyzeMenu
        }
      }, {
        path: '/analyze/dataAnalyze',
        name: '分析结果',
        meta: '模型分析',
        hidden: false,
        components: {
          default: () => import('@/views/analyze/dataAnalyze.vue'),
          nav: analyzeMenu
        }
      },
      {
        path: '/analyze/404',
        name: 'analyze404',
        meta: 'no',
        hidden: false,
        components: {
          default: fault,
          nav: analyzeMenu
        }
      }
    ]
  },
  //财务
  {
    path: '/finance',
    redirect: '/finance/index',
    name: '财务',
    icon: 'iconcaiwu',
    hidden: false,
    component: Layout,
    children: [{
      path: '/finance/index',
      name: '财务-主页',
      meta: 'no',
      hidden: false,
      components: {
        default: () => import('@/views/finance/index.vue'),
        nav: financeMenu
      }
    }, {
      path: '/finance/associate',
      name: '待关联',
      meta: '到账单',
      hidden: false,
      components: {
        default: () => import('@/views/finance/associate.vue'),
        nav: financeMenu
      }
    }, {
      path: '/finance/writeoff',
      name: '待销账',
      meta: '到账单',
      hidden: false,
      components: {
        default: () => import('@/views/finance/writeOff.vue'),
        nav: financeMenu
      }
    }, {
      path: '/finance/arriveall',
      name: '到账单-全部',
      meta: '到账单',
      hidden: false,
      components: {
        default: () => import('@/views/finance/arriveAll.vue'),
        nav: financeMenu
      }
    }, {
      path: '/finance/writeoffdetail',
      name: '销账明细',
      meta: '到账单',
      hidden: false,
      components: {
        default: () => import('@/views/finance/writeOffDetail.vue'),
        nav: financeMenu
      }
    }, {
      path: '/finance/offset',
      name: '待冲账',
      meta: '付款单',
      hidden: false,
      components: {
        default: () => import('@/views/finance/offset.vue'),
        nav: financeMenu
      }
    }, {
      path: '/finance/receiptall',
      name: '付款单-全部',
      meta: '付款单',
      hidden: false,
      components: {
        default: () => import('@/views/finance/receiptAll.vue'),
        nav: financeMenu
      }
    }, {
      path: '/finance/offsetdetail',
      name: '冲账明细',
      meta: '付款单',
      hidden: false,
      components: {
        default: () => import('@/views/finance/offsetDetail.vue'),
        nav: financeMenu
      }
    }, {
      path: '/finance/expenselist',
      name: '费用单-全部',
      meta: '费用单',
      hidden: false,
      components: {
        default: () => import('@/views/finance/expenseList.vue'),
        nav: financeMenu
      }
    }, {
      path: '/finance/receivables',
      name: '应收款',
      meta: 'no',
      hidden: false,
      components: {
        default: () => import('@/views/finance/receivables.vue'),
        nav: financeMenu
      }
    }, {
      path: '/finance/receivedlist',
      name: '已收款',
      meta: '应收款',
      hidden: false,
      components: {
        default: () => import('@/views/finance/receivedList.vue'),
        nav: financeMenu
      }
    }, {
      path: '/finance/receiptcollection',
      name: '收款汇总',
      meta: '应收款',
      hidden: false,
      components: {
        default: () => import('@/views/finance/receiptCollection.vue'),
        nav: financeMenu
      }
    }, {
      path: '/finance/payable',
      name: '应付款',
      meta: 'no',
      hidden: false,
      components: {
        default: () => import('@/views/finance/payable.vue'),
        nav: financeMenu
      }
    }, {
      path: '/finance/paidlist',
      name: '已付款',
      meta: '应付款',
      hidden: false,
      components: {
        default: () => import('@/views/finance/paidList.vue'),
        nav: financeMenu
      }
    }, {
      path: '/finance/paymentcollection',
      name: '付款汇总',
      meta: '应付款',
      hidden: false,
      components: {
        default: () => import('@/views/finance/paymentCollection.vue'),
        nav: financeMenu
      }
    }, {
      path: '/finance/invoice',
      name: '发票管理',
      meta: 'no',
      hidden: false,
      components: {
        default: () => import('@/views/finance/invoice.vue'),
        nav: financeMenu
      }
    }, {
      path: '/finance/invoicing',
      name: '开票申请',
      meta: '发票管理',
      hidden: false,
      components: {
        default: () => import('@/views/finance/invoicing.vue'),
        nav: financeMenu
      }
    }, {
      path: '/finance/salesinvoice',
      name: '销售发票',
      meta: '发票管理',
      hidden: false,
      components: {
        default: () => import('@/views/finance/salesInvoice.vue'),
        nav: financeMenu
      }
    }, {
      path: '/finance/purchaseinvoice',
      name: '采购发票',
      meta: '发票管理',
      hidden: false,
      components: {
        default: () => import('@/views/finance/purchaseInvoice.vue'),
        nav: financeMenu
      }
    }, {
      path: '/finance/404',
      name: 'finance404',
      meta: 'no',
      hidden: false,
      components: {
        default: fault,
        nav: financeMenu
      }
    }]
  },
  //404
  // {
  //   path: '*',
  //   name: '404',
  //   meta: 'no',
  //   hidden: true,
  //   components: {
  //     default: fault
  //   }
  // }
]

const router = new VueRouter({
  routes
})

export default router