import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const Login = () => {
  const onSubmit = (props) => {
    console.log(props);
  };

  return (
    <div className="container">
      <h1>Login</h1>
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
