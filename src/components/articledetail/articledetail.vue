<template>
    <div class="article-detail">
    	
    </div>
</template>
<script type="text/javascript">
import shareFn from "common/js/sharefn"
import axios from "axios"
export default {
	name: 'articleDetail',
	data(){
		return {
			articleData: []
		}
	},
	created(){
		this.getData();
		axios.get()
	},
	methods: {
		getData(){
			this.$nextTick(function(){
				console.log(this.$ajax)
				this.$http.jsonp(
					'http://www.jingcaishuo.com/top-header?time=' + Math.random(),
					{ 
						params: {
							language: 'M',
							userId: shareFn.getUserId(),
							securityCode: shareFn.getSecurityCode(),
							articleId: this.$router.currentRoute.query.id 
						}
					}
				).then(function(res){
					console.log(res.data.code)
					if(res.data.code != '0000'){
						console.log('无效的文章ID')
					}else{
						console.log(res.data)
					}
				}).then(function(err){
					console.log(err)
				})
			})
		},
		render (){

		}
	}
}

</script>
<style lang="less">
@import "../../common/less/base.less";
.article-detail{
	position:fixed;
	left:0;
	top:0;
	right:0;
	left:0;
	bottom:0;
	z-index:9999999;
	background:@backcolor;
}

</style>