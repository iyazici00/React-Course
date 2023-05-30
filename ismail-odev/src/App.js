import React, { Component } from 'react'
import Groups from "./Groups";
import User from "./User";
import NavBar from "./NavBar";
import { Col, Row, Container } from "reactstrap"

export default class App extends Component {

  state = {
    currentGroup: "",
    users: [],
  };


  changeGroup = (group) => {
    this.setState({ currentGroup: group.groupName });
    this.getUsers(group.id)
  }

  getUsers = (groupId) => {
    let url = 'http://localhost:3000/users';
    if (groupId != null) {
      url += "?groupId=" + groupId;
    }

    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ users: data }))
  };



  componentDidMount() {
    this.getUsers()
  }



  render() {
    return (
      <div className="App" >
        <Container>
          <NavBar />
          <Row>
            <Col xs="3">
              <Groups
                changeGroup={this.changeGroup}
                currentGroup={this.state.currentGroup}
              />
            </Col>
            <Col xs="9"><User
              users={this.state.users}
              currentGroup={this.state.currentGroup}

            /></Col>
          </Row>


        </Container>

      </div>
    );
  }
}


