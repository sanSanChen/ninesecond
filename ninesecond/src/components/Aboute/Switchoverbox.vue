<template>
	<div class="switchoverbox">
        <div class="switchover">
          <div class="switchover_tag">
            <a @click="click" id="about">
              关于九秒
            </a>
            <a @click="click" id="culture">
              企业文化
            </a>
            <a @click="click" id="product">
              旗下产品
            </a>
            <a @click="click" id="welfare">
              薪酬福利
            </a>
          </div>
          <div class="switchover_cntbox">
            <div v-if="about" class="switchover_cnt">
              <div class="article1 articlecss">
                <div class="articlecss_row">
                  上海九秒网络科技有限公司（下简称九秒）成立于2015年，由国内顶级产品及技术专家创建，是一家专注于互联网信息服务及移动互联网产品开发的企业。
                </div>
                <br>
                <div class="articlecss_tit blue">
                  『公司理念』
                </div>
                <br>
                <div class="articlecss_row">
                  自公司成立以来，九秒一直以“为用户带来实在价值”为经营理念，以“简单、直接、快速”为经营准则，致力于为广大用户打造网络时代全方位的生活信息服务平台。
                </div>
                <br>
                <div class="articlecss_tit blue">
                  『公司产品』
                </div>
                <br>
                <div class="articlecss_row">
                  九秒致力于互联网信息服务、移动互联网应用开发领域。目前九秒旗下共推出1款手机应用（Android及iOS平台），家教王。截止至今，家教王应用安装量超过10万，日均活跃用户超过2万，日启动次数超过5万。目前下载量保持高速增长。同时，九秒还运营有9秒夺宝平台等。                </div>
                <br>
                <div class="articlecss_tit blue">
                  『发展历程』
                </div>
                <br>
                <p>
                2015年</p>
                <p>
                  9秒夺宝上线</p>
                <p>
                  家教王上线</p>
                <br>
                <div class="articlecss_tit blue">
                  『公司团队』
                </div>
                <br>
                <div class="articlecss_row">
                  九秒目前规模5人左右，平均年龄不超过28岁，是业内少有的男女比例平均的团队，比一般的互联网企业更具有活力，团队间协作更加高效、和谐。其核心人员由来自大型企业服务多年的技术工程师、业内经验丰富的设计师和运营专家组成。而且，九秒不断从各大高校汲取年轻、富有潜力的新生力量，为应届生提供广阔的平台。在注重员工业务能力提升的同时，也会结合员工的兴趣爱好及个人特长，让其可以向多种方向发展。
                </div>
                <br>
                <div class="articlecss_row">
                  九秒是一个态度务实、乐于分享、积极向上的团队，一点点的积累让我们不断壮大，期待有更好的你加入我们。
                </div>
              </div>
              <div class="switchover_cnt_r">
                <img src="../../../static/images/37.png">
                <img src="../../../static/images/38.png">
              </div>
            </div>
            <div v-if="culture" class="switchover_cnt">
              <div class="article1 articlecss">
                <div class="articlecss_tit blue">
                  『简单 快速 直接』
                </div>
                <br>
                <p>
                  简单：简单的做事、简单的做人
                </p>
                <br>
                <p>
                  快速：快速执行、高效工作
                </p>
                <br>
                <p>
                  直接：沟通直接、反馈及时
                </p>
                <br>
                <br>
                <div class="articlecss_row">
                  我们坚持“以人为本”，倡导开放、平等的工作环境，尊重、鼓励并激发员工的自主性和创造力，注重每位员工的发展和学习，致力于为员工营造轻松和谐、富有激情并且充满乐趣的工作氛围，帮助员工最大程度地实现自我价值，以达到公司与员工个人发展相互协调、相互促进的双赢局面。我们提供具有市场竞争力的薪酬待遇、人性化的福利制度、专业的岗位培训、广阔的晋升空间及丰富多彩的员工活动，力求为员工创造最合适的发展平台。
                </div>
                <br>
                <br>
                <br>
                <div class="articlecss_tit blue">
                  『公司语录』
                </div>
                <br>
                <p>
                  1. 只求进步 不求完美
                </p>
                <br>
                <p>
                  2. 既然选择 就要信任
                </p>
                <br>
                <p>
                  3. 所有的错都是我们的错
                </p>
                <br>
                <p>
                  4. 主动沟通 等于进步
                </p>
                <br>
                <p>
                  5. 敢想敢做 不惧权威
                </p>
                <br>
                <p>
                  6. 没有进步 就被淘汰
                </p>
                <br>
                <p>
                  7. 多做事 少攀比
                </p>
                <br>
                <p>
                  8. 任何岗位都能有成就
                </p>
              </div>
              <div class="switchover_cnt_r">
                <img src="../../../static/images/37.png">
                <img src="../../../static/images/38.png">
              </div>
            </div>
            <div v-if="product" class="switchover_cnt">
              <div class="productbox">
                <div class="product_tit">
                  <div>
                    <span>
                      PC产品
                    </span>
                  </div>
                </div>
                <div class="product_list product_list1">
                  <ul>
                    <li>
                      <a href="http://1.ninemiao.com/" alt="9秒夺宝" target="_blank">
                        <img src="../../../static/images/8684cxlogo.png">
                      </a>
                      <p class="title">
                        <a href="http://1.ninemiao.com/" target="_blank">
                          9秒夺宝                        </a>                      </p>
                      <p class="desc">
                        1元夺宝网专业1元趣味购物平台
                      </p>
                    </li>
                    <li>
                      <a href="http://www.ninemiao.com/" title="新产品研发中" target="_blank">
                        <img src="../../../static/images/8684shlogo.png">
                      </a>
                      <p class="title">
                        <a href="http://www.ninemiao.com/" target="_blank">
                          新产品研发中                        </a>                      </p>
                      <p class="desc">
                        感谢您的期待！
                      </p>
                    </li>
                    <li>
                      <a href="http://www.ninemiao.com/" title="新产品研发中" target="_blank">
                        <img src="../../../static/images/dwqlogo.png">
                      </a>
                      <p class="title">
                        <a href="http://www.ninemiao.com/" target="_blank">
                          新产品研发中                        </a>                      </p>
                      <p class="desc">
                        感谢您的期待！
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="productbox">
                <div class="product_tit">
                  <div>
                    <span>
                      APP产品
                    </span>
                  </div>
                </div>
                <div class="product_list product_list1">
                  <ul>
                    <li>
                      <a href="http://www.jiajiaoking.com/" alt="家教王" target="_blank">
                        <img src="../../../static/images/qxylogo.png">
                      </a>
                      <p class="title">
                        <a href="http://www.jiajiaoking.com/" target="_blank">
                          家教王                        </a>                      </p>
                      <p class="desc">
                        提供全国范围内与大学生面对面沟通学习的教育平台
                      </p>
                    </li>
                    <li>
                      <a href="http://www.ninemiao.com/" title="新产品研发中" target="_blank">
                        <img src="../../../static/images/wxydlogo.png">
                      </a>
                      <p class="title">
                        <a href="http://www.ninemiao.com/" target="_blank">
                      新产品研发中                        </a>                      </p>
                      <p class="desc">
                        感谢您的期待！
                      </p>
                    </li>
                    <li>
                      <a href="http://www.ninemiao.com/" title="新产品研发中" target="_blank">
                        <img src="../../../static/images/ydgclogo.png">
                      </a>
                      <p class="title">
                        <a href="http://www.ninemiao.com/" target="_blank">
                      新产品研发中                        </a>                      </p>
                      <p class="desc">
                        感谢您的期待！
                      </p>
                    </li>
                    <li>
                      <a href="http://www.ninemiao.com/" alt="新产品研发中" target="_blank">
                        <img src="../../../static/images/3145logo.png">
                      </a>
                      <p class="title">
                        <a href="http://www.ninemiao.com/" target="_blank">
                      新产品研发中                        </a>                      </p>
                      <p class="desc">
                        感谢您的期待！
                      </p>
                    </li>
                    <li>
                      <a href="http://www.ninemiao.com/" title="新产品研发中" target="_blank">
                        <img src="../../../static/images/lifelogo.png">
                      </a>
                      <p class="title">
                        <a href="http://www.ninemiao.com/" target="_blank">
                          新产品研发中                        </a>                      </p>
                      <p class="desc">
                        感谢您的期待！
                      </p>
                    </li>
                    <li>
                      <a href="http://www.ninemiao.com/" title="新产品研发中" target="_blank">
                        <img src="../../../static/images/86buslogo.png">
                      </a>
                      <p class="title">
                        <a href="http://www.ninemiao.com/" target="_blank">
                      新产品研发中                        </a>                      </p>
                      <p class="desc">
                        感谢您的期待！
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="productbox"><div class="product_tit"></div>
              </div>
            </div>
            <div v-if="welfare" class="switchover_cnt hover">
              <div class="article2 articlecss">
                <div class="articlecss_tit">
                  工作时间
                </div>
                <br>
                <p>
                  公司充分关怀员工，主张健康、合理、高效的工作节奏，实行业内少有的人性化“965工作模式”：朝九晚六五天工作制，每天工作时长7.5小时。
                </p>
                <br>
                <div class="articlecss_tit">
                  休假制度
                </div>
                <br>
                <p>
                  在保证国家法定节假日的基础上，公司更加人性化调整休假时间，让假期变得更完整。入职满一年以上的员工可享受每年5-15天的带薪假期，并且每月给予带薪病假以关怀员工。
                </p>
                <br>
                <div class="articlecss_tit">
                  薪资构成
                </div>
                <br>
                <p>
                  基本的薪资保障及各项补贴+灵活的薪资制度，根据各个的岗位、工作经验、技术能力的不同，设置业内具有竞争力的薪资，同时根据工作及项目情况，不定时提供相应的奖金奖励；年终奖或年底双薪则依据公司当年盈利情况而定。
                </p>
                <br>
                <div class="articlecss_tit">
                  调薪制度
                </div>
                <br>
                <p>
                  从转正开始，每半年有一次加薪的机会，是否加薪及加薪幅度则根据工作情况、个人成长决定。
                </p>
                <br>
                <div class="articlecss_tit">
                  六险一金
                </div>
                <br>
                <p>
                  每位正职员工都享有五险（养老保险、医疗保险、失业保险、工伤保险、生育保险），以及住房公积金待遇，另外，入职满半年以上的员工将享有公司为员工全额购买的商业保险，最大限度的为员工提供综合的保障。
                </p>
				<br>
                <div class="articlecss_tit">
                  用餐福利
                </div>
                <br>
                <p>
                  每个工作日均免费提供午餐和下午茶，员工也可直接选择餐费补贴，补贴将随工资发放，如果有加班情况，亦提供免费加班餐。而下午茶种类多样，广式糖水、时令水果、零食小吃、酸奶、雪糕应有尽有。
                </p>
				<br>
                <div class="articlecss_tit">
                  员工活动
                </div>
                <br>
                <p>
                  每周，小型员工活动一次，乒乓球、羽毛球、桌球、保龄球、电影等类型丰富，自由选择。
                </p>
                <br>
                <p>
                  每月，每位员工均给予一定的活动经费，各部门可以根据活动经费组织出游、聚会、唱K，也可以跨部门联谊等等。
                </p>
                <br>
                <p>
                  每年，一次全员年度春/秋游，活跃内部环境，促进同事间的交流，增强团队意识。
                </p>
                <br>
                <div class="articlecss_tit">
                  生日/节日礼品
                </div>
                <br>
                <p>
                  公司定期为员工举办集体生日会，并为每位员工准备生日贺礼。在端午、中秋等传统节日，公司还将发放节日礼金及礼品等。
                </p>
                <br>
                <div class="articlecss_tit">
                  读书基金
                </div>
                <br>
                <p>
                  每位正式员工每个月都可支取一定金额的读书基金，用于购买书籍，进行自我提升。
                </p>
                <br>
                <div class="articlecss_tit">
                  健康基金
                </div>
                <br>
                <p>
                  除了关注工作，更关注员工的健康，入职满一年的员工均可享受免费年度健康体检。
                </p>
                <br>
                <div class="articlecss_img">
                  <img src="../../../static/images/35.jpg">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return {
				about:true,
				culture:false,
				product:false,
				welfare:false
			}
		},
		methods:{
			click(ev){
				this.oEvt=ev||event;
				this.id=this.oEvt.target.id||this.oEvt.srcElement.id;
				this.about=false;
				this.culture=false;
				this.product=false;
				this.welfare=false;
				switch(this.id){
					case 'about':
						this.about=true;
					break;
					case 'culture':
						this.culture=true;
					break;
					case 'product':
						this.product=true;
					break;
					case 'welfare':
						this.welfare=true;
					break;
				}
			}
		}
	}
