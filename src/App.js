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
    this.handleUpdateContact = this.handleUpdateContact.bind(this);
    //this.handleToggleContact = this.handleToggleContact.bind(this);
  }

  componentDidMount() { db.table('contacts').toArray().then((contacts) => {this.setState({ contacts }); });}

  handleAddContact(fname,lname,phone,email) {
  db.open(); 
      db.transaction('rw', db.contacts, function () {
          const insert_object = {fname:fname,lname:lname,phone:phone,email:email};
          db.contacts.add(insert_object);
          
      });    
      window.location.reload();    
 }

  handleUpdateContact(id,fname,lname,phone,email) {
   //alert(this.str);
    
    //perform deletion
    /*db.table('contacts')
    .delete(id)
    .then(() => {
      const newList = this.state.contacts.filter((contact) => contact.id !== id);
      this.setState({ contacts: newList });
    });*/

    document.getElementById('one').value= fname ; 
    document.getElementById('two').value= lname ; 
    document.getElementById('three').value= phone ; 
    document.getElementById('four').value= email ; 
  
    db.table('contacts').delete(id);
  }



handleDeleteContact(id) {
  db.table('contacts').delete(id);
  window.location.reload(); 
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
          //handleToggleContact={this.handleToggleContact}
          handleDeleteContact={this.handleDeleteContact}
          handleUpdateContact={this.handleUpdateContact}
         
        />
      </div>
    );
  }
}

export default App;