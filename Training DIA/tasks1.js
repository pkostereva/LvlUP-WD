    //  1) Найти сумму только положительных из трех чисел

    // let threeNumbers = [];
    // let i = 0;
    // let sum = 0;

    // while (threeNumbers.length < 3) {
    //     threeNumbers[i] = parseInt(prompt('Введите число', 100), 10);
    //     if (threeNumbers[i] > 0) {
    //         sum += threeNumbers[i];
    //     }
    //     i++;
    // }
    // console.log(sum);



    //      2) Посчитать выражение: макс(а*б*с, а+б+с) + 3

    // let threeNumbers = [];
    // let i = 0;

    // while (threeNumbers.length < 3) {
    //     threeNumbers[i] = parseInt(prompt('Введите число', 100), 10);
    //     i++;
    // }
    // let sum = threeNumbers.reduce((x, y) => x + y);
    // let mul = threeNumbers.reduce((x, y) => x * y);

    // result = Math.max(sum, mul) + 3;

    // console.log(result);



    //      3) Определить, какой четверти принадлежит точка с координатами (х,у)

    // xCoordinate = parseInt(prompt('Введите число', 100), 10);
    // yCoordinate = parseInt(prompt('Введите число', 100), 10);

    // if (xCoordinate > 0) {
    //     if (yCoordinate > 0) {
    //         alert("I четверть");
    //     } else {
    //         alert("IV четверть");
    //     }
    // } else {
    //     if (yCoordinate > 0) {
    //         alert("II четверть");
    //     } else {
    //         alert("III четверть");
    //     }
    // }



    //  4) Про min и max в массиве (все вычисления можно проводить в одном и том же цикле, 
    //     т.е. 4 раза почти одно и то же писать не надо):
    // - Найти минимальный элемент массива
    // - Найти максимальный элемент массива
    // - Найти индекс минимального элемента массива
    // - Найти индекс максимального элемента массива

    // let randomArray = [];

    // for (i = 0; i < 10; i++) {
    //     randomArray.push(Math.round(Math.random() * 100));
    // }

    // const getMaxOfArray = (numArray) => {
    //         return Math.max.apply(null, numArray);
    //     }
    //     // поиск минимального и его индекса
    // let minValue = Math.min(...randomArray);
    // let minIndex = randomArray.indexOf(minValue);
    // // поиск максимального и его индекса
    // console.log(
    //     randomArray +
    //     '\n' +
    //     getMaxOfArray(randomArray), randomArray.indexOf(getMaxOfArray(randomArray)), "максимальное и его индекс" +
    //     '\n' + minValue, minIndex, "минимальное и его индекс"
    // );

    // 5) Посчитать сумму элементов массива с нечетными индексами
    let randomArray = [];
    let sum = 0;

    for (i = 0; i < 10; i++) {
        randomArray.push(Math.round(Math.random() * 100));
        if (i % 2 === 1) {
            sum += randomArray[i];
        }
    }
    //  вывод массива и суммы
    console.log(randomArray, sum, "массив и сумма элементов с нечетными индексами");