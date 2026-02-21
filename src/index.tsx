import React from 'react';
import { createRoot } from 'react-dom/client';
import Parent from './props/Parent';
import { Child } from './props/Child';
import GuestList from './state/GuestList';

const App = () => {
  return (
    <div>
      <Parent />
      <GuestList />
    </div>
  );
}

const container = document.getElementById('root');
if (container) {
  createRoot(container).render(<App />);
}