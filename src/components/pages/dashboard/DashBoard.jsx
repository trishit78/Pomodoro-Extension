import { useLocation } from "react-router-dom";
import Timer from "./Timer";
import { useEffect, useState } from "react";

function DashBoard(props) {
  const location = useLocation();
  const { state } = location;
  const [data, setData] = useState({});
  const [val, setVal] = useState(null)
  const [breakTime, setBreakTime] = useState(0)
  const [durationUnit, setDurationUnit] = useState("")
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  useEffect(() => {
    chrome.storage.local.get([`${state}`]).then((res) => {
      setData(res[state]);
    });
  }, []);

  useEffect(() => {
    setVal(data.durationValue)
    setBreakTime(data.breakTime)
    setDurationUnit(data.durationUnit)
    setTitle(data.title)
    setDescription(data.description)
  }, [data]);


  return (
    <>
      {val === null ? (
        <h1>Loading...</h1>
      ) : (
        <Timer taskDuration={val} _breakTime={breakTime} _title={title} _description={description} _durationUnit={durationUnit}/>
      )}
    </>
  );
}

export default DashBoard;
