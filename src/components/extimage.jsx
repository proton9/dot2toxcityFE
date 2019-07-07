import React, { Component } from 'react';
class RenderExternalImage extends React.Component {
    render(){
      return(<img className="card-img-top" src={this.props.url} alt="Player" /> );
    }
}

export default RenderExternalImage;