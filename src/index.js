import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { DataLayer } from './DataLayer';
import reducer, { inititalState } from './reducer';

ReactDOM.render(
  <React.StrictMode>

    <DataLayer inititalState={inititalState} reducer={reducer}>
      <App />
    </DataLayer>

  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
