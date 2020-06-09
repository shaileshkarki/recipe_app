const express = require('express');
// const cors = require('cors');
const db = require("./db/config.js");
const app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.json());
// app.use(cors());

app.get('/', (req, res) => {
    res.send('hello from recipe server')
})

// app.get('/user',(req,res)=> {
//     var email = req.params.id;
//     var password_digest = req.params.password_digest;
//     db.query(`select * from users where users.email='karkishailesh@hotmail.com';`, (err, dbRes) => {
//         console.log(dbRes);
//         res.json(dbRes.rows);
//     });
// });
app.get('/user',(req,res)=>{
    db.query("select * from users where users.email='karkishailesh@hotmail.com';", (err, dbRes) => {
                console.log(dbRes.rows);
                res.json(dbRes.rows);
            });
})
// app.get('/user', (req, res) => {
//     var email = req.params.id;
//     var password_digest = req.params.password_digest;
//     db.query(`select * from users where users.email='karkishailesh@hotmail.com';`, (err, dbRes) => {
//         console.log(dbRes.rows);
//         res.json(dbRes.rows);
//     });
// });

app.listen(4000, () => {
    console.log(`Recipe server listening on port 4000`);
})