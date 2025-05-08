import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import TablaNombres from './components/TablaNombres';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TablaNombres />
  </StrictMode>
);
