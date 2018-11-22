import React, { Component } from 'react';
import withForm from './withForm';

class LoginForm extends Component {
  render() {
    const { username, password } = this.props.form;
    return (
      <form className="LoginForm" onSubmit={this.props.onSubmit}>
        <input
          onChange={this.props.onChange}
          value={username}
          name="username"
          placeholder="계정"
        />
        <input
          onChange={this.props.onChange}
          value={password}
          name="password"
          type="password"
          placeholder="비밀번호"
        />
        <button>로그인</button>
      </form>
    );
  }
}

export default withForm({ username: '', password: '' }, true)(LoginForm);