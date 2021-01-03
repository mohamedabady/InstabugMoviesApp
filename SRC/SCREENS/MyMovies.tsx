import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, FlatList, Alert, Text, StyleSheet, StatusBar } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MovieCard from '../Components/MovieCard';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Colors } from '../constants';

const MyMovies: React.FC = ({ navigation }) => {
  const [myMovies, setMyMovies] = useState([]);
  const getMyMovies = async () => {
    try {
      const jsonMoviesValue = await AsyncStorage.getItem('MyMovies');
      jsonMoviesValue != null ? JSON.parse(jsonMoviesValue) : []
      setMyMovies(jsonMoviesValue)
    } catch (e) {
      Alert.alert('Error', 'failed to get data')
    }
  }

  useEffect(() => {
    getMyMovies();
  }, []);

  const renderMovieItem = ({ item }) => {
    return <MovieCard title={item.title} date={item.date} overview={item.overview} poster={item.poster} />
  }
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={{ maxHeight:'80%'}}
        data={myMovies}
        renderItem={renderMovieItem}
        keyExtractor={item => item.id.toString()}
        ListEmptyComponent={<View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Text style={styles.emptyText}>Your Movies List is Empty. Add some movies</Text>
        </View>}
      />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AddMovie')}>
        <Text style={styles.buttonText}>Add Movie</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0
  },
  emptyText: {
    textAlign: 'center',
    width: '80%',
    fontSize: 32,
    color: 'black',
    fontWeight: 'bold'
  },
  button: {
    height: 50,
    width: '50%',
    backgroundColor: Colors.mainColorRedDark,
    borderRadius: 10,
    shadowColor: 'grey',
    shadowOpacity: 0.7,
    shadowOffset: { width: 0, height: 0 },
    elevation: 4,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  },
  buttonText: {
    color: 'white',
    fontSize: 14
  }
})

export default MyMovies;