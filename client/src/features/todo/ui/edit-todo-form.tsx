import { cn } from '@/shared/lib';
import { Button, Input } from 'antd';

import { Undo } from 'lucide-react';
import React from 'react';

interface Props {
    className?: string;
    currentValue: string;
    onSaveEdit: (value: string) => void;
}

export const EditTodoForm: React.FC<Props> = ({ className, currentValue, onSaveEdit }) => {


    const [value, setValue] = React.useState(currentValue);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSaveEdit(value);
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

  return (
    <form className='flex gap-2' onSubmit={handleSubmit}>
        <Input value={value} onChange={handleChange} placeholder='Изменение тудушки...' className={cn('w-full', className)}/>
        <Button onClick={() => onSaveEdit(currentValue)}><Undo size={16} /></Button>
    </form>
  );
};