import React, { Component } from "react";
import { Button } from "react-bootstrap";

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
      ],
    };
    this.populate = this.populate.bind(this);
  }

  // Populates Customers
  populate(customer) {
    return (
      <div className="container">
        <p>
          {customer.firstName} {customer.lastName}
        </p>
        <p>{customer.number}</p>
        <p>{customer.partySize}</p>
        <Button>&#10004</Button>
      </div>
    );
  }

  render() {
    return (
      <div className="container">
        <h1 className="my-5">Waitlist</h1>
        <Button>+ Add Guest</Button>
        {this.state.customers.map((customer) => this.populate(customer))}
      </div>
    );
  }
}

export default Waitlist;
