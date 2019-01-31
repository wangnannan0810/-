import App from '../App'

const home = r => require.ensure([], () => r(require('../page/home/home')), 'home')
const login = r => require.ensure([], () => r(require('../page/login/login')), 'login')
const city = r => require.ensure([], () => r(require('../page/city/city')), 'city')
const msite = r => require.ensure([], () => r(require('../page/msite/msite')), 'msite')
const food = r => require.ensure([], () => r(require('../page/food/food')), 'food')
const search = r => require.ensure([], () => r(require('../page/search/search')), 'search')
const foodDetail = r => require.ensure([], () => r(require('../page/shop/children/foodDetail')), 'foodDetail')
const shopDetail = r => require.ensure([], () => r(require('../page/shop/children/shopDetail')), 'shopDetail')
const shopSafe = r => require.ensure([], () => r(require('../page/shop/children/children/shopSafe')), 'shopSafe')
const shop = r => require.ensure([], () => r(require('../page/shop/shop')), 'shop')
const confirmOrder = r => require.ensure([], () => r(require('../page/confirmOrder/confirmOrder')), 'confirmOrder')
const remark = r => require.ensure([], () => r(require('../page/confirmOrder/children/remark')), 'remark')
const invoice = r => require.ensure([], () => r(require('../page/confirmOrder/children/invoice')), 'invoice')
const chooseAddress = r => require.ensure([], () => r(require('../page/confirmOrder/children/chooseAddress')), 'chooseAddress')
const addAddress = r => require.ensure([], () => r(require('../page/confirmOrder/children/children/addAddress')), 'addAddress')
const searchAddress = r => require.ensure([], () => r(require('../page/confirmOrder/children/children/children/searchAddress')), 'searchAddress')
const payment = r => require.ensure([], () => r(require('../page/confirmOrder/children/payment')), 'payment')
const userValidation = r => require.ensure([], () => r(require('../page/confirmOrder/children/userValidation')), 'userValidation')

export default [{
    path: '/',
    component: App, //顶层路由，对应index.html
    children: [ //二级路由。对应App.vue
        //地址为空时跳转home页面
        {
            path: '',
            redirect: '/home'
        },
        //首页城市列表页
        {
            path: '/home',
            component: home
        },
       //登录注册页
       {
        path: '/login',
        component: login
    },
     //当前选择城市页
     {
        path: '/city/:cityid',
        component: city
    },
     //所有商铺列表页
     {
        path: '/msite',
        component: msite,
        meta: { keepAlive: true },
    },
    //特色商铺列表页
    {
        path: '/food',
        component: food
    },
      //搜索页
      {
        path: '/search/:geohash',
        component: search
    },
      //商铺详情页
      {
        path: '/shop',
        component: shop,
        children: [{
            path: 'foodDetail', //食品详情页
            component: foodDetail,
        }, {
            path: 'shopDetail', //商铺详情页
            component: shopDetail,
            children: [{
                path: 'shopSafe', //商铺安全认证页
                component: shopSafe,
            }, ]
        }]
    },
     //确认订单页
     {
        path: '/confirmOrder',
        component: confirmOrder,
        children: [{
            path: 'remark', //订单备注
            component: remark,
        }, {
            path: 'invoice', //发票抬头
            component: invoice,
        }, {
            path: 'payment', //付款页面
            component: payment,
        }, {
            path: 'userValidation', //用户验证
            component: userValidation,
        }, {
            path: 'chooseAddress', //选择地址
            component: chooseAddress,
            children: [{
                path: 'addAddress', //添加地址
                component: addAddress,
                children: [{
                    path: 'searchAddress', //搜索地址
                    component: searchAddress,
                }]
            }, ]
        }, ]
    },
    ]
}]
