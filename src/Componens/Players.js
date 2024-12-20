import React from "react";
import  { Button,Card } from "react-boostrap";
 
const Player = ({ players }) => {
    return (
        <div>
<Card style={{ width: "18rem" }}>
      <Card.Img variant='top' src= {players.imageURL} />
      <Card.Body>
        <Card.Title>players.name</Card.Title>
        <Card.Text> players.team</Card.Text>
        <Card.Text> players.nationality</Card.Text>
        <Card.Text> players.jerseyNumber</Card.Text>
        <Card.Text> players.age</Card.Text>
        <Button variant='primary'>Go somewhere</Button>
      </Card.Body>
    </Card>
      </div>
    );
};

export default Player