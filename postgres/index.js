const { Client } = require('pg');

const client = new Client ({
  user: 'hankyulkim',
  password: null,
  host: 'localhost',
  database: 'sdc',
  port: 5432,
});

client.connect();

//retrieve reservation data from PostgreSQL database
const getData = function(listingId, callback) {
  client.query(`SELECT * FROM reservations WHERE listingId= ${listingId};`, (err, results) => {
    if (err) {
      callback(err);
    } else {
      callback(null, results);
    }
  })
};

//post reservation data into PostgreSQL database
  const addData = function(data, callback) {
      console.log(data);
    let query = `INSERT INTO reservations (id, listingid, userid, checkindate, checkoutdate, transactionid, adult, children, infant) VALUES (${data.id}, ${data.listingid}, ${data.userid}, ${data.checkindate}, ${data.checkoutdate}, ${data.transactionid}, ${data.adult}, ${data.children}, ${data.infant});`
    client.query(query, (err, suc) => {
      if (err) {
        callback(err);
      } else {
        callback(null, suc);
      }
    })
  };

//update reservation data into PostgreSQL database
  const upData = function(callback) {
      client.query(`UPDATE reservations SET ? WHERE id = ${id}`), data, (err, suc) => {
        if (err) {
            callback(err);
        } else {
            callback(null, suc);
        }
      }
  }

//delete reservation data into PostgreSQL database
  const delData = function(callback) {
      client.query(`DELETE FROM reservations WHERE listingId = ${listingId};`, (err, results) => {
          if (err) {
              callback(err);
          } else {
              callback(null, results);
          }
      });
  };

  module.exports.getData = getData;
  module.exports.addData = addData;
  module.exports.upData = upData;
  module.exports.delData = delData;