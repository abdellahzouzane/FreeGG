import React, { useState, useEffect } from 'react'
import { ScrollView, Text, View, Image, Button, Linking, StyleSheet } from 'react-native'

export default function Detailsexample({ gameId }) {
  const [gameDetails, setGameDetails] = useState(null)

  useEffect(() => {
    const fetchGameDetails = async () => {
      try {
        const response = await fetch(`https://www.freetogame.com/api/game?id=${gameId}`)
        const data = await response.json()
        setGameDetails(data)
      } catch (error) {
        console.error('Error fetching game details:', error)
      }
    }

    fetchGameDetails()
  }, [gameId])

  if (!gameDetails) {
    return <Text style={styles.errorText}>Game details not found.</Text>
  }

  const {
    title,
    thumbnail,
    platform,
    genre,
    description,
    developer,
    publisher,
    release_date,
    screenshots,
    status,
    game_url,
    minimum_system_requirements: systemRequirements
  } = gameDetails

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: thumbnail }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <View style={styles.detailsContainer}>
        <Text style={styles.details}>Platforme : {platform}</Text>
        <Text style={styles.details}>Genre : {genre}</Text>
        <Text style={styles.details}>Développeur : {developer}</Text>
        <Text style={styles.details}>Date de sortie : {release_date}</Text>
        <Text style={styles.details}>Éditeur : {publisher}</Text>
        <Text style={styles.details}>Statut : {status}</Text>
      </View>
      <Button title="Installer" onPress={() => Linking.openURL(game_url)} style={styles.button} />
      <Text style={styles.descriptionTitle}>Description:</Text>
      <Text style={styles.description}>{description}</Text>
      <View style={styles.detailsContainer}>
        {systemRequirements && (
          <View style={styles.requirementsContainer}>
            <Text style={styles.requirementsTitle}>Configuration minimale requise :</Text>
            <Text style={styles.requirements}>OS: {systemRequirements.os}</Text>
            <Text style={styles.requirements}>Processeur: {systemRequirements.processor}</Text>
            <Text style={styles.requirements}>Mémoire: {systemRequirements.memory}</Text>
            <Text style={styles.requirements}>Graphique: {systemRequirements.graphics}</Text>
            <Text style={styles.requirements}>Stockage: {systemRequirements.storage}</Text>
          </View>
        )}
      </View>
      <View style={styles.screenshotsContainer}>
        {screenshots.map((screenshot, index) => (
          <Image key={index} source={{ uri: screenshot.image }} style={styles.screenshot} />
        ))}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  errorText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'center'
  },
  detailsContainer: {
    paddingHorizontal: 20,
    marginBottom: 20
  },
  details: {
    fontSize: 19,
    marginBottom: 5
  },
  button: {
    marginVertical: 10
  },
  descriptionTitle: {
    fontSize: 23,
    fontWeight: 'bold',
    marginHorizontal: 20,
    marginBottom: 10
  },
  description: {
    fontSize: 17,
    marginHorizontal: 20,
    marginBottom: 20
  },
  requirementsTitle: {
    fontSize: 21,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center'
  },
  requirementsContainer: {
    paddingHorizontal: 20
  },
  requirements: {
    fontSize: 18,
    marginBottom: 5
  },
  screenshotsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10
  },
  screenshot: {
    width: 410,
    height: 250,
    borderRadius: 16,
    margin: 10,
    marginBottom: 20
  }
})
