const initialState = {
  localForecast: {
    temp: 0,
    outlook: 'normal',
  }
};

const currentCityReducer = ( action, state = initialState ) => {
  switch(action.type) {
    case "CURRENT_LOCAL_CITY":
      return Object.assign({}, state, action.weather);
    default:
      return state;
  }
};


export default currentCityReducer;
