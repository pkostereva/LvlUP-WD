// 11. Сделать реверс массива (массив в обратном направлении)

let randomArr = (t) => {
        let randomArray = [];
        for (i = 0; i < t; i++) {
            randomArray.push(Math.round(Math.random() * 100));
        }
        return randomArray;
    }
    // console.log(randomArr(4));

let ultraArr = randomArr(4);
// console.log('my random array' + ultraArr);
// task11();

function task11(straightArr) {
    console.log(straightArr);
    // straightArr = randomArray(10);
    reverseArr = [];
    for (let i = 0; i <= straightArr.length; i++) {
        reverseArr[i] = straightArr[straightArr.length - i];
    }
    return reverseArr;
}


console.log(task11(randomArr(4)))
    // console.log(task11(randomArr(10)));


// 12. Посчитать количество нечетных элементов массива
// 13. Поменять местами первую и вторую половину массива, например, для массива 1 2 3 4, результат 3 4 1 2
// 14. Отсортировать массив пузырьком (Bubble) 
// 15. Отсортировать массив ещё двумя методами (выбором (Select), вставками (Insert))