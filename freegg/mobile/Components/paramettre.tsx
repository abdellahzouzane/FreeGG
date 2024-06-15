import { View,Text, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Platform = ['pc',
'browser',
'all']

export default function Paramettre() {
    const navigation = useNavigation()

    const handleCategoryPress = (plat: any) => {
        navigation.navigate('Jeux par platform', {plat})
    }

    return (
      <ScrollView>
        <Text style={{ fontSize: 19, fontWeight: '500', paddingBottom: 7, marginTop: 18, textAlign: 'center' }}>
          Sélectionner une platforme
        </Text>
        {Platform.map((plat) => (
          <TouchableOpacity key={plat} onPress={() => handleCategoryPress(plat)}>
            <Text style={styles.cardContainer}>{plat}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    )
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 38,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.9,
    shadowRadius: 9,
    marginTop: 35,
    fontSize: 25,
    fontWeight: '500'
  },

})


