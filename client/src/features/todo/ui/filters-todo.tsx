import { cn } from '@/shared/lib';
import { SearchInput } from '@/shared/ui';
import { Select } from 'antd';
import { X } from 'lucide-react';
import React from 'react';

interface Props {
    className?: string;
    onSearch: (value: string) => void
    onSelect: (value: string) => void
    options: { value: string; label: string }[];
    selectedValue: string
    searchValue: string
}


export const FiltersTodo: React.FC<Props> = ({ className,  onSearch, onSelect, searchValue, selectedValue, options}) => {
  


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  const handleClear = () => {
    onSearch('');
  };

  const handleSelect = (value: any) => {
    onSelect(value);
  };

  return (
    <div className='flex justify-between gap-5'>
      <div className='relative'>
        <SearchInput className={cn(className)} value={searchValue} onChange={handleChange} placeholder='Поиск...'/>
        {searchValue && <X onClick={handleClear} className='text-gray-400 hover:cursor-pointer focus:text-gray-900  absolute top-1/2 -translate-y-1/2 right-2' size={20}/>}
       </div>
       <Select className='w-36' onChange={handleSelect} defaultValue={selectedValue} options={options}/>
    </div>
  );
};