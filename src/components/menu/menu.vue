<template>
	<div class="menus" id="menu">
		<div class="right">
			<dl id="user">
				<dt><img src="../../common/img/pic.jpg"></dt>
				<dd>132*****593</dd>
			</dl>
			<ul>
				<router-link to="/home"><li class="active">首页</li></router-link>
				<router-link to="/room"><li class="active">直播</li></router-link>
				<router-link to="/competition"><li class="active">赛事</li></router-link>
				<router-link to="/attention"><li class="active">关注</li></router-link>
				<router-link to="/vip"><li class="active">VIP文章</li></router-link>
				<router-link to="/letter"><li class="active">私信</li></router-link>
			</ul>
		</div>
	</div>
</template>

<script type="text/javascript">
export default {
	name: 'menu'
}
</script>

<style lang="less">
@import '../../common/less/base.less';
.menus{
	width:100%;
	position:absolute;
	top:50px;
	bottom:0;
	left:100%;
	background:rgba(0,0,0,0.6);
	z-index:999;
	overflow-y:scroll;
	ul{
		text-align:center;
		list-style:none;
		line-height:30px;
		padding:8px 0;
		a{
			text-decoration:none;
		}
		li{
			font-size:0.14rem;
			color:@maincolor;
		}
	}
	.right{
		width: 145px;
		height:100%;
		background:@whites;
		float:right;
		dl{
			width: 145px;
			height:145px;
			background:@backcolor;
			text-align:center;
			font-size:0;
			padding:28px 0;
			dt{
				img{
					height:55px;
					border-radius:50%;
				}
			}
			dd{
				color:@maincolor;
				line-height:30px;
				font-size:0.14rem;
				margin-top:4px;
			}
		}
	}
}
</style>