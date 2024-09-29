import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './app';
import { MainProvider } from './main-provider';

import './index.css';


const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <MainProvider>
      <App/>
    </MainProvider>
  </React.StrictMode>
);


