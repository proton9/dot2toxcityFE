import React from 'react';
import '../App.css'
import Card from './card';
function home(){
    return(
        <div className="Home-main">
            <header className="Home-header">
                <input className="search-box" placeholder="To get Started, enter your steamId or select a proffesional player from the dropdown" />
            </header>
            <div className="box">
            </div>
            <div className="container card-group">
                <div className="row">
                    <div className="col-md-6 flex-justify-center">
                        <Card playerId={70388657}/><br/>
                        <Card playerId={105248644}/><br/>
                    </div>
                    <div className="col-md-6 flex-justify-center">
                        <Card playerId={86745912}/><br/>
                        <Card playerId={92423451}/><br/>
                    </div>
                </div>
            </div>

        </div>
    );
}
export default home;
