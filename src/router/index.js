import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: resolve => require(['@/components/MainComponent.vue'], resolve),
    children:[
    	{
    		path: '/',
    		name: 'home',
    		component: resolve => require(['@/views/home/home.vue'], resolve)
    	},
		{
			path: '/user',
			name: 'user',
			component: resolve => require(['@/views/user/user.vue'], resolve),
			children:[
				{
					path: '/',
					name: 'userinfo',
					component: resolve => require(['@/views/user/userinfo.vue'], resolve)
				},
				{
					path: '/feedback',
					name: 'feedback',
					component: resolve => require(['@/views/user/feedback.vue'], resolve)
				},
				{
					path: '/useradd',
					name: 'useradd',
					component: resolve => require(['@/views/user/useradd.vue'], resolve)
				}
			]
		},
		{
			path: '/course',
			name: 'course',
			component: resolve => require(['@/views/course/course.vue'], resolve)
		},
		{
			path: '/courseGrade',
			name: 'courseGrade',
			component: resolve => require(['@/views/course/courseGrade.vue'], resolve)
		},
		{
			path: '/courseModify',
			name: 'courseModify',
			component: resolve => require(['@/views/course/courseModify.vue'], resolve)
		},
		{
			path: '/project',
			name: 'project',
			component: resolve => require(['@/views/project/project.vue'], resolve),
			children:[
				{
					path: '/',
					name: 'projectDetail',
					component: resolve => require(['@/views/project/projectDetail.vue'], resolve)
				},
				{
					path: '/projectRepo',
					name: 'projectRepo',
					component: resolve => require(['@/views/project/projectRepo.vue'], resolve)
				},
				{
					path: '/projectGrade',
					name: 'projectGrade',
					component: resolve => require(['@/views/project/projectGrade.vue'], resolve)
				},
				{
					path: '/projectModify',
					name: 'projectModify',
					component: resolve => require(['@/views/project/projectModify.vue'], resolve)
				}
			]
		}
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
