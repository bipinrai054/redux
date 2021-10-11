import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyIcecrean } from '../redux';

function IcecreamContainer() {
  const numOfIcecream = useSelector((state) => state.icecream.numOfIcecream);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of Icecream - {numOfIcecream}</h2>
      <button onClick={() => dispatch(buyIcecrean())}>Buy Icecream</button>
    </div>
  );
}

export default IcecreamContainer;
