export const getListPostRemote = () => {
  return fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .catch((error) => console.error(error));
};
