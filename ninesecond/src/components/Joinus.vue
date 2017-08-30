<template>
	<div class="wrap">
		<v-location link="/joinus" msg="加入我们"></v-location>
		<div class="joinbox">
        <div class="join">
          <div class="join_l">
            <div class="join_tag">
              <span @click="click" id="operate">
                运营类
              </span>
              <span @click="click" id="technology">
                技术类
              </span>
              <span @click="click" id="comprehensive">
                综合类
              </span>
            </div>
            <div class="join_list">
              <div v-if="operate" class="join_listcnt hover">
                <div class="join_listcnt_tit">
                  <em>
                    运营专员
                  </em>
                  <em>
                    招聘人数：2人
                  </em>
                  <em>
                    招聘对象：全职
                  </em>
                </div>
                <p>
                  九秒新项目【9秒夺宝】http://1.ninemiao.com/                </p>
                <div class="join_listcnt_tit">
                  【您可以】：
                </div>
                <p>
                  1.相关网站（1.ninemiao.com等）的内容整合、功能优化、用户量提升；                </p>
                <p>
                  2.监控数据、分析数据，提升网站的流量；
                </p>
                <p>
                  3.公众号运营，用户量提升；
                </p>
                <p>
                  4.相关账户的申请、审核跟进，合同拟定，网站规范制定等工作；
                </p>
                <p>
                  5.项目进度跟进，促进项目顺利进行 ；
                </p>
                <br>
                <br>
                <div class="join_listcnt_tit">
                  【我们希望您具备以下条件】：
                </div>
                <p>
                  1.思维灵活，逻辑清楚，数据分析能力强；
                </p>
                <p>
                  2.有网站运营经验优先；
                </p>
                <p>
                  3.对微信营销推广有一定的经验优先；
                </p>
                <p>
                  4.大专或本科学历，优秀应届生亦可 ；
                </p>
                <p>
                  5.有活动策划经验者优先；
                </p>
                <br>
                <div class="join_listcnt_tit">
                  简历投递方式：
                </div>
                <p>
                  简历请直接发送至hr@ninemiao.com，邮件标题请注明姓名+应聘岗位                </p>
              </div>
              <div v-if="technology" class="join_listcnt">
                <div class="join_listcnt_tit">
                  <em>
                    中级PHP开发工程师
                  </em>
                  <em>
                    招聘人数：2人
                  </em>
                  <em>
                    招聘对象：全职
                  </em>
                </div>
                <div class="join_listcnt_tit">
                  【您可以】：
                </div>
                <p>
                  1.使用PHP语言完善和维护现有公司旗下产品；
                </p>
                <p>
                  2.根据公司产品发展方向，参与新项目开发，进行项目管理，维护已有程序的升级和错误更正；
                </p>
                <p>
                  3.与各部门保持良好沟通，能迅速理解、消化各方需求，并落实为具体的开发工作 ；
                </p>
                <br>
                <br>
                <div class="join_listcnt_tit">
                  【我们希望您具备以下条件】：
                </div>
                <p>
                  1.踏实、工作责任心强；良好的沟通能力与团队合作精神；能承受压力，乐于学习新知识，勇于创新；
                </p>
                <p>
                  2.有一年以上PHP网站开发经验，大专以上学历，精通PHP，熟悉MYSQL等数据库配置管理、性能优化等技术；
                </p>
                <p>
                  3.基本掌握XML、HTML/XHTML、CSS、Javascript、AJAX、JSON等Web页面技术；
                </p>
                <p>
                  4.熟练数据结构设计，学习、钻研能力强，有很好的逻辑分析能力；
                </p>
                <p>
                  5.有责任心，具备良好的沟通能力；
                </p>
                <br>
                <br>
                <div class="join_listcnt_tit">
                  <em>
                    高级PHP开发工程师
                  </em>
                  <em>
                    招聘人数：1人
                  </em>
                  <em>
                    招聘对象：全职
                  </em>
                </div>
                <div class="join_listcnt_tit">
                  【您可以】：
                </div>
                <p>
                  1. 根据公司产品发展方向，深入发掘和分析业务需求，撰写技术方案和系统设计；
                </p>
                <p>
                  2. 参与技术方案和系统设计评审；把握复杂系统的设计，确保系统的架构质量；
                </p>
                <p>
                  3. 编写核心部分代码、解决疑难问题；
                </p>
                <p>
                  4. 对现存系统进行宏观的思考，理解项目发展方向，合理规划框架、平台或组件；
                </p>
                <p>
                  5. 指导和培训工程师，让团队成员在你的影响下取得成长，为团队引入高效工作方法和科学思维方式。
                </p>
                <br>
                <div class="join_listcnt_tit">
                  【我们希望您具备以下条件】：
                </div>
                <p>
                  1、大专以上学历；
                </p>
                <p>
                  2、熟练掌握PHP语言，熟悉PHP开源框架，精通PHP+MySQL开发；
                </p>
                <p>
                  3、3-5年以上使用php开发的经验，对于你用过的开源框架，能理解到它的原理和机制；
                </p>
                <p>
                  4、熟悉数据库建模，具有数据库设计经验，熟练应用MySQL，丰富的MySQL优化经历；
                </p>
                <p>
                  5、具备Redis，Memcached, RabbitMQ等应用优化经验优先；
                </p>
                <p>
                  6、如有以下经历的优先录用：熟悉千万级别会员级别网站解决方案；高访问量、大并发系统重构经验。
                </p>
                <br>
                <br>
                <div class="join_listcnt_tit">
                  <em>
                    UI设计师
                  </em>
                  <em>
                    招聘人数：1人
                  </em>
                  <em>
                    招聘对象：全职
                  </em>
                </div>
                <div class="join_listcnt_tit">
                  【您可以】：
                </div>
                <p>
                  1.负责8684系列产品的web端、手机端视觉设计；
                </p>
                <p>
                  2.为网站及移动端产品界面进行视觉风格推导，并参与设计规范的制定；
                </p>
                <p>
                  3.为日常的运营活动及产品功能维护提供视觉支持和持续优化；
                </p>
                <p>
                  4.为公司产品提供包括图形设计和物料设计等内容的设计；
                </p>
                <p>
                  5.不断学习、研究业界最新的交互应用，拓宽设计思路，不断提升产品易用性，给用户更完美体验；
                </p>
                <br>
                <div class="join_listcnt_tit">
                  【我们希望您具备以下条件】：
                </div>
                <p>
                  1.具有扎实的美术功底，对字体设计及色彩感觉敏锐，人机交互、设计类、计算机、多媒体等相关专业优先；
                </p>
                <p>
                  2.熟悉运用PHOTOSHOP、ILLUSTRATOR等相关设计软件；
                </p>
                <p>
                  3.掌握Web网页设计技能，熟悉HTML和CSS者优先；
                </p>
                <p>
                  4.能够主动与软件工程师沟通协调，确保UI效果的无缝整合及实现；
                </p>
                <p>
                  5.积极进取，有团队合作精神，愿意多方听取意见；
                </p>
                <br>
                <br>
                <div class="join_listcnt_tit">
                  <em>
                    IOS开发工程师
                  </em>
                  <em>
                    招聘人数：1人
                  </em>
                  <em>
                    招聘对象：全职
                  </em>
                </div>
                <div class="join_listcnt_tit">
                  【您可以】：
                </div>
                <p>
                  1.独立思考，优化产品实现方式和代码结构；
                </p>
                <p>
                  2.相关文档规范编写，关键技术的研究开发；
                </p>
                <p>
                  3.负责从事 iPhone/iPad 等平台应用程序的开发及测试；
                </p>
                <p>
                  4.负责按照项目需要开发和维护Apps；
                </p>
                <p>
                  5.制作有关Apps应用，并结合反馈过来的信息及时进行改良；
                </p>
                <br>
                <div class="join_listcnt_tit">
                  【我们希望您具备以下条件】：
                </div>
                <p>
                  1.大专或本科学历，计算机、软件相关专业，热爱移动平台方向，熟悉移动平台开发理念；
                </p>
                <p>
                  2.熟悉Objective-C语言，XCode以及Mac OS系统；
                </p>
                <p>
                  3.熟悉C和C++程序开发，理解OOP的基本原则，熟悉常用的设计模式；
                </p>
                <p>
                  4.熟悉常见网络通信机制，对Socket通信、TCP/IP和http/https有较深刻的理解和经验；
                </p>
                <br>
                <br>
                <div class="join_listcnt_tit">
                  <em>
                    前端开发工程师
                  </em>
                  <em>
                    招聘人数：1人
                  </em>
                  <em>
                    招聘对象：全职
                  </em>
                </div>
                <div class="join_listcnt_tit">
                  【您可以】：
                </div>
                <p>
                  1.根据产品原型开发前端代码；
                </p>
                <p>
                  2.解决主流浏览器及其不同版本之间的兼容性问题；
                </p>
                <p>
                  3.负责相关产品的前端维护；
                </p>
                <p>
                  4.前端架构工作规范制定及优化；
                </p>
                <br>
                <div class="join_listcnt_tit">
                  【我们希望您具备以下条件】：
                </div>
                <p>
                  1.一至两年前端开发经验，大专或本科学历；
                </p>
                <p>
                  2.了解后端语言PHP，看懂即可；
                </p>
                <p>
                  3.掌握javascript，熟练应用一种或以上js框架；
                </p>
                <p>
                  4.有HTML5或手机端web开发经验优先；
                </p>
                <br>
                <br>
                <div class="join_listcnt_tit">
                  <em>
                    运维工程师
                  </em>
                  <em>
                    招聘人数：1人
                  </em>
                  <em>
                    招聘对象：全职
                  </em>
                </div>
                <div class="join_listcnt_tit">
                  【您可以】：
                </div>
                <p>
                  1.维护公司生产环境，监控并及时处理报警信息或发现的问题，以确保生产环境稳定高效运行；
                </p>
                <p>
                  2.生产环境数据备份与恢复；
                </p>
                <p>
                  3.关注与生产环境相关的安全问题，及时汇报和处理；
                </p>
                <p>
                  4.与提高生产力相关的新技术研究与实验；
                </p>
                <p>
                  5.能独立搭建LNMP架构；
                </p>
                <p>
                  6.领导交办的其它事项；
                </p>
                <br>
                <div class="join_listcnt_tit">
                  【我们希望您具备以下条件】：
                </div>
                <p>
                  1.要求有工作经验，熟悉Linux系统维护与mysql数据库，有大型网站维护经验者优先；
                </p>
                <p>
                  2.为人踏实，能独立开展工作，积极上进，善于学习，有良好的沟通能力；
                </p>
                <p>
                  3.有钻研精神，能阅读英文技术资料。
                </p>
                <br>
                <div class="join_listcnt_tit">
                  简历投递方式：
                </div>
                <p>
                  简历请直接发送至hr@ninemiao.com，邮件标题请注明姓名+应聘岗位                </p>
              </div>
              <div v-if="comprehensive" class="join_listcnt">
                <div class="join_listcnt_tit">
                  <em>
                    部门助理
                  </em>
                  <em>
                    招聘人数：2人
                  </em>
                  <em>
                    招聘对象：全职
                  </em>
                </div>
                <div class="join_listcnt_tit">
                  【岗位职责】：
                </div>
                <p>
                  1. 协助部门经理完成日常网站运营等相关工作；
                </p>
                <p>
                  2. 跟进需求的执行，优化产品体验，提升网站的流量；
                </p>
                <p>
                  3. 负责日常数据报表整理、分析及反馈；
                </p>
                <p>
                  4. 负责行业信息和竞品信息的收集，对互联网行业信息收集及分析，与业界保持紧密联系 。
                </p>
                <br>
                <div class="join_listcnt_tit">
                  【岗位要求】：
                </div>
                <p>
                  1. 具有同岗位工作经验，优秀应届生亦可；
                </p>
                <p>
                  2. 具有良好的沟通协调能力，工作积极主动，责任心强；
                </p>
                <p>
                  3. 触觉敏感，具备优秀的分析、理解能力，对数据变化快速反应；
                </p>
                <p>
                  4. 对互联网行业感兴趣，有工作激情，抗压能力强。
                </p>
                <br>
                <div class="join_listcnt_tit">
                  简历投递方式：
                </div>
                <p>
                  简历请直接发送至hr@ninemiao.com，邮件标题请注明姓名+应聘岗位                </p>
              </div>
            </div>
          </div>
          <div class="join_r">
            <div class="join_contact">
              <div class="join_contact_tit">
                招聘联系
              </div>
              <p>
                电 话：4006-258-380              </p>
              <p>
                QQ：864334252、1761993143              </p>
              <p>
                新浪微博：@九秒科技
              </p>
              <p>
                联系人：王小姐
              </p>
              <p>
                E-mail：hr@ninemiao.com              </p>
              <p class="center">
                (请注明姓名+应聘岗位)
              </p>
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
				operate:true,
				technology:false,
				comprehensive:false
			}
		},
		components:{
			'v-location':Location
		},
		methods:{
			click(ev){
				this.oEvt=ev||event;
				this.id=this.oEvt.target.id||this.oEvt.srcElement.id;
				this.operate=false;
				this.technology=false;
				this.comprehensive=false;
				switch(this.id){
					case 'operate':
						this.operate=true;
					break;
					case 'technology':
						this.technology=true;
					break;
					case 'comprehensive':
						this.comprehensive=true;
					break;
				}
			}
		}
	}
