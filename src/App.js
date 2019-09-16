import React, { Component } from 'react';
import PostForm from './PostForm'
import AllPost from './AllPost'
let baseURL = '';

if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3003'
} else {
  baseURL = 'https://myjournalbackend.herokuapp.com/users/1/entries'
}

class App extends Component {
  render() {
      return (
      <div className="App">
        <div className='navbar'>
         <h2 className='center'>MyJournal</h2>
        </div>
        <PostForm />
        <AllPost />
      </div>
      );
  }
  }
export default App;