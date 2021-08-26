import { useRef } from "react";
import { connect } from "react-redux";
import useReduxDispatch from "../hooks/useReduxDispatch";
import { addTodo } from "../redux/actions";

// export default function TodoForm() {
//     const inputRef = useRef();
//     // const dispatch = useReduxDispatch();

//     return (
//         <div>
//             <input ref={inputRef} />
//             <button onClick={click}>추가</button>
//         </div>
//     );
//     function click() {
//         // dispatch(addTodo(inputRef.current.value));
//     }
// }

// presetational => container가 보내주는 데이터나 함수를 실행하거나 보여주는 곳  
export default function TodoForm({ add }) {
    const inputRef = useRef();
    // const dispatch = useReduxDispatch();

    return (
        <div>
            <input ref={inputRef} />
            <button onClick={click}>추가</button>
        </div>
    );
    function click() {
        // dispatch(addTodo(inputRef.current.value));
        add(inputRef.current.value);
        inputRef.current.value = "";
    }
}

// TodoFormContainer.jsx로 이동
// container => store와 presentational을 이어주는 역할
// export default connect(
//     (state) => ({}),
//     (dispatch) => ({
//         add: (text) => {
//             dispatch(addTodo(text));
//         },
//     })
// )(TodoForm);