</script>
<style type="text/css">
	.joinbox {
	    width: 100%;
	}
	.join {
	    width: 1280px;
	    margin: 0 auto;
	    overflow: hidden;
	    padding: 30px 0;
	}
	.join_l {
	    width: 1000px;
	    float: left;
	}
	.join_r {
	    width: 260px;
	    float: right;
	}
	.join_tag {
	    width: 1000px;
	    overflow: hidden;
	    border-bottom: 1px solid #dbdbdb;
	    padding-bottom: 30px;
	}
	.join_tag span:hover, .join_tag span.hover {
	    color: #fff;
	    background: #4aa2e1;
	}
	.join_tag span {
	    display: inline-block;
	    width: 160px;
	    height: 54px;
	    line-height: 54px;
	    font-size: 16px;
	    background: #e5e5e5;
	    color: #686868;
	    margin: 0 45px;
	    text-align: center;
	    border-radius: 5px;
	    float: left;
	    cursor: pointer;
	}
	.join_list {
	    width: 980px;
	    padding: 0 10px;
	    overflow: hidden;
	}

	.join_list .join_listcnt {
	    width: 960px;
	    float: left;
	    padding: 10px 0;
	}
	.join_listcnt_tit {
	    line-height: 25px;
	    font-weight: bold;
	    color: #464545;
	}
	.join_listcnt p {
	    line-height: 25px;
	    color: #464545;
	}
	.join_listcnt_tit em {
	    padding-right: 20px;
	    color: #337fe5;
	}
	.join_contact {
	    width: 260px;
	}
	.join_contact_tit {
	    width: 260px;
	    height: 16px;
	    line-height: 16px;
	    font-size: 16px;
	    color: #333;
	    padding-bottom: 15px;
	}
	.join_contact p {
	    line-height: 14px;
	    font-size: 14px;
	    color: #333;
	    padding: 5px 0;
	}
</style>