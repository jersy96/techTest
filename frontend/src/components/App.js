import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import VotingPage from './VotingPage';

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Route path='/' exact component={VotingPage}/>
                </div>
                <div>
                    <Route path='/pastTrials' exact component={() => {
                        return (
                            <div>Past trials</div>
                        );
                    }}/>
                </div>
                <div>
                    <Route path='/howItWorks' exact component={() => {
                        return (
                            <div>How it works</div>
                        );
                    }}/>
                </div>
                <div>
                    <Route path='/Login' exact component={() => {
                        return (
                            <div>Login / Sign Up</div>
                        );
                    }}/>
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;