/*jslint node: true */
"use strict";

var http = require('http');
var soap = require('soap');
const express = require('express');

var xml = require('fs').readFileSync('StudentService.wsdl', 'utf8');

var studentService = {
  Students_Service: {
    Students_Port: {
      getStudents: function (args) {
        return ([
          {
            name: "fatma",
            age: 13,
            courses: ['c', 'C++', 'jave'],
            married: false
          },
          {
            name: "lolo",
            age: 14,
            courses: ['c', 'C++', 'jave'],
            married: false
          },
          {
            name: "aya",
            age: 25,
            courses: ['c', 'C++', 'jave'],
            married: false
          }
        ])
      }
    }
  }
};

// var server = http.createServer(function (request, response) {
//   response.end("404: Not Found: " + request.url);
// });

const server = express();

server.listen(8000);

soap.listen(server, '/wsdl', studentService, xml);