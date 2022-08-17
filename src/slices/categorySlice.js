import { createSlice } from '@reduxjs/toolkit'

export const categorySlice = createSlice({
  name: 'category',
  initialState: {
    categoryInfo : {
        name:"",
        id:-1
    }
  },
  reducers: {
    changeCategoryInfo: (state,action) => {
      state.categoryInfo = action.payload;
    },
  }
})

export const { changeCategoryInfo } = categorySlice.actions

export default categorySlice.reducer