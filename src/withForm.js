import React, { Component } from "react";

const withForm = (initialForm, resetOnSubmit) => BaseComponent => {
  return class withForm extends Component {
    state = initialForm || {};
    handleChange = e => {
      const { name, value } = e.target;
      this.setState({
        [name]: value
      });
    };
    handleSubmit = e => {
      e.preventDefault();
      if (this.props.onSubmit) {
        this.props.onSubmit(this.state);
      }
      if (resetOnSubmit) {
        this.setState(initialForm);
      }
    };
    render() {
      return (
        <BaseComponent
          {...this.props}
          form={this.state}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
      );
    }
  };
};

export default withForm;
