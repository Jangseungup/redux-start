import logo from './logo.svg';
import './App.css';
import { addTodo } from './redux/actions';
import useReduxState from './hooks/useReduxState';
import useReduxDispatch from './hooks/useReduxDispatch';
import TodoList from './components/todoList';
import TodoForm from './components/todoForm';


function App() {
  // const dispatch = useReduxDispatch();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TodoList />
        <TodoForm />
        {/* <button onClick={click}>추가</button> */}
      </header>
      
    </div>
  );

  // function click() {
  //   // store.dispatch(addTodo("todo"));
  //   dispatch(addTodo("todo"));
  // }
}

export default App;
