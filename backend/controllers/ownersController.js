let users = [
  {
    firstname: "",
    lastname: "",
    username: "user",
    password: "password",
    email: "",
    business: "royals",
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
      firstName: "amy",
      lastName: "ly",
      number: "11111111111",
      email: "example@yahoo.com",
      partySize: "2",
    },
    {
      id: "3",
      firstName: "tina",
      lastName: "ly",
      number: "11111111111",
      email: "example@yahoo.com",
      partySize: "2",
    },
  ],
};

const reviews = [];

const getAllReviews = async (req, res) => {
  const { business } = req.query;
  const allReviewsByBusiness = reviews.filter(
    (review) => review.business === business
  );
  res.status(201).json({ allReviews: allReviewsByBusiness });
};

const leaveReview = async (req, res) => {
  const { id, business, satisfaction, name, technician, comment } = req.body;
  const newReview = {
    id,
    business,
    satisfaction,
    name,
    technician,
    comment,
  };
  reviews.push(newReview);
  res.status(201).json({ review: newReview });
};

const addGuests = async (req, res) => {
  const { id, firstName, lastName, number, email, partySize } = req.body;
  const newCustomer = {
    id,
    firstName,
    lastName,
    number,
    email,
    partySize,
  };
  data.customers.push(newCustomer);
  res.status(201).json({ customer: newCustomer });
};

const deleteGuests = async (req, res) => {
  const { business, guestsId } = req.body;
  let deleteGuest = null;

  data.customers.forEach((customer, index) => {
    if (customer.id === guestsId) {
      deleteGuest = data.customers.splice(index, 1);
    }
  });

  if (deleteGuest) {
    res.status(201).json({ customer: deleteGuest[0] });
  } else {
    res.status(404).json("Invalid input");
  }
};

const createOwner = async (req, res) => {
  const { firstname, lastname, username, password, email, business } = req.body;
  const user = {
    lastname,
    username,
    password,
    email,
    business,
  };
  const returnUser = {
    firstname,
    lastname,
    username,
    email,
    business,
  };
  users.push(user);
  res.status(201).json(returnUser);
};

const loginOwner = async (req, res) => {
  const { username, password } = req.body;

  let found = users.find(
    (u) => u.username === username && u.password === password
  );

  if (found) {
    res.status(201).json({ user: found.username, business: found.business });
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
exports.deleteGuests = deleteGuests;
exports.leaveReview = leaveReview;
exports.getAllReviews = getAllReviews;
