<template>
  <div :class="{'nav-open': $sidebar.showSidebar}">
    <router-view></router-view>
    <!--This sidebar appears only for screens smaller than 992px-->
    <side-bar type="navbar" :sidebar-links="$sidebar.sidebarLinks">
      <ul class="nav navbar-nav" v-if="routeName=='Survivors'">
        <li>
          <a href="/character/survivors" class="dropdown-toggle btn-magnify" data-toggle="dropdown">
            <img src="/static/img/ico_key.png" style="max-width:25px;" alt="">
            <p>생존자</p>
          </a>
        </li>
        <li>
          <a href="/character/killers" class="dropdown-toggle btn-magnify" data-toggle="dropdown">
            <img src="/static/img/ico_sikgu.png" style="max-width:25px;" alt="">
            <p>살인마</p>
          </a>
        </li>
        <li class="divider"></li>
      </ul>
      <ul class="nav navbar-nav" v-if="routeName=='Killers'">
        <li>
          <a href="/character/survivors" class="dropdown-toggle btn-magnify" data-toggle="dropdown">
            <img src="/static/img/ico_key.png" style="max-width:25px;" alt="">
            <p>생존자</p>
          </a>
        </li>
        <li>
          <a href="/character/killers" class="dropdown-toggle btn-magnify" data-toggle="dropdown">
            <img src="/static/img/ico_sikgu.png" style="max-width:25px;" alt="">
            <p>살인마</p>
          </a>
        </li>
        <li class="divider"></li>
      </ul>
    </side-bar>
  </div>
</template>

<script>
  export default {
    computed: {
      routeName () {
        const {name} = this.$route
        return this.capitalizeFirstLetter(name)
      }
    },
    methods: {
      capitalizeFirstLetter (string) {
        return string.charAt(0).toUpperCase() + string.slice(1)
      }
    }
  }
</script>

<style lang="scss"></style>
