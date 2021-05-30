const router = require('express').Router();
const pool = require('../db');
const bcrypt = require('bcrypt');
const jwtGenerator = require('../utils/jwtGenerator');
const validInfo = require('../middleware/validInfo');
const authorization = require('../middleware/authorization');

router.post('/register', validInfo, async (req, res) => {
    try {
        const { name, username, password } = req.body;

        const user = await pool.query('SELECT * FROM users WHERE username = $1', [
            username
        ]);

        if (user.rows.length !== 0) {
            return res.status(401).send('Username is already used!');
        }

        const saltRound = 10;
        const salt = await bcrypt.genSalt(saltRound);

        const bcryptPassword = await bcrypt.hash(password, salt);

        const newUser = await pool.query('INSERT INTO users (name, username, password) VALUES ($1, $2, $3) RETURNING *', [name, username, bcryptPassword]);

        const token = jwtGenerator(newUser.rows[0].user_id);

        res.json({ token });
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error');
    }
});

router.post('/login', validInfo, async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await pool.query('SELECT * FROM users WHERE username = $1', [username]);

        if (user.rows.length === 0) {
            return res.status(401).json('Password or username is incorrect');
        }

        const validPassword = await bcrypt.compare(password, user.rows[0].password);

        if (!validPassword) {
            return res.status(401).json('Password or username is incorrect');
        }

        const token = jwtGenerator(user.rows[0].user_id);

        res.json({ token });
    } catch (err) {
        console.log(err.message);
    }
});

router.get('/is-verify', authorization, async (req, res) => {
    try {

    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server error');
    }
})

module.exports = router;