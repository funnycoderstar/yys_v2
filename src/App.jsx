import React, { Component } from 'react';

import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';

import TabBar from './components/tabBar';
import Search from './components/search';
import HeroPhoto from './components/heroPhoto';
import HeroBg from './components/heroBg';
import HeroSkill from './components/heroSkill';
import HeroTease from './components/heroTease';
import AboutHero from './components/aboutHero/aboutHero';

// App can't be stateless component
class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <div>
                        <Route path="/" component={TabBar} />
                        <Route path="/index" component={TabBar} />
                        <Route path="/search" component={Search} />
                        <Route path="/heroPhoto" component={HeroPhoto} />
                        <Route path="/heroBg" component={HeroBg} />
                        <Route path="/heroSkill" component={HeroSkill} />
                        <Route path="/heroTease" component={HeroTease} />
                        <Route path="/aboutHero/:heroName" component={AboutHero} />
                    </div>
                </Router>
            </div >
        );
    }
}

export default App;
