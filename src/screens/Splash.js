import React, {useState, useEffect} from 'react';
import { Dimensions, StatusBar, StyleSheet, Text, View, ActivityIndicator,ScrollView, Linking } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as Animatable  from 'react-native-animatable';
import { LOGINSCREEN } from '../constants/Screens';
import { connect } from 'react-redux';
import { storeUser } from '../Store/user/actions';
import { getAsyncData, getLogoDimensions } from '../utils';
import {  ASYNC_LOGIN_KEY, BIG_LOGO_RATIO } from '../constants/Strings';

const Splash = ({navigation, reduxUser, storeUser}) => {
    const [action, setaction] = useState(LOGINSCREEN);
    const [isLoggedIn, setIsLoggedIn] = useState(reduxUser.isLoggedIn);
    const checkLoggedInUser = async () => {
        if(isLoggedIn == false)
        {
            getAsyncData(ASYNC_LOGIN_KEY).then((asUser) => {
                if(asUser !== null)
                {
                    console.log('ASYNC USER',JSON.parse(asUser));
                    var temp = JSON.parse(asUser);

                    if(temp.hasOwnProperty('name') && temp.name != '')
                    {                
                        storeUser(asPUser);
                        setIsLoggedIn(true);
                    }
                    else{
                        setIsLoggedIn(false);
                    }
                }
            });
            setAppInit(true);
        }
        else{
            setAppInit(true);
        }
    }

    const goToAction = () => {
        navigation.replace(action);
    }    
    return (
        <View style={styles.containers}>
            <View style={styles.container}>
                <StatusBar barStyle="dark-content"/>
                        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                            <View style={styles.header}>
                                <Animatable.Image animation="bounceIn" duration={1550} source={require('../assets/no-image.png')} style={styles.logo} resizeMode={"stretch"}/>
                                <Animatable.View style={styles.footer} animation="fadeInUpBig" > 
                                <Text style={styles.title}> Assignment 2</Text>
                                <Text style={styles.subtitle}>Welcome To Vrushali's Dev. Room</Text>
                                <View style={styles.getstart}>
                                <TouchableOpacity onPress={goToAction}>
                                    <Text style={styles.getstartText}>Start Now</Text>
                                </TouchableOpacity>
                                </View>
                            </Animatable.View>
                            </View>
                        </View>
            </View>
        </View>
    )
}
const LogoDimension = getLogoDimensions(BIG_LOGO_RATIO);

//console.log('DIM',height_logo+'--'+width_logo);
const styles = StyleSheet.create({
    containers:{
        flex:1,
        backgroundColor:'#fff',
    },
    container:{
        flex:1,
        backgroundColor:'#fff',
    },
    header:{
        flex: 1,
        // paddingVertical:100,
        justifyContent:'center',
        alignItems:'center'
    },
    footer:{
        // flex: 1,
        backgroundColor:'#fff',
        borderTopLeftRadius:50,
        borderTopRightRadius:50,
        paddingVertical:30,
        paddingHorizontal:50,
    },
    logo2:{
        width: 300,
        height: 300,
        resizeMode: 'contain'
    },
    logo:{
        width:LogoDimension.LogoWidth,
        height:LogoDimension.LogoHeight,
        marginBottom: 50
    },
    title:{
        color:'#2f746f',
        fontSize:30,
        fontWeight:'bold',
        textAlign:'center',
        
    },
    subtitle:{
        paddingVertical:10,
        textAlign:'center',
        fontSize:17,
        color:'#2f746f',
    },
    getstart:{
        alignItems:'center',
        backgroundColor:'#2f746f',
        marginLeft:40,
        marginRight:40,
        borderRadius:50,
        marginTop:50,
        
    },
    getstartText:{
        color:'white',
        padding:16,
        fontSize:18,
        fontWeight:'600',
    }
    
})

const mapStateToProps = state => {
    return {
        reduxUser: state.user
    };
}

const mapDispatchToProps = dispatch => {
    return {
        storeUser : (asyncUser) => dispatch(storeUser(asyncUser)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Splash);
