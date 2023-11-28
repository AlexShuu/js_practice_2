'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	private: false
};

// Technical variables
const a = prompt('Один из последних просмотренных фильмов?', ''),
	  b = prompt('На сколько оцените его?', ''),
	  c = prompt('Один из последних просмотренных фильмов?', ''),
	  d = prompt('На сколько оцените его?', '');

// Here we assign our variables to our nested object
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);