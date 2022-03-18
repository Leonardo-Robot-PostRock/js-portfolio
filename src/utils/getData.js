const API = process.env.API;

const getData = async (id) => {
  const apiURl = id ? `${API}${id}` : API;
  let randomCharacter = Math.floor(Math.random()*9);
  try {
    const response = await fetch(apiURl);
    const data = await response.json();
    return data.results[randomCharacter];
  } catch (error) {
    console.log('Fetch Error', error);
  };
};

export default getData;