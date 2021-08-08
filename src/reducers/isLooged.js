const LoggedReducers = (state = false, action) => {
  switch (action.type) {
    case 'SINGIN':
      return !state;
  }
};

export default LoggedReducers;
