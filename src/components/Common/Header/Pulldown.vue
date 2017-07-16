<template>
  <nav class="nav-bar-tabs ">
    <ul>
      <li>
        <a href="/" ><icon type="compass"></icon>Dashboard</a>
      </li>
      <li>
        <a href="/marketplace" class=""><icon type="shop"></icon>Marketplace</a>
      </li>
      <li>
        <a href="/explore" ><icon type="rocket"></icon>Explore</a>
      </li>
      <li>
        <a href="/879479119" >
          <img alt="@879479119" class="avatar" height="16" src="https://avatars4.githubusercontent.com/u/12726506?v=4&amp;s=32" width="16">
          Profile
        </a>
      </li>
      <li>
        <a href="/logout" data-ga-click="Mobile, tap, location:header; text:Sign out">Sign out</a>
      </li>
    </ul>
  </nav>
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
  .nav-bar-tabs{
    position: absolute;
    z-index: 9000;
    /*display: none;*/
    width: 100%;
    /*height: 0;*/
    padding: 7.5px 0;
    overflow: hidden;
    font-size: 16px;
    background-color: #1e2327;
    background-clip: padding-box;
    text-align: left;
    ul{
      padding: 0;
      margin: 0;
      list-style: none;
      li{
        a{
          position: relative;
          display: block;
          padding: 8px 15px 8px 45px;
          color: rgba(255,255,255,0.75);
        }
      }
    }
  }
</style>
