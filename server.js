const express=require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;
const mysql = require('mysql');
const fs = require('fs');

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


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/customers', (req,res)=>{
  connection.query('SELECT * FROM customer', function(error, rows, fields){
    res.header("Access-Control-Allow-Origin", "*");
    res.send(rows);
  })
})


// app.get('/api/customer', async(req,res)=>{
//   res.header("Access-Control-Allow-Origin", "*");
    
//     res.send([
//         {
//             'id': 1,
//             'image': 'https://placeimg.com/64/64/1',
//             'name': '홍길동',
//             'birthday': '960903',
//             'gender': '남',
//             'job': '대학생'
//           },
//           {
//             'id': 2,
//             'image': 'https://placeimg.com/64/64/2',
//             'name': '이승훈',
//             'birthday': '970901',
//             'gender': '남',
//             'job': '대학생'
        
//           },
//           {
//             'id': 3,
//             'image': 'https://placeimg.com/64/64/3',
//             'name': '이범기',
//             'birthday': '010326',
//             'gender': '여',
//             'job': '대학생'
        
//           }
//     ])
// })
app.listen(port, function(){
    console.log(`Listening on port ${port}`)
});