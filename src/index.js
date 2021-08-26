import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';
import {addTodo, completeTodo, showComplete} from './redux/actions';
import ReduxContext from './contacts/ReduxContext';
import { Provider } from 'react-redux';

// store의 상태가 변경되면 하기의 함수가 호출된다. 
// const unsubscribe = store.subscribe(() => {
//   console.log(store.getState())
// });
// 
// // store.subscribe(() => {
// //   console.log('subscribe', store.getState())
// // });

// // store.dispatch(addTodo("할일"));

// // store.dispatch(completeTodo(0));
// // store.dispatch(showComplete());

// // console.log(store);
// // console.log(store.getState());

// store.dispatch(addTodo("coding"));
// store.dispatch(addTodo("read book"));
// store.dispatch(addTodo("eat"));

// 구독된 함수(store.subscribe()) 제거
// unsubscribe();

// 실제로는 store에 추가 되었지만 출력시 반영안되어있음
// store.dispatch(addTodo("coding"));
// store.dispatch(addTodo("read book"));
// store.dispatch(addTodo("eat"));

// console.log(store.getState())

ReactDOM.render(
  <React.StrictMode>
    {/* <ReduxContext.Provider value={store}> */}
    <Provider store={store}>
      <App />
    </Provider>
    {/* </ReduxContext.Provider> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
