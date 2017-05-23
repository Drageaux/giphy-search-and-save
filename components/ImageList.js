import React, {Component} from "react";
import {AppRegistry} from "react-native";
import {
    Container,
    Thumbnail,
    Text
} from "native-base";

export default class ImageList extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            images: this.props.images
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({images: nextProps.images});
    }

    render() {
        let images: any[] = this.state.images;
        let imageList = null;
        if (images && images.length > 0) {
            console.log(this.state.images);
            imageList = images.map((image) =>
                <Thumbnail square size={80} source={{uri:image.images.fixed_height_still.url}}/>
            );
        } else {
            imageList = <Text>No image results found</Text>;
        }
        return (
            <Container padder>
                {imageList}
            </Container>
        )
    }
}

AppRegistry.registerComponent('ImageList', () => ImageList);