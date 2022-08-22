import { useState } from "react";

const useNumberList = (initialArray: number[]) => {
  const [num,setNum]=useState<number>(0)
  const [list,setArr]=useState(initialArray)

  const handlechange = (event: React.ChangeEvent<HTMLInputElement>):void => {
    setNum(Number(event.target.value));
  };
  const appendStart=(event: React.MouseEvent<HTMLButtonElement>):void=>{
    setArr([num,...list])
  }
  const appendEnd=(event: React.MouseEvent<HTMLButtonElement>):void=>{
    setArr([...list,num])
  }
  const popEnd=(event: React.MouseEvent<HTMLButtonElement>):void=>{
  list.pop()
  setArr([...list])
  }
  const popStart=(event: React.MouseEvent<HTMLButtonElement>):void=>{
    list.shift();
    setArr([...list])
    }
  const clear=(event: React.MouseEvent<HTMLButtonElement>):void=>{
    setArr([])
    }

  const reset=(event: React.MouseEvent<HTMLButtonElement>):void=>{
      setArr([...initialArray])
};

return {list,handlechange,appendStart,popStart,clear,reset,appendEnd,popEnd}
}
export default useNumberList;
