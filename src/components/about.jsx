import React, {Component} from 'react';
import './D2Hp.css';

function AboutP() {
    return(
    <header className="App-main">
        <div className="d-flex container">
            <div className="box text-white">
                <div className="card bg-dark">
                    <div className="card-body">
                        <h3 className="card-title text-center">About toxicityTracker</h3>
                        <div className="card-text">
                        <p>
                            The prerequisite to understanding this app is Dota2:
                            To simply say that Dota2 is just an exponentially more complex real time chess played in a 5v5 team environment, would be unfair to the developers who built it as well as the entire community.</p>
                            It is an esport. To put things into perspective, <br/>
                            <ul className="list-group">
                                <li className="list-group-item bg-dark text-white">In one of the biggest sporting events FIFA World cup, FIFA handed France, the winners 38$ million for winning the 2018 iteration, winnings split across a squad of 22 outfield players plus numerous other teams of staff.
                                </li>
                                <li className="list-group-item bg-dark text-white">The International (TI) organised by Valve Software is one of the biggest e-sporting event.  winners OG took home 11$ million in the 2018 iteration, split across team of 5 plus plus the organisation that sponsored them.</li>
                            </ul>
                            <br/>

                            <p>
                            The causes of toxicity (in dota2) are as follows <br/>
                            </p>
                            <ul className="list-group">
                                <li className="list-group-item bg-dark text-white">steep learning curve, the mechanics itself take years to master.</li>
                                <li className="list-group-item bg-dark text-white">One has to rely on the team. (matchmaking system teams you up with random people)</li>
                                <li className="list-group-item bg-dark text-white">Frustration due to lack of understanding amongst team.</li>
                                <li className="list-group-item bg-dark text-white">Lack of leadership (people who discourage toxicity while it’s happening)</li>
                                <li className="list-group-item bg-dark text-white">Burning desire to win</li>
                            </ul>
                            <p>
                            Data gathered from analysis of matches played does suggest a correlation between toxicity and bad performance. And it can be broadly applied to every social/professional construct. (I’m certain analysis of the converse hypothesis would be more intriguing )The scope of this project isn’t that.
                            </p>
                            <p>
                            The points that have been listed as causes of toxicity are somewhat general instances that can be universally applied to different settings (work/social)
                            </p>
                            <p>The whole purpose of this app is for the players/gamers of Dota2 to reflect on their own toxicity do something about it, becoming better humans than winning is far more important. 
                            </p>
                            <br/>
                            <div className="row">
                                <div className="card bg-dark">
                                    <ul className="list-group">
                                        <li className="list-group-item bg-dark text-white">Technology Stack</li>
                                        <li className="list-group-item bg-dark text-white">React</li>
                                        <li className="list-group-item bg-dark text-white">Express</li>
                                        <li className="list-group-item bg-dark text-white">TensorFlow</li>
                                        <li className="list-group-item bg-dark text-white">Heroku</li>
                                    </ul>
                                </div>
                                <div className="card bg-dark">
                                    <ul className="list-group">
                                        <li className="list-group-item bg-dark text-white">Data Provider</li>
                                        <li className="list-group-item bg-dark text-white">OpenDota</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </header>
    );
}

export default AboutP;
