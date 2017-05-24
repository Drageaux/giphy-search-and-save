import React, {Component} from "react";
import {
    AppRegistry,
    Dimensions,
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
            <Content>
                <View style={styles.gridContainer}>
                    <View style={styles.grid}>
                        {imageList}
                    </View>
                </View>
            </Content>
        )
    }
}


const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
const styles = {
    gridContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    grid: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
    },
    img: {
        width: (deviceWidth / 3)-2,
        height: (deviceWidth / 3)-2,
        justifyContent: 'center',
        marginRight: 1,
        marginLeft: 1
    }
};

AppRegistry.registerComponent('ImageList', () => ImageList);