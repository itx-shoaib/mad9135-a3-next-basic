// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// API defined to read Data.js file 
import * as fs from 'fs';
export default function handler(req, res) {
  fs.readFile("datasource/data.js", (err, data) => {
    res.status(200).json(JSON.parse(data));
  })
}
