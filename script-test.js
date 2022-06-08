let lessons = ['Артефакторика', 'Астрология', 'Колдомедицина', 'Криптология', 'Магия стихий', 'Трансфигурация', 'Зельеварение', 'Таро', 'Язык тела', 'Магическая криминалистика', 'Неестествознание', 'Веб-магия', 'Музыка', 'Изучение магических Существ', 'Астрономия', 'Травология', 'Таинственное и Неопознанное', 'Расы Магического мира', 'История Хогвартса', 'Магическое право', 'Логика', 'Египетская мифология'];

function getRandomElement(arr) {
  let randIndex = Math.floor(Math.random() * arr.length);
  return arr[randIndex];
}

let button = document.querySelector('.button');
let lesson1 = document.querySelector('.lesson1');
let lesson2 = document.querySelector('.lesson2');
let lesson3 = document.querySelector('.lesson3');
let lesson4 = document.querySelector('.lesson4');
let lesson5 = document.querySelector('.lesson5');


button.addEventListener('click', function () {
  let finalSchedule = [];
  for (let i = 0; i <= 4; i = i+1) {
    let randomElement = getRandomElement(lessons);
    while (finalSchedule.includes(randomElement)) {
        randomElement = getRandomElement(lessons);
      }
    finalSchedule[i] = randomElement;
  }

  for (let j = 0; j <=4; j += 1) {
    finalSchedule[j] = j + 1 + '. ' + finalSchedule[j];
  }

  smoothly(lesson1, 'textContent', finalSchedule[0]);
  smoothly(lesson2, 'textContent', finalSchedule[1]);
  smoothly(lesson3, 'textContent', finalSchedule[2]);
  smoothly(lesson4, 'textContent', finalSchedule[3]);
  smoothly(lesson5, 'textContent', finalSchedule[4]);
});
