<template>
	<div class="wrap about">
		<v-location link="/about" msg="关于九秒"></v-location>
		<div class="about_banner">
			<v-banner></v-banner>
		</div>
		<v-switchoverbox></v-switchoverbox>
	</div>
</template>
<script type="text/javascript">
import Location from './Product/Location.vue';
import Banner from './Homepage/Banner.vue';
import Switchoverbox from './Aboute/Switchoverbox.vue';
	export default{
		data(){
			return {

			}
		},
		components:{
			'v-location':Location,
			'v-banner':Banner,
			'v-switchoverbox':Switchoverbox
		}
	}
</script>
<style type="text/css">
	.about{
		width: 100%;
	    overflow: hidden;
	}
</style>