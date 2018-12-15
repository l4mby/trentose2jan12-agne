const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.set('port', (process.env.PORT || 3000));

console.log(app.prototype);

app.get('/', (req, res) => {
   res.send("Hello");
});

app.listen(app.get('port'), () => {
   console.log('Node app is running on port ' + app.get('port'));
});