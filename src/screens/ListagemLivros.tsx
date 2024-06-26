import React, { useEffect, useState } from "react";
import axios from "axios";
import { Image, StyleSheet, Text, TouchableOpacity, StatusBar, FlatList, View, TextInput, ImageBackground } from "react-native";
import Footer from "../components/Footer";
import HeadCadastro from "../components/HeadCadastro";
import { ScrollView } from "react-native-gesture-handler";
import HeadListagem from "../components/HeadListagem";




function Listagem(): React.JSX.Element {
    const [produto, setProduto] = useState<any[]>([]);
   
    const [erro, setErro] = useState<string>("");

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('http://10.137.11.217/api/livros/visualizar');
                setProduto(response.data.dados);
             } catch (error) {
                setErro("Ocorreu um erro");
                console.log(error);
            }
        }

        fetchData();
    }, []);

    const renderItem = ({ item }: { item: Livros }) => (
        <TouchableOpacity style={styles.item}>
            <Text style={styles.textTitulo}>{item.titulo}</Text>
            <Text style={styles.textAutor}>{item.autor}</Text>
            <Text style={styles.textData}>{item.data_lancamento}</Text>
            <Text style={styles.textEditora}>{item.editora}</Text>
            <Text style={styles.textSinopse}>{item.sinopse}</Text>
            <Text style={styles.textGenero}>{item.genero}</Text>
            <Text style={styles.textAvaliacao}>{item.avaliacao}</Text>
        </TouchableOpacity>    
    );
    

    return (
        
            <View style={styles.container}>

              <ImageBackground source={require('../assets/images/fundo.png')}  style={styles.background}/>
            <StatusBar backgroundColor='#000000' barStyle='light-content' />
            <HeadListagem/>


            <View style={styles.header}>
            <Image source={require('../assets/images/icon.png')} style={styles.headerIcon} />
            </View>
            

            <View style={styles.alinhapesquisa} >
                <Image style={styles.pesquisaicon} source={require('../assets/images/lupinha.png')} />
                
                <TextInput style={styles.pesquisa} placeholder="Pesquisar..." />
            </View>

            <FlatList style={styles.container}
                showsVerticalScrollIndicator={false}
                data={produto}
                renderItem={renderItem}
                keyExtractor={(item) => item.titulo.toString()}
            />

            <Footer/>
            </View>
    );

}

const styles = StyleSheet.create({
    container: {
         flex: 1
     },
     linhaTitle: {
      color:'#2C7DA0',
      marginBottom: -45,
      marginTop: 40
  },
     scroll: {},
     background:{
      height:760,
      flex:1
    },
     button: {},
     header: {
      alignItems: 'center',
      paddingVertical: 30
  },
    headerIcon: {
      width: 250,
      height: 250,
      marginBottom: -20,
      marginTop: -100
  },
     item: {
        backgroundColor: '#C0C0C0',
        padding: 19,
        marginVertical: 7,
        marginHorizontal: 15,
        borderRadius: 19,
        borderWidth: 3,
        borderColor: '#772B39',
        marginTop: 30
     },
     textTitulo: {
        fontSize: 30,
        color: 'white',
        marginLeft: 'auto',
        marginRight: 'auto',
     },
     textAutor: {
        fontSize: 30,
        color: 'white',
        marginLeft: 'auto',
        marginRight: 'auto',
     },
     textGenero: {
        fontSize: 30,
        color: 'white',
        marginLeft: 'auto',
        marginRight: 'auto',
     },
     textData: {
        fontSize: 30,
        color: 'white',
        marginLeft: 'auto',
        marginRight: 'auto',
     },
     textEditora: {
        fontSize: 30,
        color: 'white',
        marginLeft: 'auto',
        marginRight: 'auto',
     },
     textSinopse: {
        fontSize: 30,
        color: 'white',
        marginLeft: 'auto',
        marginRight: 'auto',
     },
     textAvaliacao: {
        fontSize: 30,
        color: 'white',
        marginLeft: 'auto',
        marginRight: 'auto',
     },
     image: {
         height: 100,
         width: 170,
         borderRadius: 10,
         borderWidth: 3,
         marginLeft: 'auto',
         marginRight: 'auto',
         marginTop: 15
     },
     pesquisa: {
        fontSize: 13,
        borderWidth: 3,
        borderColor: '#2C7DA0',
        borderRadius: 100,
        alignItems: 'center',
        width: '78%',
        paddingLeft: 50,
        marginTop: -50,
        marginLeft: -10
    },
    alinhapesquisa: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop:20,
    },
    pesquisaicon: {
        width: 90,
        height: 90,
        marginTop: -40
    },
    linha: {
        color: 'white',
        marginTop: -8,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
 });
 export default Listagem;