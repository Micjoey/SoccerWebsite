// RankingComponent.js
import GenericTableComponent from "../../Utils/GenericTableComponent";
import useFetchData from "../../Utils/useFetchData";

const RankingComponent = () => {
  const { data, loading, error } = useFetchData(
    "http://localhost:3001/ranking",
  );

  const columns = [
    { header: "Team Name", accessor: "teamName" },
    { header: "Games Played", accessor: "gamesPlayed" },
    { header: "Wins", accessor: "wins" },
    { header: "Losses", accessor: "losses" },
    { header: "Ties", accessor: "ties" },
    { header: "Goals For", accessor: "goalsFor" },
    { header: "Goals Against", accessor: "goalsAgainst" },
    { header: "Goal Differential", accessor: "goalDifferential" },
    { header: "Points", accessor: "points" },
  ];

  return (
    <div>
      <h1>Team Rankings</h1>
      <GenericTableComponent
        data={data}
        columns={columns}
        loading={loading}
        error={error}
      />
    </div>
  );
};

export default RankingComponent;
