const localStrategy = require('passport-local').Strategy;
const { pool } = require('./dbConfig');
const bcrypt = require("bcrypt");

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
                        bcrypt.compare(password, user.password, (err, isMatch) => {
                          if (err) {
                            console.log(err);
                          }
                          if (isMatch) {
                            return done(null, user);
                          } else {
                            //password is incorrect
                            return done(null, false, { message: "Password is incorrect" });
                          }
                        });
                      } else {
                        // No user with that username address
                        return done(null, false, {
                          message: "Username address is not registered!"
                        });
                      }
                }
            }
        )
    }
    passport.use(new localStrategy({
        usernameField: 'username',
        passwordField: 'password'
    }, authenticateUser))

    passport.serializeUser((user, done) => done(null, user.user_id));

    passport.deserializeUser((user_id, done) => {
        pool.query(
            `SELECT * FROM users WHERE user_id = $1`, [user_id], (err, results) => {
                if (err) {
                    throw err;
                }
                return done(null, results.rows[0]);
            }
        )
    })
}

module.exports = initialize;