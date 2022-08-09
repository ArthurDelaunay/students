const express = require("express")
const app = express()

const students = []

app.get("/", (req, res) => {
  res.json(students)
})

app.post("/", (req, res) => {
  const index = students.findIndex((student) => {
    return student.name === req.body.name
  })

  if (index === -1) {
    const student = {
      name: req.body.name,
    }

    students.push(student)
    res.json(student)
  } else {
    res.status(409).json("student elready exists")
  }
})

module.exports = app
