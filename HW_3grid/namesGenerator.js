const names = [
    "Шавкат Тишков",
    "Ренат Одиноков",
    "Тимофей Нифонтов",
    "Илья Колебаев",
    "Макс Федоренко",
    "Анатолий Ким",
    "Маргарита Гуриева",
    "Андрей Бойцев"
];

const count = names.length;
let elementList = document.querySelectorAll("div > h3");
let initialsList = document.querySelectorAll(".circle > div");
if (count === elementList.length) {
   for (let i = 0; i < count; i++) {
        elementList[i].innerText = names[i];
        const nameDivider = names[i].split(" ");
        for (let j = 0; j < nameDivider.length; j++) {
            initialsList[i].innerText += nameDivider[j][0];
        }
    } 
} else {
    alert('error')
}