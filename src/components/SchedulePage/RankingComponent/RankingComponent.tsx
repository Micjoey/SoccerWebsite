import React, { useState, useEffect } from "react";
import GenericTableComponent from "../../GenericComponents/GenericTableComponent";
import customFetch from "../../../Utils/customFetch";

const RankingComponent = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRanking = async () => {
      try {
        const response = await customFetch("http://localhost:3001/api/ranking");
        if (response.ok) {
          const rankingData = await response.json();
          setData(rankingData);
          setLoading(false);
        } else {
          throw new Error("Failed to fetch rankings");
        }
      } catch (error) {
        setError("Error fetching rankings");
        setLoading(false);
      }
    };

    fetchRanking();
  }, []);

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
