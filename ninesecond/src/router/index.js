import Vue from 'vue';
import Router from 'vue-router';
import { Indicator } from 'mint-ui';
// import Public from '../components/Public.vue';
// import Homepage from '../components/Homepage.vue';
// import Product from '../components/Product.vue';
// import Solution from '../components/Solution.vue';
// import Classiccase from "../components/Classiccase.vue";
// import About from '../components/About.vue';
// import Joinus from '../components/Joinus.vue';
// import Contactus from '../components/Contactus.vue';
const Public=resolve=>{
	Indicator.open();
	require.ensure([],()=>{
		resolve(require('../components/Public.vue'));
		Indicator.close()
	},'Public');
}
const Homepage=resolve=>{
	Indicator.open();
	require.ensure([],()=>{
		resolve(require('../components/Homepage.vue'));
		Indicator.close()
	},'Public');
}
const Product=resolve=>{
	Indicator.open();
	require.ensure([],()=>{
		resolve(require('../components/Product.vue'));
		Indicator.close()
	},'Public');
}
const Solution=resolve=>{
	Indicator.open();
	require.ensure([],()=>{
		resolve(require('../components/Solution.vue'));
		Indicator.close()
	},'Public');
}
const Classiccase=resolve=>{
	Indicator.open();
	require.ensure([],()=>{
		resolve(require('../components/Classiccase.vue'));
		Indicator.close()
	},'Public');
}
const About=resolve=>{
	Indicator.open();
	require.ensure([],()=>{
		resolve(require('../components/About.vue'));
		Indicator.close()
	},'Public');
}
const Joinus=resolve=>{
	Indicator.open();
	require.ensure([],()=>{
		resolve(require('../components/Joinus.vue'));
		Indicator.close()
	},'Public');
}
const Contactus=resolve=>{
	Indicator.open();
	require.ensure([],()=>{
		resolve(require('../components/Contactus.vue'));
		Indicator.close()
	},'Public');
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
