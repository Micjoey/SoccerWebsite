import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import "./ScheduleComponent.scss";

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

async function fetchScheduleData(
  setSchedule: React.Dispatch<React.SetStateAction<Game[]>>,
  setError: React.Dispatch<React.SetStateAction<string | null>>,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
) {
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

function ScheduleComponent() {
  const [schedule, setSchedule] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchScheduleData(setSchedule, setError, setLoading);
  }, []);

  if (loading) {
    return <div>Loading schedule...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Game Schedule</h1>
      <Table striped bordered hover>
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
      </Table>
    </div>
  );
}

export default ScheduleComponent;
