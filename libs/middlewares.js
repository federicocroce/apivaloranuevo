// import bodyParser from 'body-parser';

const bodyParser = require('body-parser')

module.exports = app => {
  app.set('json spaces', 4);
  app.set('port', process.env.PORT || 3001);

  // Para interprestar JSON
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: false}));

};
