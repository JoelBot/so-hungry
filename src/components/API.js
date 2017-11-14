import React, { Component } from 'react';
import UserForm from './UserForm';
import NavBar from './NavBar'

function VisibleForm (props){
    if(!props.showForm){
        return null;
    }
    return(
        <UserForm/>
    )
}



class API extends Component {
    constructor(props) {
        super(props)
        // this.fetchAPI = this.fetchAPI.bind(this)
        // this.updateState = this.updateState.bind(this) // you do not need this to be bound because you are not passing it anywhere
        this.state = {
            name: ''
        }
        this.state = {showForm: false}
        this.handleToggleForm = this.handleToggleForm.bind(this);
    }


    // componentWillMount() {
    //     const formData = new FormData();
    //     formData.append('client_id', 'FW1RHqeh1ELGz9m5U4UBCA');
    //     formData.append('client_secret', 'k3JsolEiChW9Ua1eOI67sjJMU9Ad6cKkgna8hozWZFtY8jrQzxINHCvyntq2LvHm');
    //     formData.append('grant_type', 'client_credentials');
    //     fetch('https://api.yelp.com/oauth2/token', {
    //         method: 'POST',
    //         body: formData,
    //         mode: 'cors',
    //     })
    //         .then((response) => response.json())
    //         .then((response) => this.setState({ auth: response }));
    // }
    // you can use arrow functions to autobind: stage 2 proposal
    // fetchAPI = () => {
    // //    https://swapi.co/api/starships/9/
    //
    //     // when using no-cors, only certain headers are allowed. authorization is not one of them, thus 401
    //     var request = {
    //         method: 'GET',
    //         headers: new Headers({
    //             'Authorization': 'Bearer ' + this.state.auth.auth_token,
    //
    //             //'Access-Control-Allow-Origin': '*'
    //         }),
    //         mode: 'cors'
    //     };

    //     fetch('https://api.yelp.com/v3/businesses/ferry-noodle-house-seattle', request)
    //         .then(response => response.json())
    //         .then(response => this.updateState(response))
    //
    // }

    // rename to distinguish between componenet state and this response
    updateState(response) {
        this.setState({
            name: response.name
        })
    }



    handleToggleForm(){
        this.setState(prevState =>({
            showForm: !prevState.showForm
        }));
    }


    render() {
        return (
            <div className="App">
                <div className="col-sm-12">
                    <NavBar />
                    <div className="col-sm-2">

                    </div>

                    <div className="col-sm-10 padding">
                        <header className="App-header">

                            <iframe src="https://giphy.com/embed/jlEkt1QTAZJXa" width="480" height="206" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
                        </header>
                        <button className="IDKButton" onClick={this.handleToggleForm}>Start new search</button>
                        <VisibleForm showForm={this.state.showForm} />

                    </div>
                    <div>

                    </div>
                </div>
            </div>
        );
    }
}

export default API;
