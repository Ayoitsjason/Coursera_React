import axios from "axios";

// Auth
export const RegisterOwner = async (props) => {
  const body = JSON.stringify(props);

  const config = {
    header: {
      "Content-Type": "application/json",
    },
  };

  try {
    await axios.post("http://localhost:8000/api/owner/register", body, config);
  } catch (err) {
    console.error(err);
  }
};

export const LoginOwner = async (props) => {
  const body = JSON.stringify(props);

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    let res = await axios.post(
      "http://localhost:8000/api/owner/login",
      body,
      config
    );
    return res.data.user;
  } catch (err) {
    console.error(err);
  }
};

// Waitlist
export const GetWaitlist = async (business) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ business });

  try {
    const res = await axios.get(
      "http://localhost:8000/api/owner/waitlist",
      body,
      config
    );
    return res.data.customers;
  } catch (err) {
    console.error(err);
  }
};

export const AddGuests = async (props) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify(props);

  try {
    const res = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/api/owner/addguests`,
      body,
      config
    );
    return res.data.customer;
  } catch (err) {
    console.error(err);
  }
};

export const DeleteGuests = async (business, guestsId) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const target = { business: business, guestsId: guestsId };

  const body = JSON.stringify(target);

  try {
    const res = await axios.delete(
      `${process.env.REACT_APP_BACKEND_URL}/api/owner/deleteguests`,
      body,
      config
    );
    return res.data.customer;
  } catch (err) {
    console.error(err);
  }
};
