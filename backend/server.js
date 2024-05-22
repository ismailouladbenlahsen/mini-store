const express = require("express");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const fs = require("fs");

const app = express();
const PORT = 5000;
const SECRET_KEY = "your_secret_key";
const USERS_DB = "./db.json";

app.use(bodyParser.json());

const readUsers = () => {
  const data = fs.readFileSync(USERS_DB);
  return JSON.parse(data).users;
};

const writeUsers = (users) => {
  fs.writeFileSync(USERS_DB, JSON.stringify({ users }));
};

app.post("/register", async (req, res) => {
  const { email, password } = req.body;
  const users = readUsers();
  const userExists = users.find((user) => user.email === email);

  if (userExists) {
    return res.status(400).json({ message: "User already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = {
    id: Date.now().toString(),
    email,
    password: hashedPassword,
  };

  users.push(newUser);
  writeUsers(users);

  const token = jwt.sign({ id: newUser.id, email: newUser.email }, SECRET_KEY, {
    expiresIn: "1h",
  });

  res.status(201).json({ token });
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const users = readUsers();
  const user = users.find((user) => user.email === email);

  if (!user) {
    return res.status(400).json({ message: "User not found" });
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return res.status(400).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign({ id: user.id, email: user.email }, SECRET_KEY, {
    expiresIn: "1h",
  });

  res.json({ token });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
