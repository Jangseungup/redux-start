import { connect, useSelector } from "react-redux";
import TodoList from "../components/TodoList";


// 객체를 반환
// const mapStateToProps = (state) => {
    
//     // props객체 반환
//     // store의 state.todos가 todos에 저장
//     // TodoList에게 todos라는 이름으로 props로 전달
//     return {
//         todos: state.todos,
//     };
// };

// const mapDispatchToProps = (dispatch) => {

//     // props객체 반환
//     // todos를 변경할 때 사용하는 함수를 만들어서 그 함수를 넣어준다.   
//     return {

//     };

// }

// const TodoListContainer = connect(
//     mapStateToProps,
//     mapDispatchToProps,
// )(TodoList);

// hook으로 제작
function TodoListContainer() {

    // state store에 있는 값
    const todos = useSelector((state) => state.todos);
    
    return <TodoList todos={todos} />;
}

export default TodoListContainer