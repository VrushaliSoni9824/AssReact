import React, {useState, useEffect, useCallback} from "react";
import { StyleSheet, Text, RefreshControl, View, Image, FlatList,ScrollView, ActivityIndicator, Pressable,useWindowDimensions, Dimensions, Animated, Images } from 'react-native'
import MemberHeader from "../common/MemberHeader";
import { updateWallet } from '../Store/user/actions';
import { SafeAreaView } from "react-native-safe-area-context";


const Screen2 = () => {

    const { width, height } = useWindowDimensions();
    const onRefresh = useCallback(() => {
        setRefreshing(true);
        updateWallet();
        setTimeout(() => {
          setRefreshing(false);
        }, 2000);
      }, []);

    return (
        <SafeAreaView style={{ flex: 1, }}>
        <View>
            <MemberHeader title="Purie 2"/> 
        </View>
        </SafeAreaView>
    )
}

export default Screen2;

