<style>
	.inputCss{
		width:100%;
		height:30px;
		border-radius:2px;
		border:1px solid #DED5D5
	}

	.form-line{
		line-height:30px;
		margin-top:10px;
	}

	.form-line .label-line{
		display:inline-block;
		position:relative;
		text-align:right;
		padding-right:15px;
		width:120px;
	}

	.form-line .input-line{
		display:inline-block;
		box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
	}
</style>

<template>
	<div class="form-line">
	<label class="label-line">{{label}}</label>
		<div class="input-line">
			<input type="{{type}}" class="inputCss" value="{{data}}"/>
		</div>
	</div>
</template>

<script>
	export default {
		data () {
			return
		},

		props:{
			label:String,
			data:String,
			type:"String"
		}
	}
</script>