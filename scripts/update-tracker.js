/* eslint-disable prettier/prettier */
/* eslint-disable no-console */
require('dotenv').config();
const fs = require('fs');
const path = require('path');

const endPoint = process.env.COLLECT_API_ENDPOINT;

if (endPoint) {
  const file = path.resolve(__dirname, '../public/script.js');

  const tracker = fs.readFileSync(file);

  fs.writeFileSync(path.resolve(file), tracker.toString().replace(/\/api\/send/g, endPoint));

  console.log(`Updated tracker endpoint: ${endPoint}.`);
}
