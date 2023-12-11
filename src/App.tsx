import React from 'react';
import './App.css';
import CounterContainer from './containers/CounterContainer.tsx';
import TodosContainer from './containers/TodosContainer.tsx';

function App() {
  return (
    <div>
      <CounterContainer />
      <hr />
      <TodosContainer />
    </div>
  );
}

export default App;
