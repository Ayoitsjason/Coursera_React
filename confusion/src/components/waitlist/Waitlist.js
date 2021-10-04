import React, { Component } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { isUserLoggedIn } from "../authentication/AuthenticationService.js";
import SideNavigationComponent from "../layout/SideNavigationComponent.js";
import { GetWaitlist, DeleteGuests } from "../api/WaitlistDataService.js";
import "./Waitlist.css";

class Waitlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      business: "",
      customers: [],
      isLoggedIn: isUserLoggedIn(),
    };
    this.populateCustomers = this.populateCustomers.bind(this);
    this.addGuestsClick = this.addGuestsClick.bind(this);
    this.refreshCustomers = this.refreshCustomers.bind(this);
    this.onClickDelete = this.onClickDelete.bind(this);
  }

  componentDidMount() {
    this.refreshCustomers();
  }

  refreshCustomers() {
    GetWaitlist(this.state.business)
      .then((res) => {
        this.setState({ customers: res });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  // Delete a populated Customer
  onClickDelete(e) {
    console.log(e);
    console.log(e.parentNode);
    // DeleteGuests(e);
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
          <p>Party Size: {customer.partySize}</p>
        </div>
        <div className="col">
          <p>Number: {customer.number}</p>
        </div>
        <div className="col">
          <div className="action-container">
            <Button className="btn-main rounded-circle m-1">&#10004;</Button>
            <Button
              className="btn-danger material-icons__trashcan m-1"
              onClick={(e) => this.onClickDelete(e)}
            ></Button>
          </div>
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
      <div className="App">
        <Row className="m-0">
          {this.state.isLoggedIn ? (
            <SideNavigationComponent updateAuth={this.props.updateAuth} />
          ) : null}

          <Col xs={this.state.isLoggedIn ? "9" : "12"}>
            <div className="container-xl">
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
                {this.state.customers.length > 0
                  ? this.state.customers.map((customer) =>
                      this.populateCustomers(customer)
                    )
                  : null}
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Waitlist;
