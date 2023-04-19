import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface ISettings {
  font: string
  color:string
  pomodoro:number
  short:number
  long:number
  activeTab:string
}

const initialState: ISettings = {
    font: '"Kumbh Sans", sans-serif',
    color: 'red',
    pomodoro:45,
    short:5,
    long:15,
    activeTab:'pomodoro'
}

export const settingSlice = createSlice({
  name: 'setting',
  initialState,
  reducers: {
    setFont: (state,action) => {
      state.font=action.payload
    },
    setColor: (state,action) => {
        state.color=action.payload
    },
    setPomodoro:(state,action)=> {
      state.pomodoro=action.payload
    },
    setShort:(state,action)=> {
      state.short=action.payload
    },
    setLong:(state,action)=> {
      state.long=action.payload
    },
    setActiveTab: (state,action) => {
      state.activeTab =action.payload
    }
  },
})

export const { setFont, setColor,setPomodoro,setShort,setLong,setActiveTab} = settingSlice.actions

export default settingSlice.reducer