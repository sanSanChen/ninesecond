<template>
	<div class="footer">
		<div class="footer_box">
			<div class="footer_t">
				<dl class="fl">
					<dt>联系我们</dt>
					<dd>
						<div class="corpinfo">
							<p class="ico2">公司地址：上海市嘉定区新成路500号J187室</p>
							<p class="ico2">服务热线：4006-258-380</p>
							<p class="ico2">商务合作：1761993143</p>
							<p class="ico2">招聘联系：474466637</p>
						</div>
					</dd>
				</dl>
				<dl>
					<dt>关注我们</dt>
					<dd>
						<div class="qrcode">
							<img src="../../static/images/qrcode.png">
						</div>
					</dd>
				</dl>
				<dl>
					<dt>网站地图</dt>
					<dd class="webmap">
						<router-link to="/product">服务介绍</router-link>
						<router-link to="/solution">解决方案</router-link>
						<router-link to="/classiccase">典型案例</router-link>
						<router-link to="/about">关于九秒</router-link>
						<router-link to="/joinus">加入我们</router-link>
						<router-link to="/contactus">联系我们</router-link>
					</dd>
				</dl>
				<dl class="last">
					<dt>站点推荐</dt>
					<dd>
						<div class="webmap">
							<a href="javascript:;">9秒夺宝</a>
							<a href="javascript:;">洋城商务</a>
							<a href="javascript:;">翠格珠宝</a>
							<a href="javascript:;">威育设备</a>
							<a href="javascript:;">天威设备</a>
							<a href="javascript:;">洋城集团</a>
						</div>
					</dd>
				</dl>
			</div>
			<div class="footer_b">
				<div class="copyright">
            		© 2015 ninemiao.com 沪ICP备16012546号-1 上海九秒网络科技有限公司版权所有
				</div>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		data(){
			return{}
		}
	}
</script>
<style type="text/css">
	.footer{
		width: 100%;
		background: #5a5a5a;
	}
	.footer_box{
		width: 1280px;
		margin: 0 auto;
	}
	.footer_t{
		padding-top: 30px;
		width: 1280px;
		overflow: hidden;
	}
	.footer_t dl{
		display: inline-block;
		padding-right: 82px;
	}
	.footer_t dl dt {
	    width: 100%;
	    height: 20px;
	    line-height: 20px;
	    font-size: 16px;
	    color: #fff;
	    border-bottom: 1px solid #666;
	    padding-bottom: 20px;
	}
	.footer_t dl dd{
		padding: 20px 0;
	}
	.corpinfo{
		width: 440px;
	}
	.corpinfo p{
		line-height: 18px;
		font-size: 14px;
		margin-bottom: 18px;
		color: #fff;
		text-indent:30px;
	}
	.corpinfo p:nth-child(1){
		background: url('../../static/images/ico2.png') no-repeat left;
	}
	.corpinfo p:nth-child(2){
		background: url('../../static/images/ico3.png') no-repeat left;
	}
	.corpinfo p:nth-child(3){
		background: url('../../static/images/ico4.png') no-repeat left;
	}
	.corpinfo p:nth-child(4){
		background: url('../../static/images/ico4.png') no-repeat left;
	}
	.qrcode{
		width: 116px;
	}
	.webmap {
	    width: 180px;
	    overflow: hidden;
	    margin-left: -30px;
	}
	.webmap a {
	    float: left;
	    width: 60px;
	    color: #fff;
	    font-size: 14px;
	    height: 14px;
	    line-height: 14px;
	    margin-bottom: 20px;
	    margin-left: 30px;
	}
	.footer_t .last{
	    width: 300px;
	    float: right;
	    padding: 0 10px;
	}
	.last .webmap{
		width: 240px;
	}
	.last .webmap a{
		width: 90px;
		float: left
	}
	.copyright {
	    width: 1280px;
	    height: 35px;
	    line-height: 35px;
	    color: #fff;
	    font-size: 13px;
	}
</style>