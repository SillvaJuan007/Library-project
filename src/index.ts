import'reflect-metadata';
import express from 'express';
import { createConnection } from 'typeorm';
import {Person} from './entities/person'; // Será usado para importar o cadastro person
import { NextHandleFunction } from 'connect';
import { error } from 'console';

const app = express();
app.use(express.json()); //para lidar com json....
  app.get('/', (req, res) => {
  res.send('Library API is running!');
  });
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});