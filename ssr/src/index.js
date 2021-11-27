// React.createElement(component, props, ...children)
const express = require("express")
const http = require("http")
const React = require("react")
const ReactDOMServer = require("react-dom/server")

let app = express()

app.all("/",(req,res) => {
  ReactDOMServer.renderToString(React.createElement)
  res.send("Hello World")
})
const port = process.env.PORT || 8000
const server = http.createServer(app)

server.listen(port,"localhost",() => {
  console.log("Server started listening on " + port.toString())
})