<template>
	<div class="plan">
        <div v-for="msg in msgs" class="planbox">
          	<div class="planbox_tit">
            	{{msg.planbox_tit}}
          	</div>
          	<dl>
	            <dt>{{msg.dt}}</dt>
	            <dd v-for="dd in msg.dd">
	              	<img :src="dd.src" alt="dd.title">
	              	<div>
		                <p class="title">
		                  {{dd.title}}
		                </p>
		                <p>
		                  {{dd.p}}
		                </p>
	              	</div>
	            </dd>
          	</dl>
        </div>
    </div>
</template>
<script type="text/javascript">
	export default {
		data(){
			return{
				msgs:[
				{
					planbox_tit:'传统行业解决方案',
					dt:'方案详情',
					dd:[
						{
							src:'../../../static/images/16.png',
							title:'官网展示',
							p:'网站栏目架构设计、网站规划布局结构，提供整套解决方案'
						},
						{
							src:'../../../static/images/17.png',
							title:'SEO优化',
							p:'根据需求制定关键词策略提升流量；优化结构，让搜索引擎更加喜欢。'
						},
						{
							src:'../../../static/images/18.png',
							title:'定制功能',
							p:'可提供多渠道在线支付，高效便捷，为企业增收订单与客源。只要您想到的，我们尽量满足您的需求。'
						},
						{
							src:'../../../static/images/19.png',
							title:'整合营销',
							p:'四网合一，整合PC、手机、客户端、微信等资源，提高忠诚度，提升实业销量。配合8684的精准流量，如虎添翼！'
						}
					]
				},
				{
					planbox_tit:'传统行业解决方案',
					dt:'方案详情',
					dd:[
						{
							src:'../../../static/images/20.png',
							title:'网站诊断',
							p:'通过专业全面的诊断，包括死链接、404页面、URL优化、Sitemap文件制作、Meta元素等优化要素，进行多维度、全方位无死角的网站优化建议。'
						},
						{
							src:'../../../static/images/21.png',
							title:'建站优化',
							p:'从网站体验及SEO性能出发，对已有网站进行结构调整，实现搜索引擎友好。'
						},
						{
							src:'../../../static/images/17.png',
							title:'SEO优化',
							p:'根据需求制定关键词策略提升流量；优化结构，让搜索引擎更加喜欢。'
						},
						{
							src:'../../../static/images/19.png',
							title:'整合营销',
							p:'四网合一，整合PC、手机、客户端、微信等资源，提高忠诚度，提升实业销量。配合8684的精准流量，如虎添翼！'
						}
					]
				}
			]
			}

		}
	}
</script>
<style type="text/css">
	.plan {
	    width: 100%;
	    padding-top: 50px;
	}
	.planbox {
	    width: 1280px;
	    margin: 0 auto;
	    padding-bottom: 50px;
	}
	.planbox_tit {
	    width: 100%;
	    height: 24px;
	    line-height: 24px;
	    font-size: 24px;
	    padding-bottom: 40px;
	    color: #4d4d4d;
	}
	.planbox dl {
	    width: 1180px;
	    overflow: hidden;
	    margin: 0 50px;
	    background: #eeeff1;
	    padding: 30px 0;
	    border-radius: 8px;
	}
	.planbox dl dt {
	    width: 1120px;
	    height: ;
	    float: left;
	    font-size: 25px;
	    padding: 0 30px 10px 30px;
	    color: #4e4e4e;
	}
	.planbox dl dd {
	    width: 590px;
	    height: 132px;
	    float: left;
	    padding: 50px 0;
	}
	.planbox dl dd img {
	    width: 128px;
	    height: 128px;
	    padding: 0 35px;
	    vertical-align: middle;
	}
	.planbox dl dd div {
	    width: 380px;
	    display: inline-block;
	    vertical-align: top;
	}
	.planbox dl dd div p.title {
	    height: 20px;
	    line-height: 20px;
	    font-size: 20px;
	    color: #49a2dc;
	    padding: 0 0 8px;
	}
	.planbox dl dd div p {
	    width: 200px;
	    height: 14px;
	    line-height: 20px;
	    font-size: 14px;
	    color: #4d4d4f;
	    padding-top: 10px;
	}
</style>