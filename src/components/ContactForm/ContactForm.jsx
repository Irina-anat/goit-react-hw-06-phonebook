import { addContact } from 'redux/contactsSlice';
import { getContacts } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import css from './ContactForm.module.css';


export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.elements.name.value;
    //console.log(form.elements.name.value);
    const number = form.elements.number.value;
    //console.log(form.elements.number.value);

    const lowerCaseName = name.toLowerCase();

    const isContactExist = contacts.some(
      contact =>
        (contact.name.toLowerCase() === lowerCaseName &&
          contact.number === number) ||
        contact.number === number ||
        contact.name.toLowerCase() === lowerCaseName
    );

    isContactExist
      ? Notify.warning(
          `Contact with that ${name} or ${number} is already present in the phone book.`
        )
      : dispatch(addContact(name, number));

    form.reset();
  };

  const inputNameId = nanoid();
  const inputNumberId = nanoid();

  return (
    <div>
      <form className={css.form} onSubmit={handleSubmit}>
        <label htmlFor={inputNameId}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            pattern="^[A-Za-zА-Яа-яЁёІіЇїЄєҐґ']+( [A-Za-zА-Яа-яЁёІіЇїЄєҐґ']+)?"
            title="Enter last name or first name or both last name and first name"
            required
            value={contacts.name}
            id={inputNameId}
          />
        </label>
        <label htmlFor={inputNumberId}>
          <input
            type="tel"
            name="number"
            placeholder="Phone number"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Valid Phone Number: Optional '+' Symbol, Digits, Spaces, Hyphens, and Parentheses"
            required
            value={contacts.number}
            id={inputNumberId}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    </div>
  );
};

Notify.init({
  width: '450px',
  fontSize: '20px',
  position: 'center-top',
  closeButton: false,
});


