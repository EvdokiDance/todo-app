import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';


const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <div>123</div>
  </React.StrictMode>
);

