import React from 'react';
import ReactDOM from 'react-dom';
import {Counter} from './components/Counter.jsx';
import {Upload} from './components/Upload.jsx';

document.addEventListener('DOMContentLoaded',function(){

    class App extends React.Component {

        render() {
            return (
                <div className="container">
                    <Counter></Counter>
                    <Upload></Upload>
                </div>
            )
        }
    }
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});
