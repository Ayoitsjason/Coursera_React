import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { getAllReviews } from "../api/WaitlistDataService";
import SideNavigationComponent from "../layout/SideNavigationComponent";
import ReviewComponent from "./ReviewComponent";

const ReviewsComponent = ({ isLoggedIn, updateAuth, currentBusiness }) => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    setReviews(getAllReviews(currentBusiness));
  }, [currentBusiness]);

  const populateReviews = (review) => {
    return <ReviewComponent review={review} />;
  };

  return (
    <div className="App">
      <Row className="m-0">
        {isLoggedIn ? (
          <SideNavigationComponent updateAuth={updateAuth} />
        ) : null}
        <Col xs={isLoggedIn ? "9" : "12"}>
          <h1 className="my-5">Reviews</h1>
          {reviews.length > 0
            ? reviews.map((review) => populateReviews(review))
            : null}
        </Col>
      </Row>
    </div>
  );
};

export default ReviewsComponent;
