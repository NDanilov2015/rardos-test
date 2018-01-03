<template>
<div class="common-wrapper">
	
	<div class="title-line">
		<div id="title-name">{{ title }}</div>
		<div id="title-percent">{{ percent }}%</div>
	</div>

	<div class="ind-wrapper">
		<div :style="getIndLayer1_Style">&nbsp;</div>
	</div>
	
</div>
</template>

<script>

export default {
	props: {
		'title' : { type: String, default: 'Filename.ext' },
		'percent' : { type: Number, default : 0 },
	},

	data() {
		return {};
	},

	computed: {
		getIndLayer1_Style() {
			return "width: " + this.percent + "%; background-color: darkcyan; z-index:1; height: 100%;";
		},
	},
}
</script>

<style lang="css">

.common-wrapper {
	width: 70%;
}

.ind-wrapper {
	z-index: 0;
	background-color: yellow;
	background-image: url("data:image/svg+xml;utf8, \
	<svg xmlns='http://www.w3.org/2000/svg' version='1.1' width='10px' height='10px'> \
	<rect x='0' y='0' width='170px' height='50px'\
	  style='fill: yellow;  fill-opacity: 0.7; '/> \
	<text x='8' y='10' style='fill: darkblue; text-anchor: middle' font-size='16'> \
	  ▒</text></svg>");
}

.title-line { 
	width: 100%;
	display: flex;
	justify-content: space-between;
}

/*
#title-name { align-self: flex-start; }
#title-percent { align-self: flex-end; }
*/
</style>