</script>
<style type="text/css">
	.switchoverbox {
	    width: 100%;
	}
	.switchover {
	    width: 1280px;
	    margin: 0 auto;
	}
	.switchover_tag {
	    width: 1280px;
	    overflow: hidden;
	    padding: 43px 0 41px;
	    border-bottom: 1px solid #dbdbdb;
	}
	.switchover_tag a {
	    float: left;
	    width: 166px;
	    height: 54px;
	    line-height: 54px;
	    color: #686868;
	    background: #e5e5e5;
	    font-size: 18px;
	    margin: 0 77px;
	    border-radius: 5px;
	    text-align: center;
	}
	.switchover_tag a:hover, .switchover_tag a.hover {
	    color: #fff;
	    background: #4aa2e1;
	}
	.switchover_cntbox {
	    width: 1280px;
	    overflow: hidden;
	    padding-bottom: 40px;
	}
	.switchover_cnt {
	    width: 1280px;
	    overflow: hidden;
	}
	.switchover_cnt .article1 {
	    width: 880px;
	    float: left;
	    padding: 25px 40px 0;
	}
	.switchover_cnt_r {
	    float: right;
	    width: 320px;
	}
	.articlecss_row {
	    font-size: 12px;
	    line-height: 20px;
	    text-indent: 2em;
	}
	.articlecss_tit {
	    font-size: 14px;
	    font-weight: bold;
	}
	.blue {
	    color: #337FE5;
	}
	.articlecss p {
	    font-size: 12px;
	    line-height: 20px;
	}
	.switchover_cnt_r img {
	    width: 320px;
	    padding-top: 40px;
	}
	/* 旗下产品 */
	.productbox {
	    width: 1280px;
	}
	.product_tit {
	    display: block;
	    width: 1280px;
	    height: 30px;
	    text-align: center;
	    padding: 50px 0;
	}
	.product_tit div {
	    display: inline-block;
	    width: 600px;
	    height: 14px;
	    border-bottom: 1px solid #4d4b4c;
	    position: relative;
	}
	.product_tit div span {
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
	.product_list1, .product_list2 {
	    width: 1280px;
	    overflow: hidden;
	}
	.product_list1 ul, .product_list2 ul {
	    width: 1310px;
	    margin-left: -30px;
	}
	.product_list1 li {
	    width: 250px;
	    padding: 20px;
	    text-align: center;
	    margin-left: 30px;
	    float: left;
	}
	.product_list1 li a {
	    width: 250px;
	    height: 158px;
	    display: block;
	}
	.product_list1 li p.title {
	    padding: 13px 0 5px;
	}
	.product_list1 li p.title a {
	    height: 25px;
	    line-height: 25px;
	    color: #4d4d4d;
	    font-size: 15px;
	}
	.product_list1 li a {
	    width: 250px;
	    height: 158px;
	    display: block;
	}
	.product_list1 li p.desc {
	    height: 75px;
	    line-height: 25px;
	    overflow: hidden;
	    font-size: 15px;
	    color: #a5a5a5;
	    text-align: left;
	}
</style>