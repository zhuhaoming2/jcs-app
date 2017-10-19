<template>
	<div class="header">
	<span class="back" @click="back()">返回</span>
        <div v-html="innerelement">
        	<h1 class="jcs-title">聊天室</h1>
        </div>
        <span ref="menu" class="menu">私信</span>
    </div>
</template>
<script type="text/javascript">
export default {
	props: ['innerelement'],
	name: 'publickhader',
	methods: {
		back: function(){
			window.history.go(-1)
		}
	}
}
</script>
<style lang="less">
@import "../../common/less/base.less";
	.header{
	  height:50px;
	  line-height:50px;
	  background:@reds;
	  color:#fff;
	  font-size:0.12rem;
	  text-align:center;
	  z-index:666;
	}
	.header div{
		display: inline-block;
	}
	.back{
	  float: left;
	  padding:0 10px;
	  background: url('../../common/img/back.png') no-repeat center;
	  background-size:8px 17px;
	  color: @transparent;
	}
	.menu{
	  color: @transparent;
	  float:right;
	  padding:0 10px;
	  background: url('../../common/img/menu.png') no-repeat center;
	  background-size: 0.20rem auto;
	}
	h1{
	  display:inline-block;
	  font-size:0.18rem;
	}
</style>