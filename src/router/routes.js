const routes = [
    {
        path:"/",
        redirect:"/home"
    },
    {// 首页
        path:"/home",
        name:"home",
        component: () => import('../views/home')
    },
    {// 发现
        path:"/invent",
        name:"invent",
        component: () => import('../views/invent')
    },
    {// 我的
        path:"/personal",
        name:"personal",
        component: () => import('../views/personal')
    },
    {// 购物车
        path:"/shoppingCart",
        name:"shoppingCart",
        component: () => import('../views/shoppingCart')
    },
    {// 分类
        path:"/sort",
        name:"sort",
        component: () => import('../views/sort')
    },
  
];
export default routes;