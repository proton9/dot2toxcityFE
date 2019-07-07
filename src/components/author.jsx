import React from 'react';

class AuthorP extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <header className="App-main">
            <div className="d-flex container">
                <div className="box text-white">
                    <div className="card bg-dark">
                        <div className="card-body">
                            <h3 className="card-title text-center">Vinayak <i>Vasudev</i></h3>
                            <div className="card-text row">
                                <p>
                                Here’s the things I know for certain. <br/>
                                I love learning. and it sometimes gets frustrating when the understanding isn’t clear but what’s to stop me from <i>tinkering?</i> <br/>
                                </p>
                                <div className="box">
                                    <h3>Proffesional niche</h3>
                                    <p>Transforming legacy web systems to SPA architecture, at times with just pure JS, without breaking the back button.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </header>
        );
    }
}
export default AuthorP;