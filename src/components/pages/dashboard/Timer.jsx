import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Timer() {
  let taskDuration = 60;
  let breakTime = 5

  const [time, setTime] = useState(taskDuration)
  

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (time === 0) {
        clearInterval(intervalId);
        // Countdown complete, you can add your logic here
      } else {
        setTime(time - 1);
      }
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, [time, breakTime]);
  let timeLeft = taskDuration-time
  let percentage = Math.round(timeLeft /taskDuration *100)
  return (
    <>
      <Container sx={{ width: "200px" }}>
              <CircularProgressbar
                value={percentage}
                text={`${time} sec`}
                styles={buildStyles({
                  textColor: "#fff",
                  pathColor: "green",
                  trailColor: "grey",
                })}
              />
      </Container>
    </>
  );
}

export default Timer;
