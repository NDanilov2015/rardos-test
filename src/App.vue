<template>
<div id="app">
	<rar-window1></rar-window1>
</div>
</template>

<script>

import RarWindow1 from "./components/RarWindow1.vue";

export default {
	name: 'app',
	components: { RarWindow1,  },

	data () {
		return {
			msg: '',
		};
	},

}
</script>

<style>
#app {
	height: 92vh;
	
	font-size: 1.51vw; /* Nice adaptive font feature */
	font-family: Menlo, Consolas, monospace;
}
</style>
