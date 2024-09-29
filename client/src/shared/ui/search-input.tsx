import { cn } from '@/shared/lib';
import { Input } from 'antd';
import { Search } from 'lucide-react';
import React from 'react';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string;
} 

export const SearchInput: React.FC<Props> = ({ className, placeholder, value, onChange }) => {
  return (
    <div className={cn('relative', className)}>
        <Input placeholder={placeholder} value={value} onChange={onChange} className='pl-8'/>
        <Search size={15} className='text-gray-400 absolute top-1/2 -translate-y-1/2 left-2'/>
    </div>
  );
};