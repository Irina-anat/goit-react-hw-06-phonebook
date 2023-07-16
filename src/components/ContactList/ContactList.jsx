import { getContacts, getFilter } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';


export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filterContacts = useSelector(getFilter);
  //console.log(filterContacts);
  const dispatch = useDispatch();

  const visibleContacts = [
    ...contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterContacts)
    ),
  ];

  return (
    <ul>
      {visibleContacts.map(({ id, name, number }) => (
        <li className={css.contact__list} key={id}>
          <p>{name}</p>
          <p>{number}</p>
          <button
            value={id}
            onClick={() => dispatch(deleteContact(id))}
            type="button"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};


ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
    

