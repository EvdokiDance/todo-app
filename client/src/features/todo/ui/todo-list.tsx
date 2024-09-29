import { cn } from "@/shared/lib";
import { FC } from "react";
import { EditTodoForm } from "./edit-todo-form";
import { TodoControls } from "./todo-controls";
import { TodoListItem } from "./todo-list-item";
import { useFiltersTodos } from "../model/use-filters-todos";
import { useTodo } from "../model";
import { dateFormatting } from "@/shared/utils";

interface Props {
  className?: string;
}




export const TodoList: FC<Props> = ({ className }) => {


  const { todos, isLoading, edittingTodoId, onRemoveTodo, onToggleTodo, onEditTodo, onSaveEditTodo } = useTodo()



  const { filteredTodos, filter, searchValue, setFilter, setSearchValue } = useFiltersTodos(todos);



  if (isLoading) {
    return <div>Loading...</div>;
  }


  return (
    <div
      className={cn(
        "mt-[120px] mx-auto w-[840px] p-10 bg-white rounded-xl shadow-md",
        className
      )}
    >
      <h1 className="text-3xl font-bold">TODO APP</h1>
      <TodoControls onSearch={setSearchValue} onSelect={setFilter} selectedValue={filter} searchValue={searchValue} className="mt-10" />
      <ul className={cn("flex flex-col gap-2 mt-6", className)}>
        {filteredTodos.map((item) =>
          edittingTodoId === item.id ?
            (<EditTodoForm currentValue={item.description} onSaveEdit={onSaveEditTodo} />
            ) : (
              <TodoListItem
                {...item}
                key={item.id}
                onRemove={onRemoveTodo}
                onEdit={onEditTodo}
                onToggle={onToggleTodo}
                dateCreated={dateFormatting(item.dateCreated)}
              />
            )
        )}
      </ul>
    </div>
  );
};
