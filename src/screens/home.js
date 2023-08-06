import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity, ImageBackground, ScrollView, Pressable, Modal } from 'react-native';
import { Card1, Card2, Card3, Card4 } from '../components/card1';

const DATA1 = [
    {
      id: '1',
      image: require("../../assets/movie1.png"),
    },
    {
      id: '2',
      image: require("../../assets/movie2.png"),
    },
    {
      id: '3',
      image: require("../../assets/movie3.png"),
    },
    {
        id: '4',
        image: require("../../assets/movie1.png"),
      },
      {
        id: '5',
        image: require("../../assets/movie1.png"),
      },
      {
        id: '6',
        image: require("../../assets/movie1.png"),
      },
      {
        id: '7',
        image: require("../../assets/movie1.png"),
      },
      {
          id: '8',
          image: require("../../assets/movie1.png"),
        },
  ];
  
  const DATA2 = [
    {
      id: '1',
      image: require("../../assets/movie4.png"),
      line: "0%",
    },
    {
      id: '2',
      image: require("../../assets/movie5.png"),
      line: "30%",
    },
    {
      id: '3',
      image: require("../../assets/movie6.png"),
      line: "0%",
    },
    {
        id: '4',
        image: require("../../assets/movie30.png"),
        line: "0%",
      },
  ];
  const DATA3 = [
    {
      id: '1',
      image: require("../../assets/movie7.png"),
    },
    {
      id: '2',
      image: require("../../assets/movie8.png"),
    },
    {
      id: '3',
      image: require("../../assets/movie9.png"),
    },
    {
        id: '4',
        image: require("../../assets/movie21.png"),
      },
  ];
  const DATA4 = [
    {
      id: '1',
      image: require("../../assets/movie10.png"),
    },
    {
      id: '2',
      image: require("../../assets/movie11.png"),
    },
    {
      id: '3',
      image: require("../../assets/movie12.png"),
    },
    {
        id: '4',
        image: require("../../assets/movie25.png"),
      },
  ];
  const DATA5 = [
    {
      id: '1',
      image: require("../../assets/movie13.png"),
    },
    {
      id: '2',
      image: require("../../assets/movie14.png"),
    },
    {
      id: '3',
      image: require("../../assets/movie15.png"),
    },
    {
        id: '4',
        image: require("../../assets/movie35.png"),
      },
  ];
  const DATA6 = [
    {
      id: '1',
      image: require("../../assets/movie16.png"),
    },
    {
      id: '2',
      image: require("../../assets/movie17.png"),
    },
    {
      id: '3',
      image: require("../../assets/movie18.png"),
    },
    {
        id: '4',
        image: require("../../assets/movie9.png"),
      },
  ];
  const DATA7 = [
    {
      id: '1',
      image: require("../../assets/movie19.png"),
    },
    {
      id: '2',
      image: require("../../assets/movie20.png"),
    },
    {
      id: '3',
      image: require("../../assets/movie21.png"),
    },
    {
        id: '4',
        image: require("../../assets/movie33.png"),
      },
  ];
  const DATA8 = [
    {
      id: '1',
      image: require("../../assets/movie22.png"),
    },
    {
      id: '2',
      image: require("../../assets/movie23.png"),
    },
    {
      id: '3',
      image: require("../../assets/movie24.png"),
    },
    {
        id: '4',
        image: require("../../assets/movie37.png"),
      },
  ];
  const DATA9 = [
    {
      id: '1',
      image: require("../../assets/movie25.png"),
    },
    {
      id: '2',
      image: require("../../assets/movie26.png"),
    },
    {
      id: '3',
      image: require("../../assets/movie24.png"),
    },
    {
        id: '4',
        image: require("../../assets/movie17.png"),
      },
  ];

  const DATA10 = [
    {
      id: '1',
      image: require("../../assets/movie27.png"),
    },
    {
      id: '2',
      image: require("../../assets/movie28.png"),
    },
    {
      id: '3',
      image: require("../../assets/movie29.png"),
    },
    {
        id: '4',
        image: require("../../assets/movie12.png"),
      },
  ];
  const DATA11 = [
    {
      id: '1',
      image: require("../../assets/movie30.png"),
    },
    {
      id: '2',
      image: require("../../assets/movie31.png"),
    },
    {
      id: '3',
      image: require("../../assets/movie32.png"),
    },
    {
        id: '4',
        image: require("../../assets/movie7.png"),
      },
  ];
  const DATA12 = [
    {
      id: '1',
      image: require("../../assets/movie33.png"),
    },
    {
      id: '2',
      image: require("../../assets/movie34.png"),
    },
    {
      id: '3',
      image: require("../../assets/movie35.png"),
    },
    {
        id: '4',
        image: require("../../assets/movie18.png"),
      },
  ];
  const DATA13 = [
    {
      id: '1',
      image: require("../../assets/movie36.png"),
    },
    {
      id: '2',
      image: require("../../assets/movie37.png"),
    },
    {
      id: '3',
      image: require("../../assets/movie38.png"),
    },
    {
        id: '4',
        image: require("../../assets/movie5.png"),
      },
  ];



