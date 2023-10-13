import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Timer(props) {
  const { taskDuration, _breakTime, _title, _description, _durationUnit } = props;
  
  // Initialize time using the taskDuration prop
  const [time, setTime] = useState(taskDuration);
  const [durationUnit, setDurationUnit] = useState(_durationUnit)
  const [title, setTitle] = useState(_title)
  const [description, setDescription] = useState(_description)
  const [breakTime, setBreakTime] = useState(_breakTime)
  const [runner, setRunner] = useState(0)
  const [timerVal, setTimerVal] = useState("")

  
  useEffect(() => {
    if(durationUnit === "minutes"){
      setTimerVal("min")
      setTime(taskDuration*60)
    }else{
      setTimerVal("hrs")
      setTime((taskDuration*60)*60)
    }
    setDurationUnit(_durationUnit)
    setTitle(_title)
    setDescription(_description)
    setBreakTime(_breakTime)
    console.log(taskDuration, breakTime, title, description, durationUnit);
  },[taskDuration, durationUnit, title, description, breakTime])

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (time === 0) {
        clearInterval(intervalId);
      } else {
        setTime((prevTime) => prevTime - 1)
      }
    }, 1000);
    console.log("intimer", time,taskDuration, breakTime, title, description, durationUnit);
    return () => {
      clearInterval(intervalId);
    };
  }, [time])


  let timeLeft
  let percentage
  let showUnit
  if(durationUnit === "minutes") {
    timeLeft = (taskDuration*60) - time;
    percentage = Math.round((timeLeft / (taskDuration*60)) * 100);
    showUnit = Math.round(time/60)
  }else{
    timeLeft = (taskDuration*60*60) - time;
    percentage = Math.round((timeLeft / ((taskDuration*60)*60)) * 100);
    showUnit = Math.round((time/60)/60)
  }

  return (
    <Container sx={{ width: "200px" }}>
      <CircularProgressbar
        value={percentage}
        text={`${showUnit} ${timerVal}`}
        styles={buildStyles({
          textColor: "#fff",
          pathColor: "green",
          trailColor: "grey",
        })}
      />
    </Container>
  );
}

export default Timer;