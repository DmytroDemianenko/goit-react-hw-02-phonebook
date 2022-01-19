import s from './App.module.css';
import React, { Component } from 'react';
import Contacts from './components/Contacts';
import Form from './components/Form';

class App extends Component {
  state = {
    contacts: [],
  };
  formSubmit = data => {
    console.log(data);
  };
  render() {
    const contacts = this.state.contacts;
    return (
      <div className={s.container}>
        <div>
          <Form onSubmit={this.formSubmit}></Form>
          <ul>
            <h2>Contacts</h2>
            <Contacts contacts={contacts}></Contacts>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
