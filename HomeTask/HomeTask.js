"use strict";
/**
 * 1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора,
найти минимальное число в массиве, решение задание должно состоять из одной
строки кода.
 */
const arr = [1, 5, 7, 9];
console.log(`Min : ${Math.min(...arr)}`);

/**
 * 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект
с двумя методами: increment и decrement. Метод increment должен увеличивать
значение счетчика на 1, а метод decrement должен уменьшать значение счетчика
на 1. Значение счетчика должно быть доступно только через методы объекта,
а не напрямую.
 */

function createCount(){
    let count = 0;
    return {
        increment(){
            return ++count;
        },
        decrement(){
            return --count;
        }
    }
}
let userCount = createCount();
console.log(userCount.increment());
console.log(userCount.increment());
console.log(userCount.increment());
console.log(userCount.increment());
console.log(userCount.decrement());
console.log(userCount.decrement());
console.log(userCount.decrement());
console.log(userCount.decrement());