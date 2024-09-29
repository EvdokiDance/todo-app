import {useState, useEffect, useMemo} from 'react';
import { Todo } from './todo-slice';


export const useFiltersTodos = (todos: Todo[]) => {


    const [filter, setFilter] = useState('all');
    const [searchValue, setSearchValue] = useState('');

    const filteredTodos = useMemo(() => {

      let items = todos.filter((item) => item.description.toLowerCase().includes(searchValue.toLowerCase()));
      
      if (filter !== 'all') {
        items = items.filter((item) => item.status === filter);
      }

      return items;

    }, [todos, filter, searchValue]);

 

    return {
        filteredTodos,
        filter,
        searchValue,
        setFilter,
        setSearchValue
    }
}