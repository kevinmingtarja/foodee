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

//Create a new room
router.post('/rooms', async (req, res) => {
    try {
        const { user_id, username } = req.body;
        const created_at = new Date();
        const response1 = await pool.query('INSERT INTO rooms(created_by, created_by_username, created_at) VALUES ($1, $2, $3) RETURNING room_id, created_by, created_at', [user_id, username, created_at]);
        const response2 = await pool.query('INSERT INTO user_room(user_id, room_id) VALUES ($1, $2) RETURNING user_id, room_id', [user_id, response1.rows[0].room_id]);
        res.status(200).send(response2.rows[0]);
    } catch (err) {
        console.log(err);
        res.status(404).send('Server error');
    }
});

//Get a room
router.get('/rooms/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const response = await pool.query('SELECT * FROM rooms WHERE room_id = $1', [id]);
        res.status(200).send(response.rows[0]);
    } catch (err) {
        console.log(err);
        res.status(404).send('Server error');
    }
});

//Delete a room
router.delete('/rooms/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const response = await pool.query('DELETE FROM rooms WHERE room_id = $1 RETURNING room_id, created_by, created_by_username, created_at', [id]);
        res.status(200).send(response.rows[0]);
    } catch (err) {
        console.log(err);
        res.status(404).send('Server error');
    }
});

//Join a room
router.post('/rooms/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { user_id } = req.body;
        const response = await pool.query('INSERT INTO user_room(user_id, room_id) VALUES ($1, $2) RETURNING user_id, room_id', [user_id, id]);
        res.status(200).send(response.rows[0]);
    } catch (err) {
        console.log(err);
        res.status(404).send('Server error');
    }
});

//Leave a room
router.delete('/rooms', async (req, res) => {
    try {
        const { room_id, user_id } = req.body;
        const response = await pool.query('DELETE FROM user_room WHERE user_id = $1 AND room_id = $2 RETURNING user_id, room_id', [user_id, room_id]);
        res.status(200).send(response.rows[0]);
    } catch (err) {
        console.log(err);
        res.status(404).send('Server errror');
    }
});

//Insert vote
router.post('/rooms/:id/vote', async (req, res) => {
    try {
        const { alias, name, image_url, url, review_count, rating, price, phone, display_phone, address1, address2, address3, city, zip_code, country, state, vote, user_id, username } = req.body;
        const { id } = req.params;
        let response1 = await pool.query('SELECT restaurant_id FROM restaurants WHERE alias = $1 AND name = $2 AND image_url = $3 AND phone = $4', [alias, name, image_url, phone]);
        if (response1.rows.length === 0) {
            response1 = await pool.query('INSERT INTO restaurants(alias, name, image_url, url, review_count, rating, price, phone, display_phone, address1, address2, address3, city, zip_code, country, state, room_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17) RETURNING restaurant_id',
                    [alias, name, image_url, url, review_count, rating, price, phone, display_phone, address1, address2, address3, city, zip_code, country, state, id]);
        }
        response2 = await pool.query('INSERT INTO user_restaurant(user_id, restaurant_id, username, vote) VALUES ($1, $2, $3, $4) RETURNING user_id, restaurant_id, username, vote', [user_id, response1.rows[0].restaurant_id, username, vote]);
        res.status(200).send(response2.rows[0]);
    } catch (err) {
        console.log(err);
        res.status(404).send('Server error');
    }
});

//Get results
router.get('/rooms/:id/results', async (req, res) => {
    const getRestaurantVotes = (restaurant_id) => {
        const response = pool.query('SELECT * FROM user_restaurant WHERE restaurant_id = $1', [restaurant_id]);
        return response;
    };
    try {
        const { id } = req.params;
        const response1 = await pool.query('SELECT restaurant_id FROM restaurants WHERE room_id = $1', [id]);
        const restaurants = response1.rows;
        const results = restaurants.map(data => getRestaurantVotes(data.restaurant_id));
        Promise.all(results).then(response => {
            const results = [];
            for (const result of response) {
                results.push(...result.rows)
            }   
            res.status(200).send(results);
        });
    } catch (err) {
        console.log(err);
        res.status(404).send('Server error');
    }
});

module.exports = router;