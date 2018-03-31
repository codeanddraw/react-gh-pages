import React from 'react';
import './Contact.css';
const Contact = ({id,fname,lname,phone,email, handleDeleteContact,handleUpdateContact}) =>  

<tr  class="border_bottom" >
    <td>{fname}</td>
    <td>{lname}</td>
    <td>{phone}</td>
    <td>{email}</td>

  <button type="button" onClick={() => handleDeleteContact(id)}>Delete</button>
  <button type="button" onClick={() => handleUpdateContact(id,fname,lname,phone,email)}>Update</button>
 
</tr>

export default Contact;