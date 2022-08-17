import { configureStore } from '@reduxjs/toolkit'
import categoryReducer from '../slices/categorySlice'
import cartReducer from '../slices/cartSlice'
import { setupListeners } from '@reduxjs/toolkit/query'
import {fakeApi} from '../services/api'

export const store = configureStore({
  reducer: {
    category: categoryReducer,
    cart: cartReducer,
    [fakeApi.reducerPath]: fakeApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(fakeApi.middleware),
});
setupListeners(store.dispatch)