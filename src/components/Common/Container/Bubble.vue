<template>
  <div class="bubble ">
    <h3 class="bubble-title">Repositories you contribute to</h3>
    <div class="list repo-list">
      <router-link class="list-item repo-list-item" to="">
        <div class="list-item-title repo-name">okkokokoko</div>
        <strong class="meta"><icon type="star"></icon>233</strong>
      </router-link>
    </div>
  </div>
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
  .bubble{
    padding: 0;
    margin: 0 15px 15px;
    overflow: hidden;
    word-wrap: break-word;
    white-space: normal;
    background: #fff;
    border: 1px solid #d1d5da;
    border-radius: 3px;
    .bubble-title {
      display: block;
      padding: 10px 15px;
      margin: 0;
      font-size: 14px;
      color: #2f363d;
      border-bottom: 1px solid #d1d5da;
    }
    .list {
      padding: 0;
      margin: 0;
      list-style: none;
      background-color: #fff;
      .list-item {
        position: relative;
        display: block;
        width: 100%;
        padding: 14px 15px 14px 35px;
        line-height: inherit;
        text-align: left;
        .list-item-title {
          display: block;
          /*margin-right: auto;*/
          margin-bottom: 3px;
          margin-right: 55px;
          font-weight: 600;
          line-height: 1.2;
          color: #0366d6;
          word-wrap: break-word;
        }
      }
    }
  }
</style>
