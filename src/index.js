var express = require('express')
var app = express()

app.get('/', function(req, res) {
  res.send(
    `
    <html>
      <body>
        <h1>hello SSR</h1>
      </body>
    </html>
    `
  )
})

var server = app.listen(3000)