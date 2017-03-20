import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import App from './components/app'

export default class recipebook extends Component {
    render() {
        return (
            //calls on the app.js file inside components directory
            <App />
        );
    }
}


AppRegistry.registerComponent('recipebook', () => recipebook);

