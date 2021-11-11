import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { Alert } from "react-bootstrap";
import { LoginOwner } from "../api/WaitlistDataService";
import { registerSuccessfulLogin } from "../authentication/AuthenticationService";

const Login = ({ updateAuth, navigate }) => {
  const [errorMessages, setErrorMessages] = useState("");

  const onSubmit = async (values, resetForm) => {
    const data = await LoginOwner(values);
    if (data) {
      const { user, business } = data;
      registerSuccessfulLogin(user, business);
      updateAuth();
      navigate("/");
    } else {
      resetForm({ values: "" });
      setErrorMessages("Invalid Credentials");
    }
  };

  return (
    <div className="container">
      <h1 className="my-5">Login</h1>
      {errorMessages ? (
        <Alert key="danger" variant="danger">
          {errorMessages}
        </Alert>
      ) : null}
      <Formik
        initialValues={{ username: "", password: "" }}
        validateOnChange={false}
        validateOnBlur={false}
        onSubmit={(values, { resetForm }) => onSubmit(values, resetForm)}
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
