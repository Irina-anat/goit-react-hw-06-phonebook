import { createSlice, nanoid } from '@reduxjs/toolkit';


const contactsInitialState = [];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);//return не потрібен, бо відбулась мутація
      },

      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteContact(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    }, //імутабельний код потрібно return інакше undefined. Не змінюю state
  },
});


export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;





/*addContact: {
      reducer(state, action) {
        return [...state, action.payload];
      },*/