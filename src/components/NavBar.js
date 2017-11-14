import React, { Component } from 'react';
import logo from '../resources/logo.svg'

export class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        // this.handleLinkClicked = this.handleLinkClicked.bind(this);
    }
    // handleLinkClicked(path) {
    //     this.props.dispatch(push(path));
    // }

    render(){
        return(
            <nav id="navbar" className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">

                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <span>
                            <img className="navbar-brand App-logo" src={logo} />
                        </span>
                    </div>

                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                            <li className="active"><a href="https://www.yelp.com/seattle">Yelp<span className="sr-only">(current)</span></a></li>
                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Placeholder <span className="caret"></span></a>
                                <ul className="dropdown-menu">
                                    <li><a href="http://www.reddit.com">Reddit</a></li>
                                    <li><a href="http://www.wsdot.com/traffic/seattle/default.aspx">Traffic</a></li>
                                    <li><a href="https://weather.com/weather/today/l/47.61,-122.33">Weather</a></li>
                                    <li role="separator" className="divider"></li>
                                    <li><a href="#">Separated link</a></li>
                                    <li role="separator" className="divider"></li>
                                    <li><a href="#">One more separated link</a></li>
                                </ul>
                            </li>
                        </ul>
                        <form className="navbar-form navbar-right">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Search" />
                            </div>
                            <button type="submit" className="btn btn-default">Submit</button>
                        </form>
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="#">Link</a></li>
                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
                                <ul className="dropdown-menu">
                                    <li><a href="#">Action</a></li>
                                    <li><a href="#">Another action</a></li>
                                    <li><a href="#">Something else here</a></li>
                                    <li role="separator" className="divider"></li>
                                    <li><a href="#">Separated link</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default NavBar;
