const data = {
  A: {
    content: [
      {
        question: "What should you do?0",
        choices: ["brake", "let off the gas", "do nothing"],
        answer: "brake",
        image: "assetsl/2022-bmw-x5-black-vermilion.jpg",
      },
      {
        question: "What should you do?1",
        choices: ["brake", "let off the gas", "do nothing"],
        answer: "brake",
        image: "assets/2022-bmw-x5-black-vermilion.jpg",
      },
      {
        question: "What should you do?2",
        choices: ["brake", "let off the gas", "do nothing"],
        answer: "brake",
        image: "assets/2022-bmw-x5-black-vermilion.jpg",
      },
      {
        question: "What should you lcdo?2",
        choices: ["brake", "let off the gas", "do nothing"],
        answer: "brake",
        image: "assets/2022-bmw-x5-black-vermilion.jpg",
      },
    ],
    time: 80000,
    intro: `<div class="px-3">
    <h1 class="mt-5">Onderdeel 1: Gevaarherkenning</h1>
    <hr class="my-3">
    <p class="lead">Dit onderdeel gaat over het herkennen van gevaar en wat je
        moet doen in een situatie. <br>Dit onderdeel bestaat uit 25 vragen,
        hiervan moet je 13 of meer vragen goed beantwoorden.</p>
    <p class="lead">Voor het onderdeel gevaarherkenning krijg je <span
            class="font-weight-300 text-green">8 seconden</span> per vraag.</p>
    <button  id="startExam1"
        class="text-uppercase btn btn-block btn-primary create-exam mt-3 mb-3 next-quiz"> Start Examen &nbsp; <i class="fa-solid fa-angle-right fa-fade"></i>
        </button>
</div>`,
  },
  B: {
    content: [
      {
        question: "What is the capital of France?3",
        choices: ["Paris", "Berlin", "London"],
        answer: "Paris",
        image: "assets/2022-bmw-x5-black-vermilion.jpg",
      },
      {
        question: "What is the capital of Germany?4",
        choices: ["Berlin", "Paris", "Rome"],
        answer: "Berlin",
        image: "assets/2022-bmw-x5-black-vermilion.jpg",
      },
      {
        question: "What is the capital of Japan?5",
        choices: ["Tokyo", "Beijing", "Seoul"],
        answer: "Tokyo",
        image: "assets/2022-bmw-x5-black-vermilion.jpg",
      },
    ],
    time: 75000,
    intro: `<div class="px-3">
    <h1 class="mt-5">Onderdeel 1: Gevaarherkenning</h1>
    <hr class="my-3">
    <p class="lead">Dit onderdeel gaat over het herkennen van gevaar en wat je
        moet doen in een situatie. <br>Dit onderdeel bestaat uit 25 vragen,
        hiervan moet je 13 of meer vragen goed beantwoorden.</p>
    <p class="lead">Voor het onderdeel gevaarherkenning krijg je <span
            class="font-weight-300 text-green">8 seconden</span> per vraag.</p>
    <button  id="startExam2"
        class="text-uppercase btn btn-block btn-primary create-exam mt-3 mb-3 btns-next-quiz"> Start Examen &nbsp; <i class="fa-solid fa-angle-right fa-fade"></i>
        </button>
</div>`,
  },
  C: {
    content: [
      {
        question: "What is the chemical symbol for water?6",
        choices: ["H2O", "CO2", "NaCl"],
        answer: "H2O",
        image: "assets/2022-bmw-x5-black-vermilion.jpg",
      },
      {
        question: "What is the chemical symbol for oxygen?7",
        choices: ["O2", "H2O", "CO2"],
        answer: "O2",
        image: "assets/2022-bmw-x5-black-vermilion.jpg",
      },
      {
        question: "What is the chemical symbol for carbon dioxide?8",
        choices: ["CO2", "O2", "H2O"],
        answer: "CO2",
        image: "assets/2022-bmw-x5-black-vermilion.jpg",
      },
    ],
    time: 70000,
    intro: `<div class="px-3">
    <h1 class="mt-5">Onderdeel 1: Gevaarherkenning</h1>
    <hr class="my-3">
    <p class="lead">Dit onderdeel gaat over het herkennen van gevaar en wat je
        moet doen in een situatie. <br>Dit onderdeel bestaat uit 25 vragen,
        hiervan moet je 13 of meer vragen goed beantwoorden.</p>
    <p class="lead">Voor het onderdeel gevaarherkenning krijg je <span
            class="font-weight-300 text-green">8 seconden</span> per vraag.</p>
    <button  id="startExam3"
        class="text-uppercase btn btn-block btn-primary create-exam mt-3 mb-3 btns-next-quiz"> Start Examen &nbsp; <i class="fa-solid fa-angle-right fa-fade"></i>
        </button>
</div>`,
  },
};

