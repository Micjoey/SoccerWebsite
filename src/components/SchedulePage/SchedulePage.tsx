import React from "react";
import "./SchedulePage.scss";
import ScheduleComponent from "./ScheduleComponent/ScheduleComponent";

const SchedulePage: React.FC = () => {
  return (
    <div className="SchedulePage">
      <ScheduleComponent />
    </div>
  );
};

export default SchedulePage;
