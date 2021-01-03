import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, FlatList, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MyMovies: React.FC = () => {
  const [myMovies, setMyMovies] = useState();
  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem('MyMovies', JSON.stringify(value))
    } catch (e) {
      Alert.alert('Error saving', e);
    }
  }
  return (
    <SafeAreaView>
      <FlatList
        data={moviesList}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        onEndReached={() => {
          setIsEndLoading(true);
          getMovies()
        }}
        ListFooterComponent={isEndLoading && <ActivityIndicator size={'large'} color={Colors.mainColorRed} style={{ height: 200 }} />}
      />
    </SafeAreaView>
  )
}

export default MyMovies;