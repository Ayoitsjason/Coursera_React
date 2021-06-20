import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const Login = () => {
  return (
    <div className="container">
      <h1>Login</h1>
      <Formik>
        {(props) => (
          <Form>
            <fieldset className="form-group">
              <label>Username</label>
              <Field className="form-control" type="text" name="description" />
            </fieldset>
            <fieldset className="form-group">
              <label>Password</label>
              <Field className="form-control" type="text" name="description" />
            </fieldset>
            <button className="btn btn-success" type="submit">
              Login
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
