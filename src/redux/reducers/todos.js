import { ADD_TODO, COMPLETE_TODO } from "../actions";

// const todosInitialState = initialState.todos;
const initialState = [];

// initialState = [{text: '코딩', done: false},{text: '코딩', done: false}]
export default function todos(previousState = initialState, action) {
    // 초기값을 설정해주는 부분
    // if(previousState === undefined) {
    //     return [];
    // }

    if(action.type === ADD_TODO) {
        return [...previousState, {text: action.text, done: false}]
    }

    if (action.type === COMPLETE_TODO) {
        return previousState.map((todo, index) => {

            // ...todo => {todo: "할일", done: false} 전개연산자
            let todos = { ...todo };

            console.log("todo", todos);
            if (index === action.index) {
                return { ...todo, done: true }
            }
            return todo;
        });
    }

    // immutable 하지 않게 처리
    // previousState.push('');

    return previousState;
}