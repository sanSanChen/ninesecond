<template>
	<div class="Public">
		<v-header></v-header>
		<v-navbar></v-navbar>
		<router-view ></router-view>
		<v-footer></v-footer>
	</div>
</template>
<script type="text/javascript">
	import Header from './Header.vue';
	import Navbar from './Navbar.vue';
	import Footer from './Footer.vue';
	export default{
		data(){
			return {

			}
		},
		components:{
			'v-header':Header,
			'v-navbar':Navbar,
			'v-footer':Footer
		}
	}
</script>