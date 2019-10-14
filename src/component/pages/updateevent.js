import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class UpdateEvent extends Component {

  state = {

      _id: null,
      startDate: null,
      endDate: null,
      eventName: '',
      venue: '',
      imageURL: '',
      price: null,
      category: '',
    };


    startDateChange = date => {
      this.setState({
        startDate: date
      });
    };

    endDateChange = date => {
      this.setState({
        endDate: date
      });
    };


    UpdateEvent = (e) => {
       e.preventDefault()
          const updateevent = `http://localhost:4000/updateEvent/${this.state._id}`
          fetch( updateevent, {
              method: "PUT",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
        "eventName": this.state.eventName,
        "venue": this.state.venue,
        "imageURL": this.state.imageURL,
        "startTime": this.state.startDate,
        "endTime": this.state.endDate,
        "price": this.state.price,
        "category": this.state.category,

              })
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
    <h2 className='text-center g1'>Update Event</h2>
    <div className='container b1 shadow'>

        <label className='c1 shadow text-center'>ID</label>
        <input className='float-right c2 text-center' placeholder='Enter ID'  onChange={ e => this.setState({ _id: e.target.value })} value={this.state._id}/>



        <label className='  c1 shadow text-center'>Title</label>
        <input className='float-right c2 text-center' placeholder='Enter Title' onChange={ e => this.setState({ eventName: e.target.value })} value={this.state.eventName}/>




        <label className='  c1 shadow text-center'>Venue</label>
        <input className='float-right c2 text-center' placeholder='Enter Venue' onChange={ e => this.setState({ venue: e.target.value })} value={this.state.venue}/>



        <label className='  c1 shadow text-center'>ImageURL</label>
        <input className='float-right c2 text-center' placeholder='Enter Image URL'  onChange={ e => this.setState({ imageURL: e.target.imageURL })} value={this.state.imageURL}/>

        <label className='  c1 shadow text-center f1'>StartTime</label>
        <DatePicker
            placeholder='Select Date'
            selected={this.state.startDate}
            onChange={this.startDateChange}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={1}
            timeCaption="time"
            dateFormat="MMMM d, yyyy h:mm aa"
            />


        <label className='  c1 shadow text-center f1'>EndTime</label>
        <span className='f2'><DatePicker
            placeholder='Select Date'
            selected={this.state.endDate}
            onChange={this.endDateChange}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={1}
            timeCaption="time"
            dateFormat="MMMM d, yyyy h:mm aa"
            /></span>

        <label className='  c1 shadow text-center'>Category</label>
        <input className='float-right c2 text-center' placeholder='Enter Category'  onChange={ e => this.setState({ category: e.target.value })} value={this.state.category} />


        <label className='  c1 shadow text-center'>Price</label>
        <input className='float-right c2 text-center' placeholder='Enter Price'  onChange={ e => this.setState({ price: e.target.value })} value={this.state.price}/>

        <button className='btn btn-block d3' onClick={this.UpdateEvent}>Update</button>


    </div>
    </>
  }
}
export default UpdateEvent;
