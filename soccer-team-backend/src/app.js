// src/app.js
const express = require('express');
const scheduleRoutes = require('./routes/scheduleRoutes');
const app = express();

app.use(express.json());

// Use the scheduleRoutes for any '/api/schedule' endpoint
app.use('/api/schedule', scheduleRoutes);

module.exports = app;
