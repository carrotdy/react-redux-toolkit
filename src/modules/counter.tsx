//Ducks 패턴: 액션 타입(Actions), 액션 생성 함수(Action Creators), 리듀서(Reducer)가 모두 들어있는 파일
//구조중심이 아닌 기능중심으로 파일을 나눈다

import { PayloadAction, createSlice } from "@reduxjs/toolkit";

//action type
// const SET_DIFF = "counter/SET_DIFF";
// const INCREASE = "counter/INCREASE";
// const DECREASE = "counter/DECREASE";

//action 생성함수
// export const setDiff = (diff) => ({
//   type: SET_DIFF,
//   diff,
// });

// export const increase = () => ({
//   type: INCREASE,
// });

// export const decrease = () => ({
//   type: DECREASE,
// });

// 인터페이스 정의
export interface ICounterState {
  number: number;
  diff: number;
}

// 초기 상태 선언
const initialState: ICounterState = {
  number: 0,
  diff: 1, // 차이 값
};

//reducer
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increase(state, action: PayloadAction<void>) {
      state.number = state.number + state.diff;
    },
    decrease(state, action: PayloadAction<void>) {
      state.number = state.number - state.diff;
    },
    setDiff(state, action: PayloadAction<number>) {
      state.diff = action.payload;
    },
  },
});

// 액션 생성 함수와 리듀서 내보내기
export const { increase, decrease, setDiff } = counterSlice.actions;
export default counterSlice.reducer;

// const counter = (state = initialState, action) => {
//   switch (action.type) {
//     case SET_DIFF:  //외부에서 새로운 차이 값
//       return {
//         ...state,
//         diff: action.diff,
//       };
//     case INCREASE: //현재 상태의 number값
//       return {
//         ...state,
//         number: state.number + state.diff,
//       };
//     case DECREASE:
//       return {
//         ...state,
//         number: state.number - state.diff,
//       };
//     default:
//       return state;
//   }
// };

// export default counter;
