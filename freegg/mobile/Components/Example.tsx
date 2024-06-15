import { useEffect } from 'react'
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  ActivityIndicator,
  Button,
  ScrollView,
  TouchableOpacity,
  RefreshControl
} from 'react-native'
import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'

export default function Example() {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isRefreshing, setIsRefreshing] = useState(false)
  const navigation = useNavigation()

  useEffect(() => {
    getProducts()
  }, [])

  const getProducts = () => {
    const URL = 'https://www.freetogame.com/api/games'
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        // Mélanger les jeux
        const shuffledData = data.sort(() => Math.random() - 0.5)
        // Prendre les 10 jeux
        const slicedData = shuffledData.slice(0, 10)
        setProducts(slicedData)
        setIsLoading(false)
        setIsRefreshing(false)
      })
      .catch((error) => console.error('Error fetching data:', error))
      setIsRefreshing(false)
  }
  const onRefresh = () => {
    setIsRefreshing(true)
    getProducts() 
  }
  const navigateToDetails = (id) => {
    navigation.navigate('Details du jeux', { gameId: id })
  }

  return (
    <ScrollView
      contentContainerStyle={styles.scrollViewContent}
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl
          refreshing={isRefreshing}
          onRefresh={onRefresh}
        />
      }
    >
      {isLoading ? (
        <ActivityIndicator color="red" size="large" />
      ) : (
        <FlatList
          data={products}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigateToDetails(item.id)}>
              <View style={styles.cardContainer}>
                <Image source={{ uri: item.thumbnail }} style={styles.image} />
                <Text style={{ fontSize: 19, fontWeight: '500' }}>{item.title}</Text>
                <Text style={styles.cat}>{item.platform}</Text>
                <Text style={styles.par}>{item.genre}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      )}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  image: {
    height: 150,
    width: 250,
    borderRadius: 16,
    margin: 30,
    flex: 10, // Permet à l'image de prendre toute la hauteur disponible
    marginBottom: 20
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
  scrollViewContent: {
    alignItems: 'center'
  },
  cat: {
    top: 20,
    left: 85,
    fontSize: 15
  },
  par: {
    right: 85,
    fontSize: 15
  }
})
