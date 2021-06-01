import React, { Component } from "react";
import { Button, Col, Row } from "react-bootstrap";
import SideNavigationComponent from "../layout/SideNavigationComponent";
import "./Waitlist.css";

class Waitlist extends Component {
  constructor() {
    super();
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
    };
    this.populateCustomers = this.populateCustomers.bind(this);
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

  render() {
    return (
      <>
        <Row>
          <Col xs={2}>
            <SideNavigationComponent />
          </Col>
          <Col xs={10}>
            <h1 className="my-5">Waitlist</h1>
            <div className="container px-3">
              <Button className="mb-3">+ Add Guest</Button>
              {this.state.customers.map((customer) =>
                this.populateCustomers(customer)
              )}
            </div>
          </Col>
        </Row>
      </>
    );
  }
}

export default Waitlist;
