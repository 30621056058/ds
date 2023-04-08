import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import upload from '../views/upload.vue'
import first_page from "../views/first_page"
import cishi from "../views/csihi"
import search from "../components/search"

// const use = useRoute()
// const a = (data)=>{
//   let pa = data
//   console.log(pa)
// }
// console.log(a)
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // {
  //   path:"/upload",
  //   name:"upload",
  //   component:upload
  // },
  // {
  //   path:"/cishi",
  //   name:"cishi",
  //   component:cishi
  // },
  {
    path:"/first_page",
    name:"first_page",
    component:first_page,
    redirect:{
      
        path:"/search",
        name:"search",
        component:search
   
    },
    children:[
      
      {
        path:"/search",
        name:"search",
        component:search
    },
      {
        path:"/cishi",
        name:"cishi",
        component:cishi
    },
    {
      path:"/upload",
      name:"upload",
      component:upload
    },
   
  ]
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
