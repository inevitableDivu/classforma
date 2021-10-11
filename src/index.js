import React from 'react';
import ReactDOM from 'react-dom';
import './css/style.css';
import App from './App';
import ThemeContext from './context/ThemeContext'
import AnnotateContext from './context/AnnotateContext';

ReactDOM.render(
  <React.StrictMode>
    <ThemeContext>
      <AnnotateContext>
        <App />
      </AnnotateContext>
    </ThemeContext>
  </React.StrictMode>,
  document.getElementById('root')
);