// document.addEventListener('DOMContentLoaded', function() {

// // let infoContainer = document.getElementById('info-page');

// infopage.innerHTML = data.A.intro

// let startAQuiz = document.getElementsByClassName('btns-next-quiz');

// })

document.addEventListener("DOMContentLoaded", function () {
  let currentPageIndex = 0;
  let currentPagelenght = 0;
  let currentDataKey = "A";
  var startquizz;
  showFirst();
  populatePageContent();
  const nextPageButton = document.querySelector("#nextBtn");
  const counter = document.querySelector("#counter");
  const timer = document.querySelector("#timer");
  const count = document.querySelector("#count");
  const countTotal = document.querySelector("#countTotal");

  // Initial population of page-1 content


  // Event listener for next page button
  nextPageButton.addEventListener("click", function () {
    currentPageIndex++;
    console.log("indx", currentPageIndex);
    console.log("key", currentDataKey);
    populatePageContent();
  });
  startquizz.addEventListener("click", function () {
    console.log("addEventListener next", startquizz);
    hidShow();
  });

  // Function to populate page content
  function populatePageContent() {
    const count = document.querySelector("#count");
    const page2 = document.querySelector(".page-2");
    const image = document.querySelector("#image");
    const question = document.querySelector("#question");
    const choices = document.querySelector("#choices");
    const currentData = data[currentDataKey];
    const currentQuestion = currentData.content[currentPageIndex];
    if (currentQuestion) {
      image.src = currentQuestion.image;
      question.innerHTML = currentQuestion.question;
      let choiceElement = "";
      currentQuestion.choices.forEach((choice) => {
        choiceElement += `<div class="option">
        <input type="radio" name="card" id="silver" value="silver">
        <label for="silver" aria-label="Silver">
            <span></span>
            ${choice}
        </label>
    </div>
`;
        choices.innerHTML = choiceElement;
        count.innerHTML = currentPageIndex+1

      });
    } else {
      // If no more questions, switch to page-1 of next data
      currentPageIndex = 0;
      switchToNextData();
    }
  }
  // Function to switch to next data
  function switchToNextData() {
    const page1 = document.querySelector(".page-1");
    const countTotal = document.querySelector("#countTotal");
    hidShow();
    const keys = Object.keys(data);
    const currentIndex = keys.indexOf(currentDataKey);
    if (currentIndex < keys.length - 1) {
        currentDataKey = keys[currentIndex + 1];
        console.log([{keys:keys}, {currentIndex:currentIndex}, {currentDataKey:currentDataKey}]);
      page1.innerHTML = data[currentDataKey].intro;

      countTotal.innerHTML = data[currentDataKey].content.length
      populatePageContent()
      switch (currentDataKey) {
        case 'B':
          startquizz = document.querySelector("#startExam2");
          break;

        case 'C':
          startquizz = document.querySelector("#startExam3");
          break;
      }
      console.log("switchToNextData next", startquizz);

    } else {
      // If all data is finished, you can handle it accordingly
      page1.innerHTML = `<h1>Thank you </h1>`;
      console.log("All data finished");
    }
  }

  function showFirst() {
    const page1 = document.querySelector(".page-1");
    page1.innerHTML = data[currentDataKey].intro;
    startquizz = document.querySelector("#startExam1");
    console.log("showFirst next", startquizz);
    const countTotal = document.querySelector("#countTotal");

    countTotal.innerHTML = data[currentDataKey].content.length

  }

  function hidShow() {
    const page1 = document.querySelector(".page-1");
    const page2 = document.querySelector(".page-2");

    page2.classList.toggle("hide");
    nextPageButton.classList.toggle("hide");
    counter.classList.toggle("hide");
    timer.classList.toggle("hide");
    page1.classList.toggle("hide");
  }

  document.querySelector('body').addEventListener('click', function(event){
    const target = event.target;
    // const ids = ['startExam1', 'startExam2','startExam3']
    if (target.classList.contains("btns-next-quiz") ) {
        
        hidShow();

    
        console.log('target',target);
    }


  })
});
