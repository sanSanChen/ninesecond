<template>
	<div class="wrap homepage">
		<v-banner></v-banner>
		<v-product></v-product>
		<v-service></v-service>
		<v-info></v-info>
	</div>
</template>
<script type="text/javascript">
import Banner from './Homepage/Banner.vue';
import Product from './Homepage/Product.vue';
import Service from './Homepage/Service.vue';
import Info from './Homepage/Info.vue';
	export default {
		data(){
			return {}
		},
		components:{
			'v-banner':Banner,
			'v-product':Product,
			'v-service':Service,
			'v-info':Info
		}

	}
</script>
<style type="text/css">
	.wrap{
		width: 100%;
	}

</style>