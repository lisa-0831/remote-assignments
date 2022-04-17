const express = require('express');
const bodyParser = require('body-parser')
const mysql = require('mysql');

// Create connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Wannalearn666",
    database: "assignment"
})

// Connect
db.connect((err) => {
    if (err) throw err;
    console.log('MySql Connected...');
})

const app = express();
app.use(bodyParser.urlencoded({ extended: false}))
app.set('view engine', 'pug');

// HomePage
app.get('/', (req, res) => {
    res.render('homepage');
});

//Select all users
app.get('/allusers', (req, res) => {
    let sql = `SELECT * FROM user`;
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Posts fetched...');
    });
});

// Select user
app.post('/logIn', (req, res) => {
    if (req.body.email !== '' && req.body.password !== ''){
        let sql = `SELECT * FROM user WHERE email ='${req.body.email}' && password ='${req.body.password}'`;
        let query = db.query(sql, (err, result) => {
            if(err) throw err;
            console.log(result);
            // If the pair of email and password matches any existing row in the user table
            if (result.length > 0){
                res.render('memberpage');
            }else{
                res.redirect('/');
            };
        });
    }else{
        res.redirect('/');
    };
});

// Insert
app.post('/signUp', (req, res) => {
    if (req.body.email !== '' && req.body.password !== ''){
        let sql = `SELECT * FROM user WHERE email ='${req.body.email}'`;
        let query = db.query(sql, (err, result) => {
            if(err) throw err;
            console.log(result);
            // If the same email wasn’t registered before
            if (result.length === 0){
                let newUser = {email: req.body.email, password: req.body.password}
                let sql = 'INSERT INTO user SET ?';
                let query = db.query(sql, newUser, (err, result) => {
                    if(err) throw err;
                    console.log(result);
                    res.render('memberpage');
                });
            }else{
                res.redirect('/');
            };
        });
    }else{
        res.redirect('/');
    };
});

// Create DB
app.get('/createdb',(req, res) => {
    let sql = 'CREATE DATABASE assignment';
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('Database created...');
    })
});

// Create Table
app.get('/createpoststable', (req, res) => {
    let sql = 'CREATE TABLE user(id int AUTO_INCREMENT, email VARCHAR(255), password VARCHAR(255), PRIMARY KEY(id))';
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('User table created...')
    })
});

// Delete post
app.get('/deletepost/:id', (req,res) => {
    let sql = `DELETE FROM user WHERE id =${req.params.id}`;
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Post deleted...')
    });
})

app.listen('3000', () => {
    console.log('Server started on port 3000');
});