"use strict";

/*let number = 4.6;

console.log(4/0);
console.log('string' * 9);

const person = 'something';
console.log(person);

const boolk = false;

let und;
console.log(und);

const obj = {
    name: "John",
    age: 25,
    isMarried: false
};

console.log(obj.name);

let arr = ['plug.png', 'apple.bmp', 'orange.jpg', 7];
console.log(arr[1]); */

/*const result = confirm("Привет, ты нормальный?");
console.log(result);*/

/*let incr = 10,
    decr = 10;

incr++;
decr--;

console.log(incr);
console.log(decr); */

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из просмотренных фильмов'),
      b = prompt('На сколько его оцените?');
