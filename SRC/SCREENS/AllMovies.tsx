import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, StatusBar, ActivityIndicator, FlatList } from 'react-native';
import MovieCard from '../Components/MovieCard';
import { APIKey, Colors } from '../constants';

const AllMovies: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [moviesList, setMoviesList] = useState([]);
  const [isEndLoading, setIsEndLoading] = useState(false);

  const getMovies = async () => {
    await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${APIKey}&language=en-US&page=${page}`).then((response) => {
      let movies = response.data.results.map(movie => {
        return {
          id: movie.id,
          title: movie.title,
          date: movie.release_date,
          overview: movie.overview,
          poster: movie.poster_path ? movie.poster_path : null
        }
      });
      setMoviesList([...moviesList, ...movies]);
      setIsLoading(false);
      setIsEndLoading(false);
      setPage(page + 1);
    })
  }

  const renderItem = ({ item }) => {
    return <MovieCard title={item.title} date={item.date} overview={item.overview} poster={item.poster} />
  }

  useEffect(() => {
    setIsLoading(true);
    getMovies();
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? <ActivityIndicator size={'large'} color={Colors.mainColorRed} /> : <FlatList
        data={moviesList}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        onEndReached={() => {
          setIsEndLoading(true);
          getMovies()
        }}
        ListFooterComponent={isEndLoading && <ActivityIndicator size={'large'} color={Colors.mainColorRed} style={{height:200}}/>}
      />}

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0
  }
})

export default AllMovies;