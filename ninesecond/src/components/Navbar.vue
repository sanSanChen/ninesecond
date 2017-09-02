<template>
	<div class="navbar">
		<div class="navbox clearfix">
			<div class="logo fl">
				<router-link to="/">
		          上海XX官网
		        </router-link>
			</div>
			<div class="nav fr">
				<router-link v-for="(list,index) in navs" :to="list.link" :class="{hover:index==0}" class="fl" >{{list.title}}</router-link>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		data(){
			return {
				navs:[
					{
						title:'首页',
						link:'/'
					},
					{
						title:'服务介绍',
						link:'/product'
					},
					{
						title:'解决方案',
						link:'/solution'
					},
					{
						title:'典型案例',
						link:'/classiccase'
					}
					,{
						title:'关于XX',
						link:'/about'
					}
				]
			}
		}
	}
</script>
<style type="text/css">
	.navbar{
		height: 80px;
		width:100% ;
	}
	.navbox{
		width: 1280px;
		margin: 0 auto;
	}
	.logo a{
		height:44px;
		padding: 18px 0;
		display: inline-block;
		color: #000;
		font-size:18px;
		background: url('../../static/images/logo.png') no-repeat left;
		text-indent: 54px;
		line-height: 44px;
	}
	.nav a{
		width: 100px;
		height: 80px;
		line-height: 80px;
		color: #4d4d4d;
		font-size: 16px;
		text-align: center;
	}
	/* .nav a.hover{
		background: #f2f2f2;
	} */
	.nav a:hover{
		background: #f2f2f2;
	}
</style>