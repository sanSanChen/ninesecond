<template>
	<header>
		<a name="/product"></a>
		<a name="/solution"></a>
		<a name="/classiccase"></a>
		<a name="/about"></a>
		<a name="/joinus"></a>
		<a name="/contactus"></a>
		<div class="top clearfix">
			<div class="hotline fl">
				{{hotline}}
			</div>
			<div class="top_r fr">
				<router-link to="/joinus">加入我们</router-link> | <router-link to="/contactus">联系我们</router-link>
			</div>
		</div>
	</header>
</template>
<script type="text/javascript">
	export default {
		data(){
			return {
				hotline:'咨询热线：4006-258-380',
			}
		}
	}
</script>
<style type="text/css">
	header{
		width: 100%;
		height: 32px;
		background: #000;
		color: #fff;
		line-height: 32px;
	}
	.top{
		width: 1280px;
		height: 32px;
		margin: 0 auto;
	}
	.hotline{
		background: url('../../static/images/ico1.png') no-repeat left center;
		text-indent: 25px;
		font-size: 13px;
	}
	.top_r a{
		color: #fff;
		margin: 0 3px;
		font-size: 13px
	}
</style>