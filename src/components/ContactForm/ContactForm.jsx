import { nanoid } from "nanoid";
import css from './ContactForm.module.css'
//import {useState} from 'react';
//import PropTypes from 'prop-types';


export const ContactForm = () => {
  /*const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };*/

  const handleSubmit = (event) => {
    event.preventDefault();
   // onSubmit({ name, number });
    
    const form = event.currentTarget
    console.log(form.elements.name.value)
    console.log(form.elements.number.value)
    form.reset()
    //setName('');
    //setNumber('');
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
           // value={name}
           // onChange={handleChange}
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
           // value={number}
           // onChange={handleChange}
            id={inputNumberId}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    </div>
  );
};


/*ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};*/




/*export const ContactForm = () => {
 const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    //const formName = event.target.elements.name.value;
    //const formNumber = event.target.elements.number.value;
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
            placeholder="Ім'я"
            pattern="^[A-Za-zА-Яа-яЁёІіЇїЄєҐґ']+( [A-Za-zА-Яа-яЁёІіЇїЄєҐґ']+)?"
            title="Enter last name or first name or both last name and first name"
            required
           // value={name}
           // onChange={handleChange}
            id={inputNameId}
          />
        </label>
        <label htmlFor={inputNumberId}>
          <input
            type="tel"
            name="number"
            placeholder="Номер телефону"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Valid Phone Number: Optional '+' Symbol, Digits, Spaces, Hyphens, and Parentheses"
            required
            //value={number}
            //onChange={handleChange}
            id={inputNumberId}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    </div>
  );
};*/
