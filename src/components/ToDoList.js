import React, { Component } from 'react'
import ToDoItem from './ToDoItem';

class ToDoList extends Component {
  render() {
    return (
      <section>
        <h1>Hi there list</h1>
        <ToDoItem />
        </section>
    )
  }
}

export default ToDoList;
