import { cn } from '@/shared/lib';
import React, { PropsWithChildren } from 'react';

interface Props {
    className?: string;
} 

export const Container: React.FC<PropsWithChildren<Props>> = ({ className, children }) => {
  return (
    <div className={cn('mx-auto max-w-[1280px]', className)}>
        {children}
    </div>
  );
};