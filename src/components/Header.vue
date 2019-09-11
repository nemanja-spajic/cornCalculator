<template>
	<Slide>
		<a> 
        	<font-awesome-icon icon="home"/><router-link tag='span' :to="{name:'Main'}">Home</router-link>  
      	</a>

      	<a> 
      		<font-awesome-icon icon="calculator"/><router-link tag='span' :to="{name:'CornCalculator'}"> Calculator</router-link>
      	</a>
	</Slide>
	
</template>
<style scoped>
	a:hover{
		cursor:pointer;
	}
</style>
<script type="text/javascript">
	import {Slide} from 'vue-burger-menu'
	export default{
		name: 'left-header',
		components:{
			Slide
		}
	}
</script>