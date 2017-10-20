<template>
	<div class="roomindex">
		123
	</div>
</template>

<script type="text/javascript">
export default {
	name: 'roomindex',
	props: ['item'],
	created(){
		console.log(this.$route.params)
	}
}
</script>

<style lang="less">
@import '../../common/less/base.less';
</style>