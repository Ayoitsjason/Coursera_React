import React, { useState } from "react";
import { v1 as uuidv1 } from "uuid";
import { Formik, Form, Field } from "formik";
import { Button, Col, Row, ButtonGroup, ToggleButton } from "react-bootstrap";
import SideNavigationComponent from "../layout/SideNavigationComponent";

const AddGuestComponent = (props) => {
  const [radioValue, setRadioValue] = useState("1");

  const radios = [
    { name: "1", value: "1" },
    { name: "2", value: "2" },
    { name: "3", value: "3" },
    { name: "4", value: "4" },
    { name: "5", value: "5" },
    { name: "6", value: "6" },
    { name: "7+", value: "7" },
  ];

  const onSubmit = (props) => {
    console.log(props);
  };
  return (
    <div className="App">
      <Row className="m-0">
        {props.isLoggedIn ? (
          <SideNavigationComponent updateAuth={props.updateAuth} />
        ) : null}
        <Col xs={props.isLoggedIn ? "9" : "12"}>
          <h1 className="my-5">Business</h1>
          <div className="container">
            <h2>Join Waitlist now!</h2>
            <br />
            <h3 className="mb-4">Your information</h3>
            <Formik
              initialValues={{
                id: uuidv1(),
                firstName: "",
                lastName: "",
                mobileNumber: "",
                email: "",
                partySize: radioValue,
              }}
              validateOnChange={false}
              validateOnBlur={false}
              onSubmit={onSubmit}
              // validate={this.validate}
              enableReinitialize={true}
            >
              {(props) => (
                <Form>
                  <h4>Select your party size:</h4>
                  <ButtonGroup className="my-4">
                    {radios.map((radio, idx) => (
                      <ToggleButton
                        key={idx}
                        id={`radio-${idx}`}
                        className={`party-size__component rounded-circle`}
                        type="radio"
                        name="radio"
                        value={radio.value}
                        checked={radioValue === radio.value}
                        onChange={(e) => {
                          setRadioValue(e.currentTarget.value);
                        }}
                      >
                        <span className="party-size__component-text">
                          {radio.name}
                        </span>
                      </ToggleButton>
                    ))}
                  </ButtonGroup>

                  <fieldset className="form-group">
                    <label>First Name</label>
                    <Field
                      className="form-control"
                      type="text"
                      name="firstName"
                    />
                  </fieldset>
                  <fieldset className="form-group">
                    <label>Last Name</label>
                    <Field
                      className="form-control"
                      type="text"
                      name="lastName"
                    />
                  </fieldset>
                  <fieldset className="form-group">
                    <label>Mobile number</label>
                    <Field
                      className="form-control"
                      type="text"
                      name="mobileNumber"
                    />
                  </fieldset>
                  <fieldset className="form-group">
                    <label>Email address</label>
                    <Field className="form-control" type="text" name="email" />
                  </fieldset>
                  <Button className="btn btn-primary" type="submit">
                    Confirm
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

export default AddGuestComponent;
