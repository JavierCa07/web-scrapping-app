const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express()
const port = 5000

// TODO: we are returning mock data as of now
// replace mock data with real data from web scrapping
import mockData from './db.json';

app.use(bodyParser.json());

app.use(cors({ origin: 'http://localhost:3000'}));

app.post('/search', (req, res) => {
  const { body: { query } } = req;
  console.log("query", query)
  // TODO: here call method to process query
  res.json(mockData);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
