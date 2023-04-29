import { View, Text, Image, StyleSheet, Button } from "react-native";






export default function Filmes (props){
    return(
        <View style = {styles.container}>
            <View style= {styles.containerImage}>
                <Image style = {styles.imagem}
                source = {props.image}/>
            </View>
            <View style={styles.informacoes}>
                <Text style = {styles.fontTitle}>{props.title}</Text>
                <Text style = {styles.fontSubTitle}>{props.subTitle}</Text>
                <Text>Sinopse: {props.resume}</Text>
                <Button title="Comprar"  color="#841584">
                Comprar
                </Button>
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
      width: "100px",
      height: "100px",
      resizeMode: "poster"
    },
    fontTitle: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center"
        
    },
    fontSubTitle: {
        fontSize: 15,
        fontWeight: "bold",
        textAlign: "center"
    },
    informacoes : {
        padding: "5px",
        width: '70%',
    },


});
