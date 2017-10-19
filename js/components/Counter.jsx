import React from 'react';

export class Counter extends React.Component {

    constructor(props){
           super(props);
           this.state = {
               counterValue: 0,
               displayText: '',
               textColor: '',
           };
       }

    handleCounterOnClick = (e) => {
        const tempCounter = this.state.counterValue + 1;
        let text = tempCounter;
        let textColor = '';

        if(tempCounter % 3 === 0){
            if(tempCounter % 5 === 0){
                text = 'FizzBuzz';
                textColor = 'green';
            }
            else {
                text = 'Fizz';
                textColor = 'yellow'
            }
        }
        else if(tempCounter % 5 === 0) {
            text = 'Buzz';
            textColor = 'blue';
        }
        else {
            textColor = '';
        }

        this.setState({
            counterValue: tempCounter,
            displayText: text,
            textColor: textColor,
        })
    }

    render() {

        return (
            <section className="counter">
                <h1 className="counter__title">COUNTER</h1>
                <div
                    className="counter__display"
                    style={{color: this.state.textColor}}>
                    {this.state.displayText}
                </div>
                <button
                    className="counter__button"
                    onClick={this.handleCounterOnClick}>
                    Click Me
                </button>
            </section>
        )
    }
}
