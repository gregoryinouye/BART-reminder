const express = require('express');
const bodyParser = require('body-parser');
const twilio = require('twilio');

const mysql = require('../database/database');
const { twilioAccountSid, twilioAuthToken, twilioPhoneNumber } = require('./API_keys.js');

const client = twilio(twilioAccountSid, twilioAuthToken);
const server = express();
const port = process.env.PORT || 3000;

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));

server.use(express.static('./client/dist'));

const sendSMS = (phoneNumber, message) => {
  client.messages
    .create({
      body: message,
      from: twilioPhoneNumber,
      to: phoneNumber,
    })
    .then(message => console.log(message.sid))
    .catch(error => console.log(error));
}

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
