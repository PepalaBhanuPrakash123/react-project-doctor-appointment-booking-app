import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

const AppWrapper = () => {
  useEffect(() => {
    // Fix for "Added non-passive event listener" warning
    const touchMoveHandler = (event) => {
      console.log('Touchmove event:', event);
    };

    const touchStartHandler = (event) => {
      console.log('Touchstart event:', event);
    };

    document.addEventListener('touchmove', touchMoveHandler, { passive: true });
    document.addEventListener('touchstart', touchStartHandler, { passive: true });

    return () => {
      document.removeEventListener('touchmove', touchMoveHandler);
      document.removeEventListener('touchstart', touchStartHandler);
    };
  }, []);

  return <App />;
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppWrapper />
  </StrictMode>
);

