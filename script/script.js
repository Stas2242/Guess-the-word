const game = {
  gameField: document.querySelector(".game-field"),
  wordField: document.querySelector(".word-field"),
  description: document.querySelector(".description-field"),
  startBtn: document.querySelector(".start-btn"),
  enterBtn: document.querySelector(".enter-btn"),
  continueBtn: document.querySelector(".continue"),
  exitBtn: document.querySelector(".exit"),
  inputField: document.querySelector("input"),
  modalOn: document.querySelector(".modal-field"),
  attempts: document.querySelector(".attempts-number"),
  attemptsMax: document.querySelector(".attempts-max"),
  words: [],
  randomWord: null,
  letters: [],

  startGame: function () {
    // try {
    const getWords = async () => {
      try {
        const response = await fetch(
          "https://ccb12885f57ee98d.mokky.dev/words"
        );
        if (!response.ok) throw new Error("Network error");
        this.words = await response.json();
        this.randomWord =
          this.words[Math.floor(Math.random() * this.words.length)];
        console.log(this.randomWord);
        this.letters = this.randomWord.word.toLowerCase().split("");

        // Отрисовка ячеек для букв
        this.letters.forEach((element) => {
          let field = document.createElement("div");
          field.classList.add("box");
          this.wordField.appendChild(field);

          let hidenLetter = document.createElement("div");
          hidenLetter.classList.add("box-letter");
          field.appendChild(hidenLetter);
          hidenLetter.innerHTML = element;
        });
        // Отрисовка игрового поля
        this.gameField.classList.add("game-field_visible");
        this.description.innerHTML = this.randomWord.description;
      } catch (error) {
        console.error("Failed to load words:", error);
        alert("Failed to load words. Please try again later.");
      }
    };
    getWords();
  },

  // // Проверка
  checking: function () {
    const input = this.inputField.value.toLowerCase();
    const allInvisibleLetters = document.querySelectorAll(".box-letter");

    if (!input) {
      alert("Enter the letter/word");
      return;
    }

    if (input.length === 1) {
      if (this.letters.includes(input)) {
        allInvisibleLetters.forEach((item) => {
          if (item.innerHTML === input)
            item.classList.add("box-letter_visible");
        });
      } else {
        alert("Wrong! Try again.");
        this.attemptsCounter();
      }
    } else if (input === this.randomWord.word.toLowerCase()) {
      allInvisibleLetters.forEach((item) =>
        item.classList.add("box-letter_visible")
      );
      this.startModal();
      document.querySelector(".winner").classList.add("winner_visible");
    } else {
      alert("Wrong! Try again.");
      this.attemptsCounter();
    }

    this.inputField.value = "";
  },

  // // счетчик ходов
  attemptsCounter: function () {
    if (+this.attempts.innerHTML < +this.attemptsMax.innerHTML) {
      this.attempts.innerHTML = +this.attempts.innerHTML + 1;
    } else {
      this.startModal();
      document.querySelector(".loser").classList.add("loser_visible");
    }
  },

  // // модальное окно
  startModal: function () {
    this.modalOn.classList.add("modal-field_visible");
  },

  // // сыграть еще раз
  restartGame: function () {
    let gameFieldCleaning = document.querySelectorAll(".box");
    gameFieldCleaning.forEach((element) => element.remove());
    this.modalOn.classList.remove("modal-field_visible");
    document.querySelector(".winner").classList.remove("winner_visible");
    document.querySelector(".loser").classList.remove("loser_visible");
    this.attempts.innerHTML = 0;
    this.startGame();
    this.startBtn.removeEventListener("click", (event) => {
      document.querySelector(".start-field").classList.add("start-field_hiden");
      this.startGame();
    });
  },

  // // выйти
  exitGame: function (event) {
    window.location = "https://www.google.ru/";
  },

  initGame: function () {
    this.startBtn.addEventListener("click", (event) => {
      document.querySelector(".start-field").classList.add("start-field_hiden");
      this.startGame();
    });
    this.enterBtn.addEventListener("click", (event) => {
      this.checking();
    });

    this.continueBtn.addEventListener("click", (event) => {
      this.restartGame();
    });

    this.exitBtn.addEventListener("click", (event) => {
      this.exitGame();
    });
  },
};

game.initGame();