import React, { Component } from 'react';
import logo from '../logo.svg';
import '../css/App.css';

class IDK extends Component {
    constructor(props) {
        super(props)
        this.fetchAPI = this.fetchAPI.bind(this)
        this.updateState = this.updateState.bind(this)
        this.state = {
            name: '',
            model: ''
        }
    }

    fetchAPI() {
    //    https://swapi.co/api/starships/9/

        fetch('https://swapi.co/api/starships/9/')
            .then(response => response.json())
            .then(response => this.updateState(response))

    }

    updateState(response) {
        this.setState({
            name: response.name,
            model: response.model
        })
    }

    render() {
        return (
            <div className="App">
                <div className="col-sm-12">
                    <div className="col-sm-2">
                        <header className="App-header">
                            <img src={logo} className="App-logo" alt="logo" />
                        </header>
                    </div>
                    <div className="col-sm-10">
                        <button className="IDKButton" onClick={this.fetchAPI}>CLICK</button>
                        <p>{this.state.name}</p>
                        <p>{this.state.model}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default IDK;
