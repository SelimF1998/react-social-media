import { createSlice } from "@reduxjs/toolkit"
import { UsersData } from "../../../UsersData"

export const userSlice = createSlice({
  name: "Users",
  initialState: { value: UsersData },
  reducers: {
    setUsers: (state, action) => {
      state.value = action.payload
    },
    setUserLoggedIn: (state, action) => {
      state.value = state.value.map(user => {
        if (user.id === action.payload.id) {
          return { ...user, loggedIn: action.payload.loggedIn }
        }
        return user
      })
    },
    setTodayTasks: (state, action) => {
      state.value = state.value.map(user => {
        if (user.id === action.payload.id) {
          return { ...user, todayTasks: action.payload.todayTasks }
        }
        return user
      })
    },
    setNextTasks: (state, action) => {
      state.value = state.value.map(user => {
        if (user.id === action.payload.id) {
          return { ...user, nextTasks: action.payload.nextTasks }
        }
        return user
      })
    },
    setReports: (state, action) => {
      state.value = state.value.map(user => {
        if (user.id === action.payload.id) {
          return { ...user, reports: action.payload.reports }
        }
        return user
      })
    }
  }
})

export const {
  setUsers,
  setUserLoggedIn,
  setTodayTasks,
  setNextTasks,
  setReports
} = userSlice.actions
export default userSlice.reducer
