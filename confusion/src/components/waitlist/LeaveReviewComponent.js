import React, { useState } from "react";
import {
  Button,
  Col,
  Row,
  ToggleButton,
  ButtonGroup,
  Form,
} from "react-bootstrap";
import SideNavigationComponent from "../layout/SideNavigationComponent";

const LeaveReviewComponent = (props) => {
  const [radioValue, setRadioValue] = useState("1");

  const radios = [
    { value: "1" },
    { value: "2" },
    { value: "3" },
    { value: "4" },
    { value: "5" },
  ];

  const onClickSubmit = (e) => {
    console.log(e);
  };

  return (
    <div className="App">
      <Row className="m-0">
        {props.isLoggedIn ? (
          <SideNavigationComponent updateAuth={props.updateAuth} />
        ) : null}
        <Col xs={props.isLoggedIn ? "9" : "12"}>
          <h1 className="my-5">Leave a Review!</h1>
          <div className="container">
            <form>
              <ButtonGroup>
                {radios.map((radio, idx) => (
                  <ToggleButton
                    key={idx}
                    id={`radio-${idx}`}
                    className={`review__components review__components-svg${radio.value} rounded-circle`}
                    type="radio"
                    variant={"light"}
                    name="radio"
                    value={radio.value}
                    checked={radioValue === radio.value}
                    onChange={(e) => {
                      console.log(e);
                      setRadioValue(e.currentTarget.value);
                    }}
                  ></ToggleButton>
                ))}
              </ButtonGroup>
              <div>
                <input />
              </div>
              <Button
                className="btn btn-primary my-2"
                onClick={(e) => onClickSubmit(e)}
              >
                Submit
              </Button>
            </form>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default LeaveReviewComponent;
