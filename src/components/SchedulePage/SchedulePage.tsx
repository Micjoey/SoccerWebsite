import React from "react";
import "./SchedulePage.scss";
import ScheduleComponent from "./ScheduleComponent/ScheduleComponent";
import RankingComponent from "./RankingComponent/RankingComponent";

const SchedulePage: React.FC = () => {
  return (
    <div className="SchedulePage">
      <RankingComponent />
      <ScheduleComponent />
    </div>
  );
};

export default SchedulePage;
