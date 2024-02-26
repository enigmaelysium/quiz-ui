const data = {
  Gevaarherkenning: {
    content: [
      {
        question: "What should you do?0",
        choices: ["brake", "let off the gas", "do nothing"],
        answer: "brake",
        image: "assets/2022-bmw-x5-black-vermilion.jpg",
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
    time: 8,
    passingScore: 2,
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
    correctCount: 0,
    wrongCount: 0,
  },
  Kennis: {
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
    passingScore: 2,
    time: 9,
    // time: 480,
    intro: `<div class="px-3">
    <h1 class="mt-5">Onderdeel 2: Kennis</h1>
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
    correctCount: 0,
    wrongCount: 0,
  },
  Inzicht: {
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
    passingScore: 2,
    time:9 ,
    // time:960 ,
    intro: `<div class="px-3">
    <h1 class="mt-5">Onderdeel 3: Inzicht</h1>
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
    correctCount: 0,
    wrongCount: 0,
  },
};

// let data = {
//   A: {
//     correctCount: 0,
//     wrongCount: 0,
//   },
//   B: {
//     correctCount: 0,
//     wrongCount: 0,
//   },
//   C: {
//     correctCount: 0,
//     wrongCount: 0,
//   },
// };

// document.addEventListener('DOMContentLoaded', function() {

// // let infoContainer = document.getElementById('info-page');

// infopage.innerHTML = data.A.intro

// let startAQuiz = document.getElementsByClassName('btns-next-quiz');

// })

document.addEventListener("DOMContentLoaded", function () {
  let currentPageIndex = 0;
  let currentPagelenght = 0;
  let currentDataKey = Object.keys(data)[0];
  var startquizz;
  var startquizz;
  let timerInterval,
    currentQuestion,
    currentData,
    correctAnswer,
    selectedChoice,
    corrrectScore,
    wrongScore,
    dataScrore;
  let quizRecord = [];
  let quizRecordSmall = [];
  // blabla()
  // let datttt = 
  //   {
  //     B: [
  //       [
  //         {
  //           question: "What should you do?1",
  //           choices: ["brake", "let off the gas", "do nothing"],
  //           answer: "brake",
  //           image: "assets/2022-bmw-x5-black-vermilion.jpg",
  //         },
  //         "brake",
  //         "let off the gas",
  //       ],
  //       [
  //         {
  //           question: "What should you do?2",
  //           choices: ["brake", "let off the gas", "do nothing"],
  //           answer: "brake",
  //           image: "assets/2022-bmw-x5-black-vermilion.jpg",
  //         },
  //         "brake",
  //         "let off the gas",
  //       ],
  //       [
  //         {
  //           question: "What should you do?3",
  //           choices: ["brake", "let off the gas", "do nothing"],
  //           answer: "brake",
  //           image: "assets/2022-bmw-x5-black-vermilion.jpg",
  //         },
  //         "brake",
  //         "let off the gas",
  //       ],
  //     ],
  //   }
  // ;
  // loadingChoices(datttt);
  showFirst();
  //   populatePageContent();
  const repeatExamButton = document.querySelector("#repeatExam");
  const nextExamButton = document.querySelector("#nextExam");
  const nextPageButton = document.querySelector("#nextBtn");
  const exitPageButton = document.querySelector("#exitBtn");
  const backPageRecordbutton = document.querySelector("#recordBack");
  const backPageButton = document.querySelector("#backBtn");
  const counter = document.querySelector("#counter");
  const count = document.querySelector("#count");
  const countTotal = document.querySelector("#countTotal");
  const viewMore = document.querySelectorAll(".v-more");

  currentData = data[currentDataKey];
  selectedChoice; // Variable to store the user's selected choice

  corrrectScore = 0;
  wrongScore = 0;

  // Initial population of page-1 content
  function scoreCounter() {
    currentQuestion = currentData.content[currentPageIndex];
    correctAnswer = currentQuestion.answer; // Get correct answer

    console.log(`correct answer value is checked:`, correctAnswer);
    document.querySelectorAll('input[name="choice"]').forEach((input) => {
      console.log(`choice ${input.id} is checked:`, input.checked);
      console.log(`choice ${input.id} value:`, input.value);
      if (input.checked) {
        console.log(`choice ${input.id} checked value:`, input.value);
        console.log(`correct answer value is checked:`, correctAnswer);
        selectedChoice = input.value; // Update selectedChoice when user selects a choice
      }
    });
    quizRecordSmall.push([currentQuestion, correctAnswer, selectedChoice]);

    if (selectedChoice === correctAnswer) {
      // Increment score if selected choice is correct
      // You can implement your scoring logic here
      corrrectScore++;
      data[currentDataKey].correctCount++;
      console.log("Correct choice!", corrrectScore);
    } else {
      // Increment wrong count if selected choice is wrong or no choice is selected
      // You can implement your scoring logic here
      wrongScore++;
      data[currentDataKey].wrongCount++;
      console.log("Wrong choice!", wrongScore);
    }
  }

  function scoreUndo() {
    quizRecordSmall.pop();
    if (corrrectScore > 0 && data[currentDataKey].correctCount > 0) {
      corrrectScore--;
      data[currentDataKey].correctCount--;
    }
    if (wrongScore > 0 && data[currentDataKey].wrongCount > 0) {
      wrongScore--;
      data[currentDataKey].wrongCount--;
    }
  }
  // Event listener for next page button
  nextPageButton.addEventListener("click", function () {
    // Event listener for user's choice selection
    console.log("curent data key out fun :", currentDataKey);
    scoreCounter();

    currentPageIndex++;
    console.log("indx", currentPageIndex);
    console.log("key", currentDataKey);
    populatePageContent();
  });

  exitPageButton.addEventListener("click", function () {
    window.history.back();


  })
  repeatExamButton.addEventListener("click", function () {
    location.reload();
  })
  nextExamButton.addEventListener("click", function () {
    window.location.href = "https://www.example.com"; // Replace "https://www.example.com" with your desired URL
  })

  viewMore.forEach((button,index) => {
    button.addEventListener("click", function() {
      loadingChoices(quizRecord[index])
    });
  });

  backPageRecordbutton.addEventListener("click", function () {

    const page3 = document.querySelector(".page-3");
    const page4 = document.querySelector(".page-4");
    page3.classList.toggle("hide");
    page4.classList.toggle("hide");
  })
  

  backPageButton.addEventListener("click", function () {
    if (currentPageIndex > 0) {
      // Event listener for user's choice selection
      console.log("curent data key out fun :", currentDataKey);
      console.log("indx before", currentPageIndex);

      scoreUndo();

      currentPageIndex--;
      console.log("indx after", currentPageIndex);
      console.log("key", currentDataKey);
      populatePageContent();
    }
  });
  startquizz.addEventListener("click", function () {
    console.log("addEventListener next", startquizz);
    // startTimer(data[currentDataKey].time);
    populatePageContent();
    hidShow();
  });

  // Function to populate page content
  function populatePageContent(num = 0) {
    const count = document.querySelector("#count");
    const image = document.querySelector("#image");
    const question = document.querySelector("#question");
    const choices = document.querySelector("#choices");
    currentData = data[currentDataKey];
    currentQuestion = currentData.content[currentPageIndex];
    if (currentQuestion) {
      image.src = currentQuestion.image;
      question.innerHTML = currentQuestion.question;
      let choiceElement = "";
      currentQuestion.choices.forEach((choice, index) => {
        choiceElement += `<div class="option">
        <input type="radio" name="choice" id="choice_${
          index + 1
        }" value="${choice}">
        <label for="choice_${index + 1}" aria-label="${choice}">
            <span></span>
            ${choice}
        </label>
    </div>
`;
        choices.innerHTML = choiceElement;
        count.innerHTML = currentPageIndex + 1;
      });
      // If time is less than or equal to 8 seconds, start timer and load next question
      if (num == 1) {
        console.log("currentData.time", currentData.time);
        startTimer(currentData.time, 1);
        num = 0;
      } else if (currentData.time <= 8) {
        startTimer(currentData.time);
      }
    } else {
      // If no more questions, switch to page-1 of next data
      currentPageIndex = 0;
      switchToNextData();
    }
  }
  // Function to switch to next data
  function switchToNextData() {
    const page1 = document.querySelector(".page-1");
    const page2 = document.querySelector(".page-2");
    const page3 = document.querySelector(".page-3");
    const countTotal = document.querySelector("#countTotal");
    let record = {}
    record[currentDataKey] = quizRecordSmall 
    clearInterval(timerInterval);
    hidShow();
    quizRecord.push(record);
    quizRecordSmall = [];
    const keys = Object.keys(data);
    const currentIndex = keys.indexOf(currentDataKey);
    if (currentIndex < keys.length - 1) {
      currentDataKey = keys[currentIndex + 1];
      console.log([
        { keys: keys },
        { currentIndex: currentIndex },
        { currentDataKey: currentDataKey },
      ]);
      page1.innerHTML = data[currentDataKey].intro;

      countTotal.innerHTML = data[currentDataKey].content.length;
      switch (currentDataKey) {
        case "B":
          startquizz = document.querySelector("#startExam2");
          break;

        case "C":
          startquizz = document.querySelector("#startExam3");
          break;
      }
      console.log("switchToNextData next", startquizz);
    } else {
      // If all data is finished, you can handle it accordingly

      page1.classList.add("hide");
      page2.classList.add("hide");
      page3.classList.toggle("hide");
      let totalQuestions = 0;
      let listQuestionsScore = [];

      for (const key in data) {
        if (Object.hasOwnProperty.call(data, key)) {
          totalQuestions += data[key].content.length;
        }
      }

      const percentage = (corrrectScore / totalQuestions) * 100;

      for (let category in data) {
        console.log("Category:", category);
        console.log("Correct Count:", data[category].correctCount);
        console.log("Wrong Count:", data[category].wrongCount);
        listQuestionsScore.push([
          (data[category].correctCount / data[category].content.length) * 100,
          data[category].correctCount,
          data[category].content.length,
          data[category].passingScore,
        ]);
      }
      // data.forEach((element,index) => {
      // console.log('list Element: ', element);
      // console.log('list index: ', index);
      //   // listQuestionsScore.push([element.correctCount,])

      // });

      loadingData(
        percentage,
        corrrectScore,
        totalQuestions,
        listQuestionsScore
      );

      // page1.innerHTML = `<h1>Thank you </h1>
      //  <br/>
      //  <h4> Your correct score are : ${corrrectScore} <h4/>
      //  <br/>
      //  <h4> Your wrong score are : ${wrongScore} <h4/>
      //  <br/>
      //  <h4> Your correct score A are : ${data.A.correctCount}</h4>
      //  <br/>
      //  <h4> Your wrong score A are : ${data.A.wrongCount}</h4>
      //  <br/>
      //  <h4> Your correct score B are : ${data.B.correctCount}</h4>
      //  <br/>
      //  <h4> Your wrong score B are : ${data.B.wrongCount}</h4>
      //  <br/>
      //  <h4> Your correct score C are : ${data.C.correctCount}</h4>
      //  <br/>
      //  <h4> Your wrong score C are : ${data.C.wrongCount}</h4>`;
      // console.log("All data finished");
    }
  }

  function showFirst() {
    const page1 = document.querySelector(".page-1");
    page1.innerHTML = data[currentDataKey].intro;
    startquizz = document.querySelector("#startExam1");
    console.log("showFirst next", startquizz);
    const countTotal = document.querySelector("#countTotal");

    countTotal.innerHTML = data[currentDataKey].content.length;
  }

  function loadingChoices(infos) {
    const categoryHolder = document.querySelector(".page-4-1>h2");
    const choicesInformation = document.querySelector(".page-4-2");
    const page1 = document.querySelector(".page-1");
    const page2 = document.querySelector(".page-2");
    const page3 = document.querySelector(".page-3");
    const page4 = document.querySelector(".page-4");
    let keys = Object.keys(infos);
    let key = keys
    let valuesInside = "";

    page1.classList.add("hide");
    page2.classList.add("hide");
    page3.classList.toggle("hide");
    page4.classList.toggle("hide");

    categoryHolder.innerHTML = key;
    console.log('infos',infos);
    console.log('key]',key);
    console.log('infos[key]',infos[key]);
    for (let i = 0; i < infos[key].length; i++) {
      const element = infos[key][i];

      valuesInside += `
      <div class="correct-container">
      <span>${i+1}</span>
      <div class="correct">
      <img src="${element[0].image}" alt="" width="700">
      <div>
          <h4>${element[0].question}</h4>
          <div>
              <p>Your answer <span class="coorect-answer-span">${element[2]}</span></p>
              <p>The correct answer <span class="coorect-answer-span">${element[1]}</span></p>
          </div>
        </div>
      </div>
  </div>
      `;
    }
    choicesInformation.innerHTML = valuesInside;
  }

  function hidShow() {
    const page1 = document.querySelector(".page-1");
    const page2 = document.querySelector(".page-2");

    page2.classList.toggle("hide");
    nextPageButton.classList.toggle("hide");
    if (data[currentDataKey].time != 8) {
      const hiddenDiv = document.querySelector("#itShouldHide");
      backPageButton.classList.toggle("hide");
      hiddenDiv.classList.toggle("hide");
    }
    counter.classList.toggle("hide");
    timer.classList.toggle("hide");
    page1.classList.toggle("hide");
  }

  // Function to start the timer
  function startTimer(duration, numb = 0) {
    let timerDisplay = document.getElementById("timer");
    let totalSeconds = duration;
    clearInterval(timerInterval);

    function updateTimer() {
      let minutes = Math.floor(totalSeconds / 60);
      let seconds = Math.floor(totalSeconds % 60);

      minutes = String(minutes).padStart(2, "0");
      seconds = String(seconds).padStart(2, "0");

      timerDisplay.innerHTML = minutes + ":" + seconds;

      if (totalSeconds <= 0) {
        console.log("numb: ", numb);
        if (numb == 1) {
          // If no more questions, switch to page-1 of next data
          console.log(
            "data[currentDataKey].content.length:",
            data[currentDataKey].content.length
          );
          console.log(
            "data[currentDataKey].corrrectScore:",
            data[currentDataKey].correctCount
          );

          let wrongAnswers =
            parseInt(data[currentDataKey].content.length) -
            parseInt(data[currentDataKey].correctCount);
          console.log("wrongAnswers: ", wrongAnswers);
          console.log("data befor : ", data[currentDataKey].wrongCount);
          data[currentDataKey].wrongCount = wrongAnswers;
          console.log("data after : ", data[currentDataKey].wrongCount);
          console.log("wrongScore befor : ", wrongScore);
          wrongScore += wrongAnswers;
          console.log("wrongScore after : ", wrongScore);

for (let i = 0; i < data[currentDataKey].content.length; i++) {
  const element = data[currentDataKey].content[i];
  quizRecordSmall.push([element, data[currentDataKey].content[i].answer, selectedChoice]);

  
}

          currentPageIndex = 0;
          switchToNextData();
        } else {
          clearInterval(timerInterval);
          timerDisplay.innerHTML = "Time's up!";
          // You can handle what happens when time is up here

          // Execute the code when time is up
          currentPageIndex++;
          populatePageContent();
          wrongScore++;
          data[currentDataKey].wrongCount++;
          quizRecordSmall.push([currentQuestion, currentQuestion.answer, selectedChoice]);
          console.log("Wrong choice!", wrongScore);
          // startTimer(data[currentDataKey].time);
        }
      } else {
        totalSeconds--;
      }
    }

    // Update timer immediately and start repeating every second
    updateTimer();
    timerInterval = setInterval(updateTimer, 1000);
  }

  document.querySelector("body").addEventListener("click", function (event) {
    const target = event.target;
    // const ids = ['startExam1', 'startExam2','startExam3']
    if (target.classList.contains("btns-next-quiz")) {
      console.log("body in lisstner :", currentData);
      populatePageContent(1);
      //   startTimer(data[currentDataKey].time);
      hidShow();

      console.log("target", target);
    }
  });

  function loadingData(num, totalCorrectQ, totalQ, counterCounter) {
    console.log('num', num);
    document.querySelector(".percents").style.setProperty("--num", num);
    document.querySelector(".theNumbr").innerHTML = `${totalCorrectQ}`;
    document.querySelector(".theNumberTotal").innerHTML = `${totalQ}`;
    console.log("quizz record:", quizRecord);
    const status = document.querySelector("#status");
    const percents = document.querySelector(".percents");
    const imageReaction = document.querySelector("#image-score");
    const descriptionFaild = document.querySelector("#descriptionFaild");
    let statusOfPassing = false;
    let faildExams = "";

    for (const key in data) {
      if (data[key].correctCount >= data[key].passingScore) {
        statusOfPassing = true;
      } else {
        statusOfPassing = false;
        faildExams = key;
        break;
      }
    }

    switch (true) {
      case (num >= 0 && num < 15):
        percents.dataset.text = 'bad';
        break;
      case (num >= 15 && num < 30):
        percents.dataset.text = 'good';
        break;
      case (num >= 30 && num < 45):
        percents.dataset.text = 'great';
        break;
      case (num >= 45 && num <= 100):
        percents.dataset.text = 'excellent';
        break;
    }
    
    // for (let i = 0; i < counterCounter.length; i++) {
    //   const element = counterCounter[i];
    //   if (element[1] >= element[3]) {
    //     statusOfPassing = true
    //   }else{
    //     statusOfPassing = false
    //   }

    // }

    if (statusOfPassing) {
      console.log("goooof");
      status.innerHTML = "Lucky!";
      descriptionFaild.innerHTML = "You passed this practice exam.";
      imageReaction.src = "assets/success.png";
    } else {
      status.innerHTML = "Unfortunately!";
      descriptionFaild.innerHTML = "You failed this practice exam.";
      imageReaction.src = "assets/failed.png";
    }

    const progressBarContents = document.querySelectorAll(
      ".progressBarContent"
    );
    const progressBars = document.querySelectorAll(".progressBar");
    progressBars.forEach((progressBar, index) => {
      progressBar.style.setProperty("--with", `${counterCounter[index][0]}%`);
    });

    progressBarContents.forEach((element, index) => {
      element.dataset.content = counterCounter[index][1];
      const dataSet = element.dataset.content;
      const valueWithoutPercentage = dataSet.replace("%", "");
      const percent = parseInt(valueWithoutPercentage);
      const max = counterCounter[index][2];
      element.dataset.content = "0%";
      animateProgressBarContent(percent, element, max);
    });

    function animateProgressBarContent(limit, item, max) {
      const duration = 1000; // Duration in milliseconds (1 second)
      const intervalTime = duration / limit; // Calculate interval time based on the limit
      let percent = -1;
      const interval = setInterval(() => {
        percent += 1;
        item.dataset.content = percent + "/" + max;

        if (percent >= limit) {
          clearInterval(interval);
        }
      }, intervalTime);
    }
  }

  function blabla() {
    const page1 = document.querySelector(".page-1");
    const page2 = document.querySelector(".page-2");
    const page3 = document.querySelector(".page-3");
    page1.classList.add("hide");
    page2.classList.add("hide");
    // page3.classList.toggle('')
    let totalQuestions = 0;
    let listQuestionsScore = [];

    for (const key in data) {
      if (Object.hasOwnProperty.call(data, key)) {
        totalQuestions += data[key].content.length;
      }
    }

    const percentage = (corrrectScore / totalQuestions) * 100;

    for (let category in data) {
      console.log("Category:", category);
      console.log("Correct Count:", data[category].correctCount);
      console.log("Wrong Count:", data[category].wrongCount);
      listQuestionsScore.push([
        (data[category].correctCount / data[category].content.length) * 100,
        data[category].correctCount,
        data[category].content.length,
        data[category].passingScore,
      ]);
    }
    // data.forEach((element,index) => {
    // console.log('list Element: ', element);
    // console.log('list index: ', index);
    //   // listQuestionsScore.push([element.correctCount,])

    // });

    loadingData(percentage, corrrectScore, totalQuestions, listQuestionsScore);
  }
});

$(function () {
  var $ppc = $(".progress-pie-chart"),
    percent = parseInt($ppc.data("percent")),
    deg = (360 * percent) / 100;
  if (percent > 50) {
    $ppc.addClass("gt-50");
  }
  $(".ppc-progress-fill").css("transform", "rotate(" + deg + "deg)");
  $(".ppc-percents span").html(percent + "%");
});
