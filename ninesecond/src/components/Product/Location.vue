<template>
	<div class="locationbox">
        <div class="location">
        	<router-link to="/">主页 ></router-link>
        	<router-link :to="link">{{msg}}  ></router-link>
        </div>
    </div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return{

			}
		},
		props:['link','msg']
	}
</script>
<style type="text/css">
	.locationbox{
		width: 100%;
		background: #4aa2e1;
	}
	.location {
	    width: 1280px;
	    height: 30px;
	    line-height: 30px;
	    margin: 0 auto;
	    color: #fff;
	    font-size: 16px;
	    background: #4aa2e1;
	}
	.location a {
	    color: #fff;
	    font-size: 14px;
	}
</style>