require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerDoc = require('./swagger.json');

const { PORT } = process.env;

const router = require('./src/routers');
const middleError = require('./src/middlewares/error');

const app = express();

app.use('/api-doc', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.use((_req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  app.use(cors());
  next();
});

app.use(
  cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  }),
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', router);
app.use(middleError);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
