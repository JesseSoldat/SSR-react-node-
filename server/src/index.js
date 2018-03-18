import express from 'express';
import React from 'react';
import renderer from './helpers/renderer';
const PORT = 3000;

const app = express();

app.use(express.static('public'));
app.get('*', (req, res) => {
 
  res.send(renderer());
});

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});