import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

const initialState = {
    name: '',
};

const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        changeFilter(state, action) {
            state.name = action.payload;
        },
    },
});

export const { changeFilter } = filtersSlice.actions;
export default filtersSlice.reducer;

export const selectNameFilter = state => state.filters.name;

export const selectFilteredContacts = createSelector(
    (state) => state.contacts.items,
    selectNameFilter,
    (items, nameFilter) => items.filter((item) =>
        item.name.toLowerCase().startsWith(nameFilter.toLowerCase())
    )
);