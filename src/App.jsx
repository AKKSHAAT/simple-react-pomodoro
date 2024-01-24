import { useState , useEffect, } from 'react'
function App() {
    const TIME_IN_SECONDS = 150; //change to 1500 for 25 mins
    const [time, setTime] = useState(TIME_IN_SECONDS);
    const [progress, setProgress] = useState(0);
    const [isActive, setIsActive] = useState(false);
  
  
    useEffect(() => { //handels timer
      const intervalId = setInterval(() => {
        if(isActive){
          setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
        }
      }, 1000); 

      return () => clearInterval(intervalId);
    }, [isActive]);
  
    useEffect(() => { //handels progress bar  
      const p = ((TIME_IN_SECONDS - time) / TIME_IN_SECONDS) * 100;
      setProgress(p);
    }, [time]);
  
    // Format the time for display
    const formattedTime = `${Math.floor( time / 60 )} : ${String(time % 60 ).padStart(2, "0")}`;
    function resetTimer() {
      setIsActive(!isActive);
      setTime(TIME_IN_SECONDS); // Reset to 2.5 minutes
    }
  
    return (
      <>
      <div className="pomodoro">
      <p>Pomodoro 🍅</p>
        <p>{ formattedTime }</p>
        <progress value={progress} max={100}></progress>
        <button className='button' onClick={resetTimer}>
          {isActive ? "restart" : "start" }
        </button>
      </div>
      </>
    );
  
}

export default App
