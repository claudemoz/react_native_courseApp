import { combineReducers, configureStore } from '@reduxjs/toolkit';
import reducerCourses from './reducers/reducerCourses';
import reducerCart from './reducers/reducerCart';
import reducerPayment from './reducers/reducerPayment';

const rootReducer = combineReducers({
  courses: reducerCourses,
  cart: reducerCart,
  payment: reducerPayment
});

const store = configureStore({
  reducer: rootReducer
});

export default store;