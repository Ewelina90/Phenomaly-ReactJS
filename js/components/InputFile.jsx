import React from 'react';
import ReactDOM from 'react-dom';

export class InputFile extends React.Component {

    handleUpload = (file) => {
        if(typeof this.props.upload === 'function'){
            this.props.upload(file);
        };
    }

    triggerOnClick = () => {
        ReactDOM.findDOMNode(this.refs.upload).click();
    }

    render() {
        return (
            <span>
                <span className="inputfile">{this.props.fileName}</span>{/*
                */}<button
                    className="btn"
                    onClick={this.triggerOnClick}>
                    <i className="fa fa-folder-open" aria-hidden="true"></i>
                    Open
                </button>

                <input
                    style={{opacity: '0', width: '1px'}}
                    type="file"
                    className="upload__input"
                    ref="upload"
                    onChange={(e) => this.handleUpload(e.target.files)}>
                </input>
            </span>
        )
    }
}
