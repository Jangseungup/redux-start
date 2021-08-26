import { connect, useDispatch } from "react-redux";
import { addTodo } from "../redux/actions";
import TodoForm from "../components/TodoForm";
import { useCallback } from "react";

// container => store와 presentational을 이어주는 역할
// export default connect(
//     (state) => ({}),
//     (dispatch) => ({
//         add: (text) => {
//             dispatch(addTodo(text));
//         },
//     })
// )(TodoForm);

// const TodoFormContainer = connect(
//     (state) => ({}),
//     (dispatch) => ({
//         add: (text) => {
//             dispatch(addTodo(text));
//         },
//     })
// )(TodoForm);

// export default TodoFormContainer;

export default function TodoFormContainer() {

    const dispatch = useDispatch();

    const add = useCallback((text) => {
        dispatch(addTodo(text));
    },[dispatch]);

    // function add(text) {
    //     dispatch(addTodo(text));
    // }

    return <TodoForm add={add} />
}