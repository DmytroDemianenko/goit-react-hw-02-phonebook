import { nanoid } from 'nanoid';
import s from './App.module.css';
import React, { Component } from 'react';

class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
    inputValue: ' ',
  };
  handleInputChange = event => {
    console.log(event.currentTarget.value);
    this.setState({ inputValue: event.currentTarget.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };
  nameInputId = nanoid();
  numberInputId = nanoid();

  render() {
    return (
      <div className={s.container}>
        <form className={s.form} onSubmit={this.handleSubmit}>
          <h2>Phonebook</h2>
          <label className={s.label} htmlFor={this.nameInputId}>
            Name
          </label>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={this.state.inputValue}
            onChange={this.handleInputChange}
            id={this.nameInputId}
            required
          />
          <label className={s.label} htmlFor={this.numberInputId}>
            Number
          </label>
          {/* <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            id={this.numberInputId}
            required
          /> */}
          <button className={s.button} type="submit">
            Add contact
          </button>
        </form>
        <div>
          <ul>
            <h2>Contacts</h2>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
