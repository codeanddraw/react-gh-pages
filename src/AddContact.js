import React from 'react';
import PropTypes from 'prop-types';

class AddContact extends React.Component {
  constructor() {
    super();
    this.state = {
      input: {
          fname: "",
          lname: "",
          phone: "",
          email: ""
      }
  };
    this.addContact = this.addContact.bind(this);
    this.updateContact = this.updateContact.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  addContact() {
    var contact = this.state.input.fname +"\t"+ this.state.input.lname +"\t"+ this.state.input.phone +"\t"+ this.state.input.email;
    this.props.handleAddContact(contact);
  }

  updateContact() {
    var updates =document.getElementById("five").value;
    //to debug
    //alert(updates);
    this.props.handleAddContact(updates);
  }

  handleChange(newPartialInput) {
    this.setState(state => ({ ...state, input: {...state.input, ...newPartialInput } }))
  }

  render() {
    return (<div><p align="left"><b>&nbsp;Insert Contact</b></p><table border ="1" align="center"><br/>
      First Name: <input type="text" value={this.state.input.fname}  onChange={e => this.handleChange({fname: e.target.value})}/>
      Last Name: <input type="text" value={this.state.input.lname} onChange={e => this.handleChange({lname: e.target.value})} />
      Phone: <input type="text" value={this.state.input.phone} onChange={e => this.handleChange({phone: e.target.value})}/>
      Email: <input type="text" value={this.state.input.email} onChange={e => this.handleChange({email: e.target.value})}/>
      <button type="button" onClick={this.addContact}>Add Contact</button>
      <br/><br/></table>
      <br/>
      <p align="left"><b> &nbsp;Update Contact</b></p> <div align="center"><input type="text" size="146"  id="five" />
        <button type="button"  onClick={this.updateContact}>UpdateContact</button></div>
    </div>);
  
  }
}

AddContact.propTypes = {
  handleAddContact: PropTypes.func.isRequired,
};

export default AddContact;