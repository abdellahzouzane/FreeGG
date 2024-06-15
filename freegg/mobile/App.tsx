import { StatusBar } from 'expo-status-bar'
import { SafeAreaView, StyleSheet, Text, ActivityIndicator, Button } from 'react-native'
import Example from './Components/Example'
import Icon from 'react-native-ico-ui-interface'
import {NavigationContainer, TabActions} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Category from './Components/Category'
import Paramettre from './Components/paramettre'
import { Ionicons } from '@expo/vector-icons'
import Jeuxparamttre from './Components/Jeuxparamttre'
import Jeuxparcat from './Components/Jeuxparcat'
import DetailsScreen from './Components/DetailsScreen'
import ParamettreScreen from './Components/ParamettreScreen'
import CategoryScreen from './Components/CategoryScreen'




const Stack = createBottomTabNavigator()



export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Text style={styles.title}>
        Game<Text style={styles.title2}>App</Text>
      </Text>
      <Stack.Navigator
        initialRouteName="Accueil"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="Accueil"
          component={Example}
          options={{
          tabBarIcon: ({ color, size }) => <Icon name="home" />
          }}
        />
        <Stack.Screen
          name="Paramètres"
          component={Paramettre}
          options={{
            tabBarIcon: ({ color, size }) => <Icon name="settings" />
          }}
        />
        <Stack.Screen
          name="Catégories"
          component={Category}
          options={{
            tabBarIcon: ({ color, size }) => <Ionicons name="list" size={size} color={color} />
          }}
        />
        <Stack.Screen
          name="Jeux par catégories"
          component={Jeuxparcat}
          options={{ tabBarButton: () => null }} // Pour ne pas afficher dans la barre de navigation
        />
        <Stack.Screen
          name="Jeux par platform"
          component={Jeuxparamttre}
          options={{ tabBarButton: () => null }} // Pour ne pas afficher dans la barre de navigation
        />
        <Stack.Screen
          name="Details du jeux"
          component={DetailsScreen}
          options={{ tabBarButton: () => null }} // Pour ne pas afficher dans la barre de navigation
        />
        <Stack.Screen
          name="Details du jeux paramettre"
          component={ParamettreScreen}
          options={{ tabBarButton: () => null }} // Pour ne pas afficher dans la barre de navigation
        />
        <Stack.Screen
          name="Details du jeux catégorie"
          component={CategoryScreen}
          options={{ tabBarButton: () => null }} // Pour ne pas afficher dans la barre de navigation
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F3EC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 29, 
    fontWeight: 'bold', 
    position: 'relative', 
    top: 50, 
    alignSelf: 'center', 
    paddingBottom: 55, // changer l'emplacement du titre "GameApp"
    overflow: 'hidden',
  },
  title2: {
    fontSize: 28,
    color: '#D4AC0D',
  
  }
})


