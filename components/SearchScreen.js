import React, {Component} from "react";
import {
    AppRegistry,
    View,
    ScrollView,
    FlatList
} from "react-native";
import {
    Header,
    Item,
    Input,
    Spinner
} from "native-base";
import ImageList from "./ImageList";

const giphyUrl = 'https://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&rating=pg&limit=20&q=';

export default class SearchScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            images: [],
        }
    }

    render() {
        let myContent = null;
        if (this.state.loading) {
            myContent = <Spinner color="#FF615C"/>;
        } else {
            myContent = <ImageList images={this.state.images}/>;
        }

        return (
            <View style={{flex:1}}>
                <Header searchBar noShadow noBorder>
                    <Item>
                        <Input placeholder='enter keyword...'
                               onSubmitEditing={(event)=> this.getImages(event.nativeEvent.text)}/>
                    </Item>
                </Header>

                {myContent}
            </View>
        )
    }

    async getImages(query: string) {
        this.setState({loading: true});
        try {
            let url = giphyUrl + query;
            let response = await fetch(url);
            let body = await response.json();

            await body;
            this.setState({loading: false});
            this.setState({images: body.data});
            console.log("data downloaded");
        }
        catch (e) {
            this.setState({loading: false});
        }
    }
}

AppRegistry.registerComponent('SearchScreen', () => SearchScreen);