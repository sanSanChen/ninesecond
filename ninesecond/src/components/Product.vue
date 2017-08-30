<template>
	<div class="wrap">
		<v-location link="/product" msg="服务介绍"></v-location>
		<v-serveinfo></v-serveinfo>
		<v-servesupport></v-servesupport>
	</div>
</template>
<script type="text/javascript">
	import Location from './Product/Location.vue';
	import Serveinfo from './Product/Serveinfo.vue';
	import Servesupport from './Product/Servesupport.vue';
	export default {
		data(){
			return {

			}
		},
		components:{
			'v-location':Location,
			'v-serveinfo':Serveinfo,
			'v-servesupport':Servesupport
		}
	}
</script>