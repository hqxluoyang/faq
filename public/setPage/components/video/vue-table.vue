<style>
	.vuetable {
		width:100%;
		height:100%;
		position:relative;
	}

	.vuetable .width100{
		width:100px;
	}
	.vuetable .width150{
		width:150px;
	}

	.vuetable .width200{
		width:200px;
	}

	.vuetable .line-grid{
		display:inline-block;
		margin-left:10px;
		text-align:center;
	}


	.vuetable .header{
		height:50px;
		width:100%;
		line-height:50px;
		background:#ccc;
	}


	.vuetable .tableBody{
		background:green;
		width:100%;
		height:50px;
		line-height:50px;
	}
</style>

<template>
	<div class="vuetable">
		<div class="header">
			<p class="line-grid width100">序号</p>
			<p class="line-grid width100">序号</p>
			<p class="line-grid width100">序号</p>
			<p class="line-grid width100">序号</p>
			<p class="line-grid width100">序号</p>
		</div>
		<div class="tableBody">
			<p class="line-grid width100">sdfsdfsdf</p>
			<p class="line-grid width100">dfsdfsdf</p>
		</div>
	</div>
</template>

<script>

export default{
	data () {

	},

	props:{
		data:Object,
		header:Array
	}
}

</script>