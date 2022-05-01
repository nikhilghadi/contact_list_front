import React, { Component } from 'react'

export class Kepad extends Component {

    pressButton=(e)=>{
      let key_value =   e.target.name
      this.props.setValue(key_value)
    }
  render() {

    return (
      <div>

            <p>
            <button className="key" onClick={this.pressButton} name="1" data-number="1">1 </button>
            <button className="key" onClick={this.pressButton} name="2" data-number="2">2 <small>abc</small></button>
            <button className="key" onClick={this.pressButton} name="3" data-number="3">3 <small>def</small></button>
            </p>
            <p>
            <button className="key" onClick={this.pressButton} name="4" data-number="4">4 <small>ghi</small></button>
            <button className="key" onClick={this.pressButton} name="5" data-number="5">5 <small>jkl</small></button>
            <button className="key" onClick={this.pressButton} name="6" data-number="6">6 <small>mno</small></button>
            </p>
            <p>
            <button className="key" onClick={this.pressButton} name="7" data-number="7">7<small>pqrs</small></button>
            <button className="key" onClick={this.pressButton} name="8" data-number="8">8<small>tuv</small> </button>
            <button className="key" onClick={this.pressButton} name="9" data-number="9">9 <small>wxyz</small></button>
            </p>
            <p>
            <button className="key" onClick={this.pressButton} name=" 0" data-number="0">0 </button>
            </p>
      </div>
    )
  }
}

export default Kepad