const express = require('express');
const bodyParser = require('body-parser');

const mysql = require('../database/database');
const server = express();
const port = process.env.PORT || 3000;

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));

server.use(express.static('./client/dist'));

// USERS

// GET user
// server.get('/users/:userID', (req, res) => {
// }

// POST user
// server.post('/users/:userID', (req, res) => {
// }

// PATCH user
// server.patch('/users/:userID', (req, res) => {
// })

// DELETE user
// server.delete('/users/:userID', (req, res) => {
// })

// REMINDERS

// GET reminder
// server.get('/reminders/:reminderID', (req, res) => {
// })

// POST reminder
// server.post('/reminders', (req, res) => {
// })

// PATCH reminder for user ID
// server.patch('/reminders/:reminderID', (req, res) => {
// })

// DELETE reminder for user ID
// server.delete('/reminders/:reminderID', (req, res) => {
// })

server.listen(port, () => console.log(`Express server listening on port ${port}`));
