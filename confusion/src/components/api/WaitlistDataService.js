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

  const body = props.json();

  const config = {
    header: {
      "Content-Type": "application/json",
    },
  };

  try {
    await axios.post("http://localhost:8000", config, body);
  } catch (err) {
    console.error(err);
  }
};
