import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Form, Table } from "react-bootstrap";
import "./GameScheduleManager.scss";

interface Game {
  id: string;
  date: string; // Updated from gameDate
  opponent: string; // Updated from gameOpponent
  location: string; // Additional data field
}

const GameScheduleManager: React.FC = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [newGame, setNewGame] = useState({ date: "", opponent: "" });
  const [updateGame, setUpdateGame] = useState({
    id: "",
    date: "",
    opponent: "",
  });
  const [deleteGameIds, setDeleteGameIds] = useState<string[]>([]);
  const [selectedGameId, setSelectedGameId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch games when the component mounts
    fetchGames();
  }, []);

  const fetchGames = async () => {
    try {
      const response = await fetch("http://localhost:3001/games");
      if (response.ok) {
        const gamesData = await response.json();
        setGames(gamesData);
      } else {
        setError("Failed to fetch games");
      }
    } catch (error) {
      setError("Error fetching games");
    }
  };

  const handleAddGame = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!newGame.date || !newGame.opponent) {
      setError("Date and opponent are required fields");
      return;
    }

    try {
      const response = await fetch("http://localhost:3001/games", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newGame),
      });
      if (response.ok) {
        const addedGame = await response.json();
        setGames((currentGames) => [...currentGames, addedGame]);
        setNewGame({ date: "", opponent: "" }); // Reset form fields
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
    if (!selectedGameId || !updateGame.date || !updateGame.opponent) {
      setError("Please select a game and provide date and opponent");
      return;
    }

    try {
      const response = await fetch(`/games/${selectedGameId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          date: updateGame.date,
          opponent: updateGame.opponent,
        }),
      });
      if (response.ok) {
        const updatedGame = await response.json();
        setGames((currentGames) =>
          currentGames.map((game) =>
            game.id === updatedGame.id ? updatedGame : game,
          ),
        );
        setUpdateGame({ id: "", date: "", opponent: "" }); // Reset form fields
        setSelectedGameId("");
        setError(null);
      } else {
        setError("Failed to update game");
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
            <h2>Game Schedule</h2>
            {error && <p className="text-danger">{error}</p>}
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Date</th>
                  <th>Opponent</th>
                  <th>Location</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {games.map((game) => (
                  <tr key={game.id}>
                    <td>{game.id}</td>
                    <td>{game.date}</td>
                    <td>{game.opponent}</td>
                    <td>{game.location}</td>
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
          </Col>
        </Row>
        {/* Delete Selected Games */}
        <Row>
          <Col>
            <Button
              variant="danger"
              onClick={handleDeleteSelectedGames}
              disabled={deleteGameIds.length === 0}
            >
              Delete Selected Games
            </Button>
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
              <Form.Group controlId="formUpdateGameId">
                <Form.Label>Select Game</Form.Label>
                <Form.Control
                  as="select"
                  value={selectedGameId}
                  onChange={(e) => setSelectedGameId(e.target.value)}
                >
                  <option value="">Select a game</option>
                  {games.map((game) => (
                    <option key={game.id} value={game.id}>
                      {game.date} - {game.opponent}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="formUpdateGameDate">
                <Form.Label>Date</Form.Label>
                <Form.Control
                  type="date"
                  value={updateGame.date}
                  onChange={(e) =>
                    setUpdateGame({ ...updateGame, date: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group controlId="formUpdateOpponent">
                <Form.Label>Opponent</Form.Label>
                <Form.Control
                  type="text"
                  value={updateGame.opponent}
                  onChange={(e) =>
                    setUpdateGame({ ...updateGame, opponent: e.target.value })
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
