<template>
	<div class="product_box">
		<div class="product">
			<div class="protit">
				<div>
					<span>产品和服务</span>
				</div>
			</div>
			<div class="prolist">
				<ul>
					<li>
						<router-link to="/product">
							<img src="../../../static/images/3.png">
							<p class="title">网站建设</p>
							<p> website construction</p>
						</router-link>
					</li>
					<li>
						<router-link to="/product">
							<img src="../../../static/images/4.png">
							<p class="title">网站优化推广</p>
							<p>web site optimization and promotion</p>
						</router-link>
					</li>
					<li>
						<router-link to="/product">
							<img src="../../../static/images/5.png">
							<p class="title">整合营销</p>
							<p>  Integrated-marketing</p>
						</router-link>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript"></script>
<style type="text/css">
	.product_box{
		width: 100%;
	}
	.product{
		width: 1280px;
		margin: 0 auto;
		padding: 80px 0 85px;
	}
	.protit{
	    display: block;
	    width: 1280px;
	    height: 30px;
	    text-align: center;
	    padding-bottom: 50px;
	}
	.protit div {
	    display: inline-block;
	    width: 600px;
	    height: 14px;
	    border-bottom: 1px solid #4d4b4c;
	    position: relative;
	}
	.protit div span {
	    display: inline-block;
	    width: 120px;
	    height: 30px;
	    line-height: 30px;
	    padding: 0 10px;
	    background: #fff;
	    font-size: 20px;
	    color: #4e4e4e;
	    position: absolute;
	    left: 230px;
	    top: 0;
	}
	.prolist {
	    width: 1280px;
	    overflow: hidden;
	    padding: 0 10px;
	}
	.prolist li {
	    float: left;
	    width: 380px;
	    text-align: center;
	    padding: 0 20px;
	}
	.prolist li a {
	    display: inline-block;
	    width: 380px;
	}
	.prolist li img {
	    width: 150px;
	    height: 150px;
	    vertical-align: top;
	}
	.prolist li p.title {
	    height: 18px;
	    font-size: 18px;
	    color: #4c4c4c;
	    padding: 15px 0 10px;
	}
	.prolist li p {
	    height: 14px;
	    line-height: 14px;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    white-space: nowrap;
	    color: #989898;
	    font-size: 13px;
	}
</style>