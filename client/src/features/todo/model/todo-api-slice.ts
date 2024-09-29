
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Todo } from './todo-slice'



export const todoAPi = createApi({
  reducerPath: 'todoApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),

  tagTypes: ['Todo'],

  endpoints: (builder) => ({
    getTodos: builder.query<Todo[], void>({
      query: () => `/get-todos`,
      providesTags: (result) => 
        result ? 
          [...result.map(({ id }) => ({ type: 'Todo' as const, id })), 'Todo'] 
          : ['Todo'],
    }),
    addTodo: builder.mutation<Todo, string>({
      query: (description) => ({
        url: '/create-todo',
        method: 'POST',
        body: { description },
    }),
    invalidatesTags: ['Todo'],
    }),
    removeTodo: builder.mutation<void, number>({
      query: (id) => ({
        url: `/delete-todo/${id}`,
        method: 'DELETE',
    }),
    invalidatesTags: ['Todo'],
    }),
    editDescriptionTodo: builder.mutation<Todo, {description: string, id: number}>({
        query: ({ description,  id }) => ({
          url: `/update-todo/${id}`,
          method: 'PATCH',
          body: {
              description,
          }
      }),
      invalidatesTags: ['Todo'],
      }),
      toggleStatusTodo: builder.mutation<Todo, {status: 'PENDING' | 'DONE', id: number}>({
        query: ({ status,  id }) => ({
          url: `/update-todo/${id}`,
          method: 'PATCH',
          body: {
            status
          }
      }),
      invalidatesTags: ['Todo'],
      }),
  }),
})

export const { useGetTodosQuery, useAddTodoMutation, useRemoveTodoMutation, useEditDescriptionTodoMutation, useToggleStatusTodoMutation} = todoAPi