import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { Alert } from "react-bootstrap";
import * as Yup from "yup";
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

  const LoginSchema = Yup.object().shape({
    username: Yup.string()
      .max(30, "Too Long! Max length 30 characters")
      .required("Required"),
    password: Yup.string()
      .max(30, "Too Long! Max length 30 charasters")
      .required("Required"),
  });

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
        validationSchema={LoginSchema}
        enableReinitialize={true}
      >
        {({ errors, touched }) => (
          <Form>
            <fieldset className="form-group">
              <label>Username</label>
              <Field className="form-control" type="text" name="username" />
              {errors.username && touched.username ? (
                <Alert key="warning" variant="warning">
                  {errors.username}
                </Alert>
              ) : null}
            </fieldset>
            <fieldset className="form-group">
              <label>Password</label>
              <Field className="form-control" type="text" name="password" />
              {errors.password && touched.password ? (
                <Alert key="warning" variant="warning">
                  {errors.password}
                </Alert>
              ) : null}
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
