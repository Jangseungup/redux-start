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

// users 
// 깃험 API 호출을 시작하는 것을 의미
export const GET_USERS_START = "GET_USERS_START"; 

// 깃험 API 호출에 대한 응답이 성공적으로 돌아온 경우
export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS"; 

// 깃험 API 호출에 대한 응답이 실패한 경우
export const GET_USERS_FAIL = "GET_USERS_FAIL";

export function getUsersStart() {
    return {
        type: GET_USERS_START,
    }
}

export function getUsersSuccess(data) {
    return {
        type: GET_USERS_SUCCESS,
        data,
    }
}

export function getUsersFail(error) {
    return {
        type: GET_USERS_FAIL,
        error
    }
}