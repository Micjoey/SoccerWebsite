import React, { useEffect, useState } from "react";

interface Game {
  date: string;
  time: string;
  homeTeam: string;
  awayTeam: string;
  location: {
    text: string;
    href: string;
  };
}

function ScheduleComponent() {
  const [schedule, setSchedule] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchSchedule() {
      try {
        const scheduleResponse = await fetch("http://localhost:3001/schedule");

        if (!scheduleResponse.ok) {
          throw new Error("Network scheduleResponse was not ok");
        }

        const data: { schedule: Game[] } = await scheduleResponse.json();
        setSchedule(data.schedule);
        setError(null); // Clear any previous errors
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
        setError(
          "There was an error fetching the schedule. Please try again later.",
        );
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
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Game Schedule</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Time</th>
            <th>Location</th>
            <th>Home Team</th>
            <th>Away Team</th>
          </tr>
        </thead>
        <tbody>
          {schedule.map((game, gameIndex) => (
            <tr key={gameIndex}>
              <td>{game.date}</td>
              <td>{game.time}</td>
              <td>
                <a
                  href={game.location.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {game.location.text}
                </a>
              </td>
              <td>{game.homeTeam}</td>
              <td>{game.awayTeam}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ScheduleComponent;
