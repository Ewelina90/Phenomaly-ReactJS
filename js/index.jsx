import React from 'react';
import ReactDOM from 'react-dom';
import {Counter} from './components/Counter.jsx';

document.addEventListener('DOMContentLoaded',function(){

    class App extends React.Component {

        render() {
            return (
                <div className="container">
                    <Counter></Counter>
                </div>
            )
        }
    }
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});
