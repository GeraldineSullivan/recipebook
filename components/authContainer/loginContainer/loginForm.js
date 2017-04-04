/**
 * Created by geraldinesullivan on 04/04/2017.
 *
 * Loginform contained inside LoginContainer.
 */

import React, { Component } from 'react';
import {TextInput, Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';

class LoginForm extends Component{
    render() {
        return(
            //in Android, there is an underline inside TextInputs by default. Must set to (0,0,0,0) to make invisible
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


                <View style={styles.rowStyle}>
                    <Text style={styles.text1}>
                        Forgot Password?
                    </Text>
                    <Text style={styles.text2}>
                        Reset
                    </Text>
                </View>

                <TouchableOpacity style={styles.loginContainer}>
                    <Image
                        style ={styles.login}
                        source ={require('./../../../assets/drawables/login_btn.png')}
                    />
                </TouchableOpacity>

                <View style={styles.rowStyle2}>
                    <Text style={styles.text2}>
                        Sign Up
                    </Text>
                    <Text style={styles.divider}>
                        |
                    </Text>
                    <Text style={styles.text1}>
                        Continue as
                    </Text>
                    <Text style={styles.text2}>
                        Guest
                    </Text>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        padding: 30,
        paddingBottom:50

    },

    input: {
        height: 40,
        color: '#5A646D',
        backgroundColor: 'white',
        //distance next object needs to be
        marginBottom: 20,
        //rounded corners
        borderRadius:5,
        //inner text padding
        paddingHorizontal: 15,
        fontFamily: 'gillsans',
        fontSize: 20

    },

    login: {
        //image size must be proportional to source image.
        width: 170,
        height: 51

    },

    loginContainer: {
        //marginTop = distance button is from previous object
        marginTop: 50,
        alignItems: 'center',
        flexGrow: 1,
        paddingBottom:40
    },

    text1: {
        textAlign: 'right',
        paddingRight: 5,
        fontFamily: 'gillsans',
        color: 'white',
        fontSize: 18
    },

    text2: {
        textAlign: 'right',
        paddingRight: 8,
        fontFamily: 'gillsans',
        fontWeight: 'bold',
        color: 'white',
        fontSize: 20
    },

    divider: {
        textAlign: 'right',
        paddingRight: 8,
        fontFamily: 'gillsans',
        fontWeight: 'bold',
        color: '#3BCC53',
        fontSize: 20
    },

    rowStyle:{
        flexDirection: 'row',
        justifyContent: 'flex-end'

    },

    rowStyle2:{
        flexDirection: 'row',
        justifyContent: 'center'

    }

});

export default LoginForm