import css from './ContactList.module.css'


export const ContactList = () => {
    return(
        <ul> visible contacts
        {[].map(({ id, name, number }) => (
            <li className={css.contact__list} key={id}>
                <p>{name}</p>
                <p>{number}</p>
                <button >Delete</button>
        </li>))}
        {/*contacts.map(({ id, name, number }) => (
            <li className={css.contact__list} key={id}>
                <p>{name}</p>
                <p>{number}</p>
                <button onClick={() => onDeleteContact(id)}>Delete</button>
        </li>))*/}
    </ul>)
}




/*import React from 'react'; 
import css from './ContactList.module.css';
import PropTypes from 'prop-types';


const ContactList = ({ contacts, onDeleteContact }) => (
    <ul>
        {contacts.map(({ id, name, number }) => (
            <li className={css.contact__list} key={id}>
                <p>{name}</p>
                <p>{number}</p>
                <button onClick={() => onDeleteContact(id)}>Delete</button>
            </li>))}
    </ul>);

ContactList.propTypes = {
contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    ),
onDeleteContact: PropTypes.func.isRequired,
};
    
export default ContactList;*/