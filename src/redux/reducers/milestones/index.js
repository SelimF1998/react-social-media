import { createSlice } from "@reduxjs/toolkit"
import { MilestonesData } from "../../../MilestonesData"

export const milestoneSlice = createSlice({
  name: "Milestones",
  initialState: { value: MilestonesData },
  reducers: {
    addMilestone: (state, action) => {
      state.value.push(action.payload)
    }
  }
})

export const { addMilestone } = milestoneSlice.actions
export default milestoneSlice.reducer
