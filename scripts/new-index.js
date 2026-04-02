// login btn ------->
document
  .getElementById("btn-login")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const inputName = document.getElementById("input-name").value;
    const inputPassword = document.getElementById("input-password").value;
    const convertedPass = parseInt(inputPassword);

    if (inputName == "sourav") {
      if (convertedPass === 1234) {
        console.log("done");
      } else {
        alert("password incorrect☠️");
      }
    } else {
      alert("Name incorrect☠️");
    }
  });

// 🔃 All Levels load functions:
function allLevelsLoad() {
  fetch("https://openapi.programming-hero.com/api/levels/all")
    .then((res) => res.json())
    .then((data) => allLevelsLoadDisplay(data.data));
}
// 🔃 All Words:
function allWordsLoad() {
  fetch("https://openapi.programming-hero.com/api/words/all")
    .then((res) => res.json())
    .then((data) => allWordsDisplay(data.data));
}

// allLevelsLoadDisplay
// "id": 101,
// "level_no": 1,
// "lessonName": "Basic Vocabulary"
function allLevelsLoadDisplay(allLevels) {
  const btnLevels = document.getElementById("btn-levels");
  for (const levels of allLevels) {
    const createDiv = document.createElement("div");
    createDiv.innerHTML = `
         <button class="btn hover:bg-sky-300">
            <img src="./assets/fa-book-open.png" alt="" />${levels.lessonName}
          </button>
    `;
    btnLevels.append(createDiv);
  }
}
// allWordsDisplay:
// "data": [
// {
// "id": 1,
// "level": 3,
// "word": "Abundant",
// "meaning": null,
// "pronunciation": "অবানডান্ট"
// },
const allWordsDisplay = (allWords) => {
  const wordLevelContainer = document.getElementById("wordLevel-container");
  allWords.forEach((words) => {
    const createdDiv = document.createElement("div");
    createdDiv.innerHTML = `
    <div class="card card-border bg-sky-100 p-10">
      <div class="mb-8 flex flex-col items-center">
        <h1 class="text-xl font-semibold mb-2">${words.word}</h1>
        <p class="mb-3">Meaning /Pronounciation</p>
        <p class="font-semibold">${words.meaning} / ${words.pronunciation}</p>
      </div>
      <div>
        <div class="flex justify-between">
          <button class="btn">
            <img
              class="w-4 h-4"
              src="https://img.icons8.com/?size=48&id=18693&format=png"
              alt=""
            />
          </button>
          <button class="btn">
            <img
              class="w-4 h-4"
              src="https://img.icons8.com/?size=24&id=87109&format=png"
              alt=""
            />
          </button>
        </div>
      </div>
    </div>
    `;
    wordLevelContainer.append(createdDiv);
  });
};
allLevelsLoad();
allWordsLoad();
