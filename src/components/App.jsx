import { nanoid } from 'nanoid';
import React, { Component } from 'react';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';

export class App extends Component {
  constructor() {
    super();

    this.state = {
      contacts: [],
      filter: '',
    };
  }

  componentDidMount() {
    this.setState({
      ...this.state,
      contacts: JSON.parse(localStorage.getItem('contacts')) || [],
    });
  }

  componentDidUpdate() {
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  }

  addContact = newContact => {
    if (
      this.state.contacts.find(
        contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      alert(newContact.name + ' is already in contacts!');
      return;
    }

    this.setState({
      ...this.state,
      contacts: [
        ...this.state.contacts,
        { id: nanoid(), name: newContact.name, number: newContact.number },
      ],
    });
  };

  deleteContact = id => {
    this.setState({
      ...this.state,
      contacts: this.state.contacts.filter(contact => contact.id !== id),
    });
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div>
          <h1>Phonebook</h1>
          <ContactForm addContact={this.addContact} />
          <h2>Contacts</h2>
          <Filter
            setFilter={e => {
              this.setState({
                ...this.state,
                filter: e.target.value,
              });
            }}
          />
          <ContactList
            contacts={this.state.contacts}
            filter={this.state.filter}
            deleteContact={this.deleteContact}
          />
        </div>
      </div>
    );
  }
}
