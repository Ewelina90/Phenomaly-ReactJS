import React from 'react';

export class InputFile extends React.Component {

    handleUpload = (file) => {
        if(typeof this.props.upload === 'function'){
            this.props.upload(file);
        };
    }

    render() {
        return (
            <input
                type="file"
                className="upload__input"
                onChange={(e) => this.handleUpload(e.target.files)}>
            </input>
        )
    }
}
