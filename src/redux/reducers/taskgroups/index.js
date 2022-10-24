import { createSlice } from "@reduxjs/toolkit"
import { TaskGroupsData } from "../../../TaskGroupsData"

export const taskgroupSlice = createSlice({
  name: "TaskGroups",
  initialState: { value: TaskGroupsData },
  reducers: {
    setTaskGroup: (state, action) => {
      state.value = action.payload
    },
    addTaskGroup: (state, action) => {
      state.value.push(action.payload)
    },
    updateTaskGroup: (state, action) => {
      const index = state.value.findIndex(
        taskgroup => taskgroup.id === action.payload.id
      )
      state.value[index] = action.payload
    },
    deleteTaskGroup: (state, action) => {
      const index = state.value.findIndex(
        taskgroup => taskgroup.id === action.payload
      )
      state.value.splice(index, 1)
    }
  }
})

export const { addTaskGroup, updateTaskGroup, deleteTaskGroup, setTaskGroup } =
  taskgroupSlice.actions
export default taskgroupSlice.reducer
