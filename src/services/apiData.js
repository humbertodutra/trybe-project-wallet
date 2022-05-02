const toDelete = ['USDT'];

export const currenciesApi = async () => {
  try {
    const apiResponse = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await apiResponse.json()
      .then((a) => Object.keys(a));
    data.splice(1, 1);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const allFetched = async () => {
  try {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await response.json();
    if (toDelete.length > 0) {
      toDelete.forEach((currency) => delete data[currency]);
    }
    return data;
  } catch (err) {
    throw new Error(err);
  }
};
export default currenciesApi;
