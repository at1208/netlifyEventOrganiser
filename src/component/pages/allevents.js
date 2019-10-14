import React, { Component } from 'react';

class AllEvent extends Component {

  state = {
   data: []
}



componentDidMount(){
  const seedetails = "http://localhost:4000/allEvents"
  fetch(seedetails).then(res => {
            if (res.ok) {
              return res.json();
            } else {
              throw Error(res.statusText);
            }
          })
          .then(json => this.setState({ data: json }))
      .catch( err => console.log(err))

}


SeeDetails = () => {
const Data = this.state.data.map( eve => {
    return <div className='container shadow j1'>
         <h1 className='text-center j5'>{eve.eventName}</h1>

             <div className='container card'>
             <img  src= {eve.imageURL} alt='' className='j2'/>
             </div>

<div className='container j6'>

        <div className='l1'>
        <label className='j4  '>ID </label> <span className='float-right j3 text-center  '>{eve._id}</span>
        </div>

         <div className='l1'>
         <label className='j4  '>Venue </label> <span className='float-right j3 text-center  '>{eve.venue}</span>
         </div>

         <div className='l1'>
         <label className='j4  '>start Time </label> <span className='float-right j3 text-center   '>{eve.startTime}</span>
         </div>

         <div className='l1'>
         <label className='j4  '>End Time </label> <span className='float-right j3 text-center   '>{eve.endTime}</span>
         </div>

         <div className='l1'>
         <label className='j4  '>Price </label> <span className='float-right j3 text-center   '>{eve.price}</span>
         </div>

         <div className='l1'>
         <label className='j4  '>Category</label> <span className='float-right j3 text-center   '>{eve.category}</span>
         </div>

         <div className='l1'>
         <label className='j4  '>Created at </label> <span className='float-right j3 text-center  '>{eve.createdTime}</span>
         </div>
</div>

    </div>
})
return Data;
}




  render(){

    return <div className='row '>
 {this.SeeDetails()}
    </div>
  }
}
export default AllEvent;
