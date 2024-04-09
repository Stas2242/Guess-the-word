const Words = [
  {
    word: "Филиал",
    description:
      "Обособленное подразделение юридического лица, расположенное вне места нахождения юридического лица и осуществляющее все его функции или их часть, в том числе функции представительства.",
  },
  {
    word: "Садизм",
    description:
      "Склонность к насилию, получение удовольствия от унижения и мучения других.",
  },
  {
    word: "Акт",
    description:
      "Официальный документ, который констатирует произошедшее действие или факт хозяйственной жизни и подписывается уполномоченными должностными лицами.",
  },
  {
    word: "Блокада",
    description:
      "Особая форма ведения военных действий, которая заключается в изоляции блокируемого объекта с целью не допустить осуществления им своих внешних связей.",
  },
  {
    word: "Ярмарка",
    description:
      "Периодически устраиваемый съезд представителей торговых и промышленных предприятий, предпринимателей, коммерсантов, как правило, для оптовой продажи и закупки товаров по выставленным образцам.",
  },
  {
    word: "Геноцид",
    description:
      "Истребление отдельных групп людей или целых народов по расовым, национальным, религиозным или идеологическим мотивам.",
  },
  {
    word: "Куртаж",
    description:
      "Вознаграждение брокеру за посредничество при совершении биржевой сделки.",
  },
  {
    word: "Измена",
    description:
      "Шпионаж, выдача государственной тайны либо иное оказание помощи иностранному государству, иностранной организации или их представителям в проведении враждебной деятельности в ущерб внешней безопасности Российской Федерации, совершенная гражданином Российской Федерации.",
  },
  {
    word: "Фас",
    description:
      'Международный торговый термин, одно из Франко-условий поставки в коммерческих операциях (буквально означает "свободно вдоль борта судна.")',
  },
  { word: "Вор", description: "Человек, систематически совершающий воровство" },
  {
    word: "Фашизм",
    description:
      "Социально-политические движения, идеологии и государственные режимы тоталитарного типа, основанные на идее национального или расового превосходства.",
  },
  {
    word: "Цессия",
    description:
      "Договор, в силу которого одна сторона (цедент) обязуется перед другой стороной (цессионарием) в установленный срок передать (уступить) принадлежащее ей право требования к третьему лицу — должнику (цессионару) с условием ответственности за недействительность переданного требования.",
  },
  {
    word: "Заклад",
    description:
      "Имущество или другие ценности, служащие частичным или полным обеспечением, гарантирующим погашение займа или выплату проигранных в результате пари денег.",
  },
  {
    word: "Регион",
    description:
      "Термин, используемый для обозначения участка суши или воды, который можно отделить от другого участка (например, того, внутри которого он находится) по ряду критериев.",
  },
  {
    word: "Чек",
    description:
      "Документ, содержащий письменное распоряжение банку выдать предъявителю или перечислить определённую сумму с текущего счёта лица, подписавшего этот документ.",
  },
  {
    word: "Римесса",
    description:
      "Платёжный документ (чек, переводной вексель и т. д.) для международных расчётов и международных денежных переводов в иностранной валюте.",
  },
  {
    word: "Пенсия",
    description:
      "Регулярная и (как правило) пожизненная денежная выплата гражданам со стороны государства или иных субъектов в установленных законом случаях (определенный возраст, инвалидность, потеря кормильца, выслуга лет и особые заслуги перед государством).",
  },
  {
    word: "Референдум",
    description:
      "Принятие какого-либо закона или решение какого-либо особо важного вопроса в жизни государства всенародным голосованием, опросом.",
  },
  {
    word: "Презумпция",
    description:
      "Предположение, которое считается истинным до тех пор, пока ложность такого предположения не будет бесспорно доказана.",
  },
  {
    word: "Лизинг",
    description: "Финансовая аренда.",
  },
  {
    word: "Перевозчик",
    description:
      "Лицо, фактически перемещающее товары либо являющееся ответственным за использование транспортного средства.",
  },
  {
    word: "Киднеппинг",
    description:
      "Похищение людей (преимущественно детей) с целью получения выкупа.",
  },
  {
    word: "Декорт",
    description:
      "Скидка, предоставляемая покупателю за оплату товара раньше оговорённого срока, либо как компенсация за несоответствие качества товара оговорённому.",
  },
  {
    word: "Суицид",
    description:
      "Преднамеренное лишение себя жизни, как правило, самостоятельное и добровольное.",
  },
];

