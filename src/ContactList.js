import React from 'react';
import Contact from './Contact';

const ContactList = ({contacts, handleDeleteContact, handleUpdateContact}) => 
<ul>
  {contacts.map((contact) => <Contact
    key={contact.id}
    {...contact}
    handleDeleteContact={handleDeleteContact}
    handleUpdateContact={handleUpdateContact}
  />)}
</ul>;
export default ContactList;