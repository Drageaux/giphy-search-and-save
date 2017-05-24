import React, {Component} from "react";
import {
    AppRegistry,
    View,
    Image
} from "react-native";
import {
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
            imageList = images.map((image, index) =>
                <Image style={styles.img}
                       key={index}
                       source={{uri:image.images.fixed_height.url}}/>);
        } else {
            imageList = <Text>No image results found</Text>;
        }
        return (
            <Content padder>
                <View style={styles.grid}>
                    {imageList}
                </View>
            </Content>
        )
    }
}


const styles = {
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    img: {
        width: 100,
        height: 100,
        justifyContent: 'center',
    }
};

AppRegistry.registerComponent('ImageList', () => ImageList);