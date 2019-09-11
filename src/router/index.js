import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Header from '@/components/Header'
import CornCalculator from '@/components/CornCalculator'
import Main from '@/components/Main'

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
	{
		path: '/',
		name: 'Main',
		component: Main,
		props: true
	},
	{
		path: '/tools/corn_calculator',
		name: 'CornCalculator',
		component: CornCalculator,
		props:true
	}

	]
})
