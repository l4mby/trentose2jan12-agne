const express = require('express');
const bodyParser = require('body-parser');
const getArea = require('./area');

const app = express();

app.use(bodyParser.json());

app.set('port', (process.env.PORT || 3000));

app.get('/', (req, res) => {
   res.send("Hello");
});

app.get('/getArea', (req, res) => {
   const base = Number.parseInt(req.query.side1);
   const altezza = Number.parseInt(req.query.side2);

   if(Number.isInteger(base) && Number.isInteger(altezza))
      res.status(200).send(JSON.stringify({area: getArea([base, altezza])}));
   else
      res.status(400).end();
});

app.listen(app.get('port'), () => {
   console.log('Node app is running on port ' + app.get('port'));
});