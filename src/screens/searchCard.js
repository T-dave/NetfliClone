import React, {useEffect} from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';



export function SearchCard({image, movie}) {
  return (
    <View style={styles.container}>
        <View style={{flexDirection:"row", alignItems:"center"}}>
        <Image source={image} style={{width:146, height:76}} resizeMode='center'/>
        
        <Text style={{color:"white", fontSize:14.72, fontWeight:400, marginLeft:10}}>{movie}</Text>
            </View>
            <Image source={require('../../assets/play2.png')} style={{width:28, height:28}} resizeMode='center'/>
        
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
       flexDirection:"row",
       alignItems:"center",
       backgroundColor:"#424242",
       justifyContent:"space-between",
       marginVertical:2
    },
})



