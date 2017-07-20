<template>
  <button class="w-btn">
    <slot></slot>
  </button>
</template>

<script>
	export default {
		name: '',
    props: ['type'],
		data(){
			return {

      }
		},
    computed: {
			text(){
				return 0
      }
    }
	}
</script>

<style lang="scss">
  $primary: #42b983;
  $default: #ccc;
  $warn: #ffc63f;
  $danger: #ff3726;

  .w-btn{
    padding: 4px 8px;
    border: $primary solid 1px;
    border-radius: 4px;
    background: #fff;
    color: $primary;

    .w-icon{
      margin-right: 6px;
    }
  }


</style>
