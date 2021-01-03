import React, { useState } from 'react';
import { View, SafeAreaView, Text, StyleSheet, StatusBar, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Colors } from '../constants';
import DatePicker from 'react-native-datepicker'
import { launchImageLibrary } from 'react-native-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AddMovie: React.FC = ({ navigation }) => {
  const [moviePoster, setMoviePoster] = useState(null);
  const [movieName, setMovieName] = useState(null);
  const [movieReleaseDate, setMovieReleaseDate] = useState(null);
  const [movieOverview, setMovieOverview] = useState(null);

  const saveMovieToAsyncStorage = async (value) => {
    try {
      let jsonAllMoviesValue = await AsyncStorage.getItem('MyMovies');
      debugger;
      if (jsonAllMoviesValue === null) {
        jsonAllMoviesValue = [];
      } else {
        jsonAllMoviesValue = JSON.parse(jsonAllMoviesValue)
      }
      jsonAllMoviesValue.push(value);
      const stringValue = JSON.stringify(jsonAllMoviesValue);
      await AsyncStorage.setItem('MyMovies', stringValue);
    } catch (e) {
      Alert.alert('Error saving Movie', 'Try Again Later !!!');
    }
  }

  const onImagePickerOpen = () => {
    launchImageLibrary({}, (response) => {
      setMoviePoster(response.uri);
    })
  }

  const onSaveMoviePressed = () => {
    let isValid = moviePoster != null && movieName != null && movieReleaseDate != null && movieOverview != null;
    if (isValid) {
      let movie = {
        id: Math.random() + movieName,
        title: movieName,
        date: movieReleaseDate,
        overview: movieOverview,
        poster: moviePoster
      };
      saveMovieToAsyncStorage(movie).then(() => navigation.navigate('MyMovies'));
    } else {
      Alert.alert('Missing Information', 'Please complete all movie data with no plain fields.');
    }
  }

  const renderTextInput = (label, placeholder, onChange, value) => {
    return (
      <View style={{ padding: 12 }}>
        <Text style={{ fontSize: 14, color: Colors.mainColorRedDark, fontWeight: 'bold', marginBottom: 4 }}>{label}</Text>
        <TextInput
          style={{ borderWidth: 2, borderRadius: 5, borderColor: Colors.mainColorRedDark, paddingHorizontal: 14 }}
          value={value}
          placeholder={placeholder}
          onChangeText={text => onChange(text)}
        />
      </View>
    )
  }

  const renderDatePicker = () => {
    return (
      <View style={{ padding: 12 }}>
        <Text style={{ fontSize: 14, color: Colors.mainColorRedDark, fontWeight: 'bold', marginBottom: 4 }}>Movie Release Date</Text>
        <DatePicker
          style={{ width: '100%' }}
          date={movieReleaseDate}
          mode="date"
          placeholder="select movie release date"
          format="YYYY-MM-DD"
          minDate="1900-01-01"
          maxDate="2090-01-01"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateInput: {
              borderWidth: 2,
              borderColor: Colors.mainColorRedDark,
              borderRadius: 5,
              height: 50,
              marginTop: 12
            },
          }}
          onDateChange={(date) => setMovieReleaseDate(date)} />
      </View>
    )
  }

  const renderImagePicker = () => {
    return (
      <TouchableOpacity style={styles.imageButton} onPress={onImagePickerOpen}>
        <Image source={moviePoster ? { uri: moviePoster } : require('../Assets/pl3.jpg')} style={styles.posterImage} />
        {!moviePoster && <Image source={require('../Assets/white-plus-icon.png')} style={{ width: 50, height: 50, marginTop: -100, zIndex: 1000, backgroundColor: 'white' }} />}
      </TouchableOpacity>
    )
  }
  return (
    <SafeAreaView style={styles.container}>
      {renderImagePicker()}
      {renderTextInput('Movie Name', 'enter movie name', (text) => setMovieName(text), movieName)}
      {renderTextInput('Movie Overview', 'enter movie Overview', (text) => setMovieOverview(text), movieOverview)}
      {renderDatePicker()}
      <TouchableOpacity style={styles.button} onPress={() => onSaveMoviePressed()}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0
  },
  posterImage: {
    width: '90%',
    height: 200,
    resizeMode: 'contain'
  },
  imageButton: {
    alignItems: 'center',
    height: 200
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
    alignSelf: 'center',
    marginTop: 52
  },
  buttonText: {
    color: 'white',
    fontSize: 14
  }
})

export default AddMovie;