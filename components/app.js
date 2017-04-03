/**
 * Created by geraldinesullivan on 16/03/2017.
 */

//you must commit common code here for single code base. This will work on both ios and android.

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
            <SplashScreen duration = {3000} logo ={require('.././assets/logo/splash.png')}
                     backgroundColor ={styles.splashScreenContainer}>
                <View style={styles.container}>

                    <Text style={styles.welcome}>
                        Yay Success!
                        Custom font is working :D!

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
        fontFamily: 'gillsans',
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