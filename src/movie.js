import {createElement} from './util.js';

export default class Movie {
  constructor(data) {
    this._title = data.title;
    this._rating = data.rating;
    this._duration = data.duration;
    this._genre = data.genre;
    this._poster = data.poster;
    this._description = data.description;
    this._comments = data.comments;

    this._element = null;
    this._state = {
      // isInWatchlist: true,
      // isWatched: false,
      // isFavorite: false,
    };

    this._onClick = null;
  }

  _onCommentsClick() {
    // debugger;
    return typeof this._onCLick === `function` && this._onCLick();
  }

  get element() {
    return this._element;
  }

  set onCLick(fn) {
    this._onCLick = fn;
  }

  get template() {
    return `<article class="film-card">
      <h3 class="film-card__title">${this._title}</h3>
      <p class="film-card__rating">${this._rating}</p>
      <p class="film-card__info">
        <span class="film-card__year">${this._year}</span>
        <span class="film-card__duration">${this._duration}</span>
        <span class="film-card__genre">${this._genre}</span>
      </p>
      <img src="${this._poster}" alt="${this._title}" class="film-card__poster">
      <p class="film-card__description">${this._description}</p>
      <button class="film-card__comments">${this._comments}</button>

      <form class="film-card__controls">
        <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist"><!--Add to watchlist--> WL</button>
        <button class="film-card__controls-item button film-card__controls-item--mark-as-watched"><!--Mark as watched-->WTCHD</button>
        <button class="film-card__controls-item button film-card__controls-item--favorite"><!--Mark as favorite-->FAV</button>
      </form>
    </article>`.trim();
  }

  bind() {
    this._element.querySelector(`.film-card__comments`)
        .addEventListener(`click`, this._onCommentsClick.bind(this));
  }

  render() {
    this._element = createElement(this.template);
    this.bind();
    return this._element;
  }

  unbind() {
    //
  }

  unrender() {
    this.unbind();
    this._element = null;
  }
}
