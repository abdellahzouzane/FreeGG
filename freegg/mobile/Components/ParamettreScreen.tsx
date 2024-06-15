import { useRoute, useNavigation } from '@react-navigation/native'

import Detailsexample from './Detailsexample'
import { View, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import { Icon } from 'react-native-elements'



export default function ParamettreScreen({ route }) {
    const { gameId } = route.params
    const navigation = useNavigation()

    return (
      <ScrollView>
        <TouchableOpacity onPress={() => navigation.navigate('Jeux par platform')} style={styles.backButton}>
          <Icon name="arrow-back" size={40} color="black" />
        </TouchableOpacity>
        <Detailsexample gameId={gameId} />
      </ScrollView>
    )
}
const styles = StyleSheet.create({
  backButton: {
    position: 'fixed',
    right: 155
  }
})