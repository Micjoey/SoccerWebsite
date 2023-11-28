import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Form, Table } from "react-bootstrap";
import "./GameScheduleManager.scss";

interface Game {
  id: string;
  date: string; // Updated from gameDate
  opponent: string; // Updated from gameOpponent
}

const GameScheduleManager: React.FC = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [newGame, setNewGame] = useState({ date: "", opponent: "" });
  const [updateGame, setUpdateGame] = useState({
    id: "",
    date: "",
    opponent: "",
  });
  const [deleteGameId, setDeleteGameId] = useState("");

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
        console.error("Failed to fetch games");
      }
    } catch (error) {
      console.error("Error fetching games:", error);
    }
  };

  const handleAddGame = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
      } else {
        console.error("Failed to add game");
      }
    } catch (error) {
      console.error("Error adding game:", error);
    }
  };

  const handleUpdateGame = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch(`/games/${updateGame.id}`, {
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
      } else {
        console.error("Failed to update game");
      }
    } catch (error) {
      console.error("Error updating game:", error);
    }
  };

  const handleDeleteGame = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch(`/games/${deleteGameId}`, {
        method: "DELETE",
      });
      if (response.ok) {
        setGames((currentGames) =>
          currentGames.filter((game) => game.id !== deleteGameId),
        );
        setDeleteGameId(""); // Reset field
      } else {
        console.error("Failed to delete game");
      }
    } catch (error) {
      console.error("Error deleting game:", error);
    }
  };

  return (
    <div className="GameScheduleManager">
      <Container>
        {/* List Games */}
        <Row className="mb-4">
          <Col>
            <h2>Game Schedule</h2>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Opponent</th>
                </tr>
              </thead>
              <tbody>
                {games.map((game) => (
                  <tr key={game.id}>
                    <td>{game.date}</td>
                    <td>{game.opponent}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>

        {/* Add Game */}
        <Row className="mb-4">
          <Col>
            <h2>Add New Game</h2>
            <Form onSubmit={handleAddGame}>
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
              <Form.Group controlId="formUpdateGameId">
                <Form.Label>Game ID</Form.Label>
                <Form.Control
                  type="text"
                  value={updateGame.id}
                  onChange={(e) =>
                    setUpdateGame({ ...updateGame, id: e.target.value })
                  }
                />
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

        {/* Delete Game */}
        <Row>
          <Col>
            <h2>Delete Game</h2>
            <Form onSubmit={handleDeleteGame}>
              <Form.Group controlId="formDeleteGameId">
                <Form.Label>Game ID</Form.Label>
                <Form.Control
                  type="text"
                  value={deleteGameId}
                  onChange={(e) => setDeleteGameId(e.target.value)}
                />
              </Form.Group>
              <Button variant="danger" type="submit">
                Delete Game
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default GameScheduleManager;
