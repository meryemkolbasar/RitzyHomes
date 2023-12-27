import React from "react";
import { Button, Carousel, Form, Image, InputGroup } from "react-bootstrap";
import contents from "../../helpers/data/content.json";
import { LiaSearchSolid } from "react-icons/lia";
import "./content.scss";

const Content = () => {
  return (
    <Carousel controls={false} indicators={false}  className="content">
      {contents.map((content) => (
        <Carousel.Item>
          <Image
            src={`/images/content/${content.image}`}
            alt={content.title}
            className="d-block "
          />
          <Carousel.Caption>
            <h3>{content.title}</h3>
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Recipient's username"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <Button variant="primary" id="button-addon">
              <LiaSearchSolid style={{fontSize: "25px"}} />
              </Button>
            </InputGroup>
            <Form style={{cursor:"pointer"}} type="radio" aria-label="radio 1">{content.desc}</Form>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Content;
