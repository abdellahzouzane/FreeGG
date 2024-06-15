import React, { useEffect, useState } from 'react'
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native'
import { useRoute, useNavigation } from '@react-navigation/native'
import { Icon } from 'react-native-elements'





export default function Jeuxparcat() {
    const route = useRoute()
    const { category } = route.params || {}
    const [games, setGames] = useState([])
    const navigation = useNavigation()

    useEffect(() => {
      if (category) {fetch(`https://www.freetogame.com/api/games?category=${category}`)
        .then((response) => response.json())
        .then((data) => {
          setGames(data)
        })
        .catch((error) => console.log('Error fetching games:', error))
      }
    }, [category])

    const navigateToDetails = (id) => {
      navigation.navigate('Details du jeux catégorie', { gameId: id })
    }

    
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent} showsVerticalScrollIndicator={false}>
      <TouchableOpacity onPress={() => navigation.navigate('Catégories')} style={styles.backButton}>
        <Icon name="arrow-back" size={30} color="black" />
      </TouchableOpacity>
      <Text
        style={{
          fontSize: 24,
          fontWeight: '500',
          paddingBottom: 7,
          marginTop: 18,
          textAlign: 'center'
        }}
      >
        les jeux de : {category}
      </Text>
      {games.map((game) => (
        <ScrollView key={game.id} contentContainerStyle={styles.cardContainer}>
          <TouchableOpacity onPress={() => navigateToDetails(game.id)}>
            <Image style={styles.image} source={{ uri: game.thumbnail }} />
            <Text style={{ fontSize: 19, fontWeight: '500', justifyContent: 'center' }}>{game.title}</Text>
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
    flex: 15, // Permet à l'image de prendre toute la hauteur disponible
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
    left: 15,
    zIndex: 1
  },
  cat: {
    top: 20,
    left: 185,
    fontSize: 15
  },
  par: {
    top: 0,
    right: 0,
    fontSize: 15
  }
})
