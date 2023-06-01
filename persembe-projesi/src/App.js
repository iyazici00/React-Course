import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom'

import Navbarr from "./Navbarr";
import { Container } from "reactstrap";
import Contact from './Contact';
import Homepage from './Homepage';
import BlogDetail from './BlogDetail';
import AddBlog from './AddBlog';
import Notfound from './Notfound';

export default class App extends Component {
  state = {
    kullanicilar: [],
    users: [],
    currentuserid: "",
    blogs: [],
    currentBlogs: [],
  };

  addToUserArray = (user) => {
    let newUsers = this.state.kullanicilar;
    newUsers.push(user);
    this.setState({ kullanicilar: newUsers });

    /*
     console.log(this.state.kullanicilar) 
    */
  };

  getBlogForUserId = (userid) => {



    let newBlogs = this.state.blogs.filter((c) => c.userid === userid)

    this.setState({ currentBlogs: newBlogs })

    console.log(newBlogs)


    // console.log(blogs)
    // console.log(usrid)
  }

  addToBlogList = (blog) => {
    let newBlogs = this.state.blogs;
    newBlogs.push(blog);
    this.setState({ blogs: newBlogs })
  };

  /*
   getKullanicilar = () => {
     let url = 'http://localhost:3000/users';
 
     fetch(url)
       .then((response) => response.json())
       .then((data) => this.setState({ users: data }))
 
   };
 
   componentDidMount() {
     this.getKullanicilar();
   }
  */


  currentUserIdForBlog = (userid) => {
    this.setState({ currentuserid: userid })
    this.getBlogForUserId(userid)
  }


  render() {

    return (
      <div className="App">


        <Container>
          <Navbarr />


          <Routes>
            <Route path="/homepage" element={<Homepage currentUserIdForBlog={this.currentUserIdForBlog} kullanicilar={this.state.kullanicilar} getKullanicilar={this.getKullanicilar} />} />
            <Route
              path="/contact"
              element={<Contact addToUserArray={this.addToUserArray} />}
            />
            <Route
              path="/addblog"
              element={<AddBlog addToBlogList={this.addToBlogList} currentuserid={this.state.currentuserid} />}
            />
            <Route
              path="/blogdetail"
              element={<BlogDetail currentuserid={this.state.currentuserid} currentBlogs={this.state.currentBlogs} />}
            />
            <Route
              path="*" element={<Notfound />}
            />
          </Routes>

        </Container>

      </div >
    );
  }
}
