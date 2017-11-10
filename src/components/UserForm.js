import React, { Component } from 'react';

export class UserForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(event){
     this.setState({value: event.target.value});
    }

    handleSubmit(event){
        alert('Today you will eat at: Ferry Noodle House');
        event.preventDefault();
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>What are you looking for?
                <select value={this.state.value} onChange={this.handleChange}>
                    <option value='breakfast'>Breakfast</option>
                    <option value='lunch'>Lunch</option>
                    <option value='dinner'>Dinner</option>
                    <option value='drinks'>Drinks</option>
                    <option value='coffee'>Coffee</option>
                </select>
                </label>
                <input type='submit' value='Submit' />
            </form>
        );
    }
}

export default UserForm;
