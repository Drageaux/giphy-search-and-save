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
    Content,
    Footer,
    FooterTab,
    Body,
    Button,
    Title,
    Item,
    Input,
    Icon,
    Text
} from "native-base";
import getTheme from "./native-base-theme/components";
import commonColor from "./native-base-theme/variables/commonColor";


const window = Dimensions.get('window');

class SearchScreen extends React.Component {
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
class SavedScreen extends React.Component {
    render() {
        return <Text>List of saved images</Text>
    }
}


export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tab1: true,
            tab2: false,
        };
    }

    toggleTab1() {
        this.setState({
            tab1: true,
            tab2: false,
        });
    }

    toggleTab2() {
        this.setState({
            tab1: false,
            tab2: true,
        });
    }

    state = {
        fontsAreLoaded: false,
    };

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
                    <Header searchBar>
                        <Body>
                        <Title>Search</Title>
                        </Body>
                    </Header>

                    <Content>
                    </Content>

                    <Footer>
                        <FooterTab>
                            <Button active={this.state.tab1} onPress={() => this.toggleTab1()}>
                                <Icon name="ios-search"/>
                                <Text>Search</Text>
                            </Button>
                            <Button active={this.state.tab2} onPress={() => this.toggleTab2()}>
                                <Icon name="photos"/>
                                <Text>Saved</Text>
                            </Button>
                        </FooterTab>
                    </Footer>
                </Container>
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
    statusBar: {
        backgroundColor: Colors.DARKRED,
        height: STATUSBAR_HEIGHT
    }
});

AppRegistry.registerComponent('App', () => App);