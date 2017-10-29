
const express = require('express');

const app = express();
const router = express.Router();

app.use(express.static(`${__dirname}/dist`));

app.get('/*', (req, res) => {
  res.sendFile(`${__dirname}/dist/index.html`);
});

app.use('/', router);

app.listen(3000, () => {
  // eslint-disable-next-line
  console.log('lowside.io - web-frontend - running');
});
