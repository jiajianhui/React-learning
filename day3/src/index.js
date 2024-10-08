import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// 为react注入store——react-redux负责把redux和react连接起来，内置Provider组件，通过store参数把创建好的store实例注入到应用中，建立连接
import store from './store';
import {Provider} from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
