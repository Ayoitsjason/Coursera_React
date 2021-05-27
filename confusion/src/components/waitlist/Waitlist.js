import React, { Component } from "react";

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
  }

  render() {
    return (
      <div className="container">
        <h1>Waitlist</h1>
      </div>
    );
  }
}

export default Waitlist;
