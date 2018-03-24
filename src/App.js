import React from 'react';
import './App.css';

import db from './db';
import AddContact from './AddContact';
import ContactList from './ContactList';

class App extends React.Component {
  constructor() {
    super();
    this.state = { contacts: [] };
    this.handleAddContact = this.handleAddContact.bind(this);
    this.handleDeleteContact = this.handleDeleteContact.bind(this);
    this.handleToggleContact = this.handleToggleContact.bind(this);
  }

  componentDidMount() {
    db.table('contacts')
      .toArray()
      .then((contacts) => {
        this.setState({ contacts });
      });
  }

 //add component

  handleToggleContact(id, done) {
    db.table('contacts')
      .update(id, { done })
      .then(() => {
        const contactToUpdate = this.state.contacts.find((contact) => contact.id === id);
        const newList = [
          ...this.state.contacts.filter((contact) => contact.id !== id),
          Object.assign({}, contactToUpdate, { done })
        ];
        this.setState({ contacts: newList });
      });
  }

  //del component

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Nisha's Address Book</h2>
        </div>
        <AddContact handleAddContact={this.handleAddContact} />
        <ContactList
          contacts={this.state.contacts}
          handleToggleContact={this.handleToggleContact}
          handleDeleteContact={this.handleDeleteContact}
        />
      </div>
    );
  }
}

export default App;