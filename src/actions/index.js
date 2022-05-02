// Coloque aqui suas actions

export const setEmail = (email) => ({
  type: 'SET_USER_EMAIL',
  email,
});

export const setCurrencies = (currencies) => ({
  type: 'SET_CURRENCIES',
  currencies,
});

export const setExpenses = (expense) => ({
  type: 'SET_EXPENSES',
  expense,
});

export const deleteExpenses = (expense) => ({
  type: 'DELETE_EXPENSES',
  expense,
});
