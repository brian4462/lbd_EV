import Sidebar from './SideBar.vue'

const SidebarStore = {
  showSidebar: false,
  sidebarLinks: [
    {
      name: '캐릭터',
      icon: 'static/img/ico_user.png',
      path: '/character'
    },
    {
      name: '지도',
      icon: 'static/img/ico_map.png',
      path: '/map'
    },
    {
      name: '기능',
      icon: 'static/img/iconHelpLoading_trapper.png',
      path: '/func'
    },
    {
      name: '공지',
      icon: 'static/img/iconStatusEffects_madness.png',
      path: '/announcement'
    },
  ],
  displaySidebar (value) {
    this.showSidebar = value
  }
}

const SidebarPlugin = {

  install (Vue) {
    Vue.mixin({
      data () {
        return {
          sidebarStore: SidebarStore
        }
      }
    })

    Object.defineProperty(Vue.prototype, '$sidebar', {
      get () {
        return this.$root.sidebarStore
      }
    })
    Vue.component('side-bar', Sidebar)
  }
}

export default SidebarPlugin
