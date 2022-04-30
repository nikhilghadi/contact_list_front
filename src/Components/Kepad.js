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
            <button className="key" onClick={this.pressButton} name="2" data-number="2">2 </button>
            <button className="key" onClick={this.pressButton} name="3" data-number="3">3 </button>
            </p>
            <p>
            <button className="key" onClick={this.pressButton} name="4" data-number="4">4 </button>
            <button className="key" onClick={this.pressButton} name="5" data-number="5">5 </button>
            <button className="key" onClick={this.pressButton} name="6" data-number="6">6 </button>
            </p>
            <p>
            <button className="key" onClick={this.pressButton} name="7" data-number="7">7</button>
            <button className="key" onClick={this.pressButton} name="8" data-number="8">8 </button>
            <button className="key" onClick={this.pressButton} name="9" data-number="9">9 </button>
            </p>
            <p>
            <button className="key" onClick={this.pressButton} name=" 0" data-number="0">0 </button>
            </p>
      </div>
    )
  }
}

export default Kepad