import Vue from 'vue';
import Router from 'vue-router';
// import Public from '../components/Public.vue';
// import Homepage from '../components/Homepage.vue';
// import Product from '../components/Product.vue';
// import Solution from '../components/Solution.vue';
// import Classiccase from "../components/Classiccase.vue";
// import About from '../components/About.vue';
// import Joinus from '../components/Joinus.vue';
// import Contactus from '../components/Contactus.vue';
const Public=resolve=>{
	require.ensure([],()=>{
		resolve(require('../components/Public.vue'));
	},'Public');
}
const Homepage=resolve=>{
	require.ensure([],()=>{
		resolve(require('../components/Homepage.vue'));
	},'Homepage');
}
const Product=resolve=>{
	require.ensure([],()=>{
		resolve(require('../components/Product.vue'));
	},'Product');
}
const Solution=resolve=>{
	require.ensure([],()=>{
		resolve(require('../components/Solution.vue'));
	},'Solution');
}
const Classiccase=resolve=>{
	require.ensure([],()=>{
		resolve(require('../components/Classiccase.vue'));
	},'Classiccase');
}
const About=resolve=>{
	require.ensure([],()=>{
		resolve(require('../components/About.vue'));
	},'About');
}
const Joinus=resolve=>{
	require.ensure([],()=>{
		resolve(require('../components/Joinus.vue'));
	},'Joinus');
}
const Contactus=resolve=>{
	require.ensure([],()=>{
		resolve(require('../components/Contactus.vue'));
	},'Contactus');
}
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Public',
      component: Public,
      children:[
      		{
      			path:'/',
      			component:Homepage
      		},{
      			path:'/product',
      			component:Product
      		},{
      			path:'/solution',
      			component:Solution
      		},
      		{
      			path:'/classiccase',
      			component:Classiccase
      		},
      		{
      			path:'/about',
      			component:About
      		},{
      			path:'/joinus',
      			component:Joinus
      		},{
      			path:'/contactus',
      			component:Contactus
      		}
      ]
    }
  ]
});
