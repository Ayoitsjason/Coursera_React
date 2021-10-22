import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import SideNavigationComponent from "../layout/SideNavigationComponent";

const ReviewsComponent = (props) => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {

  })

  const populateReviews = (review) => {
    return (<div>review</div>);
  };

  return (
    <div className="App">
      <Row className="m-0">
        {props.isLoggedIn ? (
          <SideNavigationComponent updateAuth={props.updateAuth} />
        ) : null}
        <Col xs={props.isLoggedIn ? "9" : "12"}>
          <h1 className="my-5">Reviews</h1>
          {reviews.length > 0
          ? reviews.map((review) =>
              populateReviews(review)
            )
          : null}
        </Col>
      </Row>
    </div>
  );
};

export default ReviewsComponent;
