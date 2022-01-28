import React, {useEffect, useState} from "react";
import {View, Text, FlatList, Image, StyleSheet, ActivityIndicator} from "react-native";
import api from "./src/services/api";

export default function App() {
  const [movies, setMovies] = useState(null);

  async function getMovies() {
    try {
      const response = await api.get(`r-api/?api=filmes`);
      setMovies(response.data);
    } catch (error) {
      alert(`Não foi possível conectar-se ao servidor! ${error}`);
    }
  }
  
  useEffect(
    () => {
      getMovies();
    }
  );

  return(
    <View style={styles.container}>
      { movies ?
        <FlatList 
          data={movies}
          keyExtractor={(item)=>item.id.toString()}
          renderItem={({item}) => ComponentMovie(item)}
        />
      :
        <View style={styles.loading}>
          <ActivityIndicator 
            size={40}
            color={'#aaa'}
          />
        </View>
      }
    </View>
  )
}

function ComponentMovie(movie) {
  return(
    <View style={styles.movie}>
      <Text style={styles.movie__title}>{movie.nome}</Text>
      <Image 
        style={styles.movie__image}
        source={{uri: movie.foto}}
      />
      <Text style={styles.movie__sinopse}>    {movie.sinopse}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#322924'},
  loading: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  loading__indicator: {},
  movie: {backgroundColor: '#251e1a', marginTop: 5, marginHorizontal: 10, marginBottom: 5, padding: 10, borderRadius: 10},
  movie__title: {fontSize: 18, fontWeight: '800', color: '#aaa', textTransform: 'uppercase', marginBottom: 10},
  movie__image: { width: '100%', height: 300, borderRadius: 10},
  movie__sinopse: {fontSize: 12, color: '#aaa', textAlign: 'justify', marginTop: 10}
});