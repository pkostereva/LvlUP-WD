// 6. Найти сумму четных чисел и их количество в диапазоне от 1 до 99 

task6(1, 99);

function task6(start, end) {

    let sum = 0;
    let counter = 0;
    for (let i = start; i <= end; i++) {
        if (i % 2 === 0) {
            sum += i;
            counter++;
        }
    }
    console.log('Сумма четных чисел: ' + sum + '\n' + 'Количество четных чисел на промежутке: ' + counter);
}

// 7. Проверить простое ли число? (число называется простым, если оно делится только само на себя и на 1)

task7(21);

function task7(number) {

    let i = 2;
    while (number % i != 0 && i <= number) {
        i++;
    }

    if (i === number) {
        console.log('Число простое');
    } else {
        console.log('Число составное')
    }
}


// 7.5 Найти корень натурального числа с точностью до целого (рассмотреть вариант последовательного подбора и метод бинарного поиска)


// вариант последовательного перебора

function linearSearch(number) {
    const sqrt = Math.sqrt(number);
    console.log('Корень числа: ' + sqrt);
    let i = 0;
    while (i * i <= number) {
        i++;
    }
    if (Math.abs(i - sqrt) < Math.abs(i - 1 - sqrt)) {
        console.log('Корень числа, округленный до целого: ' + i);
    } else {
        console.log('Корень числа, округленный до целого: ' + (i - 1));
    }

}
console.log(linearSearch(8));

// Вариант с методом бинарного поиска

function _sqrt(number, left, right) {
    let mid = (left + right) / 2;
    let aproximation = mid * mid;

    if (Math.abs(number - aproximation) < 0.01) {
        return Math.round(mid);
    }

    if (aproximation > number) {
        right = mid;
    } else {
        left = mid;
    }
    return _sqrt(number, left, right);
}
// проверка на положительность
function sqrt(number) {
    if (number < 0) return -1;
    return _sqrt(number, 0, number);
}

console.log('Корень числа, округленный до целого:' + sqrt(6, 0, 6));

// 8. Вычислить факториал числа n

console.log('Факториал числа: ' + task8(4));

function task8(number) {
    if (number === 1) {
        return 1;
    } else {
        return number * task8(number - 1);
    }
}


// 9. Посчитать сумму цифр заданного числа

console.log('Сумма цифр: ' + task9(11111));

function task9(number) {
    let result = 0;
    while (number !== 0) {
        result += number % 10;
        number = Math.floor(number / 10);
    }
    return result;
}


// 10. Вывести число, которое является зеркальным отображением 
//     последовательности цифр заданного числа, например, 
//     задано число 123, вывести 321. Число может быть до 100 знаков в длину.

console.log(task10(12345));

function task10(number) {
    let newNumber = 0;
    while (number !== 0) {
        newNumber = newNumber * 10 + number % 10;
        number = Math.floor(number / 10);
    }
    return newNumber;
}