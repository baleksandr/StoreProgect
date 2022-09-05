import React, {Component} from 'react';
import "./ComponentImg.scss"


class ComponentImg extends Component {
    render() {
        const {width, height, margin, image} = this.props

        const style = {
            width: width,
            height: height,
            margin: margin,
        }

        return (
            <img src={image}  style={style} alt="img"/>
        );
    }
}

export default ComponentImg;