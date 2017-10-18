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
            <div className="inputfile">
                <span className="inputfile__filename">{this.props.fileName}</span>{/*
                */}<button
                    className="inputfile__btn"
                    onClick={this.triggerOnClick}>
                    <i className="fa fa-folder-open" aria-hidden="true"></i>
                    Open
                </button>

                <input
                    style={{opacity: '0', width: '1px'}}
                    type="file"
                    ref="upload"
                    onChange={(e) => this.handleUpload(e.target.files)}>
                </input>
            </div>
        )
    }
}
