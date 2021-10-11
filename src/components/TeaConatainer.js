import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyTea } from '../redux/tea/teaActions';

function TeaConatainer() {
  const numOfTeas = useSelector((state) => state.tea.numOfTeas);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Number of Teas - {numOfTeas}</h2>
      <button onClick={() => dispatch(buyTea())}>Buy Tea</button>
    </div>
  );
}

export default TeaConatainer;
