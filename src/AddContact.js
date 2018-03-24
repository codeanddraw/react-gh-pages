import React from 'react';
import PropTypes from 'prop-types';

class AddContact extends React.Component {
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
export default AddContact;