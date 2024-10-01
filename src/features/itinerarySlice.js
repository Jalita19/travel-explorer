import { createSlice } from '@reduxjs/toolkit';

const itinerarySlice = createSlice({
  name: 'itinerary',
  initialState: {
    favorites: [],
    itinerary: [],
  },
  reducers: {
    addFavorite: (state, action) => {
      state.favorites.push(action.payload);
    },
    removeFavorite: (state, action) => {
      state.favorites = state.favorites.filter(dest => dest.id !== action.payload.id);
    },
    addToItinerary: (state, action) => {
      state.itinerary.push(action.payload);
    },
    removeFromItinerary: (state, action) => {
      state.itinerary = state.itinerary.filter(dest => dest.id !== action.payload.id);
    },
  },
});

export const { addFavorite, removeFavorite, addToItinerary, removeFromItinerary } = itinerarySlice.actions;

export default itinerarySlice.reducer;