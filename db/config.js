const { Pool } = require('pg');
var config = { 
    database: 'recipe_app', 
    password: 'recipe'
};
const pool = new Pool(config);

// if (process.env.PRODUCTION) {
//     pool = new pg.Pool({
//         connectionString: process.env.DATABASE_URL
//     })
// } else if (process.env.RECIPE_DB_PASSWORD) {
//     pool = new pg.Pool({
//         database: "recipe_app",
//         password: process.env.RECIPE_DB_PASSWORD,
//         multipleStatements: true
//     })
// } else {
//     pool = new pg.Pool({
//         database: "recipe_app"
//     })
// }

module.exports = {
    query: (sql, params, callback) => {
        return pool.query(sql, params, callback);
    }
};
