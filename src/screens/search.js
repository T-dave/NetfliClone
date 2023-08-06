import React, {useEffect} from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity, TextInput } from 'react-native';
import { SearchCard } from './searchCard';

function SearchScreen({navigation}) {
  const data = [
    {
      movie:"Citation", image:require('../../assets/movie39.png')
    },
    {
      movie:"Oloture", image:require('../../assets/movie40.png')
    },
    {
      movie:"The Setup", image:require('../../assets/movie41.png')
    },
    {
      movie:"Breaking Bad", image:require('../../assets/movie42.png')
    },
    {
      movie:"Ozark", image:require('../../assets/movie43.png')
    },
    {
      movie:"The Governor", image:require('../../assets/movie44.png')
    },
    {
      movie:"Your Excellency", image:require('../../assets/movie45.png')
    }
  ]
  return (
    <View style={styles.container}>
      <View style = {styles.searchBar}>
        <View style={{flexDirection:"row", alignItems:"center"}}>
        <Image source={require('../../assets/search.png')} style={{width:14, height:19}} resizeMode='center'/>
        <TextInput placeholder='Search for a show, movie, genre, e.t.c.' placeholderTextColor="#c4c4c4" style={{width:280, marginLeft:10, color:"#c4c4c4"}}/>
        </View>
        <Image source={require('../../assets/mic.png')} style={{width:14, height:19}} resizeMode='center'/>
      </View>
      <Text style={styles.topText}>Top Searches</Text>
      <FlatList
            data={data}
            renderItem={({item}) => <SearchCard image={item.image} movie={item.movie}/> }
        />
        
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"black",
        flex:1,
    },
    searchBar:{
      width:"100%",
      flexDirection:"row",
      backgroundColor:"#424242",
      height:52,
      alignItems:"center",
      justifyContent:"space-between",
      paddingHorizontal:30
    },
    topText:{
      color:"white",
      fontWeight:"500",
      fontSize:26.75,
      margin:10
    }
})

export default SearchScreen;


