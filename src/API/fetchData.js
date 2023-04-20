const fetchData = async () => {
  const response = await fetch('https://restcountries.com/v2/all');
  const data = response.json();
  return data;
};

export default fetchData;
