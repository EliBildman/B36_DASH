import React, { CSSProperties, useState } from "react";
import { Board } from "./types";
import './App.css'
import { IconButton } from "@mui/material";
import { NavigateBefore, NavigateNext } from "@mui/icons-material";

// IMPORT NEW BOARDS HERE
import Weather from "./Weather/Weather";
import TrafficMap from "./TrafficMap/TrafficMap";
import Sleep from "./Sleep/Sleep";


// THEN ADD THEM TO THIS LIST :)
const boardTypes: Board[] = [Weather, TrafficMap, Sleep]; 

// YOU SHOULDN'T NEED TO TOUCH ANYTHING ELSE

type ActiveBoard = {
  index: number;
  urgency: number;
  startTime: Date;
  endTime: Date;
};

const defaultBoard = {
  index: 1,
  urgency: 0,
  startTime: new Date(),
  endTime: new Date(),
};


const Controller: React.FC = () => {
  const [activeBoard, setActiveBoard] = useState<ActiveBoard>(defaultBoard);
  const [hideControlsTimeout, setHideControlsTimeout] = useState<NodeJS.Timeout | null>(null);

  const getRequestDisplayCallback =
    (index: number) => (durationSeconds: number, urgency: number) => {
      if (urgency < 0 || urgency > 1) {
        console.error(`Urgency must be within [0, 1], got ${urgency}`);
        return false;
      }

      console.log(
        `Got display request i: ${index} dur: ${durationSeconds} urgency: ${urgency}`
      );

      const now = new Date();
      if (now > activeBoard.endTime || urgency > activeBoard.urgency) {
        setActiveBoard({
          index,
          urgency,
          startTime: now,
          endTime: new Date(now.getTime() + durationSeconds * 1000),
        });
        return true;
      } else {
        return false;
      }
    };

  const boards = boardTypes.map((BoardType, index) => {
    const active = index === activeBoard.index;
    const style: CSSProperties = active ? {} : { display: "none" }; // hide if not active
    return (
      <div key={index} style={style} className="board-container">
        <BoardType
          isActive={active}
          requestDisplay={getRequestDisplayCallback(index)}
        />
      </div>
    );
  });

  // for manual dash changes, give no prio and no duration
  const changeDash = (dir: number) => () => {
    var newIndex = (activeBoard.index + dir) % boards.length;
    if (newIndex < 0) newIndex = boards.length - 1;

    const newActiveBoard: ActiveBoard = {
      index: newIndex,
      urgency: 0,
      startTime: new Date(),
      endTime: new Date(),
    }

    setActiveBoard(newActiveBoard);
  }

  const handleMouseMove = () => {
    if (hideControlsTimeout) {
      clearTimeout(hideControlsTimeout);
    }
    const timeoutId = setTimeout(() => {
      setHideControlsTimeout(null);
    }, 5000);
    setHideControlsTimeout(timeoutId);
  }

  const navButtonStyle: CSSProperties = {
    visibility: (!!hideControlsTimeout) ? 'visible' : 'hidden',
  }
  
  const fullScreenStyle: CSSProperties = {
    cursor: (!!hideControlsTimeout) ? 'auto': 'none',
  }

  return <div onMouseMove={handleMouseMove} style={fullScreenStyle}>
    {boards}
    <div className="bottom-buttons" style={navButtonStyle}>
      <IconButton onClick={changeDash(-1)}>
        <NavigateBefore className="nav-button" />
      </IconButton>
      <IconButton onClick={changeDash(1)}>
        <NavigateNext className="nav-button" />
      </IconButton>
    </div>
    </div>;
};

export default Controller;
