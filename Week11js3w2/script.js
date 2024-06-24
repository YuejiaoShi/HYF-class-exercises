const startButton = document.getElementById("startQuiz");
const questionContainer = document.getElementById("questionContainer");
const quizContainer = document.getElementById("quizContainer");
const submitQuiz = document.getElementById("submitQuiz");

let questionsObjs = [];
startButton.addEventListener("click", async () => {
  startButton.classList.add("hidden");
  quizContainer.classList.remove("hidden");
  submitQuiz.classList.remove("hidden");

  const resp = await fetch(
    "https://opentdb.com/api.php?amount=10&type=multiple"
  );
  const data = await resp.json();
  const results = data.results;
  questionsObjs = results;
  console.log(questionsObjs);
  results.forEach((result, index) => displayEachQues(result, index));
  submitQuiz.addEventListener("click", handleSubmit);
});

function displayEachQues(obj, index) {
  const questionTitle = document.createElement("h3");
  questionTitle.innerHTML = obj.question;
  questionContainer.appendChild(questionTitle);
  const answers = [...obj.incorrect_answers, obj.correct_answer].sort(
    () => Math.random() - 0.5
  );
  console.log(answers);
  answers.forEach((answer) => {
    const input = document.createElement("input");
    const label = document.createElement("label");
    input.type = "radio";
    input.name = `question${index}`;
    input.id = answer;
    input.value = answer;
    label.htmlFor = answer;
    label.innerHTML = answer;
    questionContainer.appendChild(input);
    questionContainer.appendChild(label);
  });
}
function handleSubmit() {
  let score = 0;

  questionsObjs.forEach((questionObj, index) => {
    const checkedRadio = document.querySelector(
      `input[name="question${index}"]:checked`
    );
    if (checkedRadio && checkedRadio.value === questionObj.correct_answer) {
      score++;
    }
  });
  alert(`Your score is: ${score}`);
}
