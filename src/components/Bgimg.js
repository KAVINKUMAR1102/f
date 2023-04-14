import './BgimgStyles.css'

import React, { Component } from 'react'

class Bgimg extends Component {
  render(){
    return (
      <div className='bgimg'>
        <div className='heading'>
          <h1>{this.props.heading}</h1>
          <p>{this.props.text}</p>
        </div>
      </div>
    );
  }
}

export default Bgimg