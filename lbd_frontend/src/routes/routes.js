import DashboardLayout from '../components/Dashboard/Layout/DashboardLayout.vue'
// GeneralViews
import NotFound from '../components/GeneralViews/NotFoundPage.vue'

// Admin pages
import Overview from 'src/components/Dashboard/Views/Overview.vue'

// Character pages
import Charcter from 'src/components/Dashboard/Views/Character/Character.vue'
import Survivors from 'src/components/Dashboard/Views/Character/Survivors.vue'
import Killers from 'src/components/Dashboard/Views/Character/Killers.vue'

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
        component: Charcter,
        redirect: "/character/survivors",
        children:[
          {
            path: "survivors",
            name: "survivors",
            component: Survivors
          },
          {
            path: "killers",
            name: "killers",
            component: Killers,
          }
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
