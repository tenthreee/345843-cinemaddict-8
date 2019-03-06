import {getRandomNumber, removeChildren} from './util.js';
import makeFilter from './make-filter.js';
import makeMovie from './make-movie.js';
import getMovie from './get-movie.js';

const FILTERS = [`All movies`, `Watchlist`, `History`, `Favorites`];

const MoviesAmount = {
  DEFAULT: 7,
  EXTRA: 2,
  MAX: 10
};

const filtersBar = document.querySelector(`.main-navigation`);
const moviesBoard = document.querySelector(`.films-list`);
const moviesContainer = moviesBoard.querySelector(`.films-list__container`);
const moviesLists = document.querySelectorAll(`.films-list__container`);
const extraMovies = document.querySelectorAll(`.films-list--extra`);

const removeMovies = () => {
  for (const list of moviesLists) {
    removeChildren(list);
  }
};

removeChildren(filtersBar);
removeMovies();

const renderFilters = () => {
  for (const filter of FILTERS) {
    filtersBar.insertAdjacentHTML(`beforeend`, makeFilter(filter, getRandomNumber(0, MoviesAmount.MAX)));
  }
};

renderFilters();

const renderMovies = (count, dist) => {
  for (let i = 0; i < count; i++) {
    dist.insertAdjacentHTML(`beforeend`, makeMovie(getMovie()));
  }
};

renderMovies(MoviesAmount.DEFAULT, moviesContainer);

const renderExtraMovies = () => {
  for (const list of extraMovies) {
    const container = list.querySelector(`.films-list__container`);
    renderMovies(MoviesAmount.EXTRA, container);
  }
};

renderExtraMovies();

const onFiltersBarClick = () => {
  removeChildren(moviesContainer);
  renderMovies(getRandomNumber(0, MoviesAmount.MAX), moviesContainer);
};

filtersBar.addEventListener(`click`, onFiltersBarClick);
