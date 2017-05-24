import React, {Component} from "react";
import {AppRegistry} from "react-native";
import {
    Row,
    Grid
} from "react-native-easy-grid";
import {
    Thumbnail,
    Text,
    Content
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
            imageList =
                images.map((image, index) =>
                    <Row key={image.id} style={{height: 200}}>
                        <Thumbnail square
                                   source={{uri:image.images.original.url}}/>
                    </Row>
                );
            imageList = <Grid>{imageList}</Grid>
        } else {
            imageList = <Text>No image results found</Text>;
        }
        return (
            <Content padder>
                {imageList}
            </Content>
        )
    }
}

AppRegistry.registerComponent('ImageList', () => ImageList);