import React, { Component } from 'react'

class ToDoInput extends Component {
  render() {
    const{item, handleChange,handleSubmit}= this.props;
    return (
    <div className="card card-body my-3">
      <form onSubmit={handleSubmit}>
        <div className="input-group">
         <div className="input-group-prepend">
          <div className="input-group-text bg-primary text-white">
           <i className="fas fa-book"/>
          </div>
         </div> 
           <input
          type="text"
          className="form-control text-captalize"
          placeholder="Add Todo item"
          value={item}
          onChange={handleChange}
          />
       </div>
       <button type="submit"
        className="btn btn-block btn-primary mt-3 text-uppercase">
       Add Item</button>
       </form>
      </div>
    )
  }
}

export default ToDoInput;
