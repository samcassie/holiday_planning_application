import React, {Component} from 'react';

class SelectedImage extends Component {
    constructor(props){
        super(props);
    }


    render(){

        if (this.props.selectedImage === ""){
            return (
                <img className="selectableImage" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAA1BMVEX///+nxBvIAAAAR0lEQVR4nO3BAQ0AAADCoPdPbQ8HFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPBgxUwAAU+n3sIAAAAASUVORK5CYII=" name="imageHolder" alt=""/>
            )
        }
        else {
            return (
                <img className="selectableImage" src={`/images/${this.props.selectedImage}.jpg`} name="image1" alt=""/>
            )
        }
    }


}

export default SelectedImage;
