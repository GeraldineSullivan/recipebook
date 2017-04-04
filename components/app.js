/**
 * Created by geraldinesullivan on 16/03/2017.
 */

//We must commit common code here for single code base. This will work on both ios and android.

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

import SplashScreen from './splashScreen/splashScreen'
import AuthContainer from './authContainer/authContainer'

class App extends Component{
    render(){
        return(
            //Splash Screen wraps around content
            //Splash Screen is called using "require" for logo. Duration 3000 means 3 seconds.
            //background colour of splash screen is called from SplashScreenContainer - style at bottom of page.
            <SplashScreen duration = {3000} logo ={require('.././assets/logo/splash.png')}
                          backgroundColor ={styles.splashScreenContainer}>

                <AuthContainer>

                </AuthContainer>

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

    // This is how you need to call the custom fonts.
    welcome: {
        fontFamily: 'gillsans',
        // If using elsewhere, please do not put any font weight (remove line) if you need the "regular" Gill Sans font.
        // Other weights that I've made available are "light" and "semibold"
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center',
        margin: 10,
    },

    //background colour for the splash screen
    splashScreenContainer:{
        backgroundColor: '#5A646D'
    }



});

export default App;