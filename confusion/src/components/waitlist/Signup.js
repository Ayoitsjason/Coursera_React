import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const Signup = () => {
  return (
    <div className="container">
      <h1>Register</h1>
      <Formik>
        {(props) => (
          <Form>
            <fieldset className="form-group">
              <label>First Name</label>
              <Field className="form-control" type="text" name="description" />
            </fieldset>
            <fieldset className="form-group">
              <label>Last Name</label>
              <Field className="form-control" type="text" name="description" />
            </fieldset>
            <fieldset className="form-group">
              <label>Password</label>
              <Field className="form-control" type="text" name="description" />
            </fieldset>
            <fieldset className="form-group">
              <label>Confirm Password</label>
              <Field className="form-control" type="text" name="description" />
            </fieldset>
            <fieldset className="form-group">
              <label>Email</label>
              <Field className="form-control" type="text" name="description" />
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

export default Signup;
