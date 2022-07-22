import {useState, useEffect} from "react";

function Timer({ duration }) {
  const [time, setTime] = useState(duration)
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prev => prev - 1)
    }, 1000);

    if(time <= 0){
      clearInterval(interval)
    }

    return () => clearInterval(interval);

  }, [time])

  const getTime = () => {
    let hours = Math.floor(time / 3600);
    let minutes = Math.floor((time - hours * 3600) / 60);
    let seconds = time - hours * 3600 - minutes * 60;

    return {hours, minutes, seconds}
  }

  return (
    <div className="md:text-lg text-gray-600 font-medium">
      <span>{getTime().hours >= 10 ? getTime().hours : "0" + getTime().hours}</span>
      :
      <div className="w-6 inline-block">{getTime().minutes >= 10 ? getTime().minutes : "0" + getTime().minutes}</div>
      :
      <div className="w-6 inline-block">{getTime().seconds >= 10 ? getTime().seconds : "0" + getTime().seconds}</div>
    </div>
  );
}

export default Timer;
