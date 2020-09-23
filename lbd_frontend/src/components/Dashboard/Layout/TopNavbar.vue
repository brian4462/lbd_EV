<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" :class="{toggled: $sidebar.showSidebar}" @click="toggleSidebar">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar bar1"></span>
          <span class="icon-bar bar2"></span>
          <span class="icon-bar bar3"></span>
        </button>
        <a class="navbar-brand" v-if="routeName=='Character'">캐릭터(Charcter)</a>
        <a class="navbar-brand" v-else-if="routeName=='Map'">지도(Map)</a>
        <a class="navbar-brand" v-else-if="routeName=='Func'">기능(Function)</a>
        <a class="navbar-brand" v-else-if="routeName=='Announcement'">알림(Announcement)</a>
      </div>
      <div class="collapse navbar-collapse">
        <ul class="nav navbar-nav navbar-right" v-if="routeName=='Character'">
          <li class="open">
            <a href="/character/survivors" class="dropdown-toggle btn-magnify" data-toggle="dropdown">
              <img src="static/img/ico_key.png" style="max-width:25px;" alt="">
              <p>생존자</p>
            </a>
          </li>
          <li>
            <a href="/character/killers" class="dropdown-toggle btn-magnify" data-toggle="dropdown">
              <img src="static/img/ico_sikgu.png" style="max-width:25px;" alt="">
              <p>살인마</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
  export default {
    computed: {
      routeName () {
        const {name} = this.$route
        return this.capitalizeFirstLetter(name)
      }
    },
    data () {
      return {
        activeNotifications: false
      }
    },
    methods: {
      capitalizeFirstLetter (string) {
        return string.charAt(0).toUpperCase() + string.slice(1)
      },
      toggleNotificationDropDown () {
        this.activeNotifications = !this.activeNotifications
      },
      closeDropDown () {
        this.activeNotifications = false
      },
      toggleSidebar () {
        this.$sidebar.displaySidebar(!this.$sidebar.showSidebar)
      },
      hideSidebar () {
        this.$sidebar.displaySidebar(false)
      }
    }
  }

</script>
<style>

</style>
