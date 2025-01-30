const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser');
const { spawnSync } = require('child_process');

const app = express()
const port = 5000

import path from 'path';

app.use(bodyParser.json());

app.use(cors({ origin: 'http://localhost:3000'}));

// search endpoint
// called for performing search of a query
app.post('/search', async (req, res) => {
  const { body: { query } } = req;
  // our python script is called
  const scriptPath = path.join(__dirname, './python-scrapping/python-script.py');
  // we use spawnSync to run the python script passing the query to it
  const pythonProcess = await spawnSync('python3', [
    scriptPath, query
  ], { timeout: 240000, maxBuffer: 1024 * 1024 * 10 }); // 240s timeout (it's the time we give python to finish the scraping)

  // console.log(pythonProcess.stdout?.toString());
  res.send(pythonProcess.stderr?.toString()); // return the output of the python script to the client
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
