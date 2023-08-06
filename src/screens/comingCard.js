import React, {useEffect} from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';



export function ComingCard({image, movie, description, genre}) {
  return (
    <View style={styles.container}>
        <Image source={image} style={{width:"100%", height:195}} resizeMode='cover'/>
        <View style={styles.view1}>
            <View style={styles.vector}>
                <Image source={require("../../assets/bell.png")} style={{width:21, height:24, marginBottom:5}} resizeMode='center'/>
                <Text style={styles.text1}>Remind me</Text>
            </View>
            <View style={styles.vector}>
                <Image source={require("../../assets/share.png")} style={{width:21, height:24, marginBottom:5}} resizeMode='center'/>
                <Text style={styles.text1}>Share</Text>
            </View>
        </View>
        <View style={{marginHorizontal:20}}>
            <Text style={styles.text2}>Season 1 Coming December 14</Text>
            <Text style={styles.text3}>Castle & Castle</Text>
            <Text style={styles.text1}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit quam dui, vivamus
                    bibendum ut. A morbi mi tortor ut felis non accumsan accumsan quis. Massa,
                    id ut ipsum aliquam  enim non posuere pulvinar diam.
            </Text>
            <View style={{marginTop:10}}>
            <FlatList
            data={genre}
            horizontal
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => 
            <View style={{flexDirection:"row", alignItems:"center"}}>
                <Text style={styles.text4}>{item}</Text>
                <Image source={require("../../assets/dot.png")} resizeMode='cover' style={{width:5.48, height:5.48, marginHorizontal:8}}/>
            </View>
         }
            />
            </View>
        </View>
    </View>
  );
}

export function ArrivalCard({image, movie, date}) {
    return (
      <View style={styles.container2}>
           <Image source={image} style={{width:113, height:55, marginRight:30}} resizeMode='cover'/>
           <View>
                <Text style={styles.text1_1}>New Arrival</Text>
                <Text style={styles.text1_2}>{movie}</Text>
                <Text style={styles.text1_3}>{date}</Text>
           </View>
      </View>
    );
  }

const styles = StyleSheet.create({
    container:{
        marginBottom:30,
    },
    container2:{
        padding:10,
        backgroundColor:"#424242",
        flexDirection:"row"
    },
    view1:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"flex-end",
        marginTop:20,
        marginRight:20
    },
    text1:{
        color:"white",
        fontSize:11.13
    },
    text2:{
        color:"white",
        fontSize:11.4,
        marginBottom:8
    },
    text3:{
        color:"white",
        fontSize:18.66,
        fontWeight:"700",
        marginBottom:5
    },
    text4:{
        color:"white",
        fontSize:11.4,
        fontWeight:"600"
    },
    text1_1:{
        color:"white",
        fontSize:13.72,
        fontWeight:"600"
    },
    text1_2:{
        color:"white",
        fontSize:13.72,
        fontWeight:"400"
    },
    text1_3:{
        color:"white",
        fontSize:10.51,
        fontWeight:"200"
    },
    vector:{
        marginLeft:40,
        alignItems:"center"
    }
})



