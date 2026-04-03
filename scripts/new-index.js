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

// removeActiveClass functions:
function removeActiveClass() {
  const activeBtn = document.getElementsByClassName("active");
  for (let btn of activeBtn) {
    btn.classList.remove("active");
  }
}
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
// 🔃Words by Levels load:
const wordByLevelLoad = (id) => {
  const url = `https://openapi.programming-hero.com/api/level/${id}`;
  console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      removeActiveClass();
      const clickButton = document.getElementById(`btn-${id}`);
      clickButton.classList.add("active");
      // console.log(clickButton);
      allWordsDisplay(data.data);
    });
};
// 🔃load  Words Detail:
function loadWordsDetail(id) {
  const url2 = `https://openapi.programming-hero.com/api/word/${id}`;
  console.log(url2);
  fetch(url2)
    .then((res) => res.json())
    .then((data) => allWordDetails(data.data));
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
         <button id="btn-${levels.level_no}" onclick="wordByLevelLoad(${levels.level_no})" class="btn hover:bg-sky-300">
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
  wordLevelContainer.innerHTML = "";

  // condition নেক্সট Lesson এ যান:
  if (allWords.length == 0) {
    wordLevelContainer.innerHTML = `
        <div class="col-span-full flex flex-col justify-center items-center">
          <img class="w-[150px]" src="./assets/alert-error.png" alt="" />
          <p class="text-[#79716B] text-sm mb-3">
            এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।
          </p>
          <h1 class="text-2xl font-semibold">নেক্সট Lesson এ যান</h1>
        </div>
    `;
    return;
  }
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
            <img onclick="loadWordsDetail(${words.id})"
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
// allWordsDetails:
const allWordDetails = (data) => {
  document.getElementById("word_Detail").showModal();
  const wordDetailContainer = document.getElementById("word_Detail_container");
  console.log(wordDetailContainer);
  wordDetailContainer.innerHTML = `
  <div class="card  bg-base-100 card-md shadow-sm">
  <div class="card-body">
    <h2 class="card-title">Medium Card</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
  </div>
</div>
  `;
};
allLevelsLoad();
// allWordsLoad();
