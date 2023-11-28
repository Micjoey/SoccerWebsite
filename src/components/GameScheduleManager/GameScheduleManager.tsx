import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  Table,
  Dropdown,
} from "react-bootstrap";
import "./GameScheduleManager.scss";
import { formatDate } from "../../Utils/convertDate";
import GameSchedule from "./GameSchedule/GameSchedule";

interface Game {
  id: string;
  date: string;
  opponent: string;
  location: string;
  locationLink?: string;
}

const GameScheduleManager: React.FC = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [newGame, setNewGame] = useState<Game>({
    id: "",
    date: "",
    opponent: "",
    location: "",
  });
  const [deleteGameIds, setDeleteGameIds] = useState<string[]>([]);
  const [selectedGameId, setSelectedGameId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch games when the component mounts
    fetchGames();
  }, []);

  const fetchGames = async () => {
    try {
      const response = await fetch("http://localhost:3001/games");
      if (response.ok) {
        const gamesData: Game[] = await response.json();

        // Generate Google Maps links for each game
        const gamesWithLinks = gamesData.map((game) => {
          const locationLink = `https://maps.google.com/?q=${encodeURIComponent(
            game.location,
          )}`;
          return {
            ...game,
            locationLink,
          };
        });

        setGames(gamesWithLinks);
      } else {
        setError("Failed to fetch games");
      }
    } catch (error) {
      setError("Error fetching games");
    }
  };

  const handleAddGame = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!newGame.date || !newGame.opponent || !newGame.location) {
      setError("Date, opponent, and location are required fields");
      return;
    }

    // Generate the Google Maps link based on the location
    const locationLink = `https://maps.google.com/?q=${encodeURIComponent(
      newGame.location,
    )}`;

    try {
      const response = await fetch("http://localhost:3001/games", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...newGame,
          locationLink,
        }),
      });
      if (response.ok) {
        const addedGame: Game = await response.json();
        setGames((currentGames) => [...currentGames, addedGame]);
        setNewGame({
          id: "",
          date: "",
          opponent: "",
          location: "",
        }); // Reset form fields
        setError(null);
      } else {
        setError("Failed to add game");
      }
    } catch (error) {
      setError("Error adding game");
    }
  };

  const handleUpdateGame = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!selectedGameId || (!newGame.date && !newGame.opponent)) {
      setError("Please select a game and provide date or opponent");
      return;
    }

    try {
      const response = await fetch(`/games/${selectedGameId}`);
      if (response.ok) {
        const selectedGameData: Game = await response.json();
        const updatedFields: Partial<Game> = {
          date: newGame.date || selectedGameData.date,
          opponent: newGame.opponent || selectedGameData.opponent,
          location: newGame.location || selectedGameData.location,
        };

        // Update only the fields that have changed
        const updatedGames = games.map((game) =>
          game.id === selectedGameId ? { ...game, ...updatedFields } : game,
        );

        setGames(updatedGames);
        setSelectedGameId(null); // Clear the selected game ID
        setNewGame({
          id: "",
          date: "",
          opponent: "",
          location: "",
        });
        setError(null);
      } else {
        setError("Failed to fetch game data");
      }
    } catch (error) {
      setError("Error updating game");
    }
  };

  const handleGameCheckboxChange = (gameId: string) => {
    if (deleteGameIds.includes(gameId)) {
      setDeleteGameIds(deleteGameIds.filter((id) => id !== gameId));
    } else {
      setDeleteGameIds([...deleteGameIds, gameId]);
    }
  };

  const handleDeleteSelectedGames = async () => {
    if (deleteGameIds.length === 0) {
      setError("No games selected for deletion");
      return;
    }

    try {
      for (const gameId of deleteGameIds) {
        const response = await fetch(`/games/${gameId}`, {
          method: "DELETE",
        });
        if (response.ok) {
          setGames((currentGames) =>
            currentGames.filter((game) => game.id !== gameId),
          );
        } else {
          setError(`Failed to delete game with ID ${gameId}`);
        }
      }
      setDeleteGameIds([]);
      setError(null);
    } catch (error) {
      setError("Error deleting games");
    }
  };

  return (
    <div className="GameScheduleManager">
      <Container>
        {/* List Games */}
        <Row className="mb-4">
          <Col>
            <GameSchedule
              games={games}
              deleteGameIds={deleteGameIds}
              handleGameCheckboxChange={handleGameCheckboxChange}
              handleDeleteSelectedGames={handleDeleteSelectedGames}
            />
          </Col>
        </Row>
        {/* Add Game */}
        <Row className="mb-4">
          <Col>
            <h2>Add New Game</h2>
            <Form onSubmit={handleAddGame}>
              {error && <p className="text-danger">{error}</p>}
              <Form.Group controlId="formGameDate">
                <Form.Label>Date</Form.Label>
                <Form.Control
                  type="date"
                  value={newGame.date}
                  onChange={(e) =>
                    setNewGame({ ...newGame, date: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group controlId="formOpponent">
                <Form.Label>Opponent</Form.Label>
                <Form.Control
                  type="text"
                  value={newGame.opponent}
                  onChange={(e) =>
                    setNewGame({ ...newGame, opponent: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group controlId="formLocation">
                <Form.Label>Location</Form.Label>
                <Form.Control
                  type="text"
                  value={newGame.location}
                  onChange={(e) =>
                    setNewGame({ ...newGame, location: e.target.value })
                  }
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Add Game
              </Button>
            </Form>
          </Col>
        </Row>

        {/* Update Game */}
        <Row className="mb-4">
          <Col>
            <h2>Update Game</h2>
            <Form onSubmit={handleUpdateGame}>
              {error && <p className="text-danger">{error}</p>}
              <Dropdown>
                <Dropdown.Toggle variant="primary" id="updateGameDropdown">
                  Select Game to Update
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {games.map((game) => (
                    <Dropdown.Item
                      key={game.id}
                      onClick={() => {
                        setSelectedGameId(game.id);
                        setNewGame({
                          id: game.id,
                          date: game.date,
                          opponent: game.opponent,
                          location: game.location,
                        });
                      }}
                    >
                      {game.opponent} - {formatDate(game.date)}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
              <Form.Group controlId="formUpdateGameDate">
                <Form.Label>Date</Form.Label>
                <Form.Control
                  type="date"
                  value={newGame.date}
                  onChange={(e) =>
                    setNewGame({ ...newGame, date: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group controlId="formUpdateOpponent">
                <Form.Label>Opponent</Form.Label>
                <Form.Control
                  type="text"
                  value={newGame.opponent}
                  onChange={(e) =>
                    setNewGame({ ...newGame, opponent: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group controlId="formUpdateLocation">
                <Form.Label>Location</Form.Label>
                <Form.Control
                  type="text"
                  value={newGame.location}
                  onChange={(e) =>
                    setNewGame({ ...newGame, location: e.target.value })
                  }
                />
              </Form.Group>
              <Button variant="success" type="submit">
                Update Game
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default GameScheduleManager;
