import {getRandomNumber} from './util.js';

const POSTERS = [
  `accused`,
  `blackmail`,
  `blue-blazes`,
  `fuga-da-new-york`,
  `moonrise`,
  `three-friends`,
];

const LOREM = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.`;

const getRandomText = (string, separator, length) => {
  const sentences = string.split(separator);
  const description = new Array(getRandomNumber(1, length));

  for (let i = 0; i < description.length; i++) {
    description.fill(sentences[Math.floor(Math.random() * sentences.length)], i, i + 1);
  }

  return description.join(separator);
};

export default () => ({
  title: getRandomText(LOREM, ` `, 3),
  rating: 10,
  year: 2019,
  duration: `1h 30m`,
  genre: `Comedy`,
  poster: `images/posters/${POSTERS[[Math.floor(Math.random() * POSTERS.length)]]}.jpg`,
  description: getRandomText(LOREM, `. `, 3),
  comments: Math.floor(Math.random() * 20),
  isInWatchlist: true,
  isWatched: false,
  isFavorite: false,
});
