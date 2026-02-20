import React from 'react';
import { createRoot } from 'react-dom/client';
import Parent from './props/Parent';
import { Child } from './props/Child';

const App = () => {
  return (
    <div>
      <Parent />
      
    </div>
  );
}

const container = document.getElementById('root');
if (container) {
  createRoot(container).render(<App />);
}