import { cn } from '@/shared/lib';
import { FiltersTodo } from './filters-todo';

import React from 'react';
import { AddTodoForm } from './add-todo-form';


interface Props {
    className?: string;
    onSearch: (value: string) => void;
    onSelect: (value: string) => void;
    selectedValue: string,
    searchValue: string
}


const options = [
  { value: 'all', label: 'Все' },
  { value: 'active', label: 'Активные' },
  { value: 'completed', label: 'Завершенные' }
]



export const TodoControls: React.FC<Props> = ({ className, onSelect, onSearch, selectedValue, searchValue }) => {

    
  return (
    <div className={cn('flex flex-col gap-10', className)}>
        <AddTodoForm/>
        <FiltersTodo onSearch={onSearch} onSelect={onSelect} selectedValue={selectedValue} searchValue={searchValue} options={options}/>
    </div>
  );
};