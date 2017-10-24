import React, { Component, PropTypes } from 'react';
import Header from '../components/Header';
import NavBar from '../components/NavBar';

class Homepage extends Component {
    render() {
        return (
            <div>
                <Header />
                <NavBar />
            </div>
        );
    }
}

export default Homepage;
