let phrases = ['Артефакторика', 'Астрология', 'Колдомедицина', 'Криптология', 'Магия стихий', 'Трансфигурация', 'Зельеварение', 'Таро', 'Язык тела', 'Магическая криминалистика', 'Неестествознание', 'Веб-магия', 'Музыка', 'Изучение магических Существ', 'Астрономия', 'Травология', 'Таинственное и Неопознанное', 'Расы Магического мира', 'История Хогвартса', 'Магическое право', 'Логика', 'Египетская мифология'];

// function getRandomElement(arr) {
//   let randIndex = Math.floor(Math.random() * arr.length);
//   let sub = arr[randIndex];
//   phrases.splice(randIndex, 1);
//   return sub;
// }

function getRandomElement(arr) {
  let randIndex = Math.floor(Math.random() * arr.length);
  return arr[randIndex];
}

let button = document.querySelector('.button');
let phrase = document.querySelector('.phrase');
let advice = document.querySelector('.advice');
let lesson1 = document.querySelector('.lesson1');
let lesson2 = document.querySelector('.lesson2');
let lesson3 = document.querySelector('.lesson3');
let lesson4 = document.querySelector('.lesson4');
let lesson5 = document.querySelector('.lesson5');


button.addEventListener('click', function () {
  let finalSchedule = [];
  for (let i = 0; i <= 4; i = i+1) {
    let randomElement = getRandomElement(phrases);
      if (finalSchedule.includes(randomElement)) {
        let randomElement = getRandomElement(phrases);
          if (finalSchedule.includes(randomElement)) {
            let randomElement = getRandomElement(phrases);
            finalSchedule[i] = i + 1 + '.AKJ' + randomElement;
          } else {
        finalSchedule[i] = i + 1 + '.sldkfsd' + randomElement;
        }
      } else {
    finalSchedule[i] = i + 1 + '. ' + randomElement;
    }
  }

  smoothly(lesson1, 'textContent', finalSchedule[0]);
  smoothly(lesson2, 'textContent', finalSchedule[1]);
  smoothly(lesson3, 'textContent', finalSchedule[2]);
  smoothly(lesson4, 'textContent', finalSchedule[3]);
  smoothly(lesson5, 'textContent', finalSchedule[4]);
});
