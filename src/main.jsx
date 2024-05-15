import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App.jsx';
import './css/index.css';
import RouterContext from './RouterContext.jsx';
import Footer from './components/Footer.jsx';

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(
    <React.StrictMode>
      <RouterContext>
        <App />
      </RouterContext>
      <Footer />
    </React.StrictMode>,
  );