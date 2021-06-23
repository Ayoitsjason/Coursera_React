import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const AddGuestComponent = () => {
  const onSubmit = (props) => {
    console.log(props);
  };
  return (
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
              <Field className="form-control" type="text" name="firstName" />
            </fieldset>
            <fieldset className="form-group">
              <label>Last Name</label>
              <Field className="form-control" type="text" name="lastName" />
            </fieldset>
            <fieldset className="form-group">
              <label>Mobile number</label>
              <Field className="form-control" type="text" name="mobileNumber" />
            </fieldset>
            <fieldset className="form-group">
              <label>Email address</label>
              <Field className="form-control" type="text" name="email" />
            </fieldset>
            <button className="btn btn-success" type="submit">
              Register
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddGuestComponent;
