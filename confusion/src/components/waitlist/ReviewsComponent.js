import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import SideNavigationComponent from "../layout/SideNavigationComponent";

const ReviewsComponent = (props) => {
  return (
    <div className="App">
      <Row className="m-0">
        <Col xs={2} className="p-0">
          {props.isLoggedIn ? (
            <SideNavigationComponent updateAuth={props.updateAuth} />
          ) : null}
        </Col>
        <Col xs={9}>
          <h1 className="my-5">Reviews</h1>
        </Col>
      </Row>
    </div>
  );
};

export default ReviewsComponent;
