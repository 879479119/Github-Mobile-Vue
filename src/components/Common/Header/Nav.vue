<template>
  <div class="nav-wrap">
    <nav class="common-nav" >
      <router-link v-for="(item, index) in items" :to="item.link" class="nav-item" v-bind:key="index">
        <span>{{item.name}}</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
	export default {
		name: 'nav',
    props: ['nav', 'baseUrl'],
		data() {
			return {

      }
		},
    computed: {
      items(){
        console.info(this.nav)
        if(Array.isArray(this.nav)){
          if(typeof this.nav[0] === 'string'){
            return this.nav.map((item, index) => ({
              name: item,
              link: this.baseUrl + '/' + item
            }))
          }else{
            return nav
          }
        }
      },
    }
	}
</script>

<style lang="scss">
  .nav-wrap{
    position: relative;
    z-index: 2;
    height: 36px;
    margin-top: -1px;
    overflow-y: hidden;
    background-color: #1e2327;
    .common-nav{
      padding-right: 7px;
      padding-bottom: 20px;
      padding-left: 7px;
      margin-top: -6px;
      -webkit-overflow-scrolling: touch;
      overflow-x: auto;
      color: rgba(255,255,255,0.75);
      text-align: center;
      white-space: nowrap;
      .nav-item{
        display: inline-block;
        padding: 10px 8px;
        font-weight: 600;
        color: #fff;
      }
    }
  }

</style>
