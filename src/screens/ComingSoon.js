import React, {useEffect} from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { ComingCard, ArrivalCard} from './comingCard';

function ComingScreen({navigation}) {
  const data = [
    {
      movie:"Citation", image:require('../../assets/movie46.png'), description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit quam dui, vivamus bibendum ut. A morbi mi tortor ut felis non accumsan accumsan quis. Massa, id ut ipsum aliquam  enim non posuere pulvinar diam.", genre:["Steamy", "Soapy", "Slow Burn", "Suspenceful", "Teen"]
    },
    {
      movie:"Oloture", image:require('../../assets/movie40.png'), description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit quam dui, vivamus bibendum ut. A morbi mi tortor ut felis non accumsan accumsan quis. Massa, id ut ipsum aliquam  enim non posuere pulvinar diam.", genre:["Steamy", "Soapy", "Slow Burn", "Suspenceful", "Teen"]
    },
    {
      movie:"The Setup", image:require('../../assets/movie41.png'), description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit quam dui, vivamus bibendum ut. A morbi mi tortor ut felis non accumsan accumsan quis. Massa, id ut ipsum aliquam  enim non posuere pulvinar diam.", genre:["Steamy", "Soapy", "Slow Burn", "Suspenceful", "Teen"]
    },
  ]
  const data2 = [
    {
      movie:"El Chapo", image:require('../../assets/movie47.png'), date:"Nov 6"
    },
    {
      movie:"Peaky Blinders", image:require('../../assets/movie48.png'), date:"Dec 17"
    },
  ]
  return (
    <View style={styles.container}>
      <ScrollView>
      <View style={{flexDirection:"row", alignItems:"center", margin:15}}>
       <Image source={require("../../assets/notification.png")} style={{width:19, height:19, marginRight:8}} resizeMode='center'/>
       <Text style={styles.topText}>Notification</Text>
      </View>
      <View style={{marginBottom:30}}>
        <FlatList
            data={data2}
            scrollEnabled={false}
            renderItem={({item}) => <ArrivalCard image={item.image} movie={item.movie} date={item.date}/> }
        />
      </View>
     
      <FlatList
            data={data}
            scrollEnabled={false}
            renderItem={({item}) => <ComingCard image={item.image} movie={item.movie} description={item.description} genre={item.genre}/> }
        />
      </ScrollView>
        
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"black",
        flex:1,
        paddingTop:30,

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
      fontSize:16.91,
    }
})

export default ComingScreen;


