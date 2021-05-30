const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'postgres',
    password: 'postgresradian',
    host: 'localhost',
    port: 5432,
    database: 'foodee_database'
});

module.exports = pool;