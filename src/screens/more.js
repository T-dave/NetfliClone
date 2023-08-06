import React, {useEffect} from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity, TextInput, ScrollView } from 'react-native';

const DATA = [
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

function Top({image, text}){
    return(
        <TouchableOpacity style={styles.accounts}>
            <Image source={image} style={{width:65.29, height:60.07}}/>
            <Text style={styles.text1}>{text}</Text>
        </TouchableOpacity>
    )
}
function MoreScreen({navigation}) {
  return (
    <View style={styles.container}>
        <View style={{flexDirection:"row"}}>
            
        <TouchableOpacity style={styles.accounts}>
            <Image source={require("../../assets/account1.png")} style={{width:73, height:68.72}}/>
            <Text style={styles.text1}>Emenalo</Text>
        </TouchableOpacity>

        <View>
        <FlatList
            data={DATA}
            horizontal
            renderItem={({item}) => <Top image={item.image} text={item.text} /> }
        />
        </View>
        <View style={{justifyContent:"flex-end"}}>
            <TouchableOpacity style={styles.plusView}>
                <Image source={require("../../assets/plusGrey.png")} style={{width:35, height:35}}/>
            </TouchableOpacity>
            <Text style={{color:"black"}}>hii</Text>
        </View>
      </View>
      <View style={{alignItems:"center", flexDirection:"row", justifyContent:"center", marginVertical:10}}>
        <Image source={require("../../assets/edit.png")} style={{width:12, height:12, marginRight:10}}/>
        <Text style={styles.text2}>Manage Profiles</Text>
      </View>
      <View style={styles.middle}>
        <View style={styles.first}>
            <Image source={require("../../assets/tell.png")} style={{width:24, height:25, marginRight:10}}/>
            <Text style={styles.text3}>Tell friends about Netflix.</Text>
        </View>
        <Text style={styles.text4}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit quam dui, vivamus
            bibendum ut. A morbi mi tortor ut felis non accumsan accumsan quis. Massa,</Text>
            <Text style={styles.text5}>Terms & Conditions</Text>
            <View style={{flexDirection:"row", alignItems:"center", marginTop:10}}>
                <View style={styles.inputt}/>
                <TouchableOpacity style={styles.copyButton}>
                    <Text style={styles.copyText}>Copy Link</Text>
                </TouchableOpacity>
            </View>
            <View style={{flexDirection:"row", alignItems:"center", marginTop:20, justifyContent:"space-between"}}>
                <View style={styles.socialView}>
                    <Image source={require("../../assets/whatsapp.png")} style={{width:36, height:33.66}}/>
                </View>
                <View style={styles.socialView}>
                <Image source={require("../../assets/facebook.png")} style={{width:36, height:33.66}}/>
                </View>
                <View style={styles.socialView}>
                <Image source={require("../../assets/gmail.png")} style={{width:36, height:33.66}}/>
                </View>
                <View style={styles.moreView}>
                    <Image source={require("../../assets/threeDots.png")} style={{width:24.67, height:6.17}}/>
                    <Text style={styles.text6}>More</Text>
                </View>
            </View>
      </View>
      <View style={styles.second}>
        <Image source={require("../../assets/check.png")} style={{width:26.81, height:20.09, marginRight:5}}/>
        <Text style={[styles.text6, {marginTop:0}]}>My List</Text>
      </View>
      <View style={styles.end}>
        <TouchableOpacity style={styles.setting}>
            <Text style={[styles.text6, {marginTop:0}]}>App Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.setting}>
            <Text style={[styles.text6, {marginTop:0}]}>Account</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.setting}>
            <Text style={[styles.text6, {marginTop:0}]}>Help</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.setting}>
            <Text style={[styles.text6, {marginTop:0}]}>Sign Out</Text>
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
    text1:{
        color:"white",
        fontSize:12.35,

    },
    text2:{
        color:"white",
        fontSize:14.72,
        fontWeight:"400"
    },
    text3:{
        color:"white",
        fontSize:19.63,
        fontWeight:"700"
    },
    text4:{
        color:"white",
        fontSize:13.78,
        fontWeight:"500",
        marginBottom:12
    },
    text5:{
        color:"#C4C4C4",
        fontSize:10.78,
        fontWeight:"400",
        textDecorationLine: 'underline'
    },
    text6:{
        color:"white",
        fontSize:14.72,
        fontWeight:"500",
        marginTop:7
    },
    copyText:{
        color:"black",
        fontSize:17.06,
        fontWeight:"600",
    },
    accounts:{
        alignItems:"center",
        justifyContent:"flex-end", 
        margin:5
    },
    plusView:{
        borderWidth:2,
        borderColor:"#C4C4C4",
        borderRadius:5,
        alignItems:"center",
        justifyContent:"center",
        width:63,
        height:58,
        margin:5
    },
    middle:{
        backgroundColor:"#1A1A1A",
        padding:20,

    },
    first:{
        flexDirection:"row",
        alignItems:"center",
    },
    inputt:{
        flex:1,
        height:37,
        width:"100%",
        backgroundColor:"black"
    },
    copyButton:{
        backgroundColor:"white",
        alignItems:"center",
        justifyContent:"center",
        borderRadius:5,
        marginLeft:15,
        padding:8
    },
    socialView:{
        borderRightColor:"#8C8787",
        borderRightWidth:1,
        paddingHorizontal:20
    },
    moreView:{
        paddingHorizontal:20,
        alignItems:"center"
    },
    second:{
        borderBottomColor:"#424242",
        borderBottomWidth:1,
        flexDirection:"row",
        alignItems:"center",
        paddingVertical:15,
        paddingLeft:40
    },
    end:{
        paddingLeft:40
    },
    setting:{
        marginTop:10
    }
})

export default MoreScreen;


