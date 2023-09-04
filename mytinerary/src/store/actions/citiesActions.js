import { createAction } from '@reduxjs/toolkit';

 const fetchCitiesRequest = createAction('cities/fetchCitiesRequest');
 const fetchCitiesSuccess = createAction('cities/fetchCitiesSuccess');
 const fetchCitiesFailure = createAction('cities/fetchCitiesFailure');

export {fetchCitiesFailure, fetchCitiesRequest, fetchCitiesSuccess}