import Vue from 'vue';
import Router from 'vue-router';
import Public from '../components/Public.vue';
import Homepage from '../components/Homepage.vue';
// import Product from '../components/Product.vue';
// import Solution from '../components/Solution.vue';
// import Classiccase from "../components/Classiccase.vue";
// import About from '../components/About.vue';
// import Joinus from '../components/Joinus.vue';
// import Contactus from '../components/Contactus.vue';
// require.ensure([],(require)=>{
//   const Public = ()=>require('../components/Public.vue');
// },'Public');
// require.ensure([],(require)=>{
//   const Homepage = ()=>require('../components/Homepage.vue');
// },'Homepage');
require.ensure([],(require)=>{
  const Product = ()=>require('../components/Product.vue');
},'Product');
require.ensure([],(require)=>{
  const Solution = ()=>require('../components/Solution.vue');
},'Solution');
require.ensure([],(require)=>{
  const Classiccase = ()=>require('../components/Classiccase.vue');
},'Classiccase');
require.ensure([],(require)=>{
  const About = ()=>require('../components/About.vue');
},'About');
require.ensure([],(require)=>{
  const Joinus = ()=>require('../components/Joinus.vue');
},'Joinus');
require.ensure([],(require)=>{
  const Contactus = ()=>require('../components/Contactus.vue');
},'Contactus');
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
