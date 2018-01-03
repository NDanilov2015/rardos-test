<template>
<div id="wrapper">
	<div id="main-window">
		
		<div class="out-of-grid">
			<div id="mw-title">Files</div>
		</div>
		
		<div id="row1" style="margin-left: 2%;">
			<div class="row1-col-title">Operation</div>
			<div class="row1-col-title">Name</div>
			<div class="row1-col-title">Result</div>
			<br/>
			<template v-for="el in viewPortData">
				<span class="operation-col">{{ el[0] }}</span>
				<span class="filename-col">{{ el[1] }}</span>
				<span class="result-col">{{ el[2] }}</span>
			</template>

		</div><!-- end row1 -->

		<div id="row2">
		
			<div class="info-subwindow" id="indicator-window">
				<div class="sw-title">Current</div>
				<percent-indicator style="margin-left: 2%;" id="indicator" :title="getCurrentFileTitle" :percent="percentOfCurrent"></percent-indicator>
			</div>
		
			<div class="info-subwindow">
				<div class="sw-title">Total</div>
				<br/>
				<div style="margin-left: 2%;">Time consumed: 00:00:00</div>
				<button v-on:click="startFileListRun" style="margin-left: 2%;">Start!</button>
			</div>
		
		</div><!-- end row2 -->
		
		<div id="row3">
			<div class="info-subwindow">
				<div class="sw-title">State</div>
				<div class="info-text" style="margin-left: 2%;">Testing of RAR1.rar archive</div>
			</div>
			<div class="info-subwindow"><div class="sw-title">Statistics</div></div>
		</div>
		
	</div><!-- end main-window -->
</div><!--end wrapper -->
</template>
<script>

import { testFileList } from "./TestData.js";
import PercentIndicator from "./PercentIndicator.vue";

export default {

	components: { 'PercentIndicator' : PercentIndicator, },

	data: function() {
		return {
		  testData: testFileList,
		  viewPortData: [],
		  viewPortNumbers : 17,
		  percentOfCurrent: 0,
		};
	}, //end data()


	computed: {
		getCurrentFileTitle(){
			let currentRow = this.viewPortData[this.viewPortData.length - 1];
			if (currentRow != null) { return currentRow[1] }
			else { return '' };
		},
	},

	methods: {
	
		startFileListRun() {
			var self = this; //Save link to "this" object, as inside setTimeout() "this" not be right object!
			/* Loop with step-by-step delay */
			var i = 0;
			
			var id = window.setInterval(function(){
			if(i >= self.viewPortNumbers) {
			  clearInterval(id);
			  return;
			};

			self.viewPortData.push(self.testData[i]); //

			/* Individual file percent indicator */
			var percent = 0;
			var id2 = window.setInterval(function() {
			
				if (self.percentOfCurrent >=100) {
					clearInterval(id2);
					self.percentOfCurrent = 0;
					return;
				}

				self.percentOfCurrent++;
			}, 10);
			/* ---------------------------------- */
			/*
			self.nextTick(function () {  // DOM updated
			});*/

			i++;
		  }, 500); //end id = window.setInterval() 

		}, //end startFileList()
	},

}//end export default
</script>

<style lang="css">

#wrapper {
	background-color: darkblue;
	padding: 15px;
	width: 97%;
	height: 87vh;
	overflow: hidden;
}

#main-window {
	background-color: darkblue;
	width: 99%;
	height: 85vh;

	color: cyan;
	border: 4px double;
	position: relative;

	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 4fr 1fr 1fr;
}

#mw-title {
	/* !!! Interesting !!! 	*/
	position: absolute;
	left: 2%;
	top: -12px;

	background-color: darkblue;
	color: lime;

	font-size: 1em;
	padding-left: 1%;
	padding-right: 1%;
}

#row1 {
	grid-column: 1/3;
	grid-row: 1/2;

	overflow: hidden;

	/* Self row is sub-container for 3 columns in it */
	display: grid;
	grid-template-columns: 1fr 1fr 4fr;
	grid-auto-rows: 20px; /* Heh, isn't true... */
	
	padding-top: 10px;
	padding-left: 5px;
}

#row1 .row1-col-title {
	/* include flex-properties */
	color: yellow;
}

#row1 .operation-col {
	grid-column: 1/2;
	align-self: end;
}

#row1 .filename-col {
	grid-column: 2/3;
}

#row1 .result-col {
	grid-column: 3/4;
}


#row2 {
	grid-column: 1/3;
	grid-row: 2/3;

	display: grid;
	grid-template-columns: 1fr 1fr;
}

#row2 > #indicator-window {
	display: grid;
	grid-template-rows: 1fr 1fr 1fr 1fr;
}

#indicator {
	grid-row: 3/4;
}

#row3 {
	grid-column: 1/3;
	grid-row: 3/4;

	display: grid;
	grid-template-columns: 1fr 1fr;
	/*grid-template-rows: 1fr 1fr 1fr 1fr;*/
}

#row3 > .info-text {
	grid-row: 3/4;
}

.info-subwindow {
	position: relative;
	display: inline-block;
	color: cyan;
	border: 1px solid;
}

.info-text {
	margin-top: 20px;
}

.sw-title {
	position: absolute;
	top: -12px;
	left: 10%;
	background-color: darkblue;
	color: lime;
	padding-left: 2%;
	padding-right: 2%;

	font-size: 1.2em;
}

</style>