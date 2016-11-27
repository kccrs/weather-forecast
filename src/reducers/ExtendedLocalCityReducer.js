const initialState = {
  defaultState: []
};

const ExtendedLocalCityReducer = ( action, state = initialState ) => {
  switch(action.type) {
    case "EXTENDED_LOCAL_CITY":
      return Object.assign({}, state, action.weather);
    default:
      return state;
  }
};

export default ExtendedLocalCityReducer;
