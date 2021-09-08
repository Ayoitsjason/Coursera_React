import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { registerSuccessfulLogin } from "../authentication/AuthenticationService";
import { LoginOwner } from "../api/WaitlistDataService";

const Login = (props) => {
  const onSubmit = (form) => {
    registerSuccessfulLogin(form.username);
    LoginOwner(form);
    props.updateAuth();
    props.navigate("/");
  };

  return (
    <div className="container">
      <h1 className="my-5">Login</h1>
      <Formik
        initialValues={{ username: "", password: "" }}
        validateOnChange={false}
        validateOnBlur={false}
        onSubmit={onSubmit}
        // validate={this.validate}
        enableReinitialize={true}
      >
        {(props) => (
          <Form>
            <fieldset className="form-group">
              <label>Username</label>
              <Field className="form-control" type="text" name="username" />
            </fieldset>
            <fieldset className="form-group">
              <label>Password</label>
              <Field className="form-control" type="text" name="password" />
            </fieldset>
            <button className="btn btn-primary" type="submit">
              Login
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
