// src/features/itinerarySlice.js
import { createSlice } from '@reduxjs/toolkit';

const itinerarySlice = createSlice({
    name: 'itinerary',
    initialState: {
        favorites: [],
    },
    reducers: {
        addFavorite: (state, action) => {
            const existingIndex = state.favorites.findIndex(fav => fav.id === action.payload.id);
            if (existingIndex === -1) {
                state.favorites.push(action.payload);
            }
        },
        removeFavorite: (state, action) => {
            state.favorites = state.favorites.filter(fav => fav.id !== action.payload.id);
        },
    },
});

export const { addFavorite, removeFavorite } = itinerarySlice.actions;
export default itinerarySlice.reducer;