import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button, Col, Row } from "react-bootstrap";
import SideNavigationComponent from "../layout/SideNavigationComponent";

const AddGuestComponent = (props) => {
  const onSubmit = (props) => {
    console.log(props);
  };
  return (
    <div className="App">
      <Row className="m-0">
        <Col xs={2} className="p-0">
          {props.isLoggedIn ? (
            <SideNavigationComponent updateAuth={props.updateAuth} />
          ) : null}
        </Col>
        <Col xs={9}>
          <div className="container">
            <h1>Business</h1>
            <h2>Join Waitlist now!</h2>
            <h6>Select your party size:</h6>
            <h6>Your information</h6>
            <Formik
              initialValues={{
                firstName: "",
                lastName: "",
                mobileNumber: "",
                email: "",
              }}
              validateOnChange={false}
              validateOnBlur={false}
              onSubmit={onSubmit}
              // validate={this.validate}
              enableReinitialize={true}
            >
              {(props) => (
                <Form>
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
                  <button className="btn btn-primary" type="submit">
                    Register
                  </button>
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
