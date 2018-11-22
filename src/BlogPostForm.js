import React, { Component } from 'react';
import withForm from './withForm';

class BlogPostForm extends Component {
  render() {
    const { title, content, tags } = this.props.form;
    return (
      <form className="BlogPostForm" onSubmit={this.props.onSubmit}>
        <input
          value={title}
          onChange={this.props.onChange}
          name="title"
          placeholder="제목"
        />
        <textarea
          value={content}
          onChange={this.props.onChange}
          name="content"
          placeholder="내용"
        />
        <input
          value={tags}
          onChange={this.props.onChange}
          name="tags"
          placeholder="태그"
        />
        <button>작성</button>
      </form>
    );
  }
}

export default withForm({ title:'', content:'', tags:'' }, true)(BlogPostForm);