import React, {useEffect} from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';

const DATA = [
    {
      id: '1',
      image: require("../../assets/account1.png"),
      text: "Emenalo",
    },
    {
      id: '2',
      image: require("../../assets/account2.png"),
      text: "Onyeka",
    },
    {
      id: '3',
      image: require("../../assets/account3.png"),
      text: "Thelma",
    },
    {
        id: '4',
        image: require("../../assets/account4.png"),
        text: "Kids",
      },
  ];
  


const Accounts= ({image, text, click}) => {
    return(
    <TouchableOpacity style={styles.accounts} onPress={click}>
        <Image source={image} style={styles.accountImage} resizeMode='center'/>
        <Text style={styles.accountText}>{text}</Text>
    </TouchableOpacity>
    )
    
}
function AccountScreen({navigation}) {
  return (
    <View style={styles.container}>
        <View style={styles.top}>
            <View></View>
            <Image source={require("../../assets/netflix.png")} style={styles.image} resizeMode='center'/>
            <Image source={require("../../assets/edit.png")} style={styles.image2} resizeMode='center'/>
        </View>
        
        <View style={styles.mid}>
            <FlatList
            data={DATA}
            numColumns={2}
            renderItem={({item}) => <Accounts image={item.image} text={item.text} click={()=>navigation.navigate("MyTabs")}/> }
        />
        <View style={{right:60, alignItems:"center", top:40}}>
            <Image source={require("../../assets/add.png")} style={{width:50, height:50}} resizeMode='center'/>
            <Text style={styles.accountText}>Add Profile</Text>
        </View>
        
        </View>
        
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"black",
        flex:1,
        paddingHorizontal:20,
        paddingTop:30
    },
    image:{
        width:"36.8%",
        height:37.2
      },
      image2:{
        width:18.59,
        height:18.59
      },
      accountText:{
        color:"white",
        marginTop:10
      },
      accountImage:{
        width:100,
        height:92
      },
      mid:{
        marginTop:"50%",
        height:"50%",
        alignItems:"center"
      },
      accounts:{
        marginHorizontal:10, 
        marginVertical:15, 
        alignItems:"center"
    },
    top:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"
    }
})

export default AccountScreen;


