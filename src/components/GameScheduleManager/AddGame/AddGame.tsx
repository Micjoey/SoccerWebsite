import React, { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { Game } from "../types"; // Import the Game type

interface AddGameProps {
  handleAddGameSubmit: (newGame: Partial<Game>) => Promise<void>;
  error: string | null; // Add error prop
}

const AddGame: React.FC<AddGameProps> = ({ handleAddGameSubmit, error }) => {
  const [newGame, setNewGame] = useState<Partial<Game>>({
    date: "",
    time: "", // Added game time
    opponent: "",
    location: "",
    homeTeamColor: "",
    awayTeamColor: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await handleAddGameSubmit(newGame);
    // Clear the form fields
    setNewGame({
      date: "",
      time: "",
      opponent: "",
      location: "",
      homeTeamColor: "",
      awayTeamColor: "",
    });
  };

  return (
    <Container>
      <Row className="mb-4">
        <Col>
          <h2>Add New Game</h2>
          {error && <p className="text-danger">{error}</p>}{" "}
          {/* Display error message if it exists */}
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formGameDate">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                value={newGame.date || ""}
                onChange={(e) =>
                  setNewGame({ ...newGame, date: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group controlId="formGameTime">
              <Form.Label>Time</Form.Label>
              <Form.Control
                type="time"
                value={newGame.time || ""}
                onChange={(e) =>
                  setNewGame({ ...newGame, time: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group controlId="formOpponent">
              <Form.Label>Opponent</Form.Label>
              <Form.Control
                type="text"
                value={newGame.opponent || ""}
                onChange={(e) =>
                  setNewGame({ ...newGame, opponent: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group controlId="formLocation">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                value={newGame.location || ""}
                onChange={(e) =>
                  setNewGame({ ...newGame, location: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group controlId="formHomeTeamColor">
              <Form.Label>Home Team Color</Form.Label>
              <Form.Control
                type="text"
                value={newGame.homeTeamColor || ""}
                onChange={(e) =>
                  setNewGame({ ...newGame, homeTeamColor: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group controlId="formAwayTeamColor">
              <Form.Label>Away Team Color</Form.Label>
              <Form.Control
                type="text"
                value={newGame.awayTeamColor || ""}
                onChange={(e) =>
                  setNewGame({ ...newGame, awayTeamColor: e.target.value })
                }
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Add Game
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default AddGame;
