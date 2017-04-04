/**
 * Created by geraldinesullivan on 03/04/2017.
 */
import React, { Component } from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import LoginForm from './loginForm';

class LoginContainer extends Component{

    render() {
        return(
            <View style={styles.container}>

                <View style={styles.logoContainer}>
                    <Image
                        style={styles.logo}
                        source ={require('./../../../assets/drawables/nibbl_logo.png')}
                    />
                </View>

                <View style={styles.formContainer}>
                    <LoginForm />
                </View>

            </View>

        );
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#43A9D1',

    },
    logo: {
        width: 141,
        height: 43
    },

    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        paddingTop:50
    }

});

export default LoginContainer
