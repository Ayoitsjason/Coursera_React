import React from "react";
import { Button } from "react-bootstrap";

const GuestComponent = ({ customer, onClickDelete }) => {
  const onClick = () => {
    return onClickDelete(customer.id);
  };

  return (
    <div className="row border border-light p-3 m-2 rounded waitlist__customers">
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
            onClick={() => onClick()}
          ></Button>
        </div>
      </div>
    </div>
  );
};

export default GuestComponent;
