const express = require("express")
const bodyParser = require("body-parser")

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, PUT, OPTIONS");
  next();
});

app.post("/api/posts", (req, res, next) => {
  const post = req.body;
  console.log({post});
  res.status(201).json({ message: "Post added successfully" });
})

app.get("/api/posts", (req, res,next) => {
  const posts = [
    {id: "123", title: "first try", content: "hahahah"},
    {id: "124", title: "second try", content: "hahahahajsdkfljasl"},
  ]
  res.status(200).json({
    posts,
    message: "Posts fetched successfully"
  })
})

module.exports = app
