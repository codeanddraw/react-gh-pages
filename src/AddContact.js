import React from 'react';

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

  this.setState(state => ({ ...state, input: {...state.input, ...newPartialInput } }))
  }

  render() {
    return (<div><p align="left"><b>&nbsp;Insert Contact</b></p><table border ="1" align="center"><br/>
      First Name: <input type="text" value={this.state.input.fname} id="one" onChange={e => this.handleChange({fname: e.target.value})}/>
      Last Name: <input type="text" value={this.state.input.lname} id="two" onChange={e => this.handleChange({lname: e.target.value})} />
      Phone: <input type="text" value={this.state.input.phone} id="three" onChange={e => this.handleChange({phone: e.target.value})}/>
      Email: <input type="text" value={this.state.input.email} id="four" onChange={e => this.handleChange({email: e.target.value})}/>
      <button type="button" id = "five" onClick={this.addContact}>Add Contact</button>
      <br/><br/></table>
      <br/>
 
    </div>);
  
  }
}



export default AddContact;