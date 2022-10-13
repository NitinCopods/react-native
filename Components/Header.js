import React from 'react'
import { Text, View, StyleSheet, Dimensions } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
         <Text style={{color:'white', fontSize:'17px', fontWeight:'600'}}>Learn Investing</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    header:{
      width: Dimensions.get('screen').width,
      display:'flex',
      textAlign:'center',
      top:0,
      paddingVertical:13,
      backgroundColor:'#5f259f',
      color:'white',
      zIndex:99,
      position:'sticky'
    }
  });