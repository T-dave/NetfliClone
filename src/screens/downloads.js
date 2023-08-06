import React, {useEffect} from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity, TextInput, ScrollView } from 'react-native';

function DownloadsScreen({navigation}) {
  return (
    <View style={styles.container}>
        <Text style={styles.text1}>Smart Downloads</Text>
        <View style={{margin:20, marginTop:30}}>
            <Text style={styles.text2}>Introducing Downloads For You</Text>
            <Text style={styles.text3}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit quam dui, vivamus
                bibendum ut. A morbi mi tortor ut felis non accumsan accumsan quis. Massa,
                id ut ipsum aliquam  enim non posuere pulvinar diam.
            </Text>
            <View style={{alignItems:"center", marginTop:15}}>
            <View style={styles.grey}/>
        </View>
        <TouchableOpacity style={styles.button1}>
            <Text style={styles.buttonText}>Setup</Text>
        </TouchableOpacity>
        </View>

        <View style={{marginTop:20, marginHorizontal:60}}>
        <TouchableOpacity style={styles.button2}>
            <Text style={styles.buttonText2}>Find Something to Download</Text>
        </TouchableOpacity>
        </View>
        
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"black",
        flex:1,
    },
    grey:{
        width:177,
        height:177,
        borderRadius:500,
        backgroundColor:"#424242"
    },
    text1:{
        fontSize:14.72,
        color:"white",
        fontWeight:"400",
        marginLeft:40
    },
    text2:{
        fontSize:19.63,
        color:"white",
        fontWeight:"600"
    },
    text3:{
        fontSize:10.78,
        color:"white",
        marginTop:10,
        fontWeight:"400"
    },
    buttonText:{
        fontSize:13.86,
        color:"white",
        fontWeight:"400"
    },
    buttonText2:{
        fontSize:16.71,
        color:"white",
        fontWeight:"500"
    },
    button1:{
        backgroundColor:"#0071EB",
        width:"100%",
        padding:10,
        alignItems:"center",
        justifyContent:"center",
        marginTop:20,
        borderRadius:3
    },
    button2:{
        backgroundColor:"#424242",
        width:"100%",
        padding:5,
        alignItems:"center",
        justifyContent:"center",
        marginTop:20,
        borderRadius:3
    }
})

export default DownloadsScreen;


