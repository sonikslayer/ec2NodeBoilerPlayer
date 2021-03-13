const express = require('express');
const app = require('express')();
const server = require('http').createServer(app);
const path = require('path');
const Log = require('./log.js');
const log = new Log();
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

server.listen(PORT, () => {
  log.log(`Server started on port ${PORT}`);
});
