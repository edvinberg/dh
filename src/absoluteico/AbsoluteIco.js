import React, {Component} from 'react';
import './absoluteico.css';
import logo from '../img/loggatran.png';

class AbsoluteIco extends Component {

    render() {
        return (
            <div className="absoluteico">
                <img src={logo} className="absoluteico--ico" alt="logo" />
            </div>
        );
    }
}

export default AbsoluteIco;
