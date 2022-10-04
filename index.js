var score = 0;
var questions = [
  q1 = {
    question: 'What is my name?',
    answer: 'Shobhit',
  },
  q2 = {
    question: 'Where was I born?',
    answer: 'Bihar',
  },
  q3 = {
    question: 'Which game do I like the most?',
    answer: 'Valo',
  },
  q4 = {
    question: 'Where did I did all my schooling?',
    answer: 'Jharkhand',
  },
  q5 = {
    question: 'Which degree I am pursuing currently?',
    answer: 'Btech',
  },
  q6 = {
    question: 'Which sports I used to play in 12th?',
    answer: 'Basketball',
  },
];


function checkAns(question, answer) {
  if (que === answer) {
    console.log('You are correct');
    score++;
  }
  else {
    console.log('You are wrong');
    score--;
  }
}

console.log('This is a small quiz on me to see how much you know me and enter your answers with 1st letter capital\n');

for (var init = 0; init < questions.length; init++) {
  var input = require('readline-sync');
  var que = input.question(questions[init].question + '\n');
  checkAns(que, questions[init].answer);
  if (init === questions.length - 1) {
    console.log('\n')
  }
  console.log('Total score is ' + score);
  console.log('\n');
}