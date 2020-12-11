// build your server here
const express = require('express');

const ProjectRouter = require('./project/router');

const server = express();

// middlewares
const logger = require('./middlewares/logger');

server.use(express.json());
server.use('/api/project', logger, ProjectRouter);

module.exports = server;
