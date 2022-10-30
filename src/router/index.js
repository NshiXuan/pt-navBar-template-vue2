import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/common/home/Home.vue'),
    children: [
      { path: '', redirect: '/home/test1' },
      { path: 'test1', component: () => import('../views/common/home/children/test1.vue') },
      { path: 'test2', component: () => import('../views/common/home/children/test2.vue') },
    ]
  },
  {
    path: '/teacher/knowledge',
    name: 'tKnowledge',
    component: () => import('../views/teacher/tKnowledge/tKnowledge.vue'),
    children: [
      { path: '', redirect: '/teacher/knowledge/tree' },
      { path: 'tree', component: () => import('../views/teacher/tKnowledge/children/tKnowledgeTree.vue') },
      { path: 'contact', component: () => import('../views/teacher/tKnowledge/children/tKnowledgeContact.vue') },
    ]
  },
  {
    path: '/teacher/topic',
    name: 'tTopic',
    component: () => import('../views/teacher/tTopic/tTopic.vue'),
    children: [
      {
        path: 'add',
        component: () => import('../views/teacher/tTopic/children/tAddTopic.vue'),
        meta: {
          isChildren: true,
        }
      },
      {
        path: 'edit',
        component: () => import('../views/teacher/tTopic/children/tEditTopic.vue'),
        meta: {
          isChildren: true,
        }
      },
    ]
  },

  {
    path: '/teacher/class',
    name: 'tClass',
    component: () => import('../views/teacher/tClass/tClass.vue')
  },
  {
    path: '/teacher/test',
    name: 'tTest',
    component: () => import('../views/teacher/tTest/tTest.vue')
  },
  {
    path: '/teacher/review',
    name: 'tReview',
    component: () => import('../views/teacher/tReview/tReview.vue')
  },
  {
    path: '/teacher/analysis',
    name: 'tAnalysis',
    component: () => import('../views/teacher/tAnalysis/tAnalysis.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
