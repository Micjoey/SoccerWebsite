// src/routes/scheduleRoutes.js
const express = require('express');
const scrapeData = require('../scrapers/soccerSchedule');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const data = await scrapeData();
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching data' });
    }
});

module.exports = router;
