/**
 * Created by geraldinesullivan on 03/04/2017.
 */
import React, { Component } from 'react';
import {
    StyleSheet, Text, View, Image
} from 'react-native'

class AuthContainer extends Component{
    constructor (props){
        super(props);
        this.state ={
            isAuth: false,
        };
    }
    render(){
        return (

                !this.state.isAuth?
                    //User Not Authenticated
                    <LogInContainer />
                    :
                    //User Is Authenticated
                    <Text>
                        Is Auth
                    </Text>

        )
    }

}

export default AuthContainer