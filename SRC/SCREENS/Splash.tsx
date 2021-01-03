import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, Image, StyleSheet } from 'react-native';
import * as Progress from 'react-native-progress';
import { Colors } from '../constants';

const Splash: React.FC = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [{ name: 'MainScreen' }],
      });
    }, 3000)
  });


  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={require('../Assets/splash3.png')} />
      <Progress.Bar
        animated={true}
        color={Colors.mainColorRed}
        borderColor={Colors.mainColorRedDark}
        //progress={progress}
        width={200}
        indeterminate={true}
        indeterminateAnimationDuration={3000}
        useNativeDriver={true}
        animationType='spring'
        height={15} />
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  image: {
    resizeMode: 'contain',
    width: '50%',
    height: '50%'
  }
})

export default Splash;