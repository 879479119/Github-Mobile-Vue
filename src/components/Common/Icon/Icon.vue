<template>
  <i :class="classes" :style="{style}"></i>
</template>

<script>
  import IconMap from "./IconMap"
//  import "../../../assets/anticon.woff"
  import "./Icon.scss"
	export default {
		props: ['type', 'size', 'theme'],
		data(){
			return {

      }
		},
    computed: {
			classes(){
        let ret = {
        	"w-icon": true,
        }
        if(this.type) ret[`w-${this.type}`] = true
        return ret
      },
      style(){

      }
    }
	}
</script>

<style>
  @font-face {
    font-family: anticon;
    src: url("../../../assets/anticon.woff")  format('woff');
  }
  .w-icon{
    display: inline-block;
    font-size: 100%;
    font-family: anticon, sans-serif;
  }
</style>
