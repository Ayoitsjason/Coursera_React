let users = [
  {
    username: "user",
    password: "password",
  },
];

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
    res.status(201).json({ username });
  } else {
    res.status(404).json("Invalid Credentials");
  }
};

exports.createOwner = createOwner;
exports.loginOwner = loginOwner;
