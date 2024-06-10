import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { contactsReducer } from './contactsSlice';
import searchReducer from './filtersSlice';

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';


const persistedContactsReducer = persistReducer(
    {
        key: 'items',
        storage,
        // whitelist: ['name', 'number'],
    },
    contactsReducer
);




export const store = configureStore({
    reducer: {
        contacts: persistedContactsReducer,
        filters: searchReducer,

    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER],
            },
        }),
});

export const persistor = persistStore(store);
