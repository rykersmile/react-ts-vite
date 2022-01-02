import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import '@/styles/global.less';
import App from './App';

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root'),
);
