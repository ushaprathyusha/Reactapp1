import React, { Component } from 'react'
import Home1 from './Home1'

export default class Home extends Component {
    state={
        name:"Matrical"
    }
  render() {
    return (
      <div>
        <center>
            <Home1 name={this.state.name}/>
        </center>
      </div>
    )
  }
}
