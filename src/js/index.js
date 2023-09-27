import { fetchBreeds, fetchCatByBreed } from './cat-api';
import '../style.css';

const breedCollection = document.querySelector('.breed-select');
const loader = document.querySelector('.loader');
const errorText = document.querySelector('.error');
const catinfoContainer = document.querySelector('.cat-info');

document.addEventListener('DOMContentLoaded', fetchBreeds);
breedCollection.addEventListener('change', getBreedId);

breedCollection.classList.add('ishidden');
errorText.classList.add('ishidden');
catinfoContainer.classList.add('ishidden');

function getBreedId(event) {
  loader.classList.remove('ishidden');
  errorText.classList.add('ishidden');
  const breedId = event.currentTarget.value;
  fetchCatByBreed(breedId)
    .then(result => {
      catinfoContainer.classList.remove('ishidden');
      loader.classList.add('ishidden');
      const { url, breeds } = result[0];
      catinfoContainer.innerHTML = `<img src=${url} alt=${breeds[0].name} width=400 /><h2>${breeds[0].name}</h2><p>${breeds[0].description}</p><p><b>Temperament </b>${breeds[0].temperament}</p>`;
    })
    .catch(error => {
      console.log(error);
      loader.classList.add('ishidden');
      errorText.classList.remove('ishidden');
    });
}

fetchBreeds()
  .then(result => {
    loader.classList.add('ishidden');
    breedCollection.classList.remove('ishidden');
    breedCollection.insertAdjacentHTML('afterbegin', breedMarkup(result));
  })
  .catch(error => {
    console.log(error);
    loader.classList.add('ishidden');
    errorText.classList.remove('ishidden');
  });

function breedMarkup(breedArr) {
  return breedArr
    .map(
      ({ id, name }) => `
  <option value=${id}>${name}</option>
    `
    )
    .join('');
}
