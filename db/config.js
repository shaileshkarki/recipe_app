const { Pool } = require('pg');
let pool;
if (process.env.PRODUCTION) {
  pool = new Pool({
    connectionString: process.env.RECIPE_DB_PASSWORD,
  })
} else {
  pool = new Pool({
    database: 'recipe_app',
    password: 'recipe',
  })
}

module.exports = {
    query: (sql, params, callback) => {
        return pool.query(sql, params, callback);
    }
};
