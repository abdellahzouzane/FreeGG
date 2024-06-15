
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'


const Categories = [
  'mmorpg',
  'shooter',
  'strategy',
  'moba',
  'racing',
  'sports',
  'social',
  'sandbox',
  'open-world',
  'survival',
  'pvp',
  'pve',
  'pixel',
  'voxel',
  'zombie',
  'turn-based',
  'first-person',
  'third-Person',
  'top-down',
  'tank',
  'space',
  'sailing',
  'side-scroller',
  'superhero',
  'permadeath',
  'card',
  'battle-royale',
  'mmo',
  'mmofps',
  'mmotps',
  '3d',
  '2d',
  'anime',
  'fantasy',
  'sci-fi',
  'fighting',
  'action-rpg',
  'action',
  'military',
  'martial-arts',
  'flight',
  'low-spec',
  'tower-defense',
  'horror',
  'mmorts'
]

export default function Category() {
  const navigation = useNavigation()

  const handleCategoryPress = (category: any) => {
    navigation.navigate('Jeux par catégories', { category })
  }

  return (
    <ScrollView >
      <Text style={{ fontSize: 19, fontWeight: '500', paddingBottom: 7, marginTop: 18, textAlign: 'center' }}>
        Sélectionner une catégorie
      </Text>
      {Categories.map((category) => (
        <TouchableOpacity key={category} onPress={() => handleCategoryPress(category)}>
          <Text style={styles.cardContainer}>{category}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 18,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.9,
    shadowRadius: 9,
    marginTop: 25,
    fontSize: 25,
    fontWeight: '500'
  },
  scrollViewContent: {
    alignItems: 'center'
  }
})
