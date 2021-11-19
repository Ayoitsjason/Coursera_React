import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Col, Row, ToggleButton, ButtonGroup } from "react-bootstrap";
import { Formik, Form, Field } from "formik";
import SideNavigationComponent from "../layout/SideNavigationComponent";
import { LeaveReview } from "../api/WaitlistDataService";
import { v1 as uuidv1 } from "uuid";

const LeaveReviewComponent = (props) => {
  const [radioValue, setRadioValue] = useState("5");
  const [business, setBusiness] = useState("");
  const params = useParams();

  useEffect(() => {
    setBusiness(params.business);
  }, [params.business]);

  const radios = [
    { value: "5" },
    { value: "4" },
    { value: "3" },
    { value: "2" },
    { value: "1" },
  ];

  const onSubmit = (form) => {
    const review = LeaveReview(form);
    if (review) {
      props.navigate("/");
    }
  };

  return (
    <div className="App">
      <Row className="m-0">
        {props.isLoggedIn ? (
          <SideNavigationComponent updateAuth={props.updateAuth} />
        ) : null}
        <Col xs={props.isLoggedIn ? "9" : "12"}>
          <h1 className="my-5">Leave a Review!</h1>
          <div className="container">
            <Formik
              initialValues={{
                id: uuidv1(),
                business: business,
                satisfaction: radioValue,
                name: "",
                technician: "",
                comment: "",
              }}
              validateOnChange={false}
              validateOnBlur={false}
              onSubmit={onSubmit}
              // validate={this.validate}
              enableReinitialize={true}
            >
              {(props) => (
                <Form>
                  <h4>How satisfied were you?</h4>
                  <ButtonGroup className="my-4">
                    {radios.map((radio, idx) => (
                      <ToggleButton
                        key={idx}
                        id={`radio-${idx}`}
                        className={`review__componentsSelected review__components-svg${radio.value} rounded-circle`}
                        type="radio"
                        variant={"light"}
                        name="satisfaction"
                        value={radio.value}
                        checked={radioValue === radio.value}
                        onChange={(e) => {
                          setRadioValue(e.currentTarget.value);
                        }}
                      ></ToggleButton>
                    ))}
                  </ButtonGroup>
                  <fieldset className="form-group">
                    <label>Name (optional)</label>
                    <Field className="form-control" type="text" name="name" />
                  </fieldset>
                  <fieldset className="form-group">
                    <label>Technician (optional)</label>
                    <Field
                      className="form-control"
                      type="text"
                      name="technician"
                    />
                  </fieldset>
                  <fieldset className="form-group">
                    <label>Comment</label>
                    <Field
                      className="form-control"
                      type="text"
                      name="comment"
                    />
                  </fieldset>
                  <Button className="btn btn-primary" type="submit">
                    Submit
                  </Button>
                </Form>
              )}
            </Formik>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default LeaveReviewComponent;
