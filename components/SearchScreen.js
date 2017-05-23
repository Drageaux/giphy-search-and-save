import React, {Component} from "react";
import {
    AppRegistry,
    Dimensions,
    StyleSheet,
    StatusBar,
    Platform,
    View
} from "react-native";
import {
    Container,
    Header,
    Item,
    Input,
    Icon,
    Text
} from "native-base";

export default class SearchScreen extends React.Component {
    render() {
        return (
            <Container>
                <Header searchBar rounded>
                    <Item>
                        <Icon name="ios-search"/>
                        <Input placeholder="Search"/>
                    </Item>
                </Header>
                <Text>Search page</Text>
            </Container>
        )
    }
}

AppRegistry.registerComponent('SearchScreen', () => SearchScreen);