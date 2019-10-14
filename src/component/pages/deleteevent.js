import React, { Component } from 'react';

class DeleteEvent extends Component {

  state = {
    _id: null
  }

  DeleteEvent = (e) => {
     e.preventDefault()
        const deleteevent = `http://localhost:4000/deleteEvent/${this.state._id}`
        fetch(`https://eveorg.herokuapp.com/deleteEvent/${this.state._id}`, {
            method: "DELETE",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json"
            },
          }).then(res => {
              if (res.ok) {
                return res.json();
              } else {
                throw Error(res.statusText);
              }
            })
            .then(json =>  console.log(json))
        .catch( err => console.log(err))
   }


  render(){
    return <>
    <div className='container g2 shadow'>
    <label className='c1 shadow text-center'>ID</label>
    <input className='float-right c2 text-center' placeholder='Enter ID' onChange={ e => this.setState({ _id: e.target.value })} value={this.state._id}/>
    <button className='btn btn-block d2' onClick={this.DeleteEvent}>Delete</button>

      </div>
    </>
  }
}
export default DeleteEvent;
