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
        return (
            <View style={{flex:1}}><Text>List of saved images</Text></View>
        )
    }
}

AppRegistry.registerComponent('SavedScreen', () => SavedScreen);