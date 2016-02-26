<style>
	.mainContainer{
		padding-left:100px;
		margin:0 auto;
		position:relative;
		top:72px;
	}
</style>

<template>
	<div class="mainContainer">
		<router-view :is="currentView" class="view" transition="test" transition-mode="out-in" keep-alive></router-view>
	</div>
</template>