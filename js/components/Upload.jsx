import React from 'react';
import {InputFile} from './InputFile.jsx'

export class Upload extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            imgSrc: '',
            fileName: '',
            fileSize: '',
            fileType: '',
            imgDimensions: '',
        }
    }

    checkFileType = (file) => {
        const fileExtension = file.type.slice(file.type.indexOf('/') + 1);
        return [file.type,fileExtension];
    }

    formatFileSize = (fileSize) => {
        const i = fileSize == 0 ? 0 : Math.floor( Math.log(fileSize) / Math.log(1024) );
        return ( fileSize / Math.pow(1024, i) ).toFixed(1) * 1 + ' ' + ['B', 'kB', 'MB', 'GB', 'TB'][i];
    }

    createPreview = (file) => {
        return window.URL.createObjectURL(file);
    }

    getImgDimensions = (imageSrc,callback) => {
        const img = new Image();
        const self = this;
        img.onload = function(){
            const dimensions = img.width + ' x ' + img.height;
            callback(dimensions,self);
        };
        img.src = imageSrc;
    }

    handleUploadFile = (FileList) => {
        const input = FileList[0];
        let imageSrc, imgDimensions;
        const fileSize = this.formatFileSize(input.size);
        const fileType = this.checkFileType(input);

        if(fileType[0].indexOf('image') !== -1){
            imageSrc = this.createPreview(input);
            imgDimensions = this.getImgDimensions(imageSrc,function(data,self){
                self.setState({
                    fileName: input.name,
                    fileType: '',
                    fileSize: fileSize,
                    imgSrc: imageSrc,
                    imgDimensions: data,
                });
            });
        } else {
            this.setState({
                fileName: input.name,
                fileType: fileType[1],
                fileSize: fileSize,
                imgSrc: '',
                imgDimensions: '',
            });
        }
    }

    render() {
        return (
            <section className="upload">
                <h1 className="upload__title">Upload</h1>
                <div className="upload__row">
                    <div className="upload__preview">
                        <img className="upload__preview__image" src={this.state.imgSrc}></img>
                    </div>
                    <div className="upload__data">
                        <ul>
                            <li>{this.state.fileName}</li>
                            <li>{this.state.fileSize}</li>
                            <li>{this.state.fileType}</li>
                            <li>{this.state.imgDimensions}</li>
                        </ul>

                    </div>
                </div>
                <InputFile upload={this.handleUploadFile} fileName={this.state.fileName}/>
            </section>
        )
    }
}
