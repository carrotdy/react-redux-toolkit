import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import Counter from "../components/Counter.tsx";
import {
  increase,
  decrease,
  setDiff,
  ICounterState,
} from "../modules/counter.tsx";

const CounterContainer: React.FC = () => {
  // useSelector는 리덕스 스토어의 상태를 조회하는 Hook
  // state의 값은 store.getState() 함수를 호출했을 때 나타나는 결과물과 동일함
  //   const { number, diff } = useSelector((state) => ({
  //     number: state.counter.number,
  //     diff: state.counter.diff,
  //   }));

  interface IRootState {
    counter: ICounterState;
  }

  const { number, diff } = useSelector((state: IRootState) => state.counter);

  // useDispatch 는 리덕스 스토어의 dispatch 를 함수에서 사용 할 수 있게 해주는 Hook
  const dispatch = useDispatch();
  // 각 액션들을 디스패치하는 함수들 만듬
  const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
  const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);
  const onSetDiff = useCallback(
    (diff: number) => dispatch(setDiff(diff)),
    [dispatch]
  );

  return (
    <Counter
      number={number}
      diff={diff}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onSetDiff={onSetDiff}
    />
  );
};

export default CounterContainer;
