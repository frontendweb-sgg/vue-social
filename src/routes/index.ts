import AuthLayout from '@/module/auth/Auth.vue'
import PublicLayout from '@/components/layout/public/PublicLayout.vue'
import { useAuthStore } from '@/stores/auth'
import { useLoaderStore } from '@/stores/loader'
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import(/* webpackChunkName:"home" */ '@/module/home/Home.vue'),
    meta: {
      layout: PublicLayout,
      auth: false
    }
  },
  {
    path: '/auth',
    component: () => import(/* webpackChunkName: "auth" */ '@/module/auth/Auth.vue'),
    meta: { auth: false },
    children: [
      {
        path: '',
        component: () => import('@/module/auth/signin/Signin.vue')
      },
      {
        path: 'signup',
        component: () => import('@/module/auth/signup/Signup.vue')
      },
      {
        path: 'forgot-password',
        component: () => import('@/module/auth/forgot-password/ForgotPassword.vue')
      }
    ]
  },
  {
    path: '/admin',
    component: () => import(/* webpackChunkName: "admin" */ '@/module/admin/Admin.vue'),
    meta: {
      layout: AuthLayout,
      auth: true
    },
    children: [
      {
        path: '',
        component: () => import('@/module/admin/dashboard/Dashboard.vue')
      },
      {
        path: 'posts',
        component: () => import('@/module/admin/posts/Posts.vue')
      },
      {
        path: 'users',
        component: () => import('@/module/admin/users/Users.vue')
      },
      {
        path: 'profile',
        component: () => import('@/module/admin/profile/Profile.vue')
      },
      {
        path: 'settings',
        component: () => import('@/module/admin/settings/Settings.vue')
      }
    ]
  },
  {
    path: '/user',
    component: () => import(/* webpackChunkName: "user" */ '@/module/user/User.vue'),
    meta: { auth: true },
    children: [
      {
        path: '',
        component: () => import('@/module/user/dashboard/Dashboard.vue')
      },
      {
        path: 'posts',
        component: () => import('@/module/user/posts/Posts.vue')
      },
      {
        path: 'profile',
        component: () => import('@/module/user/profile/Profile.vue')
      },
      {
        path: 'settings',
        component: () => import('@/module/user/settings/Settings.vue')
      }
    ]
  },
  {
    path: '/:not-found(.*)*',
    component: () => import(/* webpackChunkName: "notFound" */ '@/module/not-found/NotFound.vue'),
    meta: {
      layout: AuthLayout
    }
  }
]

const router = createRouter({
  routes,
  history: createWebHistory(),
  scrollBehavior(to) {
    return {
      el: '#app',
      top: 0,
      behavior: 'smooth'
    }
  }
})
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()

  if (!authStore.isAuth && to.meta.auth) {
    console.log('Hi')
    return next('/auth')
  } else {
    if (authStore.isAuth && !authStore.isAdmin && to.path === '/admin') {
      return next('/user')
    } else if (authStore.isAuth && !authStore.isUser && to.path === '/user') {
      return next('/admin')
    } else {
      return next()
    }
  }
})

router.beforeResolve((to, from, next) => {
  const useLoader = useLoaderStore()

  if (to.path) {
    useLoader.loadingStart()
  }
  next()
})

router.afterEach(() => {
  const useLoader = useLoaderStore()
  useLoader.loadingEnd()
})
export default router
