import logo from './logo.svg';
import './App.css';
import { addTodo } from './redux/actions';
import useReduxState from './hooks/useReduxState';
import useReduxDispatch from './hooks/useReduxDispatch';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import TodoListContainer from './containers/TodoListContainer';
import TodoFormContainer from './containers/TodoFormContainer';
import UserListContainer from './containers/UserListContainer';


function App() {
  // const dispatch = useReduxDispatch();
  return (
    <div className="App">
      <header className="App-header">
        
        {/* <TodoList />
        <TodoForm /> */}
        <UserListContainer />
        <TodoListContainer />
        <TodoFormContainer />
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
