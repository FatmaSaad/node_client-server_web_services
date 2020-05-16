
/*jslint node: true */
"use strict";

// SOAP client example

var soap = require('soap');
var url = 'http://localhost:8000/wsdl?wsdl';


soap.createClient(url, function (err, client) {
  client.getStudents(null, function (err, result) {
    console.log(client.describe());
    console.log(result);
    console.log(result[0]);
  });
});