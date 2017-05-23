import React, {Component} from "react";
import {AppRegistry} from "react-native";
import {
    Container,
    Header,
    Item,
    Input,
    Spinner
} from "native-base";
import ImageList from "./ImageList";

const giphyUrl = 'https://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&rating=pg&limit=100&q=';

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
            myContent = <Spinner/>;
        } else {
            myContent = <ImageList images={this.state.images}/>;
        }

        return (
            <Container padder>
                <Header searchBar rounded noShadow>
                    <Item>
                        <Input placeholder='enter keyword...'
                               onSubmitEditing={(event)=> images = this.getImages(event.nativeEvent.text)}/>
                    </Item>
                </Header>
                {myContent}
            </Container>
        )
    }

    async getImages(query: string) {
        this.setState({loading:true});

        let url = giphyUrl + query;
        let response = await fetch(url);
        let body = await response.json();

        this.setState({loading:false});
        console.log(body);
        return body;
    }

}

AppRegistry.registerComponent('SearchScreen', () => SearchScreen);