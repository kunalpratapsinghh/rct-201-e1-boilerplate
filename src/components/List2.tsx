import React from "react";
import useNumberList from "../hooks/useNumberList";

type List2Props = {
  props:Array<number>

};
const List2 = ({props}: List2Props) => {
  const  {list,handlechange,appendEnd,popStart,clear,reset}=useNumberList(props)

  return (
    <div data-testid="list2">
      <h3 data-testid="list2-label">{"List2"}</h3>
      <div style={{marginLeft:"-400px"}}>
        {list && list.map((el,index)=><span key={index}>{el+"    "}</span>)}
      </div>
      <div data-testid="list2-element">{/* Each element in a list */}</div>

      <input data-testid="list2-input" type={"number"} onChange={handlechange}/>
      <button data-testid="list2-btn-append-end"  onClick={(num)=>appendEnd(num)}>
        Append End
      </button>
      <button data-testid="list2-btn-pop-start"  onClick={popStart}>
       Pop start
      </button>
      <button data-testid="list2-btn-clear" onClick={clear}>
       clear
      </button>
      <button data-testid="list2-btn-reset" onClick={reset}>
       Reset
      </button>
    </div>
  );
};

export default List2;
