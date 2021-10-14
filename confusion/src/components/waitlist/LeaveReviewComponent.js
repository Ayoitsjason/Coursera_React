import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { Button, Col, Row, ToggleButton, ButtonGroup } from "react-bootstrap";
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

  const onSubmit = (e) => {
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
            <Formik
              initialValues={{
                satisfaction: radioValue,
                name: "",
                technician: "",
                comment: "",
              }}
              validateOnChange={false}
              validateOnBlur={false}
              onSubmit={onSubmit}
              // validate={this.validate}
              enableReinitialize={true}
            >
              {(props) => (
                <Form>
                  <h4>How satisfied were you?</h4>
                  <ButtonGroup className="my-4">
                    {radios.map((radio, idx) => (
                      <ToggleButton
                        key={idx}
                        id={`radio-${idx}`}
                        className={`review__componentsSelected review__components-svg${radio.value} rounded-circle`}
                        type="radio"
                        variant={"light"}
                        name="satisfaction"
                        value={radio.value}
                        checked={radioValue === radio.value}
                        onChange={(e) => {
                          setRadioValue(e.currentTarget.value);
                        }}
                      ></ToggleButton>
                    ))}
                  </ButtonGroup>
                  <fieldset className="form-group">
                    <label>Name (optional)</label>
                    <Field className="form-control" type="text" name="name" />
                  </fieldset>
                  <fieldset className="form-group">
                    <label>Technician (optional)</label>
                    <Field className="form-control" type="text" name="technician" />
                  </fieldset>
                  <fieldset className="form-group">
                    <label>Comment</label>
                    <Field
                      className="form-control"
                      type="text"
                      name="comment"
                    />
                  </fieldset>
                  <Button className="btn btn-primary" type="submit">
                    Submit
                  </Button>
                </Form>
              )}
            </Formik>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default LeaveReviewComponent;
