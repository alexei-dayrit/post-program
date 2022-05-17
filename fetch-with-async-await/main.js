
// regular fetch
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => console.log(users))
  .catch(err => console.error(err));

fetch('https://pokeapi.co/api/v2/pokemon/charmander/')
  .then(response => response.json())
  .then(pokemon => console.log('My favorite pokemon:', pokemon))
  .catch(err => console.error(err));

// fetch with await/async

const loadUsers = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (response.status !== 200) {
      throw new Error(response.statusText);
    }
    console.log('response received:', response);
    const users = await response.json();
    console.log('async users processed:', users);
  } catch (err) {
    console.error(err);
  }
};

const loadPokemon = async () => {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/charmander/');
    const pokemon = await response.json();
    console.log('async pokemon:', pokemon);
  } catch (err) {
    console.error(err);
  }
};

loadUsers();
loadPokemon();
