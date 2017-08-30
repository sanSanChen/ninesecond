import Vue from 'vue';
import Router from 'vue-router';
import Public from '../components/Public.vue';
import Homepage from '../components/Homepage.vue';
import Product from '../components/Product.vue';
import Solution from '../components/Solution.vue';
import Classiccase from "../components/Classiccase.vue";
import About from '../components/About.vue';
import Joinus from '../components/Joinus.vue';
import Contactus from '../components/Contactus.vue';

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
