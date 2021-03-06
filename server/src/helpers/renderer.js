import React from 'react';
import { renderToString } from 'react-dom/server';
import Home from '../client/components/Home';

module.exports = () => {
  const content = renderToString(<Home />);

  return `
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>SSR JLAB</title>
    </head>
    <body>
      <div id="root">${content}</div>
      <script src="bundle.js"></script>
    </body>
  </html>
  `
}
