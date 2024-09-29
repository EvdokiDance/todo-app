import { cn } from '@/shared/lib';
import { Button, Checkbox, Tag } from 'antd';
import { Pencil, Trash2 } from 'lucide-react';
import React from 'react';
interface Props {
    className?: string;
    id: number;
    description: string;
    status: 'active' | 'completed';
    dateCreated: string;
    onRemove: (id: number) => void;
    onEdit: (id: number) => void;
    onToggle: (id: number, status: 'active' | 'completed') => void;
}

export const TodoListItem: React.FC<Props> = ({ className, id, description, status, dateCreated, onRemove, onEdit, onToggle}) => {


  let isCompleted = status === 'active' ? false : true;

  const Status = isCompleted ? <Tag color='green'>Выполнено</Tag> : <Tag color='orange'>В процессе</Tag> ;

  return (
    <li className={cn('flex justify-between items-center gap-3', className)}>
        <Checkbox className='flex flex-1' checked={isCompleted} value={id} onChange={() => onToggle(id, status)}><span className={isCompleted && 'line-through'}>{description}</span></Checkbox>
        <span className='text-gray-400 text-xs'>{dateCreated}</span>
        {Status}
        <div className='flex flex-1 justify-end gap-2'>
            <Button onClick={() => onEdit(id)}><Pencil size={16} /></Button>
            <Button onClick={() => onRemove(id)}><Trash2 size={16}/></Button>
        </div>
    </li>
  );
};