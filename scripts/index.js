// load function All Levels:
function loadAllLevels() {
  fetch("https://openapi.programming-hero.com/api/levels/all")
    .then((res) => res.json())
    .then((data) => console.log(data.data));
}

// load Words-by-Levels:
function loadWordLevels() {
  fetch("https://openapi.programming-hero.com/api/level/5")
    .then((res) => res.json())
    .then((data) => console.log(data));
}

// all load words level add:
const loadAllWordLevel = () => {
  const url = `https://openapi.programming-hero.com/api/level/5`;
  console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => data.lessonName);
};

//display wordsLevels:
// "data": [
// {
// "id": 4,
// "level": 5,
// "word": "Diligent",
// "meaning": "পরিশ্রমী",
// "pronunciation": "ডিলিজেন্ট"
// },
const displayWordLevel = (wordsLevel) => {
  const wordLevelsContainer = document.getElementById("wordLevel-container");
  wordsLevel.forEach((word) => {
    // create div
    const wordLevelDiv = document.createElement("div");
    wordLevelDiv.innerHTML = `
        <div class="card card-border bg-sky-100 p-10">
          <div class="mb-8 flex flex-col items-center ">
            <h1 class="text-xl font-semibold mb-3">${word.word}</h1>
            <p class="font-semibold">${word.meaning} /${word.pronunciation}</p>
           
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
    wordLevelsContainer.append(wordLevelDiv);
  });
};

// displayAllFunctions:
// "data": [
// {
// "id": 101,
// "level_no": 1,
// "lessonName": "Basic Vocabulary"
function displayAllLevels(allLevels) {
  const btnLevel = document.getElementById("btn-level");
  for (const level of allLevels) {
    console.log(level);
    const levelDiv = document.createElement("div");
    levelDiv.innerHTML = `
      <button class="btn">
            <img src="./assets/fa-book-open.png" alt="" />btn
          </button>
    `;
    btnLevel.append(levelDiv);
  }
}

loadAllLevels();
