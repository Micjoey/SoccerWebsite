import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Form, Table } from "react-bootstrap";
import "./GameScheduleManager.scss";
import { formatDate } from "../../Utils/convertDate";

interface Game {
  id: string;
  date: string;
  opponent: string;
  location: string; // Address or location
  locationLink?: string; // Optional Google Maps link
}

const GameScheduleManager: React.FC = () => {
  const [games, setGames] = useState<Game[]>([]);
  const dataDictionary = { date: "", opponent: "", location: "" };
  const [newGame, setNewGame] = useState(dataDictionary);
  const [updateGame, setUpdateGame] = useState(
    Object.assign(
      {},
      {
        id: "",
      },
      dataDictionary,
    ),
  );
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
    if (!newGame.date || !newGame.opponent || !newGame.location) {
      setError("Date, opponent, and location are required fields");
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
        setNewGame(dataDictionary); // Reset form fields
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
    if (!selectedGameId || (!updateGame.date && !updateGame.opponent)) {
      setError("Please select a game and provide date or opponent");
      return;
    }

    try {
      const response = await fetch(`/games/${selectedGameId}`);
      if (response.ok) {
        const selectedGameData = await response.json();

        // Check for differences between the current state and fetched data
        const updatedFields: Partial<Game> = {};
        if (updateGame.date !== selectedGameData.date) {
          updatedFields.date = selectedGameData.date;
        }
        if (updateGame.opponent !== selectedGameData.opponent) {
          updatedFields.opponent = selectedGameData.opponent;
        }
        if (updateGame.location !== selectedGameData.location) {
          updatedFields.location = selectedGameData.location;
        }

        // Update only the fields that have changed
        setUpdateGame((prevUpdateGame) => ({
          ...prevUpdateGame,
          ...updatedFields,
        }));

        setSelectedGameId(""); // Clear the selected game ID
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
                    <td>{formatDate(game.date)}</td>
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
              <Form.Group controlId="formUpdateLocation">
                <Form.Label>Location</Form.Label>
                <Form.Control
                  type="text"
                  value={updateGame.location}
                  onChange={(e) =>
                    setUpdateGame({ ...updateGame, location: e.target.value })
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
