import React, { Component } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { isUserLoggedIn } from "../authentication/AuthenticationService.js";
import SideNavigationComponent from "../layout/SideNavigationComponent.js";
import { GetWaitlist, DeleteGuests } from "../api/WaitlistDataService.js";
import "./Waitlist.css";
import GuestComponent from "./GuestComponent.js";

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
  onClickDelete(guestsId) {
    DeleteGuests(this.business, guestsId);
  }

  // Populates Customers
  populateCustomers(customer) {
    return (
      <GuestComponent
        key={customer.id}
        customer={customer}
        onClickDelete={this.onClickDelete}
      />
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
