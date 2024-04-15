import { useEffect } from "react";
import { Board } from "../types";
import './styles.css'
import { scheduleDailyTask } from "../utils";

const Sleep: Board = (props) => {

  useEffect(() => {
    const timeout = scheduleDailyTask(18, 0, () => { // run at 6pm daily
      props.requestDisplay(60 * 12, 1); // request for 12 hours at max priority
    });
    return () => {
      clearTimeout(timeout);
    }
  })


  return (<div className="black-screen"></div>)
}

export default Sleep;