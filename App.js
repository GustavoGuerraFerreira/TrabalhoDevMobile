import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Filmes from './src/Filmes';


export default function App() {
  let [filmes, setFilmes] = useState([])
  const baseURL = 'https://api.otaviolube.com/api/filmes?populate=*'


  useEffect(function(){
    fetch(baseURL)
      .then(data => data.json())
      .then(objeto =>{
        console.log(objeto)
        setFilmes(objeto.data)
        console.log(objeto.data)
      })
  }, [])
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Cartazes De Filmes:</Text>
      { filmes.length > 0 ? filmes.map(filme =>
      <Filmes title= {filme.attributes.titulo}
      subTitle = {filme.attributes.subtitulo}
      resume = {filme.attributes.sinopse}
      image = {{uri:`https://api.otaviolube.com${filme.attributes.poster.data.attributes.url}`}}
      key={filme.id}
    />)
      : <Text>Carregando</Text>}
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
