import React from 'react';
import PropTypes from 'prop-types';

class AddContact extends React.Component {
  constructor() {
    super();
    this.state = {value: ''};
    this.addContact = this.addContact.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  addContact() {
    var input1 = document.getElementById("one").value;
    var input2 = document.getElementById("two").value;
    var input3 = document.getElementById("three").value;
    var contact = input1 +"\t"+ input2 +"\t"+ input3;
    //alert(contact);
    this.props.handleAddContact(contact);
  }

  handleChange(newValue) {
    this.setState({value: newValue})
  }

  render() {
    return (<div>
      <p>First Name: <input type="text" id="one" /></p>
      <p>Last Name: <input type="text" id="two" /></p>
      <p>Phone: <input type="text" id="three" /></p>
      <button type="button" onClick={this.addContact}>Add Contact</button>
      <br/><br/>
      <center><table border="1">
         <tr >
            <td>First Name &nbsp; </td>
            <td > Last Name &nbsp;</td>
            <td > Phone &nbsp;</td>
          </tr></table></center>
    </div>);
  
  }
}

AddContact.propTypes = {
  handleAddContact: PropTypes.func.isRequired,
};

export default AddContact;