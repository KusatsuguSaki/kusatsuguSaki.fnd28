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
