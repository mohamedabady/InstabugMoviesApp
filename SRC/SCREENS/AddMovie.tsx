import React, {useState} from 'react';
import { View, SafeAreaView, FlatList, Alert, Text, StyleSheet, StatusBar, Image } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { Colors } from '../constants';

const AddMovie: React.FC = () => {
  const [movieName, setMovieName] = useState(null);
  const renderTextInput = (label, placeholder, onChange, value) => {
    return (
      <View style={{padding:12}}>
        <Text style={{fontSize:14, color:Colors.mainColorRedDark, fontWeight:'bold', marginBottom:4}}>{label}</Text>
        <TextInput
          style={{borderWidth:2, borderRadius:5, borderColor:Colors.mainColorRedDark, paddingHorizontal:14}}
          value={value}
          placeholder={placeholder}
          onChangeText={text => onChange(text)}
        />
      </View>
    )
  }
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.imageButton}>
        <Image source={require('../Assets/pl3.jpg')} style={styles.posterImage} />
        <Image source={require('../Assets/white-plus-icon.png')} style={{ width: 50, height: 50, marginTop: -100, zIndex: 1000, backgroundColor: 'white' }} />
      </TouchableOpacity>
      {renderTextInput('Movie Name', 'enter movie name', (text)=>setMovieName(text), movieName)}
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
    resizeMode: 'cover'
  },
  imageButton: {
    alignItems: 'center',
    height: 200
  }
})

export default AddMovie;