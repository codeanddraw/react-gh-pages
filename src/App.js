import React from 'react';
import './App.css';


class App extends React.Component {
  constructor() {
    super();
    this.state = { contacts: [] };
    this.handleAddContact = this.handleAddContact.bind(this);
    this.handleDeleteContact = this.handleDeleteContact.bind(this);
    this.handleToggleContact = this.handleToggleContact.bind(this);
  }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Address Book</h2>
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