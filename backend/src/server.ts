import express from "express"
import { connectDatabase } from "./config/mysql"
import { mashupController } from "./controllers/mashup.controller"
import { usersController } from "./controllers/users.controller"

const app = express()
const port = 3000

// Middleware
app.use(express.json())

// Controllers
app.use(usersController)
app.use(mashupController)

await connectDatabase()

const server = app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

process.on("SIGTERM", () => {
  console.log("SIGTERM signal received: closing HTTP server")
  server.close(() => {
    console.log("HTTP server closed")
  })
})
