import React, {Component} from "react";
import {
    AppRegistry,
    Dimensions,
    StyleSheet,
    StatusBar,
    Platform,
    View
} from "react-native";
import {Text} from "native-base";

export default class SavedScreen extends React.Component {
    render() {
        return <Text>List of saved images</Text>
    }
}

AppRegistry.registerComponent('SavedScreen', () => SavedScreen);