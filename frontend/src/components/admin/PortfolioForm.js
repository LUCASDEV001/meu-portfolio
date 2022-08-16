import React, { useState } from "react";

import { Form, Container, Card, Button, Col, Row } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PortfolioForm = ({
  title,
  setTitle,
  shortDescription,
  setShortDescription,
  longDescription,
  setLongDescription,
  image,
  setImage,
  slug,
  tech,
  setTech,
}) => {
  const [type, setType] = useState("");
  const [icon, setIcon] = useState("");
  const [label, setLabel] = useState("");

  const handleRemoveItem = (id) => {
    const newTech = tech.filter((el) => el._id !== id);
    setTech(newTech);
  };

  const handleAddItem = () => {
    // Abaixo, só salva no banco ou faz qualquer coisa se todos os campos forem preenchidos
    if (type.length > 0 && label.length > 0 && icon.length > 0) {
      const newId = Math.random().toString(36).substring(7);
      const newTech = {
        iconType: type,
        icon,
        label,
        _id: newId,
      };
      console.log("newtech", newTech);
      setTech([...tech, newTech]);
    }
  };
  return (
    <Container>
      <Form>
        <Form.Group>
          <Form.Label>Título</Form.Label>
          <Form.Control
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Descrição Curta</Form.Label>
          <Form.Control
            type="text"
            value={shortDescription}
            onChange={(e) => setShortDescription(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Descrição Longa</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            value={longDescription}
            onChange={(e) => setLongDescription(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Imagem</Form.Label>
          <Form.Control
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </Form.Group>
      </Form>

      <div className="container row pt-3 pb-2">
        {tech?.map((technology) => {
          return (
            <div className="col-4">
              <Card key={technology._id}>
                <Card.Body>
                  <Card.Text>
                    <FontAwesomeIcon
                      icon={[technology.iconType, technology.icon]}
                      size="3x"
                    />
                    {technology.label}
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button
                    size="sm"
                    variant="danger"
                    onClick={() => handleRemoveItem(technology._id)}
                  >
                    remover
                  </Button>
                </Card.Footer>
              </Card>
            </div>
          );
        })}
      </div>

      <Form inline>
        <Row>
          <Col xs="auto">
            <Form.Control
              placeholder="Type: fab, fas"
              value={type}
              onChange={(e) => setType(e.target.value)}
            />
          </Col>
          <Col xs="auto">
            <Form.Control
              placeholder="Icon: github, database"
              value={icon}
              onChange={(e) => setIcon(e.target.value)}
            />
          </Col>
          <Col xs="auto">
            <Form.Control
              placeholder="Label: GitHub, MongoDB"
              value={label}
              onChange={(e) => setLabel(e.target.value)}
            />
          </Col>
          <Col xs="auto">
            <Button className="mb-2 mt-2" onClick={handleAddItem}>
              Add
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default PortfolioForm;
