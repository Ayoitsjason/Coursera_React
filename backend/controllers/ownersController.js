let users = [
  {
    username: "user",
    password: "password",
  },
];

let data = {
  customers: [
    {
      id: "1",
      firstName: "becky",
      lastName: "ly",
      number: "11111111111",
      email: "example@yahoo.com",
      partySize: "2",
    },
    {
      id: "2",
      firstName: "becky",
      lastName: "ly",
      number: "11111111111",
      email: "example@yahoo.com",
      partySize: "2",
    },
    {
      id: "3",
      firstName: "becky",
      lastName: "ly",
      number: "11111111111",
      email: "example@yahoo.com",
      partySize: "2",
    },
  ],
};

const addGuests = async (req, res) => {
  const { id, firstName, lastName, mobileNumber, email, partySize } = req.body;
  const newCustomer = {
    id,
    firstName,
    lastName,
    mobileNumber,
    email,
    partySize,
  };
  data.customers.push(newCustomer);
  res.status(201).json({ customer: newCustomer });
};

const createOwner = async (req, res) => {
  const { username, password } = req.body;
  const user = {
    username,
    password,
  };
  users.push(user);
  res.status(201).json(user);
};

const loginOwner = async (req, res) => {
  const { username, password } = req.body;

  let found = users.find(
    (u) => u.username === username && u.password === password
  );
  if (found) {
    res.status(201).json({ user: username });
  } else {
    res.status(404).json("Invalid Credentials");
  }
};

const getWaitlist = async (req, res) => {
  res.status(201).json(data);
};

exports.createOwner = createOwner;
exports.loginOwner = loginOwner;
exports.getWaitlist = getWaitlist;
exports.addGuests = addGuests;
