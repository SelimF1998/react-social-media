import { createSlice } from "@reduxjs/toolkit"

import { ReportsData } from "../../ReportsData"

export const reportSlice = createSlice({
  name: "Reports",
  initialState: { value: ReportsData },
  reducers: {
    addReport: (state, action) => {
      state.value.push(action.payload)
    },

    deleteReport: (state, action) => {
      state.value = state.value.filter(
        report => report.id !== action.payload.id
      )
    }
  }
})

export const { addReport, deleteReport } = reportSlice.actions
export default reportSlice.reducer
