var score = 0;
var questions = [
  q1 = {
    question:'What is my name?',
    answer:'Shobhit',
  },
  q2 = {
    question:'Where was I born?',
    answer:'Bihar',
  },
  q3 = {
    question:'Which game do I like the most?',
    answer:'Valo',
  },
];


function checkAns(question, answer){
  if(que === answer){
    console.log('You are correct');
    score ++;
  }
  else{
    console.log('You are wrong');
    score --;
  }
}


for(var init = 0; init < questions.length; init++){
  var input = require('readline-sync');
  var que = input.question(questions[init].question + '\n');
  checkAns(que, questions[init].answer);
  console.log('Total score is ' + score);
}