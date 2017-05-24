import React, {Component} from "react";
import {
    AppRegistry,
    Dimensions,
    StyleSheet,
    StatusBar,
    Platform,
    View
} from "react-native";
import Expo from "expo";
import {
    StyleProvider,
    Container,
    Header,
    Footer,
    FooterTab,
    Body,
    Button,
    Title,
    Icon,
    Text
} from "native-base";
import getTheme from "./native-base-theme/components";
import commonColor from "./native-base-theme/variables/commonColor";
import SearchScreen from "./components/SearchScreen";
import SavedScreen from "./components/SavedScreen";

const window = Dimensions.get('window');


export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fontsAreLoaded: false,
            tab1: true,
            tab2: false,
            title: 'Search'
        };
    }

    toggleTab1() {
        this.setState({
            tab1: true,
            tab2: false,
            title: 'Search'
        });
    }

    toggleTab2() {
        this.setState({
            tab1: false,
            tab2: true,
            title: 'Saved Images'
        });
    }

    async componentWillMount() {
        await Expo.Font.loadAsync({
            'Roboto': require('native-base/Fonts/Roboto.ttf'),
            'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
        });

        this.setState({fontsAreLoaded: true});
    }

    render() {
        let ScreenComponent = null;
        if (!this.state.fontsAreLoaded) {
            return <Expo.AppLoading />;
        }
        if (this.state.tab1) {
            ScreenComponent = SearchScreen;
        } else if (this.state.tab2) {
            ScreenComponent = SavedScreen;
        }
        return (
            <StyleProvider style={getTheme(commonColor)}>
                <View style={styles.container}>
                    <View style={styles.statusBar}>
                        <StatusBar backgroundColor='#AD4047' barStyle='light-content'/>
                    </View>
                    <Header searchBar noShadow noBorder>
                        <Body>
                        <Title>{this.state.title}</Title>
                        </Body>
                    </Header>

                    <ScreenComponent></ScreenComponent>

                    <Footer>
                        <FooterTab>
                            <Button active={this.state.tab1} onPress={() => this.toggleTab1()}>
                                <Icon name='ios-search'/>
                                <Text>Search</Text>
                            </Button>
                            <Button active={this.state.tab2} onPress={() => this.toggleTab2()}>
                                <Icon name='photos'/>
                                <Text>Saved</Text>
                            </Button>
                        </FooterTab>
                    </Footer>
                </View>
            </StyleProvider>
        )
    }
}


const Colors = {
    RED: '#FF615C',
    DARKRED: '#AD4047',
};
const STATUSBAR_HEIGHT = Expo.Constants.statusBarHeight;
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    statusBar: {
        backgroundColor: Colors.DARKRED,
        height: STATUSBAR_HEIGHT
    }
});

AppRegistry.registerComponent('App', () => App);