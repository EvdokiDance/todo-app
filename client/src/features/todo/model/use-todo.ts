import { RootState } from "@/app/store";
import { useDispatch, useSelector } from "react-redux";
import { editTodo } from "./todo-slice";
import { useAddTodoMutation, useEditDescriptionTodoMutation, useGetTodosQuery, useRemoveTodoMutation, useToggleStatusTodoMutation } from "./todo-api-slice";

export const useTodo = () => {


    const dispatch = useDispatch();

    const { data: todos = [], isLoading } = useGetTodosQuery();

    const [addTodo] = useAddTodoMutation();
    const [removeTodo] = useRemoveTodoMutation();
    const [editDescriptionTodo] = useEditDescriptionTodoMutation();
    const [toggleStatusTodo] = useToggleStatusTodoMutation();


    const {
        edittingTodoId,
    } = useSelector((state: RootState) => state.todo);

    return {
        isLoading,
        todos,
        edittingTodoId,
        onAddTodo: async (value: string) => {
           await addTodo(value);
        },
        onRemoveTodo: async (id: number) => {
            await removeTodo(id);
        },

        onToggleTodo: (id: number, status: 'active' | 'completed') => {
            toggleStatusTodo({id, status: status === 'completed' ? 'PENDING' : 'DONE'});
        },


        onEditTodo: (id: number) => {
            dispatch(editTodo(id));
        },

        onSaveEditTodo: (value: string) => {
            editDescriptionTodo({id: edittingTodoId, description: value});
            dispatch(editTodo(null));
        },
        

    }
}