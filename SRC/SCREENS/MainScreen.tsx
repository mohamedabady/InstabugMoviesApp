import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import MainScreenButton from '../Components/MainScreenButton';
import { MainScreenImages } from '../constants';

const MainScreen: React.FC = ({ navigation }) => {
  return (<SafeAreaView style={styles.container}>
    <Text style={{fontSize:40}}>The Movies App</Text>
    <MainScreenButton backgroundImage={MainScreenImages.allMoviesImage} title={'All Movies'} onPress={() => navigation.navigate('AllMovies')} />
    <MainScreenButton backgroundImage={MainScreenImages.myMoviesImage} title={'My Movies'} onPress={() => navigation.navigate('MyMovies')} />
  </SafeAreaView>);
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'space-evenly',
    alignItems: 'center'
  }
})

export default MainScreen;