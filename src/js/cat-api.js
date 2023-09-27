// import axios from "axios";
// axios.defaults.headers.common["x-api-key"] = "live_h2A905RVIysndf8BRqQ3XQtorbR6H8F5eKw7XCIXIhcdpS55v7e2vUHQLO5vfWgW";

function fetchBreeds() {
  const baseUrl = 'https://api.thecatapi.com/v1/breeds';
  const apiKey =
    'live_h2A905RVIysndf8BRqQ3XQtorbR6H8F5eKw7XCIXIhcdpS55v7e2vUHQLO5vfWgW';
  return fetch(`${baseUrl}?api_key=${apiKey}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

function fetchCatByBreed(breedId) {
  const serchUrl = 'https://api.thecatapi.com/v1/images/search';
  const apiKey =
    'live_h2A905RVIysndf8BRqQ3XQtorbR6H8F5eKw7XCIXIhcdpS55v7e2vUHQLO5vfWgW';
  return fetch(`${serchUrl}?breed_ids=${breedId}&api_key=${apiKey}`).then(
    response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    }
  );
}

export { fetchBreeds, fetchCatByBreed };
