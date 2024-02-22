import React, {useState,useEffect, useMemo} from 'react';
import { Dimensions, StatusBar, StyleSheet, Text, View, TextInput, ScrollView, KeyboardAvoidingView, ActivityIndicator, Keyboard, Touchable, Alert } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as Animatable  from 'react-native-animatable';
import { connect } from 'react-redux';
import { storeUser } from '../Store/user/actions';
import { COLORS } from '../constants/Colors';
import { ASYNC_LOGIN_KEY, SMALL_LOGO_RATIO } from '../constants/Strings';
import { prepLoggedInUserData, storeAsyncData } from '../utils';
import { getLogoDimensions } from '../utils';
import SuccessError from '../screens/SuccessError';
const Login = ({navigation, reduxUser, reduxStoreUser}) => {
    const [apiStatus, setApiStatus] = useState(false);
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [token, settoken] = useState('');
    const [phoneError, setPhoneError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [showAlert1, setshowAlert1] = useState(false);
    const [isError, setisError] = useState(false);
    const [alertTitle,setalertTitle] = useState("");

    const processLogin = async () => {
        if(phone == "1234567890" || password =="A00476517"){
            const loggedInUser = prepLoggedInUserData({"id":"1","name":"Vrushali","email":"sonivrushali1234@gmail.com","phone":"1234567890"});
            reduxStoreUser(loggedInUser);
            storeAsyncData(ASYNC_LOGIN_KEY,loggedInUser);   
        }else{
            alert("Invalid Credentials")
        }
    }

    return (
        <>

<ScrollView style={{minHeight: '100%', backgroundColor: 'white'}} >
<SuccessError
          isVisible={showAlert1}
          error={isError}
          title={alertTitle}
          deleteIconPress={() => {
            setshowAlert1(false)
          }}
        />

        <View style={styles.page}>
        
            <KeyboardAvoidingView>
        <View style={[styles.container, styles.headerSpace]}>
            <StatusBar barStyle="dark-content"/>
            <View style={styles.header}>
                <Animatable.Image animation="bounceIn" duration={1550} source={require('../assets/logo.png')} style={styles.logo} resizeMode={"stretch"}/>
            </View>

            <Animatable.View style={styles.footer} animation="fadeInUpBig" > 
                <Text style={styles.title}>Login</Text>

                <Text style={styles.subtitle}>MobNo: 1234567890</Text>
                <Text style={styles.subtitle}>Pass: A00476517</Text>

                <View style={styles.form}> 
                    <Text style={styles.phone}>Phone Number</Text>
                    <TextInput placeholder="Your Phone Number..." style={styles.input} keyboardType = 'numeric' value={phone} onChangeText={text => setPhone(text)}  />
                    {(phoneError) ? <View><Text style={styles.error}>{phoneError}</Text></View>: <></>}
                    <Text style={styles.phone}>Password</Text>
                    <TextInput placeholder="Your Password" style={styles.input} keyboardType = 'default' value={password} onChangeText={text => setPassword(text)} secureTextEntry={true} />
                    {(passwordError) ? <View><Text style={styles.error}>{passwordError}</Text></View>: <></>}
                </View>
                


                <View >
                    {
                        (!apiStatus)
                        ?
                        <TouchableOpacity style={styles.getstart} onPress={processLogin}>
                        <Text style={styles.getstartText}>Login</Text>
                        </TouchableOpacity>
                        :
                        <TouchableOpacity style={styles.getstart}>
                        <ActivityIndicator size={20} color={COLORS.INDICATORCOLOR} style={styles.indicatorStyle}  />
                        </TouchableOpacity>
                    }
                    
                </View>
            </Animatable.View>

        </View>
        </KeyboardAvoidingView>
       
        </View>   
        </ScrollView>     
        </>
    )
}
 

const LogoDimension = getLogoDimensions(SMALL_LOGO_RATIO);

const styles = StyleSheet.create({
    link: {
        fontWeight: 'bold',
        color:'#2f746f'
     },
     link2: {
        color:'#2f746f'
     },
    sectionHeight: {
        marginTop: '10%'
    },
    ac:{
        alignItems: 'center'
    },
    ar: {
        alignItems: 'flex-end'
    },
    col: {
        flex: 1
    },
    row: {
        flexDirection: 'row'
    },
    error: {
        color: '#f00',
        top: -20,
        marginLeft: 15
    },
    page: {
        flex:1,
        backgroundColor: '#fff',
        
    },
    headerSpace:{
    
        paddingTop: 60
    },
    container:{
        flex:1,
        backgroundColor:'#fff',
        height: '100%'
    },
    header:{
        flex:4,
        justifyContent:'center',
        alignItems:'center'
    },
    footer:{
        flex:4.5,
        backgroundColor:'#fff',
        borderTopLeftRadius:50,
        borderTopRightRadius:50,
        paddingVertical:30,
        paddingHorizontal:50,
    },
    logo:{
        width:LogoDimension.LogoWidth,
        height:LogoDimension.LogoHeight,
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
        color:'#2f746f'
    },
    form:{
        paddingVertical:20,
    },
    phone:{
        
        fontWeight:'600',
        color:'#2f746f',

    },
    input:{
        height: 50, 
        width: "100%", 
        borderColor: '#2f746f', 
        borderWidth: .5,  
        marginBottom: 20,
        paddingLeft:10,
        borderRadius:20,
        color:'#2f746f',
    },
    getstart:{
        alignItems:'center',
        backgroundColor:'#2f746f',
        marginLeft:40,
        marginRight:40,
        borderRadius:50,
        
    },
    getstartText:{
        color:'white',
        paddingVertical:13,
        fontSize:16,
        fontWeight:'600',
    },
    indicatorStyle: {
       
        paddingVertical:13,
           }
    
})

const mapStateToProps = state => {
    return {
        reduxUser : state.user
    };
}

const mapDispatchToProps = dispatch => {
    return {
        reduxStoreUser : loggedinUser => dispatch(storeUser(loggedinUser))
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);
