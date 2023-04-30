import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import Filmes from './src/Filmes';


export default function App() {
  let [filmes, setFilmes] = useState([])
  const baseURL = 'https://api.otaviolube.com/api/filmes?populate=*'


  useEffect(function(){
    fetch(baseURL)
      .then(data => data.json())
      .then(objeto =>{
        setFilmes(objeto.data)
      })
  }, [])
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Cartazes De Filmes:</Text>
      { filmes.length > 0 ? filmes.map(filme =>
      <Filmes filme={filme.attributes} key = {filme.id}/> ): 
      <ActivityIndicator size="large" color="orange" />}
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    fontSize: 20,
    fontWeight: "bold",
    color: "orange"
  }
});
