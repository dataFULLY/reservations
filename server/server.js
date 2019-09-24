const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('../postgres/index.js');
require('newrelic');

const port = 3030;

const app = express();

app.use(cors());
app.use(morgan());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api/listings/:id/', express.static('public'));
app.use(express.static('public'));

app.listen(port, () => {
  console.log(`connected to port: ${port}`)
});

app.get('/api/listings/:id/reservations/', (req, res) => {
  db.getData(req.params.id, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});

app.post('/api/listings/:id/reservations/', (req, res) => {
  db.addData(req.body, (err) => {
    if (err) {
      res.send('error: ' + err);
    } else {
      res.send('successful reservation');
    }
  })
});

app.put('/api/listings/:id/reservations/', (req, res) => {
  db.upData(req.body, (err) => {
    if (err) {
      res.send(err);
    } else {
      res.send('successful update')
    }
  });
});

app.delete('/api/listings/:id/reservations/', (req, res) => {
  db.delData(req.body, (err) => {
    if (err) {
      res.send(err);
    } else {
      res.send('successful deletion')
    }
  });
});
