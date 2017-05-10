import React, { Component } from 'react';
import List from './list.jsx';

class listWrap extends Component {
    render() {
        return (
            <div>
                <List />
                <List />
                <List />
                <List />
                <List />
                <List />
                <List />
            </div>
        );
    }
}

export default listWrap;