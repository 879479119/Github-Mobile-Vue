<template>
  <i :class="classes"></i>
</template>

<script>
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
        if(this.type) ret[`w-icon-${this.type}`] = true
        return ret
      }
    }
	}
</script>

<style>
  .w-icon{
    display: inline-block;
    font-size: 100%;
  }
</style>
