import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import SideNavigationComponent from "../layout/SideNavigationComponent";

const LeaveReviewComponent = (props) => {
  return (
    <div className="App">
      <Row className="m-0">
        <Col xs={2} className="p-0">
          {props.isLoggedIn ? (
            <SideNavigationComponent updateAuth={props.updateAuth} />
          ) : null}
        </Col>
        <Col xs={9}>
          <h1 className="my-5">Leave a Review!</h1>
          <div className="container">
            <div>
              <Button className="review__components-svg1"></Button>
              <Button className="review__components-svg2"></Button>
              <Button className="review__components-svg3"></Button>
              <Button className="review__components-svg4"></Button>
              <Button className="review__components-svg5"></Button>
            </div>
            <div>
              <input />
            </div>
            <Button className="btn btn-primary">Submit</Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default LeaveReviewComponent;
