import AsyncStorage from "@react-native-async-storage/async-storage";
import { Dimensions } from "react-native";
import { API_LINK, API_LINK_BANGLORE, ASYNC_LOGIN_KEY, LOCATION1, MEDIA_LINK, STR_LOCATION, STR_BASEURL, STR_MEDIA_LINK, STR_CAT_MEDIA_LINK, CAT_MEDIA_LINK } from "../constants/Strings";
import {useSelector, useDispatch} from 'react-redux';
export function prepLoggedInUserData (user)
{
    console.log('UTIL',user);

    var loginData = {
        name: user.name,
        email: user.email,
        phone: user.phone,
        userId: user.id
    };
    return loginData;
}

export const storeAsyncData = async(key,value) => {
    try{
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem(key, jsonValue);
        console.log('Data Stored');
    }
    catch (e)
    {
        console.log('Error Storing Async Data',e);
    }
}

export const getAsyncData = async (key) => {
    try {
        const jsonValue =  await AsyncStorage.getItem(key);
        return jsonValue;
    }
    catch (e) 
    {
        console.log('Error Reading VAlue');
    }
}

export const getLogoDimensions = (n) => {
    const {height} = Dimensions.get("screen"); 
    const logoWidth = 1402;
    const logoHeight = 1251;
    const height_logo = height *0.6* parseFloat(n);
    const width_logo = parseInt(logoWidth) / parseInt(logoHeight) * parseInt(height_logo);

    return {
        LogoHeight: height_logo,
        LogoWidth: width_logo
    }
}

export const clearAsyncData = async (key) => {
    try {
      await AsyncStorage.removeItem(key)
    } catch(e) {
      // remove error
    }
  
    console.log('Done.')
  }
  
