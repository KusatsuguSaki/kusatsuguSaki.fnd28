'use strict'
// 1行目に記載している 'use strict' は削除しないでください

const answerbox1 = document.getElementById("answerbox1");

function checkingAnswers() {
  let answers = document.getElementsByName("castle");
  if (answers[2].checked === true) {
    answerbox1.innerText = "🙆‍♀️正解です🙆‍♀️";
  } else {
    answerbox1.innerText = "🙅‍♀️ざんねん！不正解です🙅‍♀️";
  }
}

const target = document.getElementById("target");
target.addEventListener("click", checkingAnswers);


const answerbox2 = document.getElementById("answerbox2");

function checkingAnswers2() {
  let answers = document.getElementsByName("temple");
  if (answers[3].checked === true) {
    answerbox2.innerText = "🙆‍♀️正解です🙆‍♀️";
  } else {
    answerbox2.innerText = "🙅‍♀️ざんねん！不正解です🙅‍♀️";
  }
}

const target2 = document.getElementById("target2");
target2.addEventListener("click", checkingAnswers2);
