import React, {Component} from "react";
import {AppRegistry} from "react-native";
import {
    Container,
    Grid,
    Col,
    Thumbnail,
    Text,
    List
} from "native-base";

export default class ImageList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let images = this.props.images;
        let imageList = null;
        if (images && images.length > 0) {
            let imageList = images.map((image) =>
                <Thumbnail square size={80} source={require(image.fixed_height_still.url)}/>
            );
        } else {
            let imageList = <Text>No image results found</Text>;
        }
        return (
            <Container padder>
                <Grid>
                    <Col style={{ backgroundColor: '#fff', height: 200 }}></Col>
                </Grid>
                <List>{imageList}</List>
            </Container>
        )
    }
}

AppRegistry.registerComponent('ImageList', () => ImageList);