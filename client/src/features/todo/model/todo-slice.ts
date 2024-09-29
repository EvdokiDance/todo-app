import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export type Todo = {
  id: number;
  description: string;
  status: 'active' | 'completed';
  dateCreated: string;
};

export type TodoState = {
  edittingTodoId: number | null,
};



const initialState: TodoState = {
  edittingTodoId: null,
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {


    editTodo: (state, action: PayloadAction<number>) => {
      state.edittingTodoId = action.payload
    },

  },
})

export const {  editTodo } = todoSlice.actions

export default todoSlice.reducer