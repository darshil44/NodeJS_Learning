const express = require("express")
const mongoose = require("mongoose")
const data = require("./MOCK_DATA.json")
const app = express();
const PORT = 6001;


mongoose.connect('mongodb://127.0.0.1:27017/dd').then(() => console.log("MongoDB Connected")).catch((err) => console.log("Mongo Error", err));
const userSchema = new mongoose.Schema(
{
  firstName: {
    type: String,
    require: true,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  jobTitle: {
    type: String,
  },
  Gender: {
    type: String
  },
})

const User = mongoose.model("user", userSchema)

app.use((req, res, next) => {
  console.log("mid");
  next();
});

app.get("/api", (req, res) => {
  res.setHeader("X-MyName", "DD")
  //it is good practice to set x front of custom header
  return res.json(data)
})

app.get("/users/:id", (req, res) => {
  const id = Number(req.params.id)
  const user = data.find((use) => use.id === id)
  return res.json(user);
})

app.get("/users", (req, res) => {
  const html = ` 
  <ul>
  ${data.map((user) => `<li>${user.first_name}</li>`).join("")}
  </ul>
  `;
  res.send(html);
})

app.listen(PORT, () => {
  console.log("server is started");
})