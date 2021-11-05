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
    console.log(res);
    return res.data;
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
  const target = { business, guestsId };

  const data = target;

  try {
    const res = await axios.delete(
      `${process.env.REACT_APP_BACKEND_URL}/api/owner/deleteguests`,
      { data }
    );
    return res.data.customer;
  } catch (err) {
    console.error(err);
  }
};

export const LeaveReview = async ({
  business,
  satisfaction,
  name,
  technician,
  comment,
}) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const review = {
    business: business.slice(1, business.length),
    satisfaction,
    name,
    technician,
    comment,
  };

  const body = JSON.stringify(review);

  try {
    const res = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/api/owner/leavereview`,
      body,
      config
    );
    return res.data.review;
  } catch (err) {
    console.error(err);
  }
};

export const getAllReviews = async (business) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ business: business });

  try {
    const res = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/api/owner/reviews`,
      body,
      config
    );
    return res.data.allReviews;
  } catch (err) {
    console.error(err);
  }
};
