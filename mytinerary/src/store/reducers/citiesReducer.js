import { createReducer } from '@reduxjs/toolkit';
import { fetchCitiesRequest, fetchCitiesSuccess, fetchCitiesFailure } from '../actions/citiesActions';

const initialState = {
  cities: [],
  loading: false,
  error: null,
  filteredCities: [],
};

const citiesReducer = createReducer(initialState, {
  [fetchCitiesRequest]: (state) => {
    state.loading = true;
  },
  [fetchCitiesSuccess]: (state, action) => {
    state.loading = false;
    state.cities = action.payload;
    state.error = null;
    state.filteredCities = action.payload;
  },
  [fetchCitiesFailure]: (state, action) => {
    state.loading = false;
    state.cities = [];
    state.error = action.payload;
  },
});

export default citiesReducer;
