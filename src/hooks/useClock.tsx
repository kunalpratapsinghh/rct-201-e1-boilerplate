import { useEffect, useState } from "react";

const useClock = () => {
  const [hours, setHour] = useState<string>("");
  const [minutes, setMinute] = useState<string>("");
  const [second, setSecond] = useState<string>("");

  let Time=()=>{
    setHour(new Date().getHours().toString());
    setMinute(new Date().getMinutes().toString())
    setSecond(new Date().getSeconds().toString())
  }
  useEffect(()=>{
    const clock=setInterval(()=>{
      Time()
    },1000);
    return () => {
      clearInterval(clock)};
  },[])


  return {hours,minutes,second}
};

export default useClock;
