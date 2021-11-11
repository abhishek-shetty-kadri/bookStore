import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import RootStore from './store/rootStore';

export const RootStoreProvider=createContext()
let store=new RootStore()

ReactDOM.render(
  <React.StrictMode>
    <RootStoreProvider.Provider value={store}>
    <App />
    </RootStoreProvider.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
