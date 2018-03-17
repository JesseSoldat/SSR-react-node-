import express from 'express';
import React from 'react';
import {renderToString} from 'react-dom/server';
import Home from './client/components/Home';
const PORT = 3000;

const app = express();

app.use(express.static('public'));
app.get('*', (req, res) => {
  const content = renderToString(<Home />);
  res.send(content);
});

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});