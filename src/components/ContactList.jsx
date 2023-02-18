import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class ContactList extends Component {
  render() {
    return (
      <ul>
        {this.props.contacts
          .filter(contact =>
            contact.name.toLowerCase().includes(this.props.filter.toLowerCase())
          )
          .map(contact => (
            <li key={contact.id}>
              {contact.name}: {contact.number}
              <button
                style={{ marginLeft: '4px' }}
                onClick={() => this.props.deleteContact(contact.id)}
              >
                Delete
              </button>
            </li>
          ))}
      </ul>
    );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  filter: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
