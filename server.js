const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bcrypt = require('bcrypt');
const db = require("./db/config.js");
var bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('public'));

const port = process.env.PORT || 4000;


app.get('/', (req, res) => {
    res.send('hello from recipe server')
})

app.post('/recipe',(req, res) => {
    let recipe = req.body;
    let rowCount = 0;
    for(let i = 0; i < recipe.length; i++) {
        let id = Number(recipe[i].id);
        let title = recipe[i].title;
        let img = `https://spoonacular.com/recipeImages/${id}-480x360.jpg`;
        let readyInMinutes = Number(recipe[i].readyInMinutes);

        db.query(`select * from recipe where id = ${id};`, (err, dbRes) => {
            // console.log(dbRes.rows.length);
            rowCount = dbRes.rows.length;
            if(rowCount == 0) {
                db.query(`INSERT INTO recipe (id,title,img,readyInMinutes) VALUES (${id}, '${title}','${img}',${readyInMinutes});`, (err, dbRes) => {
                    // console.log("Data inserted:",i);
                    // console.log(`INSERT INTO recipe (id,title,img,readyInMinutes) VALUES (${id}, '${title}','${img}',${readyInMinutes});`);
                });
            }
        });    
    }
})

app.post('/recipe/edit/:id',(req, res) => {
    let id =  Number(req.params.id);
    // console.log("ID:",id);
    let extendedIngredients = req.body.extendedIngredients;
    let instructions = req.body.extendedIngredients;
    // let title = recipe[i].title;
    db.query(`UPDATE  recipe  SET extendedIngredients='${extendedIngredients}', instructions='${instructions}' WHERE id=${id};`, (err, dbRes) => {
        
    });
    // res.json(req.body);
})

app.post('/saveRecipe',(req, res) => {
    let recipe_id =  Number(req.body.recipe_id);
    let user_id =  Number(req.body.user_id);
    console.log("recipe_id: ",recipe_id,"user_id",user_id);
    let rowCount = 0;
    db.query(`select * from liked_by where recipe_id = ${recipe_id} and user_id = ${user_id};`, (err, dbRes) => {
        console.log(dbRes.rows.length);
        rowCount = dbRes.rows.length;
        if(rowCount == 0) {
            db.query(`INSERT INTO liked_by (recipe_id,user_id) VALUES (${recipe_id}, '${user_id}');`, (err, dbRes) => {
                console.log("Data inserted:");
                // res.json({"result":"inserted"});
            });
        }
    });
    res.json({"result":"inserted"});
})

app.get('/savedRecipes/:userID',(req,res) => {
    let id = Number(req.params.userID);
    console.log(id);
    // let userID = Number(req.params.userID);
    db.query(`select * from recipe, liked_by where liked_by.user_id = ${id} and liked_by.recipe_id = recipe.id;`, (err, dbRes) => {
        console.log(dbRes.rows.length);
        rowCount = dbRes.rows.length;
        res.json(dbRes.rows);
    });
})

app.post('/deleteRecipe/:recipe_id',(req,res) => {
    let recipe_id = req.params.recipe_id;
    let user_id = req.body.userID;
    db.query(`delete from liked_by where liked_by.user_id = ${user_id} and recipe_id = ${recipe_id};`, (err, dbRes) => {
        console.log(dbRes.rows.length);

        // rowCount = dbRes.rows.length;
        res.json({});
    });
    
})

app.post('/login',(req,res)=>{
    // console.log("Reached here 1");
    let email = req.body.email;
    let password_digest = req.body.password_digest;
    db.query(`select * from users where users.email='${email}';`, (err, dbRes) => {
        // console.log(dbRes.rows);
        if(bcrypt.compareSync(password_digest, dbRes.rows[0].password_digest)) {
            res.json({
                "status": true,
                "userID": dbRes.rows[0].id,
                "username":dbRes.rows[0].user_name
            })
        } else {
            res.json({
                "status": false,
                "userID": 0,
                "username": ""
            })
        }
    })
    // console.log("Reached here 2");
})

app.post('/signUp',(req, res) => {
    let user_name =  req.body.user_name;
    let email =  req.body.email;
    let password_digest = bcrypt.hashSync(req.body.password_digest,10);
    console.log("user name ",user_name,"email",email,"password_digest",password_digest);
    let rowCount = 0;
    db.query(`select * from users where email = '${email}';`, (err, dbRes) => {
        // console.log(dbRes.rows.length);
        rowCount = dbRes.rows.length;
        if(rowCount == 0) {
            db.query(`INSERT INTO users (user_name, email,password_digest) VALUES ('${user_name}', '${email}','${password_digest}');`, (err, dbRes) => {
                console.log("Data inserted:");
            });
        }
    });
    res.json({"result":"user created"});
})

app.listen(port, () => {
    console.log(`Recipe server listening on port 4000`);
    
})


//https://api.edamam.com/search?q=chicken&app_id=5c1cebfb&app_key=903f71b3d496dc461eadb25648faf8db

//INSERT INTO recipe (id,title,postcode,img,readyInMinutes) VALUES (1, 'title','img',1);
// UPDATE  recipe  SET extendedIngredients='extendedIngredients', instructions='instructions' WHERE id=1;

//delete from liked_by where liked_by.user_id = 1 and recipe_id = 651914;