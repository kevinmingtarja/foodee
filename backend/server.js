const express = require('express');
const app = express();
const { pool } = require('./dbConfig');
const session = require('express-session');
const flash = require('express-flash');
const passport = require('passport');
const bcrypt = require("bcrypt");

const initializePassport = require('./passportConfig');

initializePassport(passport);

const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: false}));

app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false
}))

app.use(passport.initialize());
app.use(passport.session());

app.use(flash());

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/users/register', checkAuthenticated, (req, res) => {
    res.render('register');
})

app.get('/users/login', checkAuthenticated, (req, res) => {
    res.render('login');
})

app.get('/users/dashboard', checkNotAuthenticated, (req, res) => {
    console.log(req);
    res.render('dashboard', { user: req.user.name });
})

app.get('/users/logout', (req, res) => {
    req.logout();
    req.flash('success_msg', 'You have logout!');
    res.redirect('/users/login')
})

app.post('/users/register', async (req, res) => {
    let { name, username, password, password2 } = req.body;
    
    console.log({
        name,
        username,
        password,
        password2
    });

    let errors = [];

    if (!name || !username || !password || !password2) {
        errors.push({ message: "Please enter all fields" });
    }

    if (password.length < 6) {
        errors.push({ message: "Password must be a least 6 characters long" });
    }
    
    if (password !== password2) {
        errors.push({ message: "Passwords do not match" });
    }

    if(errors.length > 0) {
        res.render("register", { errors });
    } else {
        hashedPassword = await bcrypt.hash(password, 10);
        //Form validation has passed

        pool.query(
            `SELECT * FROM users
            WHERE username = $1`, [username], (err, results) => {
                if (err) {
                    throw err
                }

                console.log(results.rows);

                if (results.rows.length > 0) {
                    errors.push({ message: "Username is already taken!" });
                    res.render('register', { errors });
                } else {
                    pool.query(
                        `INSERT INTO users (name, username, password)
                        VALUES ($1, $2, $3)
                        RETURNING id, password`, [name, username, hashedPassword], (err, results) => {
                            if (err) {
                                throw err;
                            }
                            console.log(results.rows);
                            req.flash('success_msg', 'You are now registered. Please login!');
                            res.redirect('/users/login');
                        }
                    )
                }
            } 
        )

    }
})

/app.post('/users/login', passport.authenticate('local', {
    successRedirect: '/users/dashboard',
    failureRedirect: '/users/login',
    failureFlash: true
}))

app.post('/users/login', (req, res) => {
    let { username}  = req.body;
    pool.query(
        `SELECT * FROM users
        WHERE username = $1`, [username], (err, results) => {
            if (err) {
                throw err;
            } else if (results.rows.length > 0) {
                req.session.username = username;
                res.redirect('/users/dashboard');
            } else {
                req.flash('error', 'Username has not been registered');
                res.redirect('/users/login');
            }
        }
    )
})

function checkAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return res.redirect('/users/dashboard');
    }
    next();
}

function checkNotAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/users/login');
}

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})