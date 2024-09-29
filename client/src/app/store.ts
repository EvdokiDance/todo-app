import { configureStore } from '@reduxjs/toolkit'
import { todoReducer, todoAPi } from '@/features/todo/model'

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    [todoAPi.reducerPath]: todoAPi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(todoAPi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch