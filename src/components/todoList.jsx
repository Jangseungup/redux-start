import { connect } from "react-redux";
import useReduxState from "../hooks/useReduxState"

// export default function TodoList() {
//     const state = useReduxState();
//     return <ul>{state.todos.map((todo) => {
//         return <li>{todo.text}</li>
//     })}</ul>
// }

// mapStatteToProps에서 반환되는 todos가 props로 들어온다.
export default function TodoList({todos}) {
    // const state = useReduxState();
    return <ul>{todos.map((todo, index) => {
        return <li key={index}>{todo.text}</li>
    })}</ul>
}

// TodoListContainer.jsx 이동
// 객체를 반환
// const mapStateToProps = (state) => {
    
//     // props객체 반환
//     // store의 state.todos가 todos에 저장
//     // TodoList에게 todos라는 이름으로 props로 전달
//     return {
//         todos: state.todos,
//     };
// };

// TodoListContainer.jsx 이동
// const mapDispatchToProps = (dispatch) => {

//     // props객체 반환
//     // todos를 변경할 때 사용하는 함수를 만들어서 그 함수를 넣어준다.   
//     return {

//     };

// }

// TodoListContainer.jsx
// connect(mapStateToProps , mapDispatchToProps) = store와 react를 연결시켜주는 redux library
// mapStateToProps : store의 state를 받아서 어떤 props로 넣어줄 것인가 정하는 함수
// mapDispatchToProps : state에 dispatch를 할 수 있는 함수를 props로 넣어주는 함수
// 이 두 함수의 리턴값이 TodoList로 넘어간다.
// const TodoListContainer = connect(
//     mapStateToProps,
//     mapDispatchToProps,
// )(TodoList);


// export default TodoListContainer

