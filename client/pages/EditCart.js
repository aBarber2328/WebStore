import React, { useState, useEffect } from "react";

const EditCart = (props)=>{

  // componentDidMount() {
  //   const id = this.props.match.params.id;
  //   this.props.loadSingleEmotion(id);
  //   console.log(this.state);
  // }

  // handleChange(event) {
  //   this.setState({
  //     [event.target.name]: event.target.value,
  //   });
  // }

  // handleSubmit(event) {
  //   event.preventDefault();
  //   const editedEmotion = { ...this.state };
  //   this.props.editEmotion(editedEmotion);
  // }


    //console.log(this.props);
    return (
      <div className="form">
        Edit Item!!!
        {/* <form onSubmit={this.handleSubmit}>
          <label> Update Username: </label>
          <input
            name=""

            onChange={this.handleChange}
          />
          <label htmlFor="assignee">Update Assign To:</label>
          <input
            name=""

            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>

          <button type="button" onClick={this.handleDelete}>
            Delete
          </button>
        </form> */}
      </div>
    );

}


export default EditCart;
