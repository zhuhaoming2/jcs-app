import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../components/hello/Hello'
import Home from '../components/home/home'
import Expert from '../components/expert/expert'
import Competition from '../components/competition/competition'
import Attention from '../components/attention/attention'
import My from '../components/my/my'
import Banner from '../components/banner/banner'
import Portal from '../components/home/portal'
import ArticleList from '../components/articlelist/articlelist'
import PublickHader from '../components/header/publickhader'
import Menu from '../components/menu/menu'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/home', name: 'home', component: Home,
    	children:[
    		{ path: '/', name: 'banner', component: Banner },
    		{ path: '/', name: 'portal', component: Portal },
            { path: '/', name: 'articlelist', component: ArticleList }
    	]
    },
    { path: '/expert', name: 'expert', component: Expert },
    { path: '/competition', name: 'competition', component: Competition },
    { path: '/attention', name: 'attention', component: Attention,
        children:[
            {path:'/', name: 'publickhader', component: PublickHader}
        ]
    },
    { path: '/my', name: 'my', component: My }
  ]
})
