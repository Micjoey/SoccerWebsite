// ScheduleComponent.js
import GenericTableComponent from "../../Utils/GenericTableComponent";
import useFetchData from "../../Utils/useFetchData";

const ScheduleComponent = () => {
  const { data, loading, error } = useFetchData(
    "http://localhost:3001/schedule",
  );

  const columns = [
    { header: "Date", accessor: "date" },
    { header: "Time", accessor: "time" },
    { header: "Home Team", accessor: "homeTeam" },
    { header: "Away Team", accessor: "awayTeam" },
    // Add more columns as needed
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
