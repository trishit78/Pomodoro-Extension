import { useLocation } from "react-router-dom";
import Timer from "./Timer";
import { useEffect, useState } from "react";


function DashBoard(props) {
  const location = useLocation()
  const { state } = location
  const [data, setData] = useState()
  useEffect(() => {
    chrome.storage.local.get([`${state}`]).then((res) => setData(res[state]))
  },[])
  console.log(val, br)
  const val = parseInt(data.durationValue)
  const br = parseInt(data.breakTime)
  return (
    <>
      <Timer
        taskDuration={val}
        breakTime={br}
      />
    </>
  );
}

export default DashBoard;
