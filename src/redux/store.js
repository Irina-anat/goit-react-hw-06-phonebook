//файл створення стор Redux
//import { createStore } from "redux";
import { configureStore} from "@reduxjs/toolkit";
import { itemsSlice } from "./items/slice";
import { myValueSlice } from "./myValue/slice";



export const store = configureStore({
  reducer: {
    myValue: myValueSlice.reducer,
    items: itemsSlice.reducer,
  }
});

/*export const add = createAction('items/add');
export const remove = createAction('items/remove')

const itemsReducer = ([], {
  [add]: (state, action) => state.push(action.payload),
  [remove]: (state, action)=> state.filter(item => item.id !== action.payload),
})*/










// Початкове значення стану Redux для кореневого редюсера,
// якщо не передати параметр preloadedState.
/*const initialState = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
   filter: '',
};*/



// Поки що використовуємо редюсер який
// тільки повертає отриманий стан
/*const rootReducer = (state = initialState, action) => {
  return state;
};*/
//export const store = createStore(rootReducer);


