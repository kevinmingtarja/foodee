const router = require('express').Router();
const pool = require('../db');
const yelp = require('yelp-fusion');
require('dotenv').config();

const apiKey = process.env.apiKey;
const client = yelp.client(apiKey);

router.get('/restaurants', async (req, res) => {
    try {
        const response = await client.search(req.query);
        res.json(response.jsonBody.businesses);
    } catch (err) {
        console.log(err);
        res.status(404).send('Server error');
    }
});

module.exports = router;