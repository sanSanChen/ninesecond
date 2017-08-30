<template>
	<div class="casebox">
        <div class="caselist">
          	<ul>
			  	<li v-for="list in lists">
	              <img :src="list.src">
	              <p>
	                {{list.text}}
	              </p>
	              <p>
	                {{list.site}}
	              </p>
            	</li>
          	</ul>
        </div>
    </div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return {
				lists:[
					{
						src:'../../../static/images/jjw.png',
						text:'家教王APP',
						site:'http://www.jiajiaoking.com/'
					},{
						src:'../../../static/images/jmdb.png',
						text:'9秒夺宝',
						site:'http://1.ninemiao.com/'
					}
				]
			}
		}
	}
</script>
<style type="text/css">
	.casebox {
	    width: 100%;
	}
	.caselist {
	    width: 1280px;
	    overflow: hidden;
	    margin: 0 auto;
	    padding: 20px 0;
	}
	.caselist ul {
	    width: 1320px;
	    margin-left: -40px;
	}
	.caselist li {
	    width: 288px;
	    float: left;
	    border: 1px solid #e5e5e3;
	    padding-bottom: 25px;
	    margin: 20px 0 20px 40px;
	}
	.caselist li img {
	    width: 288px;
	    height: 198px;
	    vertical-align: top;
	    padding-bottom: 26px;
	}
	.caselist li p {
	    height: 20px;
	    line-height: 20px;
	    font-size: 14px;
	    color: #4d4d4d;
	    padding: 0 14px;
	}
</style>