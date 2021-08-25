import { SHOW_ALL, SHOW_COMPLETE } from "../actions";

// const filterInitialState = initialState.filter;
const initialState = 'ALL';

// initialState = filter: 'ALL'`
export default function filter(previousState = initialState, action) {
    // 초기값을 설정해주는 부분
    // if(previousState === undefined) {
    //     return [];
    // }

    if(action.type === SHOW_COMPLETE) {
        return "COMPLETE";
    }

    if(action.type === SHOW_ALL) {
        return "ALL";
    }

    // immutable 하지 않게 처리
    // previousState.push('');

    return previousState;
}