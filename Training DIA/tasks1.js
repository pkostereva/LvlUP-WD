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
    // if sum > mul {
    //     result = sum + 3;
    // } else {
    //     result = mul + 3;
    // }

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
    // let min = randomArray[0];
    // let minIndex = 0;
    // let max = randomArray[0];
    // let maxIndex = 0;
    // for (i = 1; i < randomArray.length; i++) {
    //     if (min > randomArray[i]) {
    //         min = randomArray[i];
    //         minIndex = i;
    //     }
    //     if (max < randomArray[i]) {
    //         max = randomArray[i];
    //         maxIndex = i;
    //     }
    // }
    // console.log(randomArray + ' - исходный массив,' + '\n' +
    //     min + ' - минимальное значение,' +
    //     minIndex + ' - индекс минимального значения' + '\n' +
    //     max + ' - максимальное значение,' +
    //     maxIndex + ' - индекс максимального значения');


    // 5) Посчитать сумму элементов массива с нечетными индексами
    // let randomArray = [];
    // let sum = 0;

    // for (i = 0; i < 10; i++) {
    //     randomArray.push(Math.round(Math.random() * 100));
    //     if (i % 2 === 1) {
    //         sum += randomArray[i];
    //     }
    // }
    // //  вывод массива и суммы
    // console.log(randomArray, sum, "массив и сумма элементов с нечетными индексами");