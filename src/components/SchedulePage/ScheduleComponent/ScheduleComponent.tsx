import React, { useState, useEffect } from "react";
import GenericTableComponent from "../../GenericComponents/GenericTableComponent";
import customFetch from "../../../Utils/customFetch";

const ScheduleComponent = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSchedule = async () => {
      try {
        const response = await customFetch(
          "http://localhost:3001/api/schedule",
        );
        if (response.ok) {
          const scheduleData = await response.json();
          setData(scheduleData.schedule); // Extracting 'schedule' from the fetched data
          setLoading(false);
        } else {
          throw new Error("Failed to fetch schedule");
        }
      } catch (error) {
        setError("Error fetching schedule");
        setLoading(false);
      }
    };

    fetchSchedule();
  }, []);

  const columns = [
    { header: "Date", accessor: "date" },
    { header: "Time", accessor: "time" },
    { header: "Home Team", accessor: "homeTeam" },
    { header: "Away Team", accessor: "awayTeam" },
    { header: "Location", accessor: "location.text" }, // Adjusting for nested property
    // Add a column for location link if needed
  ];

  return (
    <div>
      <h1>Game Schedule</h1>
      <GenericTableComponent
        data={data}
        columns={columns}
        loading={loading}
        error={error}
      />
    </div>
  );
};

export default ScheduleComponent;
