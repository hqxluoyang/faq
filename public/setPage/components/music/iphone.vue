<style>
.containerPanel{
	width:300px;
	height:500px;
	position:relative;
	float:right;
	border:solid 1px #ccc;
	margin-right:25px;
	padding:5px;
	overflow-x:hidden;
	overflow-y:scroll;
	box-shadow: 2px 2px 2px #ccc;
}

.phoneC{
	position:relative;
	height:100%;
}
</style>

<template>
	<div class="containerPanel">
		<div id="phonePanel" class="phoneC">
		</div>
	</div>
</template>

<script>
import Ps from 'perfect-scrollbar'

	export default{
		props:{
			data:String
		},

		ready(){
			var phonePanel = document.getElementById('phonePanel');
			Ps.initialize(phonePanel, {
			  wheelSpeed: 2,
			  wheelPropagation: true,
			  minScrollbarLength: 20
			});

			//var phonePanel = document.getElementById('phonePanel');
			//Ps.initialize(phonePanel);
		}
	}
</script>