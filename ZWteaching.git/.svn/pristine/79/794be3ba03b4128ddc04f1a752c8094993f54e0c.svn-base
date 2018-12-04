import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Main from '@/components/main'
import indexContext from '@/components/indexContext'
import newsContext from '@/components/news/newsContext'
import newsdetailContext from '@/components/news/newsdetailContext'
import admin from '@/components/admin/adminIndex'
import editor from '@/components/admin/wangeditor'
import fixedTable from '@/components/admin/fixedTable'
import upload from '@/components/admin/upload'
import resourceList from '@/components/resourceList'
import test from '@/components/test/main'
import publishList from '@/components/admin/publishList'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
  
      component: HelloWorld
    },
     
     {
      path: '/main',
  		
      component: Main,
      children:[{
      	path: '/main',
      	name:'main',
      	component:indexContext
      }]
    },
      {
      path: '/news',
     
      component: Main,
      children:[{
      	path: '/news',
      	component:newsContext
      },{
      	path: '/detail/:id',
      	component:newsdetailContext 
      }]
    },
        {
      path: '/resourceList',
     
      component: Main,
      children:[{
      	path: '/resourceList',
      	component:resourceList
      }]
    },
     {
      path: '/test',
  
      component: editor
    },
    {
    	path:'/admin',
    	component:admin,
    	children:[
    	{
    		path:'/editor',
    		component: editor
    	},
    	{
    		path:'/table',
    		component: fixedTable
    	}, 
    		{
    		path:'/publishList',
    		component: publishList,
//  		children:[
//  		{
//  			path:'/editor/:id',
//  			component: editor,
//  		}]
    	},{
      path: '/upload',
  
      component: upload
    }
    	]
    }
  ]
})
