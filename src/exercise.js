import { legacy_createStore as createStore } from "redux"; //스토어를 만들어주는 함수

//reducers: 리덕스에서 관리 할 상태 정의
const initialState = {
  counter: 0,
  text: "",
  list: [],
};

//action
//1) action types: 액션 타입 정의
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";
const CHANGE_TEXT = "CHANGE_TEXT";
const ADD_TO_LIST = "ADD_TO_LIST";

//2) action: 액션 생성함수 정의
const increase = () => ({
  type: INCREASE,
});

const decrease = () => ({
  type: DECREASE,
});

const changeText = (text) => ({
  type: CHANGE_TEXT,
  text, //type은 필수적으로 넣어햐고, 그 외에 추가적으로 필드를 마음대로 넣을 수 있다!
});

const addToList = (item) => ({
  type: ADD_TO_LIST,
  item,
});

//reducer
//위 액션 생성함수들을 통해 만들어진 객체를 참조하여 새로운 함수를 만든다.
//주의: 리듀서에서는 불변성을 꼭 지켜줘야 한다!
const reducer = (state = initialState, action) => {
//   console.log(state, action)
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case CHANGE_TEXT:
      return {
        ...state,
        text: action.text,
      };
    case ADD_TO_LIST:
      return {
        ...state,
        list: state.list.concat(action.item),
      };
    default:
      return state;
  }
};

//store
const store = createStore(reducer);
// console.log(store.getState());

//스토어 안에 들어있는 상태가 바뀔 때마다 호출되는 listener 함수
const listener = () => {
	const state = store.getState();
	console.log(state);
}

// 구독을 해제하고 싶을 때는 unsubscribe() 를 호출
const unsubscribe = store.subscribe(listener);

//dispatch
store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(changeText("hihi"));
store.dispatch(addToList({ id: 1, text: "안녕1" }, { id: 2, text: "안녕2" }));