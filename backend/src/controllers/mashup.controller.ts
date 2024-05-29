import express from "express"
import variables from "../config/variables"

const mashupController = express.Router()

mashupController.get("/mashup", (req, res) => {
  console.log(`Your API key is: ${variables.apiKey}`)
  res.send("GET /mashup")
})

export { mashupController }
