import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Feather from 'react-native-vector-icons/Feather'


const Tab = createBottomTabNavigator();

function BottomTabNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
     

        tabBarStyle: {
          backgroundColor: '#EC1C24',
          height: 60,
        },


      }} >
        <Tab.Screen name="Home" component={Home} options={{
          tabBarIcon: ({ color }) => (
            <Feather name="home" color={"white"} size={25} />
          ),
        }} />

        <Tab.Screen name="Favourites" component={Home} options={{
          tabBarIcon: ({ color }) => (
            <Fontisto name="search" size={25} color={"white"} />
          ),
        }} />
        <Tab.Screen name="Shop" component={Home} options={{
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name="cart-outline" size={27} color={"white"} />
          ),
        }} />
        <Tab.Screen name="MyProfile" component={Home} options={{
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome name="user" size={27} color={"white"} />
          ),
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default BottomTabNavigation;