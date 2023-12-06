import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
} from "react-bootstrap";

const TeamMemberCard = ({ image, name, title, text }) => (
  <Card style={{ width: "20rem", background: "white" }}>
    <img
      src={image}
      alt={name}
      style={{ width: "100%", height: "100%", borderRadius: "50%" }}
    />
    <CardBody>
      <CardTitle>{name}</CardTitle>
      <CardSubtitle className="mb-2 text-muted">{title}</CardSubtitle>
      <CardText>{text}</CardText>
    </CardBody>
  </Card>
);

export default TeamMemberCard;
