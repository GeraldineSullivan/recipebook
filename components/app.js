/**
 * Created by geraldinesullivan on 16/03/2017.
 */

//commit common code here for single code base.

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import SplashScreen from './splashScreen/splashScreen'

class App extends Component{
    render(){
        return(
            //splash screen wraps around content
            <SplashScreen duration = {3000} logo ={require('./../assets/logo/splash.png')}
                     backgroundColor ={styles.splashScreenContainer}>
                <View style={styles.container}>
                    <Text style={styles.welcome}>
                        Success!
                    </Text>
                </View>
            </SplashScreen>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    //background colour for the splashscreen
    splashScreenContainer:{
        backgroundColor: '#5A646D'
    }

});

export default App;