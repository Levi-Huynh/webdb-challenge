const express = require('express');
const helmet = require('helmet');

const projectRouter = require('../Projects/projects-router.js');
const actionRouter= require('../Actions/actions-router.js');
// const contextRouter= require('../Contexts/ingredients-router.js');
// const acRouter = require('../AC/ri-router.js');


const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/projects', projectRouter);
server.use('/api/actions', actionRouter);
// server.use('/api/ingredients', ingredientsRouter);
// server.use('/api/ri', riRouter);

// sanity check route
server.get('/', (req, res) => {
  res.status(200).json({ hello: 'World!' });
});

module.exports = server;
