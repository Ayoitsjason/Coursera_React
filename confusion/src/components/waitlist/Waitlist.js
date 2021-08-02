import React, { Component } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { isUserLoggedIn } from "../authentication/AuthenticationService";
import SideNavigationComponent from "../layout/SideNavigationComponent";
import "./Waitlist.css";

class Waitlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customers: [
        {
          id: "1",
          firstName: "becky",
          lastName: "ly",
          number: "11111111111",
          email: "example@yahoo.com",
          partySize: "2",
        },
        {
          id: "2",
          firstName: "becky",
          lastName: "ly",
          number: "11111111111",
          email: "example@yahoo.com",
          partySize: "2",
        },
        {
          id: "3",
          firstName: "becky",
          lastName: "ly",
          number: "11111111111",
          email: "example@yahoo.com",
          partySize: "2",
        },
      ],
      isLoggedIn: isUserLoggedIn(),
    };
    this.populateCustomers = this.populateCustomers.bind(this);
    this.addGuestsClick = this.addGuestsClick.bind(this);
  }

  // Populates Customers
  populateCustomers(customer) {
    return (
      <div
        className="row border border-light p-3 m-2 rounded waitlist__customers"
        key={customer.id}
      >
        <div className="col">
          <p className="font-weight-bold text-capitalize">
            {customer.firstName} {customer.lastName}
          </p>
        </div>
        <div className="col">
          <p>Number: {customer.number}</p>
        </div>
        <div className="col">
          <p>Party Size: {customer.partySize}</p>
        </div>
        <div className="col">
          <Button className="btn-main rounded-circle">&#10004;</Button>
        </div>
      </div>
    );
  }

  // Add Guest Button
  addGuestsClick() {
    this.props.navigate(`/addguest`);
  }

  // Leave a review Button
  addLeaveReviewClick() {
    this.props.navigate(`/leavereview/:royals`);
  }

  render() {
    return (
      <div className="App container-xl">
        <Row className="m-0">
          {this.state.isLoggedIn ? (
            <Col xs={2} className="p-0">
              <SideNavigationComponent updateAuth={this.props.updateAuth} />
            </Col>
          ) : null}

          <Col xs={this.state.isLoggedIn ? "9" : "12"}>
            <h1 className="my-5">Waitlist</h1>
            <div className="container px-3">
              <Button
                className="btn-main mb-4 mx-2"
                onClick={() => this.addGuestsClick()}
              >
                + Add Guest
              </Button>
              <Button
                className="btn-main mb-4 mx-2"
                onClick={() => this.addLeaveReviewClick()}
              >
                + Leave Review
              </Button>
              {this.state.customers.map((customer) =>
                this.populateCustomers(customer)
              )}
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Waitlist;
