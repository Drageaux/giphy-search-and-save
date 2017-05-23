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
    StyleProvider,
    Container,
    Header,
    Body,
    Button,
    Title,
    Left,
    Right,
    Icon
} from "native-base";
import getTheme from "./native-base-theme/components";
import commonColor from "./native-base-theme/variables/commonColor";


const window = Dimensions.get('window');


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
            <StyleProvider style={getTheme(commonColor)}>
                <Container>
                    <View style={styles.statusBar}>
                        <StatusBar backgroundColor='#AD4047' barStyle="light-content"/>
                    </View>
                    <Header>
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
            </StyleProvider>
        )
    }
}


const Colors = {
    BACKGROUND: '#FFF',
    SHADOW: '#000000',
    RED: '#FF615C',
    DARKRED: '#AD4047',
};
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight;
const styles = StyleSheet.create({
    statusBar: {
        backgroundColor: Colors.DARKRED,
        height: STATUSBAR_HEIGHT,
    }
});

AppRegistry.registerComponent('App', () => App);