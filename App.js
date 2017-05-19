import React from "react";
import {AppRegistry, Dimensions, StyleSheet, Text, StatusBar, Platform} from "react-native";
import {StyleProvider} from "@shoutem/theme";
import {Card, Image, View, Subtitle, Caption} from "@shoutem/ui";
import {Constants, Font, AppLoading} from "expo";


const window = Dimensions.get('window');

const Colors = {
    BACKGROUND: '#ffffff',
    SHADOW: '#000000',
};

const MEDIUM_GUTTER = 15;

const theme = {
    'shoutem.ui.View': {
        '.h-center': {
            alignItems: 'center',
        },

        '.v-center': {
            justifyContent: 'center',
        },

        '.flexible': {
            flex: 1,
        },

        flexDirection: 'column',
    },

    'shoutem.ui.Card': {
        'shoutem.ui.View.content': {
            'shoutem.ui.Subtitle': {
                marginBottom: MEDIUM_GUTTER,
            },

            flex: 1,
            alignSelf: 'stretch',
            padding: 10,
        },

        width: (180 / 375) * window.width,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: Colors.BACKGROUND,
        borderRadius: 2,
        shadowColor: Colors.SHADOW,
        shadowOpacity: 0.1,
        shadowOffset: {width: 1, height: 1},
    },

    'shoutem.ui.Image': {
        '.medium-wide': {
            width: (180 / 375) * window.width,
            height: 85,
        },

        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        resizeMode: 'cover',
        backgroundColor: Colors.BACKGROUND,
    },
};


export default class App extends React.Component {
    state = {
        fontsAreLoaded: false,
    }

    async componentWillMount() {
        await Font.loadAsync({
            'Rubik-Black': require('./node_modules/@shoutem/ui/fonts/Rubik-Black.ttf'),
            'Rubik-BlackItalic': require('./node_modules/@shoutem/ui/fonts/Rubik-BlackItalic.ttf'),
            'Rubik-Bold': require('./node_modules/@shoutem/ui/fonts/Rubik-Bold.ttf'),
            'Rubik-BoldItalic': require('./node_modules/@shoutem/ui/fonts/Rubik-BoldItalic.ttf'),
            'Rubik-Italic': require('./node_modules/@shoutem/ui/fonts/Rubik-Italic.ttf'),
            'Rubik-Light': require('./node_modules/@shoutem/ui/fonts/Rubik-Light.ttf'),
            'Rubik-LightItalic': require('./node_modules/@shoutem/ui/fonts/Rubik-LightItalic.ttf'),
            'Rubik-Medium': require('./node_modules/@shoutem/ui/fonts/Rubik-Medium.ttf'),
            'Rubik-MediumItalic': require('./node_modules/@shoutem/ui/fonts/Rubik-MediumItalic.ttf'),
            'Rubik-Regular': require('./node_modules/@shoutem/ui/fonts/Rubik-Regular.ttf'),
            'rubicon-icon-font': require('./node_modules/@shoutem/ui/fonts/rubicon-icon-font.ttf'),
        });

        this.setState({fontsAreLoaded: true});
    }

    render() {
        if (!this.state.fontsAreLoaded) {
            return <AppLoading />;
        }
        return (
            <StyleProvider style={theme}>
                {/*<View style={styles.container}>*/}
                {/*<View style={styles.statusBar}>*/}
                {/*<StatusBar backgroundColor='#AD4047' barStyle="light-content"/>*/}
                {/*</View>*/}
                {/*<NavigationBar leftComponent={<Icon name='sidebar'/>}*/}
                {/*centerComponent={<Title>TITLE</Title>}/>*/}
                {/*<View style={styles.content}/>*/}
                {/*</View>*/}
                <View styleName="flexible vertical v-center h-center">
                    <Card>
                        <Image
                            styleName="medium-wide"
                            source={{uri: 'http://shoutem.github.io/img/ui-toolkit/examples/image-12.png'}}
                        />
                        <View styleName="content">
                            <Subtitle numberOfLines={4}>
                                Lady Gaga Sings National Anthem at Super Bowl 50
                            </Subtitle>
                            <Caption>21 hours ago</Caption>
                        </View>
                    </Card>
                </View>
            </StyleProvider>
        )
    }
}


const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : Constants.statusBarHeight;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;
const APPBAR_MARGIN_TOP = Platform.OS === 'ios' ? 0 : Constants.statusBarHeight;
console.log(STATUSBAR_HEIGHT, APPBAR_HEIGHT, APPBAR_MARGIN_TOP)


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    statusBar: {
        backgroundColor: '#AD4047',
        height: 20,
    },
    appBar: {
        backgroundColor: '#FF615C',
        height: 56,
        marginTop: APPBAR_MARGIN_TOP
    },
    content: {
        flex: 1
    },
});

// connect the component to the theme
AppRegistry.registerComponent('App', () => App);