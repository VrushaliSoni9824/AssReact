import React,{useState,useEffect} from 'react';
import { NavigationContainer, useFocusEffect } from '@react-navigation/native';
import { DrawerNavigation, Navigation } from './src/navigation';
import { connect } from 'react-redux';
import FlashMessage from 'react-native-flash-message';

const App = ({reduxUser}) => {

   return(
     <NavigationContainer>
       {(!reduxUser.isLoggedIn) ?
           <Navigation/>  
        :
          <DrawerNavigation />
       }
      <FlashMessage />
     </NavigationContainer>
   )
 }


const mapStateToProps = state => {
  return {
    reduxUser : state.user
  };
}

export default connect(mapStateToProps)(App);