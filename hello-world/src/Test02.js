import React, { Component } from 'react';

class Test02 extends Component{ //繼承Component類別
  render(){
    return(
      <button onClick={this.props.handleClick}>{this.props.name}</button>
    );
}
}
export default Test02;