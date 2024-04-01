import App from './App';
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import './index.css';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App/>
    
  </StrictMode>,
);

reportWebVitals();
