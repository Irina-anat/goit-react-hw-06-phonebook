import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { filtersReducer } from './filtersSlices';
//import { itemsSlice } from './items/slice';
//import { myValueSlice } from './myValue/slice';
import {persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE,
REGISTER,} from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const rootReducer = combineReducers({
  contacts: contactsReducer,
  filters: filtersReducer,
  // myValue: myValueSlice.reducer,
  // items: itemsSlice.reducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['contacts'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  devTools: true,
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],},
    }),
});

export const persistor = persistStore(store);



/*export const add = createAction('items/add');
export const remove = createAction('items/remove')

const itemsReducer = ([], {
  [add]: (state, action) => state.push(action.payload),
  [remove]: (state, action)=> state.filter(item => item.id !== action.payload),
})*/
