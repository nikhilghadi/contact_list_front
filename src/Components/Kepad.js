import React, { Component } from 'react'

export class Kepad extends Component {

    pressButton=(e)=>{
      let key_value =   e.target.name
      console.log("pressbutton start",key_value,e.target.parentElement.name)
      if(key_value == undefined)
      {
        key_value=e.target.parentElement.name
      }

      this.props.setValue(key_value)
    }
  render() {

    return (
      <div>

            <p>
            <button className="key" onClick={this.pressButton} name="1" data-number="1">1 </button>
            <button className="key" onClick={this.pressButton} name="2" data-number="2">2 <div className='key-letter' name="2">abc</div></button>
            <button className="key" onClick={this.pressButton} name="3" data-number="3">3 <div className='key-letter' name="3">def</div></button>
            </p>
            <p className='key-letter'>
            <button className="key" onClick={this.pressButton} name="4" data-number="4">4 <div className='key-letter' name="4">ghi</div></button>
            <button className="key" onClick={this.pressButton} name="5" data-number="5">5 <div className='key-letter' name="5">jkl</div></button>
            <button className="key" onClick={this.pressButton} name="6" data-number="6">6 <div className='key-letter' name="6">mno</div></button>
            </p>
            <p className='key-letter'>
            <button className="key" onClick={this.pressButton} name="7" data-number="7">7<div className='key-letter' name="7">pqrs</div></button>
            <button className="key" onClick={this.pressButton} name="8" data-number="8">8<div className='key-letter' name="8">tuv</div> </button>
            <button className="key" onClick={this.pressButton} name="9" data-number="9">9 <div className='key-letter' name="9">wxyz</div></button>
            </p>
            <p>
            <button className="key" onClick={this.pressButton} name="0" data-number="0">0 </button>
            </p>
      </div>
    )
  }
}

export default Kepad