const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;
const mysql = require('mysql');
const fs = require('fs');
// const cors = require('cors')

// const cors = require('cors');
// const corsOptions = {
//   origin: "http://localhost:3000",
//   credentials: true
// }
// app.use(cors(corsOptions));
const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data)

const connection = mysql.createConnection({
  host: conf.host,
  user: conf.user,
  password: conf.password,
  port: conf.port,
  database: conf.database
});
connection.connect();

const multer = require('multer')
const upload = multer({ dest: './upload' })


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/customers', (req, res) => {
  connection.query('SELECT * FROM customer', function (error, rows, fields) {
    res.header("Access-Control-Allow-Origin", "*");
    res.send(rows);
  })
})

app.use('/image', express.static('./upload'))
// 사용자입장에서 /image로 접근을 하는데 실제 서버에 ./upload와 매핑

app.post('http://localhost:5000/api/customers', upload.single('image'), (req, res) => {

  let sql = 'INSERT INTO customer VALUES (null, ?,?,?,?,?)';
  let image = '/image' + req.file.filename;
  let name = req.body.name;
  let birthday = req.body.birthday;
  let gender = req.body.gender;
  let job = req.body.job;
  console.log(name);
  console.log(image)
  console.log(birthday)
  console.log(gender)
  console.log(job)
  let params = [image, name, birthday, gender, job]
  connection.query(sql, params,
    (err, rows, fields) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.send(rows);
    })

})


app.listen(port, function () {
  console.log(`Listening on port ${port}`)
});
