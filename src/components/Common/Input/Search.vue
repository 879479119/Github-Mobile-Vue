<template>
  <label class="w-input-search" ><input placeholder="Search Github" /></label>
</template>

<script>
	export default {
		name: '',
		data() {
			return {}
		}
	}
</script>

<style lang="scss">
  .w-input-search{
    display: block;
    margin: 15px;
    input{
      min-height: 34px;
      padding: 6px 8px;
      font-size: 14px;
      line-height: 20px;
      color: #24292e;
      vertical-align: middle;
      background-color: #fff;
      background-repeat: no-repeat;
      background-position: right 8px center;
      border: 1px solid #d1d5da;
      border-radius: 3px;
      outline: none;
      box-shadow: inset 0 1px 2px rgba(27,31,35,0.075);
      width: 100%;
      margin: 0;
    }
  }
</style>
