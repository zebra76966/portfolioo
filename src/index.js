import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {ThemeProvider} from "./context"
import "./../node_modules/bootstrap/dist/css/bootstrap.css";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

