import React, { Component } from 'react';
import LoginForm from './LoginForm';
import BlogPostForm from './BlogPostForm';

class App extends Component {
  render() {
    return (
      <div>
        <LoginForm/>
        <BlogPostForm/>
      </div>
    );
  }
}

export default App;