function HomeScreen({navigation}) {
    const [banner, setBanner] = useState(require('../../assets/banner.png'));
    const [list, setList] = useState(1)
    const bannerClick = (link)=>{
     setList(link[1])
     setBanner(link[0])
    }
    const [modalVisible, setModalVisible] = useState(false);
    const toggleModal = (link)=>{
      setList(link[1])
      setBanner(link[0])
      setModalVisible(false);
    }
  return (
    <View style={styles.container}>
        <ScrollView>
         
       <ImageBackground source={banner} style={styles.banner}>
            <View style={styles.top}>
                <Image source={require('../../assets/netflix2.png')} style={styles.logo}/>
                {
                    list === 1 ?
                    <View style={styles.horizontal}>
                        <TouchableOpacity onPress={()=>bannerClick([require('../../assets/banner2.png'),2])} style={{alignItems:"center", flexDirection:"row", marginRight:30}}>
                            <Text style={styles.topText}>TV Shows</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>bannerClick([require('../../assets/banner3.png'),3])} style={{alignItems:"center", flexDirection:"row", marginRight:30}}>
                        <Text style={styles.topText}>Movies</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>navigation.navigate("List")}>
                          <Text style={styles.topText}>My List</Text>
                        </TouchableOpacity>
                    </View>
                    :
                    list === 2 ?
                    <View style={styles.horizontal}>
                        <TouchableOpacity onPress={() => setModalVisible(true)} style={{alignItems:"center", flexDirection:"row", marginRight:30}}>
                            <Text style={styles.topText}>TV Shows</Text>
                            <Image source={require('../../assets/polygon.png')} style={{width:14.4,height:8, marginLeft:5, top:2}}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={{alignItems:"center", flexDirection:"row", marginRight:30}}>
                            <Text style={styles.topText}>All Genres</Text>
                            <Image source={require('../../assets/polygon.png')} style={{width:10.8,height:6, marginLeft:5, top:2}}/>
                        </TouchableOpacity>
                        
                    </View>
                    :
                    <View style={styles.horizontal}>
                        <TouchableOpacity onPress={() => setModalVisible(true)} style={{alignItems:"center", flexDirection:"row", marginRight:30}}>
                            <Text style={styles.topText}>Movies</Text>
                            <Image source={require('../../assets/polygon.png')} style={{width:14.4,height:8, marginLeft:5, top:2}}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={{alignItems:"center", flexDirection:"row", marginRight:30}}>
                            <Text style={styles.topText}>All Genres</Text>
                            <Image source={require('../../assets/polygon.png')} style={{width:10.8,height:6, marginLeft:5, top:2}}/>
                        </TouchableOpacity>
                        
                    </View>
                }
                
                
            </View>
       </ImageBackground>

       <View style={styles.view2}>
        <Image source={require('../../assets/top10.png')} style={{height:16, width:16}}/>
        <Text style={{fontWeight:500, fontSize:18, color:"white"}}> #2 in Nigeria Today</Text>
       </View>

       <View style={styles.view3}>
        <View style={{alignItems:"center", justifyContent:"center"}}>
            <Image source={require('../../assets/plus.png')} style={{height:24, width:24}}/>
            <Text style={{fontWeight:500, fontSize:18, color:"white"}}>My List</Text>
        </View>
        <View style={styles.playView}>
            <Image source={require('../../assets/play.png')} style={{height:30, width:72}}/>
        </View>
        <View style={{alignItems:"center", justifyContent:"center"}}>
            <Image source={require('../../assets/info.png')} style={{height:24, width:24}}/>
            <Text style={{fontWeight:500, fontSize:18, color:"white"}}>Info</Text>
        </View>
        
       </View>
       <Card1 text={"Preview"} data={DATA1}/>
       <Card2 text={"Continue Watching for Emenalo"} data={DATA2}/>
       <Card3 text={"Popular on Netflix"} data={DATA3}/>
       <Card3 text={"Trending Now"} data={DATA4}/>
       <Card3 text={"Top 10 in Nigeria Today"} data={DATA5}/>
       <Card3 text={"My List"} data={DATA6}/>
       <Card3 text={"African Movies"} data={DATA7}/>
       <Card3 text={"Nollywood Movies & TV"} data={DATA8}/>
       <Card4 text={"Netflix Originals"} data={DATA9}/>
       <Card3 text={"Watch it Again"} data={DATA10}/>
       <Card3 text={"New Releases"} data={DATA11}/>
       <Card3 text={"US Thrillers and Mysteries"} data={DATA12}/>
       <Card3 text={"US TV Shows"} data={DATA13}/>
           
       </ScrollView>
       <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
          <View style={styles.centeredView}>
            <View></View>
            <View style={styles.modalView}>
              <TouchableOpacity onPress={()=>toggleModal([require('../../assets/banner.png'),1])}>
                {
                  list === 1 ?
                  <Text style={[styles.modalText, {fontSize:24, fontWeight:"600"}]}>All</Text>
                  :
                  <Text style={styles.modalText}>All</Text>
                }
              </TouchableOpacity>
              
              <TouchableOpacity onPress={()=>toggleModal([require('../../assets/banner2.png'),2])}>
                {
                  list === 2 ?
                  <Text style={[styles.modalText, {fontSize:24, fontWeight:"600"}]}>TV Shows</Text>
                  :
                  <Text style={styles.modalText}>TV Shows</Text>
                }
              </TouchableOpacity>
             <TouchableOpacity onPress={()=>toggleModal([require('../../assets/banner3.png'),3])}>
                   {
                  list === 3 ?
                  <Text style={[styles.modalText, {fontSize:25, fontWeight:"600"}]}>Movies</Text>
                  :
                  <Text style={styles.modalText}>Movies</Text>
                }
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>navigation.navigate("List")}>
                <Text style={styles.modalText}>My List</Text>
              </TouchableOpacity>
              
              
            </View>
            <TouchableOpacity style={styles.x} onPress={()=>setModalVisible(false)}>
              <Image source={require('../../assets/x.png')} style={{width:23.33, height:23.33}}/>
            </TouchableOpacity>
            
            
          </View>
        </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"black",
        flex:1,
        paddingTop:30,
    },
    banner:{
        width:"100%",
        height:424
    },
    logo:{
        width:53,
        height:57,
        marginRight:20
    },
    top:{
        flexDirection:"row",
        alignItems:"center",
        paddingHorizontal:30,
        justifyContent:'space-between',
        paddingLeft:10,
    },
    topText:{
        color:"white",
        fontSize:17,
    },
    view2:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        

    },
    view3:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        paddingHorizontal:50,
        marginTop:20,
        marginBottom:20
    },
    playView:{
        alignItems:"center", 
        justifyContent:"center", 
        backgroundColor:"#c4c4c4", 
        width:110.63,
        height:45,
        borderRadius:10
    },
    horizontal:{
        flexDirection:"row",
        alignItems:"center",
        width:"100%",
        marginLeft:30
    },
  modalView: {
    
    
  },
  centeredView:{
    backgroundColor: 'black',
    height:"100%",
    alignItems: 'center',
    justifyContent:"space-between",
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    color:"white",
    fontSize:20
  },
  x:{
    width:69, 
    height:69, 
    backgroundColor:"#fff", 
    borderRadius:50, 
    alignItems:"center", 
    justifyContent:"center", 
    bottom:20
  }
})

export default HomeScreen;


