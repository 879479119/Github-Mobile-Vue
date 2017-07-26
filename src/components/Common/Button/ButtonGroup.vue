<template>
  <div class="w-btn-group">
    <slot></slot>
  </div>
</template>

<script>
	export default {
	  components: {

    },
	  props: {

    },
    data(){
      return {}
    },
    computed: {

    },
    methods: {

    },
    mounted(){

    },

	}
</script>

<style lang="scss">
  .w-btn-group{
    padding: 0;
    overflow: hidden;
    word-wrap: break-word;
    white-space: normal;
    display: flex;
    width: 100%;
    text-align: center;
    table-layout: fixed;
    .w-btn{
      display: block;
      flex: 1;
      font-weight: 500;
      line-height: 1.5;
      color: #0366d6;
      border: 1px solid #d1d5da;
      border-radius: 0;
      border-left: none;
    }
    .w-btn:first-child{
      border-left: 1px solid #d1d5da;
      border-bottom-left-radius: 3px;
      border-top-left-radius: 3px;
      margin-left: 15px;
    }
    .w-btn:last-child{
      border-bottom-right-radius: 3px;
      border-top-right-radius: 3px;
      margin-right: 15px;
    }
  }
</style>
