/**
 * Created by geraldinesullivan on 16/03/2017.
 */
import React, { Component } from 'react';
import {
    StyleSheet, Text, View, Image, Animated, Easing
} from 'react-native'

class SplashScreen extends Component{

    componentWillMount(){
        this.animatedValue = new Animated.Value(1)
}

    constructor(props){
        super(props);

        this.state ={
            done: false
        }
    }

    timer(){
        setTimeout(() =>{
            this.setState({
                done: true

            });
        }, this.props.duration || 1000)

    }

    componentDidMount(){
        this.timer();
    }


    render(){
        const animatedStyle = { opacity: this.animatedValue}
        return(
            this.state.done ?
                //if done, show all that is nested
                ({...this.props.children})
                :
                (
                //Display Splash Screen
                <Animated.View style = {[styles.container, this.props.backgroundColor]} >
                    <Image style={styles.logo}  source = {this.props.logo}/>
                </Animated.View>)
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 141,
        height: 43
    }

});

export default SplashScreen