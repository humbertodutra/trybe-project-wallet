// Esse reducer será responsável por tratar as informações da pessoa usuária

const INITIAL_STATE = {
  email: '',
};

const SET_USER_EMAIL = 'SET_USER_EMAIL';

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SET_USER_EMAIL:
    return {
      ...state,
      email: action.email,
    };
  default: return state;
  }
};

export default user;
