import { createSlice } from "@reduxjs/toolkit"
import { TasksData } from "../../../TasksData"

export const taskSlice = createSlice({
  name: "Tasks",
  initialState: { value: TasksData },
  reducers: {
    setTask: (state, action) => {
      state.value = action.payload
    },

    setTaskProgress: (state, action) => {
      state.value = state.value.map(task => {
        if (task.id === action.payload.id) {
          return { ...task, progress: action.payload.progress }
        }
        return task
      })
    },

    // update task
    updateTask: (state, action) => {
      state.value = state.value.map(task => {
        if (task.id === action.payload.id) {
          return action.payload
        }
        return task
      })
    }
  }
})

export const { setTask, setTaskProgress, updateTask } = taskSlice.actions
export default taskSlice.reducer
