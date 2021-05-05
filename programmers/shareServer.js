const express = require('express');
const app = express();
var bodyParser = require('body-parser')

const hostname = "192.168.1.30"; 
const port = 50500; //

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.post('/user_post', function(req, res){
  console.log(req.body);
  console.log(req.body.firstArgs);
  console.log(req.body.secondArgs);
  
})
app.post('/judgement', function(req, res) {
  let answer = '';
  if(Number(req.body.firstArgs) % 2 === 0){
    answer = '짝수';
  } else {
    answer = '홀수';
  }
  console.log(answer);
  res.json({'answer' : answer});
})
app.listen(port, hostname, (err) => {
  // 만든 서버가 이 컴퓨터에 리스닝을 하도록 시킨다.
  // 첫번째 인자 port는 3000번이고 hostname은 이 컴퓨터의 hostname 같은 것
  console.log(`Server running at http://${hostname}:${port}/`);
  if(err) {
    return console.log('Found error ', err);
  }
});
