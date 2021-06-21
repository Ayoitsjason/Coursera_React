import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const Signup = () => {
  const onSubmit = (props) => {
    console.log(props);
  };

  return (
    <div className="container">
      <h1>Register</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          password: "",
          password2: "",
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
