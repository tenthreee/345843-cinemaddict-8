export const getRandomNumber = (min, max) => Math.round(Math.random() * (max - min) + min);

export const removeChildren = (parent) => {
  parent.innerHTML = ``;
};

export const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;
  return newElement.firstChild;
};