const gameField = document.querySelector(".game-field");
const wordField = document.querySelector(".word-field");
const description = document.querySelector(".description-field");
const startBtn = document.querySelector(".start-btn");
const enterBtn = document.querySelector(".enter-btn");
const continueBtn = document.querySelector(".continue");
const exitBtn = document.querySelector(".exit");
const inputField = document.querySelector("input");
const modalOn = document.querySelector(".modal-field");
let attempts = document.querySelector(".attempts-number");
let attemptsMax = document.querySelector(".attempts-max");
let randomWord;
let letters;

// Игровое поле
function createGameField() {
  gameField.classList.add("game-field_visible");
  description.innerHTML = randomWord.description;
}

function createBox() {
  letters.forEach((element) => {
    let field = document.createElement("div");
    field.classList.add("box");
    wordField.appendChild(field);

    let hidenLetter = document.createElement("div");
    hidenLetter.classList.add("box-letter");
    field.appendChild(hidenLetter);
    hidenLetter.innerHTML = element;
  });
}

function startGame() {
  randomWord = Words[Math.floor(Math.random() * Words.length)];
  letters = randomWord.word.toLowerCase().split("");
  createBox();
  createGameField();
}

// Проверка
function checking() {
  const allInvisibleLetters = document.querySelectorAll(".box-letter");

  if (inputField.value.length == 0) {
    alert("Enter the letter/word");
  }

  if (inputField.value.length == 1) {
    letters.forEach((element) => {
      if (inputField.value.toLowerCase() === element) {
        allInvisibleLetters.forEach((item) => {
          if (inputField.value.toLowerCase() === item.innerHTML) {
            item.classList.add("box-letter_visible");
          }
        });
      }
    });
  }

  if (
    document.querySelectorAll(".box-letter_visible").length === letters.length
  ) {
    startModal();
    document.querySelector(".winner").classList.add("winner_visible");
  }

  if (inputField.value.length == 1 && !letters.includes(inputField.value.toLowerCase())) {
    alert("Wrong! Try again.");
    attemptsCounter();
  }

  if (inputField.value.length > 1) {
    if (randomWord.word.toLowerCase() === inputField.value.toLowerCase()) {
      allInvisibleLetters.forEach((item) => {
        if (inputField.value.toLowerCase() === randomWord.word.toLowerCase()) {
          item.classList.add("box-letter_visible");
          startModal();
          document.querySelector(".winner").classList.add("winner_visible");
        }
      });
    } else {
      alert("Wrong! Try again.");
      attemptsCounter();
    }
  }
  inputField.value = "";
}

// счетчик ходов
function attemptsCounter() {
  if (attempts.innerHTML < attemptsMax.innerHTML) {
    attempts.innerHTML = +attempts.innerHTML + 1;

    console.log(attempts.innerHTML);
    console.log(attemptsMax.innerHTML);
  } else {
    startModal();
    document.querySelector(".loser").classList.add("loser_visible");
  }
}

// модальное окно
function startModal() {
  modalOn.classList.add("modal-field_visible");
}

// сыграть еще раз
function restartGame(event) {
  let gameFieldCleaning = document.querySelectorAll(".box");
  gameFieldCleaning.forEach((element) => element.remove());
  modalOn.classList.remove("modal-field_visible");
  document.querySelector(".winner").classList.remove("winner_visible");
  document.querySelector(".loser").classList.remove("loser_visible");
  attempts.innerHTML = 0;
  startGame();
}

// выйти
function exitGame(event) {
  window.location = "https://www.google.ru/";
}

// кнопки
startBtn.addEventListener("click", (event) => {
  document.querySelector(".start-field").classList.add("start-field_hiden");
  startGame(event);
});

enterBtn.addEventListener("click", (event) => {
  checking();
});

continueBtn.addEventListener("click", (event) => {
  restartGame();
});

exitBtn.addEventListener("click", (event) => {
  exitGame();
});
