const express = require("express")
const cors = require("cors")
const app = express()
const port = 5000
const studentsRoutes = require("./routes/students")

app.use(cors())
app.use(express.json())

app.use("/students", studentsRoutes)

app.listen(port, () => {
  console.log("Server started on port: " + port)
})
