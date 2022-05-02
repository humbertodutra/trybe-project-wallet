const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const DELETE_EXPENSES = 'DELETE_EXPENSES';
const SET_CURRENCIES = 'SET_CURRENCIES';
const SET_EXPENSES = 'SET_EXPENSES';

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SET_CURRENCIES:
    return {
      ...state,
      currencies: action.currencies,
    };
  case SET_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, { id: state.expenses.length, ...action.expense }],
    };
  case DELETE_EXPENSES:
    return {
      ...state,
      expenses: action.expense,
    };

  default: return state;
  }
};

export default wallet;
