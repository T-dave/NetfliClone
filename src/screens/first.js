import React, {useEffect} from 'react';
import { View, Text, StyleSheet, Image, } from 'react-native';

function FirstScreen({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Accounts");
    }, 1000);
  });
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/netflix.png")} style={styles.image} resizeMode='center'/>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"black",
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    },
    image:{
      width:"55.2%",
      height:55.79
    }
})

export default FirstScreen;