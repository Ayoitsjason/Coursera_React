import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { RegisterOwner } from "../api/WaitlistDataService";

const Signup = () => {
  const onSubmit = (props) => {
    RegisterOwner(props);
  };

  return (
    <div className="container">
      <h1 className="my-5">Sign Up</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          username: "",
          password: "",
          password2: "",
          email: "",
          businessName: "",
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
              <label>Username</label>
              <Field className="form-control" type="text" name="username" />
            </fieldset>
            <fieldset className="form-group">
              <label>Password</label>
              <Field className="form-control" type="text" name="password" />
            </fieldset>
            <fieldset className="form-group">
              <label>Confirm Password</label>
              <Field className="form-control" type="text" name="password2" />
            </fieldset>
            <fieldset className="form-group">
              <label>Email</label>
              <Field className="form-control" type="text" name="email" />
            </fieldset>
            <fieldset className="form-group">
              <label>Business Name</label>
              <Field className="form-control" type="text" name="businessName" />
            </fieldset>
            <button className="btn btn-primary" type="submit">
              Register
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Signup;
