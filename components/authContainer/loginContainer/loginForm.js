/**
 * Created by geraldinesullivan on 04/04/2017.
 *
 * Loginform contained inside LoginContainer.
 */

import React, { Component } from 'react';
import {TextInput, View, StyleSheet, Image, TouchableOpacity} from 'react-native';

class LoginForm extends Component{
    render() {
        return(
            //in Android, there is an underline inside TextInputs by default. Must set to (0,0,0,0,) to make invisible
            //You can add a placeholder to tell the user what to input. Added light grey to this text.
            //I've used Touchable Opacity for the login button below. Blinks when clicked.

            <View style={styles.container}>
                <TextInput
                    placeholder="username"
                    placeholderTextColor= "#DDDDDD"
                    underlineColorAndroid='rgba(0,0,0,0)'
                    style={styles.input}
                />

                <TextInput
                    placeholder="password"
                    placeholderTextColor= "#DDDDDD"
                    underlineColorAndroid='rgba(0,0,0,0)'
                    style={styles.input}
                />

                <TouchableOpacity style={styles.loginContainer}>
                    <Image
                        style ={styles.login}
                        source ={require('./../../../assets/drawables/login_btn.png')}
                    />
                </TouchableOpacity>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        padding: 30,
        paddingBottom: 150
    },

    input: {
        height: 40,
        color: '#5A646D',
        backgroundColor: 'white',
        marginBottom: 20,
        paddingHorizontal: 10,
        fontFamily: 'gillsans',
        fontSize: 20

    },

    login: {
        width: 170,
        height: 51

    },

    loginContainer: {
        alignItems: 'center',
        flexGrow: 1,
        paddingBottom:40
    }

});

export default LoginForm