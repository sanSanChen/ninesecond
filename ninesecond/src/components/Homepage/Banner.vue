<template>
	<div class="banner">
		<ul>
			<li v-for="(value,key) in lists" v-show='value'>
				<a href="javascript:;"></a>
			</li>
		</ul>
		<ol>
			<li @mouseout="out" @mouseover="over" :id="index" v-for="(value,key,index) in lists" :class="{on:value}"></li>
		</ol>
	</div>
</template>
<script type="text/javascript">
	export default {
		data(){
			return {
				lists:{
					one:true,
					two:false,
					three:false,
					four:false
				},
				id:0
			}
		},
		mounted(){
			this.interval();
		},
		methods:{
			over(ev){
				clearInterval(this.timer);
				this.oEvt=ev||event;
				this.id=this.oEvt.target.id;
				for (var key in this.lists) {
					this.lists[key]=false;
				}
				switch(this.id+''){
					case '0':
						this.lists['one']=true;
					break;
					case '1':
						this.lists['two']=true;
					break;
					case '2':
						this.lists['three']=true;
					break;
					case '3':
						this.lists['four']=true;
					break;
				}
			},
			out(){
				this.timer=setInterval(this.interfn,2500);
			},
			interval(){
				this.timer=setInterval(this.interfn,2500);
			},
			interfn(){
				for (var key in this.lists) {
					this.lists[key]=false;
				}
				switch(this.id+''){
					case '0':
						this.lists['one']=true;
					break;
					case '1':
						this.lists['two']=true;
					break;
					case '2':
						this.lists['three']=true;
					break;
					case '3':
						this.lists['four']=true;
					break;
				}
				this.id++;
				this.id%=4;
			}
		}
	}
</script>
<style type="text/css">
	.banner{
		width: 100%;
		min-width: 1280px;
	}
	.homepage .banner ul{
		width: 100%;
		height: 399px;
		min-width: 1280px;
		overflow: hidden;
	}
	.banner ul li{
		opacity: 0;
		animation:fadeIn 1s ease forwards;
		width: 100%;
		height: 399px;
	}
	.homepage .banner ul li a{
		display: inline-block;
		width: 100%;
		height: 100%;
	}
	.banner ul li.on{
		display: block
	}
	@keyframes fadeIn{
		0%{
			opacity: 0;
		}
		100%{
			opacity: 1;
		}
	}
	.homepage .banner ul li:nth-child(1){
		background: url('../../../static/images/banner1.png') center center no-repeat;
	}
	.homepage .banner ul li:nth-child(2){
		background: url('../../../static/images/banner2.png') center center no-repeat;
	}
	.homepage .banner ul li:nth-child(3){
		background: url('../../../static/images/banner3.png') center center no-repeat;
	}
	.homepage .banner ul li:nth-child(4){
		background: url('../../../static/images/banner4.png') center center no-repeat;
	}
	.banner ol {
	    width: 100%;
	    position: relative;
	    top: -28px;
	    text-align: center;
	}
	.banner ol li{
	    display: inline-block;
	    width: 15px;
	    height: 15px;
	    background: #b79997;
	    border-radius: 30px;
	    margin: 0 4px;
	    cursor: pointer;
	    vertical-align: top;
	}
	.banner ol li.on{
		background: #fff;
	}
	/* 关于九秒banner */
	.about_banner .banner ul li:nth-child(1){
		background: url('../../../static/images/33.jpg') center center no-repeat;
		background-size:100% 100%;
	}
	.about_banner .banner ul li:nth-child(2){
		background: url('../../../static/images/34.jpg') center center no-repeat;
		background-size:100% 100%;
	}
	.about_banner .banner ul li:nth-child(3){
		background: url('../../../static/images/39.jpg') center center no-repeat;
		background-size:100% 100%;
	}
	.about_banner .banner ul li:nth-child(4){
		background: url('../../../static/images/40.jpg') center center no-repeat;
		background-size:100% 100%;
	}
	.about_banner{
		width: 100%;
		background: #f5f6f8
	}
	.about_banner ul {
	    width: 1280px;
	    height: 490px;
	    overflow: hidden;
	    margin: 0 auto;
	    padding: 39px 0 80px;
	}
	.about_banner ul li{
	    width: 1280px;
	    height: 490px;
	    display: inline-block;
	    vertical-align: middle;
	}
</style>