import React, {Component} from 'react';
import './D2Hp.css';
import allHeros from './heroes.json';
import { all } from 'q';
import { existsTypeAnnotation, arrayExpression } from '@babel/types';
import { get } from 'http';
//abbreivated className (Dota2ProgressTracker HomePage)
// this really needs refactoring asap when i started this off , i didnt know the react conventions

class D2Hp extends React.Component{
  //add a state where theres no init (no steam id and displays nothing hence)
  constructor(props){
    super(props);
    this.state = { data: [] , w10d: [] , l10d: [] , loaded:false ,sortedData:[],steamId:null,card:null};
    this.setPlayer = this.setPlayer.bind(this);
    this.playerCard = {};
  }
  setPlayer (id){
    console.log('handler fired');
    this.setState({steamId:id});
    if (id!=null) {
      fetch ("https://api.opendota.com/api/players/"+id).
        then(res => res.json()).then ( (playerObj) => this.playerCard=playerObj).
          then(
            fetch(`https://api.opendota.com/api/players/`+id+`/matches?limit=20`)
            .then(res => res.json()).then(res => this.sortResults(res)) 
            );

    }
  }

/*   componentDidMount(){
    if (this.state.steamId!=null) {
      fetch(`https://api.opendota.com/api/players/105248644/matches?limit=20`)
      .then(res => res.json()).then(res => this.sortResults(res));
    }
  }
 */
  computeResult(match) {
    var side = this.whichSide(match.player_slot);
    switch (side) {
      case "radiant" :
        if (match.radiant_win == true) {
          return "won";
        } else {
          return "lost";
        }
      case "dire" :
        if (match.radiant_win == false) {
          return "won"
        } else {
          return "lost";
        }
    }
  }
  getHeroName(heroId) {
    var heroDict = allHeros.heroes;
    for (let hero in heroDict) {
      if (heroDict[hero]['id'] == heroId) {
        return heroDict[hero]['name'];
      }
    }
  }

  sortResults(rawData){
    const matchesWithKeys =[];
    var allMatches = rawData;
    var wonGames = [];
    for (let match in allMatches) {
      var matchRow = allMatches[match];
      matchRow.result = this.computeResult(allMatches[match]);
      matchesWithKeys.push (matchRow);
    }
    var wonMap = allMatches.filter (function (element) {
      if (element.result=="won") {
        return true;
      }
    });
    wonMap.forEach((element) => {element.name = this.getHeroName(element.hero_id);
    });

    var lostMap = allMatches.filter (function (element) {
      if (element.result=="lost") {
        return true;
      }
    });
    lostMap.forEach((element) => {element.name = this.getHeroName(element.hero_id);
    });



    this.setState ({sortedData:matchesWithKeys,loaded:true, w10d:wonMap, l10d:lostMap,card:this.playerCard});

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
    //var pObj = playerMatches.getMatchObject();
    //console.log (pObj);
    var tableData = this.state.sortedData;
    let w10 ={"headerTitle":"games won" ,"headerClass":"bg-success", "tableData":this.state.w10d};
    let l10 ={"headerTitle":"games lost" ,"headerClass":"bg-danger", "tableData":this.state.l10d};
    return (
      <div className="D2Hp">
        <nav className="navbar sticky-top navbar-dark bg-dark shadow-sm p-1 bg-dark ">
          <a className="navbar-brand" href="#">PatternFinder</a>
          <div className="navbar-collapse collapse text-white">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">About Project <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About Author</a>
              </li>
            </ul>
          </div>
          <form className="form-inline pull-right">
            <label className="text-white">Top Pros</label>
            <Dropdown setId={this.setPlayer.bind(this)}></Dropdown>
          </form>
        </nav>
        <header className="App-header">
          <div className="row container">
            <div className="col-md-3">
            <PlayerCard playerId={this.state.card}></PlayerCard>
            </div>
            <div className="col-md-9">
              <h2>Game stats and Toxicity Report</h2>
              <div className="row container-fluid bg-dark text-white text-center">
                <div className="col-md-6"><ResultTable table={w10}> </ResultTable></div>
                <div className="col-md-6"><ResultTable table={l10}> </ResultTable></div>
              </div>
            </div>
            <div className="col-md-9 container-fluid">
            </div>
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
    return this.d2table();
  }
  d2table(){

    return(
      <div className="">
        <div className={this.props.table.headerClass}>
          <h3>{this.props.table.headerTitle}</h3>
        </div>
        <table className="table table-dark text-white table-bordered">
          <thead>
            <tr>
              <th>hero</th>
              <th>role</th>
              <th>k/d/a</th>
              <th>r</th>
              <th>log</th>
            </tr>
          </thead>
          <tbody><RenderRow data={this.props.table.tableData}/></tbody>
        </table>
      </div>
    );

  };
}
class Dropdown extends React.Component {

  constructor(props){
    super(props)
    this.state = {}
  }
  renderSelectOtions (arr){
    var proList =[];
    arr.forEach( 
      (element)=>{
        proList.push(<option className="list-group-item text-white bg-dark" value={element.id}>{element.name}</option>)
      });
    return proList;
  }
  render (){
    const pros = [
      {
        id:70388657,
        name:"navi.dendi",
        img:''
      },
      {
        id:105248644,
        name:'liquid.miracle',
        img:''
      },
      {  
        id:86745912,
        name:'eg.arteezy',
        img:''
      },
      {
        id:92423451,
        name:'vp.9pasha',
        img:''
      }
    ];


    return(
      <select onChange={(event)=>this.props.setId(event.target.value)}  className="form-control bg-dark text-white">{this.renderSelectOtions(pros)}</select>
    );
  }
}

class PlayerCard extends React.Component {
  
  render () {
    console.log (this.props.playerId);
    
    var playerCardObj =  this.props.playerId;
    if (playerCardObj==null) {
      return (<div>loading..</div>);
    }
    const pictureUrl = playerCardObj.profile.avatarfull;
    var playerId  = this.props.playerId;
    const cardStyle = {position:'fixed'};
    return (
      <div style={cardStyle}>
        <h3>Player Infomation</h3>
        <RenderExternalImage url={playerId.profile.avatarfull}></RenderExternalImage>
        <div className="box">
          <div className="card bg-dark text-white" >
            <div className="card-body">
                <h5 className="card-title">{playerId.profile.personaname}</h5>
                <p className="card-text">medal .. star.</p>
            </div>
            <div className="card-body">
                <a href="#" className="card-link">Bracket Rank {playerId.solo_competitive_rank}</a>
                <a href="#" className="card-link">games lost</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

class RenderImage extends React.Component{
  render (){
    var id = this.props.heroImage;
    return(<img className="card-img-top" src={process.env.PUBLIC_URL +"images/"+id} alt="Player" /> );
  };
}
class RenderExternalImage extends React.Component {
  render(){
    return(<img className="card-img-top" src={this.props.url} alt="Player" /> );
  }
}

class RenderRow extends React.Component{
  constructor(props){
    super(props);

  }
  render(){

    var rows = this.props.data;
    var tableRows =  [];
    for (let i=0; i<rows.length; i++) {
      tableRows.push (<tr>
                        <td><RenderImage heroImage={rows[i].name+"_sb.png"}></RenderImage></td>
                        <td>un</td>
                        <td>{rows[i].kills}/{rows[i].deaths}/{rows[i].assists}</td>
                        <td>{rows[i].result}</td>
                        <td>_</td>       
                      </tr>
                      );
    }
    return (
      tableRows
    );
    
  }
}
export default D2Hp;
