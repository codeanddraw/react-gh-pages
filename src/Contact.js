import React from 'react';
import './Contact.css';
import PropTypes from 'prop-types';

  const Contact = ({title, id, done, handleToggleContact, handleDeleteContact}) => <li>
  <span>{title}</span>
  <button type="button" onClick={() => handleDeleteContact(id)}>Delete</button>
</li>;

Contact.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  done: PropTypes.bool,
  handleToggleTodo: PropTypes.func.isRequired,
  handleDeleteTodo: PropTypes.func.isRequired
};

export default Contact;