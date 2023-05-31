import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbarr from "./Navbarr";
import { Container } from "reactstrap";
import Contact from './Contact';
import Homepage from './Homepage';

export default class App extends Component {
  state = {
    kullanicilar: [],
    users: []
  };

  addToUserArray = (user) => {
    let newUsers = this.state.kullanicilar;
    newUsers.push(user);
    this.setState({ kullanicilar: newUsers });
    console.log(this.state.kullanicilar)
  };

  getKullanicilar = () => {
    let url = 'http://localhost:3000/users';

    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ users: data }))

  };

  componentDidMount() {
    this.getKullanicilar();
  }

  render() {

    return (
      <div className="App">
        <Router>
          <Container>
            <Navbarr />
            <Routes>
              <Route path="/homepage" element={<Homepage users={this.state.users} getKullanicilar={this.getKullanicilar} />} />
              <Route
                path="/contact"
                element={<Contact addToUserArray={this.addToUserArray} />}
              />
            </Routes>
          </Container>
        </Router>
      </div>
    );
  }
}
