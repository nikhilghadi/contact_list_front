import React, { Component } from 'react'
import axios from 'axios';
import ContactDetails from './ContactDetails';
import Form from './Form';
import Keypad from './Kepad'
export class index extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       input_text:"",
        contact_list:[],
        show_details:false,
    }
    this.ref = null
  }
    componentDidMount(){
       
    }

    checkList=()=>{
      const {contact_list} = this.state
      if(contact_list.length === 0){
        this.setState({create_new_constact:true})
      }
    }

    onChangeInput=(e)=>{
      console.log("onchange ",e.target)
      this.setState({input_text:e.target.value},this.search_contact)      
    }

    search_contact=()=>{
      axios({
            method: 'GET',
            url: 'https://glacial-hamlet-02663.herokuapp.com/search_phone_number/',
            params: {
              text:this.state.input_text
            }
          }).then((res)=>{
              console.log("REsponce",res.data)

              this.setState({contact_list:res.data},this.checkList)
          }).catch((err)=>{
              console.log("Error",err)
          });
    }
    showDetails=(contact_datails)=>{

      this.setState({show_details:true,currect_details:contact_datails})
    }
    addNewContact=()=>{
      this.setState({show_form:true})
    }
    setValue=(value)=>{
      const {input_text} = this.state
      if(value === '#')
      {
        let position = this.ref.selectionStart
       let new_text =  input_text.substring(0, position - 1) + input_text.substring(position, input_text.length);
        console.log("ref",position,new_text)
      this.setState({input_text:input_text.slice(0,-1)},this.search_contact)


      }
      else
      this.setState({input_text:input_text+value},this.search_contact)
    }
  render() {
    const {input_text,contact_list,create_new_constact,show_details,currect_details,show_form} = this.state
    console.log("RENDEFr",contact_list)
     return (
      <div>
        {
          show_details?
            <ContactDetails goBack={()=>this.setState({show_details:false})} currect_details={currect_details}/>
          :

          show_form?
            <Form goBack={()=>this.setState({show_form:false,create_new_constact:false,contact_list:[]})} text={input_text}/>
          :
          <div className='cardbox'>
            <div className='container' style={{overflow:'scroll',height:contact_list.length?177:0}}>
            {
            contact_list.map((contact,index)=>{
              return contact.numbers.map((number,j)=>{
              return <div  style={{display:'flex',marginBottom:9}} onClick={()=>this.showDetails(contact)}>
                <div className='firstLetter'>
                  {contact.contact_name[0]}
                </div>
                <div style={{marginLeft:20,cursor:'pointer'}}>
                  <div style={{float:'left'}}>
                  {contact.contact_name}
                  </div>
                  <div >
                  {number.phone_number}
                  </div>
                </div>
                </div>

            })
          })}
            </div>

            {
          create_new_constact && !show_form && contact_list.length === 0?
            <div style={{display:'flex',marginBottom:9,cursor:'pointer'}} onClick={this.addNewContact}>
              <div className='addToContact'>
              <span class="material-icons">contact_phone</span>
              </div>
                <div style={{marginLeft:20}} >Add to Contacts <span style={{textDecoration:'underline',color:'blue'}}>{input_text}</span></div>
              </div>
          :''
        }
        <div style={{display:'flex'}}>   
        <input ref={(r)=>this.ref = r} className ={'input_number'} value={input_text} name={'input_text'} onChange={this.onChangeInput}></input> 
        <button className='backspace' onClick={(value)=>this.setValue("#")} name="#">&larr;</button>
            </div>
        < Keypad setValue={(value)=>this.setValue(value)} />
          
      </div>
        }
        
        
      </div>
    )
  }
}
export default index
