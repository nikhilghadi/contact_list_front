import React, { Component } from 'react'
import axios from 'axios';

export class Form extends Component {
    constructor(props) {
      super(props)
      let name = ""
      let number = ""
        let text = props.text
        if (parseInt(text))
            number = text
        else
            name = text
      this.state = {
         name:name,
         number:number
      }
    }

    SaveContact=()=>{
        let data={name:this.state.name,number:this.state.number}
        axios({
            method: 'POST',
            url: 'https://glacial-hamlet-02663.herokuapp.com/add_new_contact/',
            // url: 'http://localhost:3000/add_new_contact/',
             headers: {
                  'Access-Control-Allow-Origin': '*',
                  "Access-Control-Allow-Headers": "X-Requested-With",
                  "Content-Type":"application/json;charset=UTF-8"  
                },
            data: {
                data:data
            }
          }).then((res)=>{
              alert("Saved")
              this.props.goBack()
          }).catch((err)=>{
              console.log("Error",err)
          });
    }
    onChange=(e)=>{
        const {name, value} = e.target
        this.setState({[name]:value})
    }
    render() {
        const {name,number} = this.state
        return (
        <div className='cardbox'>
            <div style={{display:'flex',marginBottom:10}}>
            <span style={{cursor:'pointer'}} onClick={this.props.goBack} className="material-icons" >
            keyboard_backspace
          </span>
          <div style={{fontSize:15,fontWeight:'bold'}}>
              Add to contacts
          </div>
            </div>
            
            <div style={{marginBottom:10}}>
                <div style={{marginBottom:10}}>  
                      <label style={{float:'left'}} for="name">Name</label>
                 <input placeholder='Name..' value={name} id="name" name='name' onChange={this.onChange}></input>
                 </div>
                <div><label style={{float:'left'}} for="number">Phone Number </label>
                 <input value={number} style={{marginLeft:-63}} placeholder='Phone' id = "number" name='number' onChange={this.onChange}></input>
                 </div>
            </div>
            <button className="saveButton" onClick={this.SaveContact}>Save</button>
        </div>
        )
    }
}

export default Form