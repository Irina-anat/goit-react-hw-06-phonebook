import { Section } from 'components/Section/Section';
import css from './App.module.css'
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { Counter } from 'components/Counter/Counter';


export const App = () => {
  return (
    <div className={css.container__phonebook}>
       <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <Filter />
        <ContactList />
      </Section>
      <Counter/>
    
    </div>
  );
};

/*import {useState, useEffect, useMemo} from 'react';
import css from './App.module.css'
import { nanoid } from "nanoid";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import  ContactForm  from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';


const App = () => {
  const [contacts, setContacts] = useState(() => {
    const storedContacts = localStorage.getItem('contacts');
    return storedContacts ? JSON.parse(storedContacts) : [];
  });

  /*або const [contacts, setContacts] = useState(
  JSON.parse(localStorage.getItem('contacts')) || []);*//*
  
  const [filter, setFilter] = useState('');

  const addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    const lowerCaseName = name.toLowerCase();

    const isContactExist = contacts.some(
      (contact) =>
        (contact.name.toLowerCase() === lowerCaseName && contact.number === number) ||
        contact.number === number ||
        contact.name.toLowerCase() === lowerCaseName
    );

    isContactExist
      ? Notify.warning(`Contact with that ${name} or ${number} is already present in the phone book.`)
      : setContacts((prevContacts) => [contact, ...prevContacts]);
  };

  const deleteContact = (contactId) => {
    setContacts((prevContacts) => prevContacts.filter((contact) => contact.id !== contactId));
  };

  const changeFilter = (event) => {
    setFilter(event.currentTarget.value);
  };

  const visibleContacts = useMemo(
    () =>
      contacts.filter((contact) =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      ),
    [contacts, filter]
  );

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className={css.container__phonebook}>
      <h1>Телефонна книга</h1>
      <ContactForm onSubmit={addContact} />
      <h2>Контакти</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList contacts={visibleContacts} onDeleteContact={deleteContact} />
    </div>
  );
};


  
  Notify.init({
width: '450px',
fontSize: '20px',
position: 'center-top',
closeButton: false,
  });*/




