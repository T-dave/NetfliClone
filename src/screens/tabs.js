import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './home';
import SearchScreen from './search';
import ComingScreen from './ComingSoon';
import DownloadsScreen from './downloads';
import MoreScreen from './more';
import { View, StyleSheet, Image } from 'react-native';


const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Account"
      screenOptions={{
        tabBarStyle: { backgroundColor: 'black' },
        headerShown: false,
        tabBarActiveTintColor: '#fff',
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size, focused }) => (
            <View>
                {
                focused ?
                <Image source={require('../../assets/homeActive.png')} style={styles.image}/>
                :
                <Image source={require('../../assets/home.png')} style={styles.image}/>
                }
            </View>
            
          ),
        }}
      />
      <Tab.Screen
        name="First"
        component={SearchScreen}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color, size, focused }) => (
            <View>
                {
                focused ?
                <Image source={require('../../assets/searchActive.png')} style={styles.image}/>
                :
                <Image source={require('../../assets/search.png')} style={styles.image}/>
                }
            </View>
            
          ),
        }}
      />
      <Tab.Screen
        name="First2"
        component={ComingScreen}
        options={{
          tabBarLabel: 'Coming Soon',
          tabBarIcon: ({ color, size, focused }) => (
            <View>
                {
                focused ?
                <Image source={require('../../assets/comingActive.png')} style={styles.image}/>
                :
                <Image source={require('../../assets/coming.png')} style={styles.image}/>
                }
            </View>
            
          ),
        }}
      />
      <Tab.Screen
        name="First3"
        component={DownloadsScreen}
        options={{
          tabBarLabel: 'Downloads',
          tabBarIcon: ({ color, size, focused }) => (
            <View>
                {
                focused ?
                <Image source={require('../../assets/downloadActive.png')} style={styles.image}/>
                :
                <Image source={require('../../assets/download.png')} style={styles.image}/>
                }
            </View>
            
          ),
        }}
      />
      <Tab.Screen
        name="First4"
        component={MoreScreen}
        options={{
          tabBarLabel: 'More',
          tabBarIcon: ({ color, size, focused }) => (
            <View>
                {
                focused ?
                <Image source={require('../../assets/moreActive.png')} style={styles.image}/>
                :
                <Image source={require('../../assets/more.png')} style={styles.image}/>
                }
            </View>
            
          ),
        }}
      />
      
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  image:{
    width:20,
    height:20
  }
})
export default MyTabs