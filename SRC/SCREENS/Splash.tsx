import React, { useEffect } from 'react';
import { SafeAreaView, Text, Image, StyleSheet } from 'react-native';

const Splash: React.FC = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('MainScreen');
      navigation.reset({
        index: 0,
        routes: [{ name: 'MainScreen' }],
      });
    }, 1000)
  });


  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={require('../Assets/splash2.png')} />
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
    width: '200%',
    height: '200%'
  }
})

export default Splash;