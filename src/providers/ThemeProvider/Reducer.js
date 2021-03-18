import React, { useReducer } from "react";
const counter = { count: 1, foo: "eg" }; //let us consider counter as state

//reducers are the functions that responds to actions.
//it has 2 arguments that is state and actions.based on the action the state will change.
//Note: Reducers(reducer contant) always creates the new object irrespective to the data given that is if foo is another item in the counter object then it will not be affected unluess used in the reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return { count: state.count + 1 }; //behind the scenes ,actualy {...state,count:state.count+1} occurs
    case "sub":
      return { count: state.count - 1 };
    default:
      throw Error();
  }
};

const Red = () => {
  //useReducer hook need two arguments that is reducer function and the intial value
  //since the count is object we change it as countObject
  const [countObject, dispatch] = useReducer(reducer, counter); 
  return (
    <>
      <button onClick={() => dispatch({ type: "add" })}>+</button>
      {countObject.count}
      <button onClick={() => dispatch({ type: "sub" })}>-</button>
    </>
  );
};

export default Red;
