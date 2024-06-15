import React, { useEffect, useState } from 'react'
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native'
import { useRoute, useNavigation } from '@react-navigation/native'
import { Icon } from 'react-native-elements'

export default function Jeuxparamttre() {
    const route = useRoute()
    const { plat } = route.params || {}
    const [jeux, setJeux] = useState([])
    const navigation = useNavigation()

    useEffect(() => {
      if (plat) {
        fetch(`https://www.freetogame.com/api/games?platform=${plat}`)
          .then((response) => response.json())
          .then((data) => {
            setJeux(data)
          })
          .catch((error) => console.log('Error fetching games:', error))
      }
    }, [plat])

    const navigateToDetails = (id) => {
      navigation.navigate('Details du jeux paramettre', { gameId: id })
    }

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent} showsVerticalScrollIndicator={false}>
      <TouchableOpacity onPress={() => navigation.navigate('Paramètres')} style={styles.backButton}>
        <Icon name="arrow-back" size={30} color="black" />
      </TouchableOpacity>
      <Text style={{ fontSize: 24, fontWeight: '500', paddingBottom: 7, marginTop: 18, textAlign: 'center' }}>
        les jeux de : {plat}
      </Text>
      {jeux.map((game) => (
        <ScrollView key={game.id} contentContainerStyle={styles.cardContainer}>
          <TouchableOpacity onPress={() => navigateToDetails(game.id)}>
            <Image style={styles.image} source={{ uri: game.thumbnail }} />
            <Text style={{ fontSize: 19, fontWeight: '500' }}>{game.title}</Text>
            <Text style={styles.cat}>{game.platform}</Text>
            <Text style={styles.par}>{game.genre}</Text>
          </TouchableOpacity>
        </ScrollView>
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 150,
    marginRight: 10,
    borderRadius: 16,
    margin: 15,
    flex: 15, 
    marginBottom: 30
  },
  scrollViewContent: {
    alignItems: 'center'
  },
  cardContainer: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    marginTop: 25
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 45,
    zIndex: 1
  },
  cat: {
    top: 20,
    left: 175,
    fontSize: 15
  },
  par: {
    top: 0,
    right: 1,
    fontSize: 15
  }
})
