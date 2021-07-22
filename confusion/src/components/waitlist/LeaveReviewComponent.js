import React, { useState } from "react";
import { Button, Col, Row, ToggleButton, ButtonGroup } from "react-bootstrap";
import SideNavigationComponent from "../layout/SideNavigationComponent";

const LeaveReviewComponent = (props) => {
  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState("1");

  const radios = [
    { name: "Active", value: "1" },
    { name: "Radio", value: "2" },
    { name: "Radio", value: "3" },
    { name: "Radio", value: "4" },
    { name: "Radio", value: "5" },
  ];
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
              <ButtonGroup>
                {radios.map((radio, idx) => (
                  <ToggleButton
                    key={idx}
                    id={`radio-${idx}`}
                    type="radio"
                    variant={"outline-light"}
                    name="radio"
                    value={radio.value}
                    checked={radioValue === radio.value}
                    onChange={(e) => setRadioValue(e.currentTarget.value)}
                  >
                    <img className={`review__components-svg${radio.value}`} />
                  </ToggleButton>
                ))}
              </ButtonGroup>
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
