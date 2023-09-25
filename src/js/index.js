const breedCollection = document.querySelector('.breed-select');
const loader = document.querySelector('.loader');
const errorText = document.querySelector('.error');
const catinfoContainer = document.querySelector('.cat-info');

document.addEventListener('DOMContentLoaded', fetchBreeds);
breedCollection.addEventListener('change', getBreedId);

function getBreedId(event) {
  const breedId = event.currentTarget.value;
  fetchCatByBreed(breedId);
}

function fetchBreeds() {
  loader.removeAttribute('hidden');
  const baseUrl = 'https://api.thecatapi.com/v1/breeds';
  const apiKey =
    'live_h2A905RVIysndf8BRqQ3XQtorbR6H8F5eKw7XCIXIhcdpS55v7e2vUHQLO5vfWgW';
  return fetch(`${baseUrl}?api_key=${apiKey}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(result => {
      loader.setAttribute('hidden', 'hidden');
      breedCollection.insertAdjacentHTML('afterbegin', breedMarkup(result));
    })
    .catch(error => {
      console.log(error);
      errorText.removeAttribute('hidden');
      loader.setAttribute('hidden', 'hidden');
    });
}

function breedMarkup(breedArr) {
  return breedArr
    .map(
      ({ id, name }) => `
  <option value=${id}>${name}</option>
    `
    )
    .join('');
}

function fetchCatByBreed(breedId) {
  const serchUrl = 'https://api.thecatapi.com/v1/images/search';
  const apiKey =
    'live_h2A905RVIysndf8BRqQ3XQtorbR6H8F5eKw7XCIXIhcdpS55v7e2vUHQLO5vfWgW';
  fetch(`${serchUrl}?breed_ids=${breedId}&api_key=${apiKey}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(result => {
      const { url, breeds } = result[0];
      // console.log({ url, breeds });
      // console.log(result);
      // console.log(breeds);
      // createMurkupBySerch(result);
      catinfoContainer.innerHTML = `<img src=${url} alt=${breeds[0].name} width=400 /><h2>${breeds[0].name}</h2><p>${breeds[0].description}</p><p><b>Temperament </b>${breeds[0].temperament}</p>`;
    })
    .catch(error => console.log(error));
}

// function createMurkupBySerch(serchResult) {
//   const serchMarkup = serchResult
//     .map(
//       ({ url, name, description, temperament }) => `
//   <img src=${url} alt=${name} width=400 />
//   <h2>${name}</h2>
//   <p>${description}</p>
//   <p><span>Temperament</span>${temperament}</p>
//   `
//     )
//     .join('');
//   catinfoContainer.innerHTML = serchMarkup;
// }
