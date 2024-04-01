import AuthLayout from '@/components/layout/auth/AuthLayout.vue'
import PublicLayout from '@/components/layout/public/PublicLayout.vue'
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import(/** webpackChunkName:home */ '@/module/home/Home.vue'),
    meta: {
      layout: PublicLayout
    }
  },
  {
    path: '/auth',
    component: () => import(/** webpackChunkName: auth */ '@/module/auth/Auth.vue'),
    meta: {
      layout: AuthLayout
    },
    children: [
      {
        path: '',
        component: () => import('@/module/auth/signin/Signin.vue')
      },
      {
        path: 'signup',
        component: () => import('@/module/auth/signup/Signup.vue')
      }
    ]
  },
  {
    path: '/admin',
    component: () => import(/** webpackChunkName: admin */ '@/module/admin/Admin.vue'),
    meta: {
      layout: AuthLayout
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
    component: () => import(/** webpackChunkName: user */ '@/module/user/User.vue'),
    meta: {
      layout: PublicLayout
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
    path: '/:not-found(.*)*',
    component: () => import(/** webpackChunkName:notFound */ '@/module/not-found/NotFound.vue'),
    meta: {
      layout: AuthLayout
    }
  }
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router
