<template>
  <span class="Counter">{{count}}</span>
</template>

<script>
	export default {
	  props: ['count'],
		data() {
			return {}
		}
	}
</script>

<style>
  .Counter {
    display: inline-block;
    padding: 2px 5px;
    font-size: 12px;
    font-weight: 600;
    line-height: 1;
    color: #586069;
    background-color: rgba(27,31,35,0.08);
    border-radius: 20px;
  }
</style>
