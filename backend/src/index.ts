const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser');
const { spawnSync } = require('child_process');

const app = express()
const port = 5000

import path from 'path';

app.use(bodyParser.json());

app.use(cors({ origin: 'http://localhost:3000'}));

// TODO: what if a new request is received while the previous one is still running?
app.post('/search', async (req, res) => {
  const { body: { query } } = req;
  // our python script is called
  const scriptPath = path.join(__dirname, './python-scrapping/python-script.py');
  const pythonProcess = await spawnSync('python3', [
    scriptPath, query
  ], { timeout: 180000, maxBuffer: 1024 * 1024 * 10 });

  // console.log(pythonProcess.stdout?.toString());
  res.send(pythonProcess.stderr?.toString());
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
