const express = require('express')
const app = express()
const port = 5000

// app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('body-parser').json());


app.get('/search', (req, res) => {
const response = {
    foo: "bar"
};
  res.json(response)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})