import React from "react";
import useNumberList from "../hooks/useNumberList";

type List1Props = {
  props:number[]
};
const List1 = ({props}: List1Props) => {
  const  {list,handlechange,appendStart,popEnd,clear,reset}=useNumberList(props)
  return (
    <div data-testid="list1">
      <h3 data-testid="list1-label">{"List1"}</h3>
      <div style={{marginLeft:"-400px"}}>
        {list && list.map((el,index)=><span key={index}>{el+"    "}</span>)}
      </div>
      <div data-testid="list1-element">{/* Each element in a list */}</div>

      
      <input data-testid="list1-input" type="number" onChange={handlechange}/>
      <button data-testid="list1-btn-append-start" onClick={(num)=>appendStart(num)}>
        Append start
      </button>
      <button data-testid="list1-btn-pop-end" onClick={popEnd}>
       Pop End
      </button>
      <button data-testid="list1-btn-clear" onClick={clear}>
        clear
      </button>
      <button data-testid="list1-btn-reset" onClick={(event)=>reset(event)}>
       Reset
      </button>
    </div>
  );
};

export default List1;
