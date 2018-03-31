import React from 'react';
import './AddContact.css';
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
    this.handleChange = this.handleChange.bind(this);
  }

  addContact() {
    this.props.handleAddContact(this.state.input.fname,this.state.input.lname,this.state.input.phone,this.state.input.email);
  }


  handleChange(newPartialInput) {
  var in1 = document.getElementById("one").value;
  var in2 = document.getElementById("two").value;
  var in3 = document.getElementById("three").value;
  var in4 = document.getElementById("four").value;
  
  this.state.input.fname=in1;
  this.state.input.lname=in2;
  this.state.input.phone=in3;
  this.state.input.email=in4;

  this.setState(state => ({ ...state, input: {...state.input, ...newPartialInput } }));
  }

  render() {
    return (
    <form align="center">
     <fieldset>
      <legend>Insert Contact:</legend>
      <b>First Name:</b> <input type="text" placeholder="First Name" value={this.state.input.fname} size="20" id="one" onChange={e => this.handleChange({fname: e.target.value})}/>
      <b>Last Name: </b><input type="text" placeholder="Last Name" value={this.state.input.lname} size="20" id="two" onChange={e => this.handleChange({lname: e.target.value})} />
      <b>Phone:</b> <input type="text" placeholder="Phone" value={this.state.input.phone} size="20" id="three" onChange={e => this.handleChange({phone: e.target.value})}/>
      <b>Email: </b><input type="text" placeholder="Email" value={this.state.input.email} size="20" id="four" onChange={e => this.handleChange({email: e.target.value})}/>
      <button type="button" class="btn info" id = "five" onClick={this.addContact}>Add Contact</button>
      </fieldset>
      </form>
  );
  
  }
}



export default AddContact;