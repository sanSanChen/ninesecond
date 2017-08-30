<template>
	<div class="wrap">
		<v-location link="/classiccase" msg="典型案例"></v-location>
		<v-case></v-case>
	</div>
</template>
<script type="text/javascript">
	import Location from './Product/Location.vue';
	import Case from './Classiccase/Case.vue';
	export default{
		data(){
			return {

			}
		},
		components:{
			'v-location':Location,
			'v-case':Case
		}
	}
</script>