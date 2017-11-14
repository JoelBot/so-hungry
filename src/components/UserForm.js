import React from 'react';


export class UserForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: 'breakfast',
            breakfastPlaces: [{
                name: 'Bernards',
                type: 'Small and cozy breakfast'
            }],
            lunchPlaces: [
                {name: 'Ferry Noodle House', type: 'Thai'},
                {name: 'Okinawa Teriyaki', type: 'Japanese'},
                {name: 'Cafe Pho', type: 'Vietnamese'},
                ],
            dinnerPlaces: [{
                name: 'Metropolitan Grill',
                type: 'Steakhouse'
            }],
            drinkPlaces: [{
                name: 'Outlier',
                type: 'Restaurant/Bar'
            }],
            coffeePlaces: [{
                name: 'Cherry Street',
                type: 'Coffee and snacks'
            }],
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);


    }


    handleChange(event){
     this.setState({value: event.target.value});
    }

    handleSubmit(event){
        const rand = Math.floor((Math.random() * 3));
        return (
            <div>
                {(() => {
                    switch(this.state.value) {
                        case 'breakfast':
                            return alert('You should go to: ' + this.state.breakfastPlaces[rand].name)
                        case 'lunch':
                            return alert('You should go to:  ' + this.state.lunchPlaces[rand].name)
                        case 'dinner':
                            return alert('You should go to:  ' + this.state.dinnerPlaces[rand].name)
                        case 'drinks':
                            return alert('You should go to:  ' + this.state.drinkPlaces[rand].name)
                        case 'coffee':
                            return alert('You should go to:  ' + this.state.coffeePlaces[rand].name)
                        default:
                            return null;
                    }
                })()}
            </div>
        );

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
