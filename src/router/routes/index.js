import { lazy } from "react"

// ** Document title
const TemplateTitle = "%s - Vuexy React Admin Template"

// ** Default Route
const DefaultRoute = "/home"

// ** Merge Routes
const Routes = [
  {
    path: "/home",
    component: lazy(() => import("../../views/home/Home"))
  },
  {
    path: "/profile",
    component: lazy(() => import("../../views/profile/Profile"))
  },
  {
    path: "/news-feed",
    component: lazy(() => import("../../views/newsfeed/NewsFeed"))
  },
  {
    path: "/groups",
    component: lazy(() => import("../../views/groups/Groups"))
  },
  {
    path: "/messages",
    component: lazy(() => import("../../views/messages/Messages"))
  },
  {
    path: "/notifications",
    component: lazy(() => import("../../views/notifications/Notifications"))
  },
  {
    path: "/settings",
    component: lazy(() => import("../../views/settings/Settings"))
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
