import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class ContactForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      number: '',
    };
  }

  onSubmit = e => {
    e.preventDefault();

    if (this.state.name === '' || this.state.number === '') {
      return;
    }

    this.props.addContact({ name: this.state.name, number: this.state.number });

    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <form
        style={{
          border: '2px solid black',
          padding: '16px',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
        }}
      >
        <div>
          <p style={{ margin: 0 }}>Name</p>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={e =>
              this.setState({
                ...this.state,
                name: e.target.value,
              })
            }
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </div>
        <div>
          <p style={{ margin: 0 }}>Number</p>
          <input
            type="tel"
            name="number"
            value={this.state.number}
            onChange={e =>
              this.setState({
                ...this.state,
                number: e.target.value,
              })
            }
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </div>
        <input type="submit" onClick={this.onSubmit} value="Add Contact" />
      </form>
    );
  }
}

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};
