import { View, Text, Image, StyleSheet, Button,TouchableOpacity } from "react-native";

const baseURL = "https://api.otaviolube.com"


export default function Filmes ({filme}){
    return(
        <View style = {styles.container}>
            <View style= {styles.containerImage}>
                <Image style = {styles.imagem}
                source ={{uri: baseURL + filme.poster.data.attributes.url}}/>
            </View>
            <View style={styles.informacoes}>
                <Text style = {styles.fontTitle}>{filme.titulo}</Text>
                <Text style = {styles.fontSubTitle}>{filme.subtitulo}</Text>
                <Text>Sinopse: {filme.sinopse}</Text>
                <TouchableOpacity style= {styles.btn}>
                    <Text style = {styles.btnText}>Comprar</Text>
                </TouchableOpacity>
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
      marginTop: "15px",
      width: "150px",
      height: "200px",
      resizeMode: "cover"
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
        width: '60%',
        alignItems: 'center'
        
    },
    btn : {
        height: 20,
        width: '50%',
        backgroundColor: 'black',
        borderRadius: "5px"
    },
    btnText : {
        fontSize: 15,
        fontWeight: "bold",
        textAlign: "center",
        color: 'rgb(235, 128, 43)'
    }


});
