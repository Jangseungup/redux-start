// 모든 action 정의
export const ADD_TODO = "ADD_TODO";
export const COMPLETE_TODO = "COMPLETE_TODO";

// action 함수
// {type: ADD_TODO, text: '할일'}
export function addTodo(text) {
    return {
        type: ADD_TODO,
        text,
    };
}

// {type: COMPLETE_TODO, index: 3}
export function completeTodo(index) {
    return {
        type: COMPLETE_TODO,
        index,
    }
}

export const SHOW_ALL = "SHOW_ALL";
export const SHOW_COMPLETE = "SHOW_COMPLETE";

export function showAll() {
    return { type: SHOW_ALL };
}

export function showComplete() {
    return { 
        type: SHOW_COMPLETE
    };
}

// immutable 한 성질을 가진다.
// 값이 변하는걸 인지하기 위해
// function 리듀서(previousState, action) {
//     return newState;
// }

