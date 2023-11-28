import React from "react";
import { Table, Button } from "react-bootstrap";
import { formatDate } from "../../../Utils/convertDate";

interface Game {
  id: string;
  date: string;
  opponent: string;
  location: string;
  locationLink?: string;
}

interface GameScheduleProps {
  games: Game[];
  deleteGameIds: string[];
  handleGameCheckboxChange: (gameId: string) => void;
  handleDeleteSelectedGames: () => void;
}

const GameSchedule: React.FC<GameScheduleProps> = ({
  games,
  deleteGameIds,
  handleGameCheckboxChange,
  handleDeleteSelectedGames,
}) => {
  return (
    <>
      <h2>Game Schedule</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Date</th>
            <th>Opponent</th>
            <th>Location</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {games.map((game) => (
            <tr key={game.id}>
              <td>{formatDate(game.date)}</td>
              <td>{game.opponent}</td>
              <td>
                {game.locationLink ? (
                  <a
                    href={game.locationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {game.location}
                  </a>
                ) : (
                  game.location
                )}
              </td>
              <td>
                <input
                  type="checkbox"
                  onChange={() => handleGameCheckboxChange(game.id)}
                  checked={deleteGameIds.includes(game.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button
        variant="danger"
        onClick={handleDeleteSelectedGames}
        disabled={deleteGameIds.length === 0}
      >
        Delete Selected Games
      </Button>
    </>
  );
};

export default GameSchedule;
