<template>
	<div class="wrap">
		<v-location link="/contactus" msg="联系我们"></v-location>
		<div class="contactbox">
		      <div class="contact">
			<div class="contact_l">
				<div class="contac_list contac_list1">
					<div class="contac_list_tit">
						网站商务合作</div>
					<div class="contac_list_box">
						<ul>
							<li>
								<div class="contact_project">
									<span>xx夺宝PC</span></div>
								<div class="contact_people">
									张先生</div>
								<div class="contact_info">
									<p class="ico_qq">
										QQ：xxxxxxx</p>
									<p class="ico_email">
										邮箱：<span style="color: rgb(0, 0, 0); font-family: verdana; background-color: rgb(246, 249, 252);">xxx@xxxx.com</span></p>
									<p class="ico_tel">
										电话：4000-000-000</p>
								</div>
							</li>
							<li>
								<div class="contact_project">
									<span>xx夺宝APP</span></div>
								<div class="contact_people">
									刘小姐</div>
								<div class="contact_info">
									<p class="ico_qq">
										QQ：xxxxxxx</p>
									<p class="ico_email">
										邮箱：<span style="color: rgb(0, 0, 0); font-family: verdana; background-color: rgb(246, 249, 252);">xxx@xxxxx.com</span></p>
								</div>
							</li>
							<li>
								<div class="contact_project">
									<span>家教王APP</span></div>
								<div class="contact_people">
									王先生</div>
								<div class="contact_info">
									<p class="ico_qq">
										QQ：xxxxxxxx</p>
									<p class="ico_email">
										邮箱：<span style="color: rgb(0, 0, 0); font-family: verdana; background-color: rgb(246, 249, 252);">xxxxx@xxxxx.com</span></p>
								</div>
							</li>
						</ul>
					</div>
				</div>
				<div class="contac_list contac_list2">
					<div class="contac_list_tit">
						招聘联系</div>
					<div class="contac_list_box">
						<ul>
							<li>
								<div class="contact_project">
									<span>人事招聘 </span></div>
								<div class="contact_people">
									方小姐</div>
								<div class="contact_info">
									<p class="ico_qq">
										QQ：xxxxxx</p>
									<p class="ico_email">
										邮箱：<span style="color: rgb(0, 0, 0); font-family: verdana; line-height: 19.2000007629395px;">xxxxx@xxxxxx.com</span>(请注明姓名+应聘岗位)</p>
									<p class="ico_tel">
										电话：4000-000-000</p>
									<p class="ico_wb">
										微博：@xx科技</p>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="contact_r">
				<div class="contact_company">
					<div class="contact_company_tit">
						公司地址</div>
					<div class="contact_company_info">
						<p>
							地址：上海市xx区xx路xx号xx室</p>
						<p>
							电话：4000-000-000</p>
					</div>
				</div>
			</div>
		</div>

      </div>
	</div>
</template>
<script type="text/javascript">
	import Location from './Product/Location.vue';
	export default {
		data(){
			return {
			}
		},
		components:{
			'v-location':Location
		}
	}
</script>
<style type="text/css">
	.contactbox {
	    width: 100%;
	}
	.contact {
	    width: 1280px;
	    overflow: hidden;
	    margin: 0 auto;
	}
	.contact_l {
	    width: 1000px;
	    float: left;
	    padding-bottom: 80px;
	}
	.contact_r {
	    width: 260px;
	    float: right;
	    padding-top: 40px;
	}
	.contac_list {
	    width: 1000px;
	    padding-top: 40px;
	}
	.contac_list_tit {
	    height: 26px;
	    line-height: 26px;
	    font-size: 25px;
	    color: #4d4d4d;
	}
	.contac_list_box {
	    width: 1000px;
	    overflow: hidden;
	}
	.contac_list1 .contac_list_box ul {
	    width: 1035px;
	    margin-left: -35px;
	}
	.contac_list1 .contac_list_box li {
	    float: left;
	    width: 308px;
	    height: 198px;
	    margin: 31px 0 0 35px;
	    border: 1px solid #dbdbdb;
	}
	.contact_project {
	    width: 100%;
	    padding-top: 10px;
	}
	.contact_people {
	    height: 25px;
	    line-height: 25px;
	    color: #4d4d4d;
	    font-size: 25px;
	    padding: 21px 0 15px;
	    text-align: center;
	}
	.contact_info {
	    width: 282px;
	    padding-left: 26px;
	}
	.contact_project span {
	    display: inline-block;
	    height: 28px;
	    line-height: 28px;
	    font-size: 14px;
	    color: #fff;
	    padding: 0 10px;
	    background: #49a3e2;
	}
	.contact_info p {
	    padding: 2px 0;
	    color: #4d4d4d;
	    font-size: 14px;
	}
	.contact_company {
	    width: 260px;
	    padding: 17px 0 30px;
	}
	.contact_company_tit {
	    width: 260px;
	    height: 16px;
	    line-height: 16px;
	    font-size: 16px;
	    padding: 15px 0;
	}
	.contact_company_info {
	    width: 260px;
	}
	.contact_company_info p {
	    line-height: 30px;
	    font-size: 15px;
	    color: #4d4d4d;
	}
	.contac_list2 .contac_list_box ul {
	    width: 1080px;
	    margin-left: -80px;
	}
	.contac_list2 .contac_list_box li {
	    float: left;
	    width: 458px;
	    height: 218px;
	    margin: 31px 0 0 80px;
	    border: 1px solid #dbdbdb;
	}
	.contac_list2 .contact_info {
	    width: 432px;
	    padding-left: 26px;
	}
	.contact_info p.ico_qq {
	    background: url('../../static/images/ico5.png') no-repeat left center;
	    text-indent: 25px;
	}
	.contact_info p.ico_email {
	    background: url('../../static/images/ico6.png') no-repeat left center;
	    text-indent: 25px;
	}
	.contact_info p.ico_tel {
	    background: url('../../static/images/ico7.png') no-repeat left center;
	    text-indent: 25px;
	}
	.contact_info p.ico_wb {
	    background: url('../../static/images/ico8.png') no-repeat left center;
	    text-indent: 25px;
	}
</style>