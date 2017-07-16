<template>
  <header class="nav-bar">
    <div class="nav-bar-inner">
      <button type="button" class="header-button "><icon :type="'star'"></icon></button>
      <div class="nav-bar-title-text">
        <a class="brand-logo-invertocat touchable" href="https://github.com/">
        </a>
      </div>
      <a class="bav-bar-notification" href="/notifications">
        <span class="unread-notifications-indicator"></span>
      </a>
    </div>
  </header>
</template>

<script>
	export default {
		name: '',
		data(){
			return {}
		}
	}
</script>

<style scoped lang="scss">
  .nav-bar{
    position: relative;
    overflow: visible;
    color: rgba(255,255,255,0.75);
    user-select: none;
    background-color: #1e2327;

    .nav-bar-inner{
      display: flex;
      -webkit-box-pack: justify;
      -webkit-justify-content: space-between;
      justify-content: space-between;

      .nav-bar-title-text{
        position: static;
        max-width: none;
        margin: 0;
        -webkit-box-flex: 1;
        -webkit-flex-grow: 1;
        flex-grow: 1;
      }
    }

    .nav-bar-notification{
      position: relative;
      padding: 0 12px;
      padding-top: 14px;
      max-width: 44px;
      line-height: 1;
      color: inherit;
      background: transparent;
      border: 0;
      border-radius: 5px;
    }
  }
</style>
