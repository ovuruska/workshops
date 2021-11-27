// React.createElement(component, props, ...children)
const express = require("express")
const http = require("http")
const React = require("react")
const ReactDOMServer = require("react-dom/server")
const AppElement = require("./frontend/src/App").default
const mongoose = require("mongoose")
const numbers = require("./models")
const path = require("path")
app = express()
mongoose.connect('mongodb://localhost:27017/')


app.set("numbers",numbers)

app.get('/', (req, res) => {
  const app = React.createElement(AppElement,null,null)

  const indexFile = path.resolve('./frontend/build/index.html');
  fs.readFile(indexFile, 'utf8', (err, data) => {
    if (err) {
      console.error('Something went wrong:', err);
      return res.status(500).send('Oops, better luck next time!');
    }

    return res.send(
      data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
    );
  });
});


const port = process.env.PORT || 8000
const server = http.createServer(app)

server.listen(port,"localhost",() => {
  console.log("Server started listening on " + port.toString())
})