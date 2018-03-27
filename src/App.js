import React from 'react';
import './App.css';

import db from './db';
import AddContact from './AddContact';
import ContactList from './ContactList';

class App extends React.Component {
  constructor() {
    super();
    this.state = { contacts: [] };
    var str="" ;
    this.handleAddContact = this.handleAddContact.bind(this);
    this.handleDeleteContact = this.handleDeleteContact.bind(this);
    this.handleUpdateContact = this.handleUpdateContact.bind(this);
    this.handleToggleContact = this.handleToggleContact.bind(this);
  }

  componentDidMount() { db.table('contacts').toArray().then((contacts) => {this.setState({ contacts }); });}

  handleAddContact(title) {
    //alert(title);
    this.str = title;
    //alert(this.str);
    const contact = {title, done: false};
    db.table('contacts')
      .add(contact)
      .then((id) => { const newList = [...this.state.contacts, Object.assign({}, contact, { id })];
        this.setState({ contacts: newList });
      });   
  }

  handleToggleContact(id, done) {
    db.table('contacts').update(id, { done }).then(() => {
        const contactToUpdate = this.state.contacts.find((contact) => contact.id === id);
        const newList = [
          ...this.state.contacts.filter((contact) => contact.id !== id),
          Object.assign({}, contactToUpdate, { done })
        ];
        this.setState({ contacts: newList });
      });
  }

  handleDeleteContact(id) {
    db.table('contacts')
      .delete(id)
      .then(() => {
        const newList = this.state.contacts.filter((contact) => contact.id !== id);
        this.setState({ contacts: newList });
      });
  }


  handleUpdateContact(id) {
   //alert(this.str);
    document.getElementById('five').value=this.str ; 
    //perform deletion
    db.table('contacts')
    .delete(id)
    .then(() => {
      const newList = this.state.contacts.filter((contact) => contact.id !== id);
      this.setState({ contacts: newList });
    });
  }

  render() {
    return (
      <div>
        <div className="AppHeader" >
        <h2><img src={ require('./images/img.ico') } height="50px" align="middle" alt="Contacts"/>Nisha's Address Book</h2>
        </div>
        <AddContact handleAddContact={this.handleAddContact} />
        <p align="left">&nbsp;<b>View Contacts</b></p>
        <ContactList
          contacts={this.state.contacts}
          handleToggleContact={this.handleToggleContact}
          handleDeleteContact={this.handleDeleteContact}
          handleUpdateContact={this.handleUpdateContact}
        />
      </div>
    );
  }
}

export default App;