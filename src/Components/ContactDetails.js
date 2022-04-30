import React, { Component } from 'react'

export  class ContactDetails extends Component {
  render() {
      const {currect_details} = this.props
      console.log("ContactDetails",currect_details)
    return (
      <div className='cardbox'>
          <div style={{display:'flex',marginBottom:10}}>
            <span style={{cursor:'pointer'}} onClick={this.props.goBack} className="material-icons" >
            keyboard_backspace
          </span>
          <div style={{fontSize:15,fontWeight:'bold'}}>
              Contact Details
          </div>
            </div>
          <div style={{marginBottom:10}}>
                <div style={{float:'left'}}>Name : </div> <div>
                {currect_details.contact_name}
                    </div>
        </div> 
        <div style={{display:'grid'}}>
        <div style={{marginLeft:'-83%'}}>Numbers : </div> 

        {
                currect_details.numbers.map((number,index)=>{
                    return <input style = {{ padding:4,margin:7,width:'50%',marginLeft:'25%'}}value={number.phone_number} readOnly={true}></input>
                })
            }

        </div>
           
      </div>

    )
  }
}
export default ContactDetails
