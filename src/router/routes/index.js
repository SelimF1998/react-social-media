import { lazy } from "react"

// ** Document title
const TemplateTitle = "%s - Vuexy React Admin Template"

// ** Default Route
const DefaultRoute = "/home"

// ** Merge Routes
const Routes = [
  {
    path: "/home",
    component: lazy(() => import("../../views/Home"))
  },
  {
    path: "/tasks",
    component: lazy(() => import("../../views/tasks/Tasks"))
  },
  {
    path: "/tasks-groups",
    component: lazy(() => import("../../views/taskgroups/TaskGroups"))
  },
  {
    path: "/daily-reports",
    component: lazy(() => import("../../views/reports/DailyReports"))
  },
  {
    path: "/milestones",
    component: lazy(() => import("../../views/milestones/MileStones"))
  },
  {
    path: "/login",
    component: lazy(() => import("../../views/Login")),
    layout: "BlankLayout",
    meta: {
      authRoute: true
    }
  },
  {
    path: "/error",
    component: lazy(() => import("../../views/Error")),
    layout: "BlankLayout"
  }
]

export { DefaultRoute, TemplateTitle, Routes }
