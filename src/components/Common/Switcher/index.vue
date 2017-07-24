<template>
  <div class="switcher js-details-container Details open Details--on">
    <a href="#" class="switcher-toggle js-details-target">
      Unread notifications
      <span class="Counter">1</span>
    </a>
    <div class="switcher-options">
      <a class="switcher-option" href="/notifications/participating">
        Participating
        <span class="Counter">1</span>
      </a>
      <a class="switcher-option" href="/notifications?all=1">
        All notifications
      </a>
      <hr>
      <a href="/sorrycc/blog/notifications" class="switcher-option css-truncate" title="sorrycc/blog">
        <span class="css-truncate-target">sorrycc/blog</span>
        <span class="Counter">1</span>
      </a>
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
  .switcher{
    position: relative;
    padding: 15px 15px 15px 35px;
    .switcher-options {
      position: relative;
      display: none;
      padding-top: 6px;
      .switcher-option {
        display: block;
        padding: 6px 0;
        font-weight: 600;
      }
    }
  }
</style>
