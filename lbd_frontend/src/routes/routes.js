import DashboardLayout from '../components/Dashboard/Layout/DashboardLayout.vue'
// GeneralViews
import NotFound from '../components/GeneralViews/NotFoundPage.vue'

// Admin pages
import Overview from 'src/components/Dashboard/Views/Overview.vue'

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/Overview",
    children: [
      {
        path: "Overview",
        name: "Overview",
        component: Overview
      },
      {
        path: "character",
        name: "character",
        component: Overview,
        redirect: "/character/suvivors",
        children:[
          {
            path: "suvivors",
            name: "suvivors",
            component: Overview
          },
          {
            path: "killers",
            name: "killers",
            component: Overview
          },
        ]
      },
      {
        path: "map",
        name: "map",
        component: Overview
      },
      {
        path: "func",
        name: "func",
        component: Overview
      },
      {
        path: "announcement",
        name: "announcement",
        component: Overview
      }
    ]
  },
  { path: "*", component: NotFound }
]

export default routes
