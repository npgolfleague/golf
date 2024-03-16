const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Zin!1Ter9",
    database: "golf"
});

app.post('/signup', (req, res) => {
    const sql = "INSERT INTO users  ('name' , 'email', 'phone','quota', 'password') VALUES (?)";
    const values = [
        req.body.name,
        req.body.email,
        req.body.phone,
        req.body.quota,
        req.body.password
    ]
    console.log(values);
    db.query(sql, [values], (err, data) => {
        if (err) {
            console.log("error path");
            return res.json("Error");
        }
        console.log("data path");
        return res.json(data);
    });
});

app.listen(8081, () => {
    console.log("Listening on port 8081");
});