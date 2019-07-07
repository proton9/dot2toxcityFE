import React, { Component } from 'react';
import RenderExternalImage from './extimage'
class PlayerCard extends React.Component {
    constructor(props){
        super(props);
        this.state = {playerCard : null};
        console.log (this.props);
        this.initData(this.props.playerId);
    }
    initData(id){
      fetch('https://api.opendota.com/api/players/'+id).
        then( res => res.json()).
          then(response =>{this.setState({playerCard:response});});
    }
  
    render () {
      if (this.state.playerCard == null){
        return(<div>loading...</div>)
      }
      var pictureUrl = this.state.playerCard.profile.avatarfull;
      var playerId  = this.state.playerCard;
      console.log (this.state);
      //const cardStyle = {position:'fixed'};
      return (
        <div >
          <RenderExternalImage url={pictureUrl}></RenderExternalImage>
          <div className="box">
            <div className="card bg-dark text-white" >
              <div className="card-body">
                  <h5 className="card-title">{playerId.profile.name}</h5>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
  export default PlayerCard;