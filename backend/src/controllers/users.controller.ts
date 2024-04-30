import express from "express"

const usersController = express.Router()

usersController.get("/users", (req, res) => {
  res.send("GET /users")
})

usersController.post("/users", (req, res) => {
  res.send("POST /users")
})

usersController.put("/users/:id", (req, res) => {
  res.send("PUT /users/:id")
})

usersController.delete("/users/:id", (req, res) => {
  res.send("DELETE /users/:id")
})

export { usersController }
