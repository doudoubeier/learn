import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList'
// Provider是一个提供器 使用了之后 组件里的其他所有组件都可以是有store
import { Provider } from 'react-redux'
import store from './store'

const APP = (
  // 使用Provider进行包裹
  <Provider store={store}>
    <TodoList />
  </Provider>
)

ReactDOM.render(APP, document.getElementById('root'));