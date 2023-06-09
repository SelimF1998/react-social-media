// ** Redux Imports
import { combineReducers } from "redux"

// ** Reducers Imports
import auth from "./auth"
import navbar from "./navbar"
import layout from "./layout"
import reports from "./reports"
import milestones from "./milestones"
import taskgroups from "./taskgroups"
import tasks from "./tasks"
import users from "./users"

const rootReducer = combineReducers({
  auth,
  navbar,
  layout,
  reports,
  milestones,
  taskgroups,
  tasks,
  users
})

export default rootReducer
