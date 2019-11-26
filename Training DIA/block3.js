// 11. Сделать реверс массива (массив в обратном направлении)

let randomArr = (t) => {
    let randomArray = [];
    for (i = 0; i < t; i++) {
        randomArray.push(Math.round(Math.random() * 100));
    }
    return randomArray;
}


function task11(straightArr) {
    console.log(straightArr);
    reverseArr = [];
    n = straightArr.length;
    for (let i = 0; i <= n - 1; i++) {
        reverseArr[i] = straightArr[(n - 1) - i];
    }
    return reverseArr;
}

console.log(task11(randomArr(4)))


// 12. Посчитать количество нечетных элементов массива

function task12(straightArr) {
    console.log(straightArr);
    counter = 0;
    n = straightArr.length;
    for (i = 1; i <= n - 1; i++) {
        if (i % 2 == 0) {
            counter += 1;
        }
    }
    return counter;
}
console.log(task12(randomArr(5)));

// 13. Поменять местами первую и вторую половину массива, например, для массива 1 2 3 4, результат 3 4 1 2

function task13(straightArr) {
    console.log(straightArr);
    let part = Math.round(straightArr.length / 2);
    let result = [];

    for (let i = part; i < straightArr.length; i++) {
        result.push(straightArr[i])
    }

    for (let i = 0; i < part; i++) {
        result.push(straightArr[i])
    }
    return result;
}

console.log(task13(randomArr(6)));

// 14. Отсортировать массив пузырьком (Bubble) 

function bubbleSortTask14(arr) {
    console.log(arr);
    for (let j = arr.length - 1; j > 0; j--) {
        for (let i = 0; i < j; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
            }
        }
    }
    return arr;
}

console.log(bubbleSortTask14(randomArr(10)));

// 15. Отсортировать массив ещё двумя методами (выбором (Select), вставками (Insert))

// Select sort

function selectSortTask15(arr) {
    console.log(arr);
    for (let i = 0, l = arr.length, k = l - 1; i < k; i++) {
        let indexMin = i;
        for (let j = i + 1; j < l; j++) {
            if (arr[indexMin] > arr[j]) {
                indexMin = j;
            }
        }
        if (indexMin !== i) {
            [arr[i], arr[indexMin]] = [arr[indexMin], arr[i]];
        }
    }
    return arr;
};

console.log(selectSortTask15(randomArr(10)));


// Insert sort 

function insertionSortTask15(arr) {
    console.log(arr);
    for (let i = 1, l = arr.length; i < l; i++) {
        let current = arr[i];
        let j = i;
        while (j > 0 && arr[j - 1] > current) {
            arr[j] = arr[j - 1];
            j--;
        }
        arr[j] = current;
    }
    return arr;
};

console.log(insertionSortTask15(randomArr(10)));