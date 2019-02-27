export default (caption, count, isActive = false) => {
  return `<a href="#${caption === `All movies` ? `all` : `${caption.toLowerCase()}`}" class="main-navigation__item
  ${isActive ? ` main-navigation__item--active` : ``}">${caption}
  <span class="main-navigation__item-count">${count}</span></a>`;
};
