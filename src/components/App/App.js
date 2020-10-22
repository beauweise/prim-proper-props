import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import GuestList from '../GuestList/GuestList';
import DinnerSupplies from '../DinnerSupplies/DinnerSupplies';
import GuestForm from '../GuestForm/GuestForm';
import './App.css';

class App extends Component {
  state = {
    guestList: [],
    newGuest: {
      name: '',
      kidsMeal: 'no',
    },
  }

  handleChangeFor = (propertyName) => (event) => {
    this.setState({
      newGuest: {
        ...this.state.newGuest,
        [propertyName]: event.target.value,
      }
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.newGuest.name) {
      this.setState({
        guestList: [...this.state.guestList, this.state.newGuest],
        newGuest: {
          name: '',
          kidsMeal: 'no',
        },
      });
    } else {
      alert('The new guest needs a name!');
    }
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <h2>Party Leader</h2>
        {this.state.guestList[0] && <h3>{this.state.guestList[0].name}</h3>}
        <GuestForm
        newGuest={this.state.newGuest}
        handleChangeFor={this.handleChangeFor}
        handleSubmit={this.handleSubmit}
        />
        <GuestList/>
        <DinnerSupplies/>
        <Footer/>
          
      </div>
    );
  }
}

export default App;
