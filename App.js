import React, {Component} from "react";
import {
    AppRegistry,
    Dimensions,
    StyleSheet,
    Text,
    StatusBar,
    Platform,
    View
} from "react-native";
import Expo from "expo";
import {
    Container,
    Header,
    Body,
    Button,
    Title,
    Left,
    Right,
    Icon
} from "native-base";


const window = Dimensions.get('window');

const Colors = {
    BACKGROUND: '#FFF',
    SHADOW: '#000000',
    RED: '#FF615C',
    DARKRED: '#AD4047',
};


export default class App extends Component {
    state = {
        fontsAreLoaded: false,
    }

    async componentWillMount() {
        await Expo.Font.loadAsync({
            'Roboto': require('native-base/Fonts/Roboto.ttf'),
            'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
        });

        this.setState({fontsAreLoaded: true});
    }

    render() {
        if (!this.state.fontsAreLoaded) {
            return <Expo.AppLoading />;
        }
        return (
            <Container>
                <View style={styles.statusBar}>
                    <StatusBar backgroundColor='#AD4047' barStyle="light-content"/>
                </View>
                <Header style={StyleSheet.flatten(styles.appBar)}>
                    <Left>
                        <Button transparent>
                            <Icon name='arrow-back'/>
                        </Button>
                    </Left>
                    <Body>
                    <Title>Header</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon name='menu'/>
                        </Button>
                    </Right>
                </Header>
            </Container>
        )
    }
}


const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : Expo.Constants.statusBarHeight;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;
const APPBAR_MARGIN_TOP = Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight;
console.log(STATUSBAR_HEIGHT, APPBAR_HEIGHT, APPBAR_MARGIN_TOP);


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    statusBar: {
        backgroundColor: Colors.DARKRED,
        height: STATUSBAR_HEIGHT,
    },
    appBar: {
        backgroundColor: Colors.RED,
        height: APPBAR_HEIGHT,
        // marginTop: APPBAR_MARGIN_TOP
    },
    content: {
        flex: 1
    }
});

AppRegistry.registerComponent('App', () => App);