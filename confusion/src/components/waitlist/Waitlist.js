import React, { Component } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { isUserLoggedIn } from "../authentication/AuthenticationService";
import SideNavigationComponent from "../layout/SideNavigationComponent";
import "./Waitlist.css";

class Waitlist extends Component {
  constructor(props) {
    super(props);
    console.log("waitlist", props);
    this.state = {
      customers: [
        {
          firstName: "becky",
          lastName: "ly",
          number: "11111111111",
          email: "example@yahoo.com",
          partySize: "2",
        },
        {
          firstName: "becky",
          lastName: "ly",
          number: "11111111111",
          email: "example@yahoo.com",
          partySize: "2",
        },
        {
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
      <>
        <div className="row border border-light p-3 m-2 rounded bg-light">
          <div className="col">
            <p className="font-weight-bold text-capitalize">
              {customer.firstName} {customer.lastName}
            </p>
          </div>
          <div className="col-3">
            <p>Number: {customer.number}</p>
          </div>
          <div className="col-2">
            <p>Party Size: {customer.partySize}</p>
          </div>
          <div className="col">
            <Button className="rounded-circle">&#10004;</Button>
          </div>
        </div>
      </>
    );
  }

  // Add Guest Button
  addGuestsClick() {
    this.props.navigate(`/addguest`);
  }

  render() {
    return (
      <div className="App">
        <Row className="m-0">
          <Col xs={2}>
            {this.state.isLoggedIn ? (
              <SideNavigationComponent updateAuth={this.props.updateAuth} />
            ) : null}
          </Col>
          <Col xs={9}>
            <h1 className="my-5">Waitlist</h1>
            <div className="container px-3">
              <Button className="mb-3" onClick={() => this.addGuestsClick()}>
                + Add Guest
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
