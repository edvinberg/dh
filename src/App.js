import React, {Component} from 'react';
import logo from './img/logo.jpeg';
import logoText from './img/loggaF.jpg';
import box from './img/box.jpg';
import box2 from './img/box2.jpg';
import babybody from './img/babybody.jpg';
import './App.css';
import AbsuluteIco from './absoluteico/AbsoluteIco';

class App extends Component {

    render() {
        return (
            <div className="App">
                <AbsuluteIco/>
                <div className="App-intro">
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
                {/*<div className="body">*/}

                    {/*<div className="item--container">*/}
                        {/*<img src={box} className="item" alt="logo"/>*/}
                    {/*</div>*/}

                    {/*<div className="item--container">*/}
                        {/*<img src={box2} className="item" alt="logo"/>*/}
                    {/*</div>*/}

                    {/*<div className="item--container">*/}
                        {/*<img src={logoText} className="item" alt="logo"/>*/}
                    {/*</div>*/}

                    {/*<div className="item--container">*/}
                        {/*<img src={logo} className="item" alt="logo"/>*/}
                    {/*</div>*/}

                    {/*<div className="item--container">*/}
                        {/*<img src={logoText} className="item" alt="logo"/>*/}
                    {/*</div>*/}
                    {/*<div className="item--container">*/}
                        {/*<img src={babybody} className="item" alt="logo"/>*/}
                    {/*</div>*/}

                {/*</div>*/}
            </div>
        );
    }
}

export default App;
