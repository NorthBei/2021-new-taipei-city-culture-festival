import Vue from 'vue'
import VueRouter from 'vue-router'
import Map from '@/views/Map.vue'
import firebase from '@/firebase'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Map',
    component: Map
  },
  {
    path: '/sound/:id',
    name: 'MapWithId',
    component: Map
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/management',
    // name: 'Management',
    component: () => import('@/views/Management/Index.vue'),
    children: [
      {
        path: '',
        name: 'ManagementList',
        component: () => import('@/views/Management/SoundList.vue'),
        meta: { requiredAuth: true }
      },
      {
        path: 'edit/:id',
        name: 'ManagementEdit',
        component: () => import('@/views/Management/SoundForm.vue'),
        meta: { requiredAuth: true, isEdit: true }
      },
      {
        path: 'create',
        name: 'ManagementCreate',
        component: () => import('@/views/Management/SoundForm.vue'),
        meta: { requiredAuth: true, isEdit: false }
      }
    ]
  },
  { path: '*', redirect: { name: 'Map' } }
]

const router = new VueRouter({
  routes
})

router.beforeEach(async (to, from, next) => {
  if (to.matched.some(record => record.meta.requiredAuth)) {
    const user = await firebase.getCurrentUser()
    if (user) {
      next()
    } else {
      next({ name: 'Login' })
    }
  } else {
    next()
  }
})

export default router
