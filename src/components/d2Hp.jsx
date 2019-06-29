import React, {Component} from 'react';
import './D2Hp.css';
import { all } from 'q';
//abbreivated className (Dota2ProgressTracker HomePage)
class D2Hp extends React.Component{
  //add a state where theres no init (no steam id and displays nothing hence)
  constructor(props){
    super(props);
    this.state = { data: [] , w10d: [] , l10d: [] , loaded:false };
  }

  componentDidMount(){
    fetch(`https://api.opendota.com/api/players/85793566/matches?limit=20`)
    .then(res => res.json())
    .then(mData => this.setState({ mData ,loaded:true}))
    
  }

  computeResult(match) {
    var side = this.whichSide(match.player_slot);
    switch (side) {
      case "radiant" :
        if (match.radiant_win == true) {
          return match;
          break;
        } else {
          break;
        }
      case "dire" :
        if (match.radiant_win == false) {
          return match;
          break;
        } else {
          break;
        }
    }
  }

  sortResults(){
    if (!this.state.loaded ){
      return;
    }
    var allMatches = this.state.mData;
    for (const match of allMatches) {
    }

    console.log (Object.keys(allMatches));
    for (let i=0 ;i<allMatches.length ;i++) {
      //figure out what side then  who won thats it
      var playerSlot = allMatches[i].player_slot;
      var side = this.whichSide(playerSlot);
      var radiantWin = allMatches[i].radiant_win;
      if (radiantWin == "true") {
        if ( side == 1) {
        this.state.w10d.push(allMatches[i]);
        } else {
          this.state.l10d.push(allMatches[i]);
        }
      } else{
        //dire win situation
        if (side == 0) {
          this.state.w10d.push(allMatches[i]);
        } else {
          this.state.l10d.push(allMatches[i]);
        }
      }
    }

  }
  whichSide(slotNumber) {
    if (slotNumber > -1 && slotNumber < 6) {
      //radiant;
      return "radiant";
    }
    if (slotNumber  > 100 && slotNumber < 133){
      return "dire";
    }
  }
  render(){
    this.sortResults();
    //var pObj = playerMatches.getMatchObject();
    //console.log (pObj);

    const w10 ={"headerTitle":"won 10" ,"headerClass":"bg-success","tableData":this.state.w10d};
    const l10 = {"headerTitle":"lost 10" ,"headerClass":"bg-danger","tableData":this.state.l10d};
    const r10 = {"headerTitle":"recent 10" ,"headerClass":"bg-info","tableData":[]};
    return (
      <div className="D2Hp">
        <header className="App-header">
          <p>
            Dota2 patterns
          </p>
          <h2>Game stats and Toxicity Report</h2>
          <div className="row container bg-dark text-white text-center">
              <div className="col-sm-4"><ResultTable table={w10}> </ResultTable></div>
              <div className="col-sm-4"><ResultTable table={l10}> </ResultTable></div>
              <div className="col-sm-4"><ResultTable table={r10}> </ResultTable></div>
            </div>
        </header>
      </div>
    );
  }
}

class ResultTable extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    console.log (this.props);
    return this.d2table();
  }
  d2table(){
    return(
      <div className="">
        <div className={this.props.table.headerClass}>
          <h3>{this.props.table.headerTitle}</h3>
        </div>
        <table className="table table-dark text-white">
          <thead>
            <tr>
              <th>hero</th>
              <th>role</th>
              <th>k/d/a</th>
              <th>r</th>
              <th>log</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    );

  };

}
export default D2Hp;
