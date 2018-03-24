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
  //alert();
  }

  render() {
    return (<div>
      <p>First Name: <input type="text" value={this.state.input.fname}  onChange={e => this.handleChange({fname: e.target.value})}/></p>
      <p>Last Name: <input type="text" value={this.state.input.lname} onChange={e => this.handleChange({lname: e.target.value})} /></p>
      <p>Phone: <input type="text" value={this.state.input.phone} onChange={e => this.handleChange({phone: e.target.value})}/></p>
      <p>Email: <input type="text" value={this.state.input.email} onChange={e => this.handleChange({email: e.target.value})}/></p>
      <button type="button" onClick={this.addContact}>Add Contact</button>
      <br/><br/>
      <center><table >
         <tr >
            <td>First Name &nbsp; |&nbsp; </td>
            <td > Last Name &nbsp; |&nbsp;</td>
            <td > Phone &nbsp; |&nbsp;</td>
            <td > Email &nbsp; </td>
          </tr></table></center>

        Update: <input type="text" id="five" />
        <button type="button" onClick={this.updateContact}>Add Contact</button>
    </div>);
  
  }
}

AddContact.propTypes = {
  handleAddContact: PropTypes.func.isRequired,
};

export default AddContact;