import { combineReducers } from 'redux';
import WeatherReducer from  './reduces-weather';


const rootReducer = combineReducers({
  weather: WeatherReducer
});

export default rootReducer;
