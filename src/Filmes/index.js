import { View, Text, Image, StyleSheet } from "react-native";






export default function Filmes (props){
    return(
        <View style = {styles.container}>
            <View style= {styles.containerImage}>
                <Image style = {styles.imagem}
                source = {props.image}/>
            </View>
            <View style={styles.informacoes}>
                <Text style = {styles.fontTitle}>Título: {props.title}</Text>
                <Text>SubTitulo: {props.subTitle}</Text>
                <Text>Sinopse: {props.resume}</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      padding: 5,
      flexDirection: "row",
      margin: "20px",
      borderRadius: "10px",
      backgroundColor: 'rgb(235, 128, 43)',
      border: "1px solid white"
     
    },
    containerImage: {
        borderRadius: "5px",
        overflow: 'hidden'

    },
    imagem : {
      width: 100,
      height: 100,
    },
    fontTitle: {
        fontSize: 20,
        fontWeight: "bold",
    },
    informacoes : {
        padding: "5px",
        width: '70%',
    }

});