const localStrategy = require('passport-local').Strategy;
const { pool } = require('./dbConfig');

function initialize(passport) {
    const authenticateUser = (username, password, done) => {
        pool.query(
            `SELECT * FROM users WHERE username = $1`, [username], (err, results) => {
                if (err) {
                    throw err;
                } else {
                    console.log(results.row);
                    if (results.rows.length > 0) {
                        const user = results.rows[0];
                        return done(null, user);
                    } else {
                        return done(null, false, { message: 'Username is not registered' });
                    }
                }
            }
        )
    }
    passport.use(new localStrategy({
        usernameField: 'username',
        passwordField: 'username'
    }, authenticateUser))

    passport.serializeUser((user, done) => done(null, user.id));

    passport.deserializeUser((id, done) => {
        pool.query(
            `SELECT * FROM users WHERE id = $1`, [id], (err, results) => {
                if (err) {
                    throw err;
                }
                return done(null, results.rows[0]);
            }
        )
    })
}

module.exports = initialize;