// 16. Написать функцию, которая заполняет двумерный массив заданного размера рандомными числами

function twoDimRandomArray(n1, n2) {
    let randomArray = [];
    for (i = 0; i < n1; i++) {
        randomArray[i] = [];
        for (j = 0; j < n2; j++) {
            randomArray[i][j] = Math.round(Math.random() * 100);
        }
    }
    return randomArray;
}

console.log(twoDimRandomArray(2, 5));


// 17. Найти количество элементов массива, которые больше своих левого, правого, верхнего и нижнего соседа одновременно.

let randomArray = twoDimRandomArray(5, 5);

function task17(arr) {
    let counter = 0;
    for (let i = 1; i < arr.length - 1; i++) {
        for (let j = 1; j < arr.length - 1; j++) {
            if (arr[i - 1][j] < arr[i][j] && arr[i][j - 1] < arr[i][j] && arr[i][j + 1] < arr[i][j] && arr[i + 1][j] < arr[i][j]) {
                counter++;
                console.log(arr[i][j]);
            }
        }
    }
    return (counter);
}

console.log(randomArray, task17(randomArray));

// 18. Отразите массив относительно его главной диагонали.

let randomArray = twoDimRandomArray(5, 5);

function task18(arr) {
    console.log(arr);
    let temp = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (i <= j) {
                temp = arr[i][j];
                arr[i][j] = arr[j][i];
                arr[j][i] = temp;
                console.log(arr[i][j], arr[j][i])
            }
        }
    }
    return arr;
}

console.log(task18(randomArray));

// 19. Заполнить массив заданного размера по спирали, например:
//  1  2  3  4
// 10 11 12  5
//  9  8  7  6

console.log(spiralMatrix(2));
console.log(spiralMatrix(3));
console.log(spiralMatrix(4));
console.log(spiralMatrix(5));

function spiralMatrix(dimension) {
    let matrix = [],
        x = 0;
    y = 0;
    count = dimension - 1; // Кол-во шагов в ту или иную сторону

    for (let i = 0; i < dimension; i++) {
        matrix[i] = [];
    } // Создаем матрицу

    for (let i = 1; i <= Math.pow(dimension, 2); i++) {
        matrix[y][x] = i; // Задаем значение

        // Меняем кол-во шагов
        if (x === count && y === dimension - count - 1) {
            count--;
        }
        // Движение "вниз"
        if ((y >= x && y < count) || (x - 1 === y && x === dimension - count - 1)) {
            y++;
        }
        // Движение "вверх"
        else if (y <= x && y >= dimension - count) {
            y--;
        }
        // Движение "вправо"
        else if (x <= y && x < count) {
            x++;
        }
        // Движение "влево"
        else if (x >= y && x >= dimension - count) {
            x--;
        }
    }

    return matrix;
}

// 20. Умножить матрицу произвольного размера, заполненную рандомными числами, 
//     на другую матрицу произвольного размера. (если вдруг никто это раньше не делал, то тут написано,
//     как это сделать и какое правило должно быть соблюдено: 
//     https://www.webmath.ru/poleznoe/formules_6_6.php)

function mulMatrixTask20(firstMatrix, secondMatrix) {
    console.log(firstMatrix, secondMatrix);
    let rowsFirstMatrix = firstMatrix.length;
    let colsFirstMatrix = firstMatrix[0].length;
    let rowsSecondMatrix = secondMatrix.length;
    let colsSecondMatrix = secondMatrix[0].length;
    let multiplyMatrix = [];
    if (colsFirstMatrix != rowsSecondMatrix) {
        return false;
    }
    for (let i = 0; i < rowsFirstMatrix; i++) {
        multiplyMatrix[i] = [];
    }
    for (let k = 0; k < colsSecondMatrix; k++) {
        for (let i = 0; i < rowsFirstMatrix; i++) {
            let temp = 0;
            for (let j = 0; j < rowsSecondMatrix; j++) {
                temp += firstMatrix[i][j] * secondMatrix[j][k];
                multiplyMatrix[i][k] = temp;
            }
        }
    }
    return multiplyMatrix;
}

console.log(mulMatrixTask20(twoDimRandomArray(2, 2), twoDimRandomArray(2, 2)));