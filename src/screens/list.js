import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity, ImageBackground, ScrollView, Pressable, Modal } from 'react-native';
import { Card1, Card2, Card3, Card4 } from '../components/card1';

const DATA1 = [
    {
      id: '1',
      image: require("../../assets/movie10.png"),
    },
    {
      id: '2',
      image: require("../../assets/movie21.png"),
    },
    {
      id: '3',
      image: require("../../assets/movie39.png"),
    },
    {
        id: '4',
        image: require("../../assets/movie14.png"),
      },
      {
        id: '5',
        image: require("../../assets/movie19.png"),
      },
      {
        id: '6',
        image: require("../../assets/movie43.png"),
      },
      {
        id: '7',
        image: require("../../assets/movie41.png"),
      },
      {
          id: '8',
          image: require("../../assets/movie11.png"),
        },
        {
            id: '9',
            image: require("../../assets/movie9.png"),
          },
          {
            id: '10',
            image: require("../../assets/movie10.png"),
          },
          {
            id: '11',
            image: require("../../assets/movie11.png"),
          },
          {
            id: '12',
            image: require("../../assets/movie12.png"),
          },
          {
            id: '13',
            image: require("../../assets/movie13.png"),
          },
          {
            id: '14',
            image: require("../../assets/movie14.png"),
          },
          {
            id: '15',
            image: require("../../assets/movie15.png"),
          },
          {
            id: '16',
            image: require("../../assets/movie16.png"),
          },
          {
            id: '17',
            image: require("../../assets/movie17.png"),
          },
          {
            id: '8',
            image: require("../../assets/movie18.png"),
          },
          {
            id: '19',
            image: require("../../assets/movie19.png"),
          },
  ];


function ListScreen({navigation}) {
  return (
    <View style={styles.container}>
         <View style={styles.top}>
         <TouchableOpacity onPress={()=>navigation.goBack()}>
            <Image source={require('../../assets/back.png')} style={{height:17, width:18, marginLeft:5}}/>
         </TouchableOpacity>
          <Image source={require('../../assets/netflix2.png')} style={{height:53, width:57}}/>
          <Text style = {styles.text}>My List</Text>
         </View>
         <View style={{padding:10}}>
         <FlatList
            data={DATA1}
            numColumns={3}
            renderItem={({item}) => <Image source={item.image} style={{height:121, width:"33%", marginRight:3, marginBottom:3}}/> }
        />
        </View>
       
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"black",
        flex:1,
        paddingTop:30,
    },
    text:{
        color:"white",
        fontSize:17.2,
        fontWeight:"600",
    },
    top:{
        flexDirection:"row",
        alignItems:"center"
    }
})

export default ListScreen;


