<template>
	<div class="wrap">
		<v-location link="/solution" msg="解决方案"></v-location>
		<v-plan></v-plan>
	</div>
</template>
<script type="text/javascript">
	import Location from './Product/Location.vue';
	import Plan from './Solution/Plan.vue';
	export default {
		data(){
			return {}
		},
		components:{
			'v-location':Location,
			'v-plan':Plan
		}
	}
</script>