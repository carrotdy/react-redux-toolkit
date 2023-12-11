import React, { ChangeEvent } from "react";

interface ICounterProps {
  number: number;
  diff: number;
  onIncrease: () => void;
  onDecrease: () => void;
  onSetDiff: (diff: number) => void;
}

const Counter: React.FC<ICounterProps> = ({
  number,
  diff,
  onIncrease,
  onDecrease,
  onSetDiff,
}) => {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    onSetDiff(parseInt(e.target.value, 10));
  };
  return (
    <div>
      <h1>{number}</h1>
      <div>
        <input type="number" value={diff} min="1" onChange={onChange} />
        <button onClick={onIncrease}>+</button>
        <button onClick={onDecrease}>-</button>
      </div>
    </div>
  );
};

export default Counter;
