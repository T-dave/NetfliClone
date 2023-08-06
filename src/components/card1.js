import React, {useEffect} from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';



export function Card1({text, data}) {
  return (
    <View style={styles.container}>
       <Text style={styles.text}>{text}</Text>
       <FlatList
            data={data}
            horizontal
            renderItem={({item}) => <Image source={item.image} style={styles.image1} resizeMode='center'/> }
        />
        
    </View>
  );
}
export function Card2({text, data}) {
    return (
      <View style={styles.container}>
         <Text style={[styles.text, {fontSize:20}]}>{text}</Text>
         <FlatList
              data={data}
              horizontal
              renderItem={({item}) => 
              <View style={styles.view2}>
                <Image source={item.image} style={styles.image2} resizeMode='center'/> 
                <View style={styles.line}>
                    <Image source={require('../../assets/line2.png')} style={{height:2, width:item.line, marginBottom:10}}/>
                </View>
                
                <View style={styles.down}>
                    <Image source={require('../../assets/info.png')} style={{height:20, width:20}}/>
                    <Image source={require('../../assets/more2.png')} style={{height:16, width:4}}/>
                </View>
              </View>
              }
          />
          
      </View>
    );
  }

  export function Card3({text, data}) {
    return (
      <View style={styles.container}>
         <Text style={[styles.text, {fontSize:20}]}>{text}</Text>
         <FlatList
              data={data}
              horizontal
              renderItem={({item}) => 
              <View style={styles.view2}>
                <Image source={item.image} style={{width:103, height:161}} resizeMode='center'/>
              </View>
              }
          />
          
      </View>
    );
  }

  export function Card4({text, data}) {
    return (
      <View style={[styles.container, {marginBottom:10}]}>
         <Text style={[styles.text, {fontSize:20}]}>{text}</Text>
         <FlatList
              data={data}
              horizontal
              renderItem={({item}) => 
              <View style={styles.view2}>
                <Image source={item.image} style={{width:154, height:251}} resizeMode='center'/>
              </View>
              }
          />
          
      </View>
    );
  }

const styles = StyleSheet.create({
    container:{
       marginVertical:10,
       marginLeft:10
    },
    image1:{
        width:102,
        height:102,
        marginHorizontal:8,
    },
    image2:{
        width:103,
        height:177,
    },
    text:{
        color:"white",
        fontSize:26.75,
        fontWeight:"500",
        marginBottom:10,
        marginLeft:8
    },
    down:{
        backgroundColor:"black",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        paddingHorizontal:17,
        
    },
    line:{
        backgroundColor:"#4e4a4a",
        width:"100%",
        height:2,
        marginBottom:10
    },
    view2:{
        marginHorizontal:6,
    }
})



