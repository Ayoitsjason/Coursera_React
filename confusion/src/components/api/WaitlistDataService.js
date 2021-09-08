import axios from "axios";

export const RegisterOwner = async (props) => {
  const {
    firstName,
    lastName,
    username,
    password,
    password2,
    email,
    businessName,
  } = props;

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
  let body = JSON.stringify(props);

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    let user = await axios.post(
      "http://localhost:8000/api/owner/login",
      body,
      config
    );
  } catch (err) {
    console.error(err);
  }
};
