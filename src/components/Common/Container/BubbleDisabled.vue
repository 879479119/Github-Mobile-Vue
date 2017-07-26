<template>
  <div class="bubble bubble-disabled">
    <h3 class="bubble-title">
    </h3>
    <div class="bubble-content">
      There haven’t been any recent conversations.
    </div>
    <div class="bubble-actions">
      <a href="/879479119/879479119.github.io/pulse" class="bubble-action">View Pulse</a>
    </div>
  </div>
</template>

<script>
	export default {
		components: {},
		props: {},
		data() {
			return {}
		},
		computed: {},
		methods: {},
		mounted() {

		},

	}
</script>

<style lang="scss">
  .bubble-disabled{
    padding: 0;
    margin: 0 15px 15px;
    overflow: hidden;
    word-wrap: break-word;
    white-space: normal;
    background: #fff;
    border: 1px solid #d1d5da;
    border-radius: 3px;
  }
  .bubble-disabled {
    background: #f6f8fa;
    border-color: #d1d5da;
    box-shadow: inset 0 0 10px rgba(27,31,35,0.1);
    .bubble-title{
      color: #586069;
    }
    .bubble-content {
      font-size: 15px;
      color: #586069;
      text-align: center;
    }
    .bubble-action{
      border-top: 1px solid #d1d5da;
    }
  }
</style>
