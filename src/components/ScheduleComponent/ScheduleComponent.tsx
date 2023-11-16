import React, { useEffect, useState } from "react";

interface Game {
  date: string;
  time: string;
  homeTeam: string;
  awayTeam: string;
  location: string;
}

function ScheduleComponent() {
  const [schedule, setSchedule] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null); // New error state

  useEffect(() => {
    async function fetchSchedule() {
      try {
        const response = await fetch("http://localhost:3001/schedule");

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data: Game[] = await response.json();
        console.log(data);
        setSchedule(data);
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
        setError(
          "There was an error fetching the schedule. Please try again later.",
        ); // Set error message
      } finally {
        setLoading(false);
      }
    }

    fetchSchedule();
  }, []);

  if (loading) {
    return <div>Loading schedule...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>; // Display error message
  }

  return (
    <div>
      <h1>Game Schedule</h1>
      {schedule.map((game, index) => (
        <div key={index}>
          <p>
            {game.date} - {game.homeTeam} vs. {game.awayTeam}
          </p>
        </div>
      ))}
    </div>
  );
}

export default ScheduleComponent;
